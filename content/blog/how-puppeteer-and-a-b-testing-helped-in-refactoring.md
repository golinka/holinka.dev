---
layout: default
title: How Puppeteer and A/B Testing Helped in Refactoring
image: /images/uploads/article-poster-about-puppeteer-and-abtesting.webp
categories:
  - name: Puppeteer
  - name: A/B Testing
  - name: Experience
seo:
  description: I used Puppeteer and A/B tests to check my assumption and safely
    run it on production
  keywords:
    - puppeteer
    - a/b
    - testing
    - performance
    - vue.js
    - mixins
    - scroll
    - handling
    - IntersactionObserver
    - observer
    - ""
createdAt: 2023-03-27
---
During features development, I highlighted using a scroll handler for the collecting of user impressions on the category listing. The scroll handler was used for checking the existence of a listing item in the user viewport.

```typescript
// Imports and consts

@Component
export default class ImpressionMixinOld extends Vue {
  // Here props and data...
  
  $impressionsMixin_addScrollHandler(): void {
    this.$impressionsMixin_throttledOnscrollFunction = throttle(this.$impressionsMixin_logImpressionIfElementOnViewport, THROTTLE_DELAY)

    window.addEventListener(`scroll`, this.$impressionsMixin_throttledOnscrollFunction || (() => ({})))
  }

  $impressionsMixin_removeScrollHandler(): void {
    window.removeEventListener(`scroll`, this.$impressionsMixin_throttledOnscrollFunction || (() => ({})))
  }
  
  $impressionsMixin_checkElementOnViewport(node: HTMLElement): boolean {
    if (!node || !node.getBoundingClientRect) { return false }
    const rect = node.getBoundingClientRect()

    return rect.top >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.left >= 0 &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  }

  $impressionsMixin_logImpressionIfElementOnViewport(): void {
    if (this.$impressionsMixin_timeout) {
      clearTimeout(this.$impressionsMixin_timeout)
    }

    this.$impressionsMixin_timeout = setTimeout(() => {
        const isInViewport = this.$impressionsMixin_checkElementOnViewport(this.$el as HTMLElement)

        if ((isInViewport && !this.$impressionsMixin_eventObject) || (!isInViewport && this.$impressionsMixin_eventObject)) {
            this.$impressionsMixin_logImpression()
        }
    }, DELAY_BEFORE_LOG_IMPRESSION)
  }
    
  // Rest of the mixin...
}
```

> *Why mixin methods names have the strange naming format you can read in this [article](https://holinka.dev/blog/use-vue-js-mixins-in-a-better-way).*

I faced many cases of using scroll handlers and I underscored for myself the deterioration of performance after choosing this strategy of feature implementation. Having experience with IntersactionObserver helped me with the finding of a better solution to check the existence of an element on the user’s viewport. Replacing the scroll handler with [IntersactionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) should reduce the Scripting time on the page and improve the performance.

![The performance tab with highlighting the Scripting time](/images/uploads/screenshot-of-the-performance-tab.webp "The performance tab with highlighting the Scripting time")

I made a new version of the analytics with the refactoring of the viewport checking part:

```typescript
// Imports and consts

@Component
export default class ImpressionMixinNew extends Vue {
  // Here props and data...
  
  $impressionsMixin_setImpressionObserver(): void {
    const options = this.$impressionsMixin_getObserverOptions(this.$el)
    if (options) {
      this.$impressionsMixin_observer = this.$impressionsMixin_setIntersectionObserver(options)
    }
  }

  $impressionsMixin_resetImpressionObserver(): void {
    if (this.$impressionsMixin_observer) {
      this.$impressionsMixin_observer.observer.unobserve(this.$impressionsMixin_observer.el)
    }
  }
  
  $impressionsMixin_getObserverOptions(node: Element): ObserverOptions | null {
    if (!node) { return null }
    return {
      el: node,
      rootMargin: `0px 0px 0px 0px`,
      callback: this.$impressionsMixin_logImpressionIfElementOnViewport
    }
  }

  $impressionsMixin_setIntersectionObserver(options: ObserverMixinOptions): CacheObserver | null {
    if (!options.el) { return null }

    const observer = new IntersectionObserver(() => options.callback(options), {
      root: options.root || null,
      rootMargin: options.rootMargin || `0px`,
      threshold: options.threshold || 0.9
    })

    observer.observe(options.el)

    return {
      id: getUniqueNumberId(+new Date()),
      el: options.el,
      observer
    }
  }

  $impressionsMixin_logImpressionIfElementOnViewport(): void {
    if (this.$impressionsMixin_timeout) {
      clearTimeout(this.$impressionsMixin_timeout)
    }

    this.$impressionsMixin_timeout = setTimeout(() => {
      const isInViewport = this.$impressionsMixin_checkElementOnViewport(this.$el)

      if ((isInViewport && !this.$impressionsMixin_eventObject) || (!isInViewport && this.$impressionsMixin_eventObject)) {
        this.$impressionsMixin_logImpression()
      }
    }, DELAY_BEFORE_LOG_IMPRESSION)
  }

  $impressionsMixin_checkElementOnViewport(node: Element): boolean {
    if (!node || !node.getBoundingClientRect) { return false }
    const rect = node.getBoundingClientRect()

    return rect.top >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.left >= 0 &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  }
    
  // Rest of the mixin...
}
```

Before releasing this change, I had to be sure of the next two things:

* this refactoring really improves performance;
* we have the same level of precision in tracking the impressions after refactoring;

I had to convince a product manager that it was a valuable change. Changes in the listings are difficult to promote without justification because the listings are a key part of the marketplace. I decided to collect the performance data of the old and new versions to compare them.

## How I compared the performance of versions

As impressions analytics collects data based on viewport checking, I had to find a way to always have the same scrolling behavior. After achieving this, I’d be sure that a different scroll behavior wouldn’t affect the performance metrics in any way.

Previously, I did tasks that included automatization with Puppeteer, so I chose it for imitation of scrolling and automated collection of the performance data. Then, I wrote a code for this:

```javascript
const puppeteer = require('puppeteer');

// The scrolling logic
const autoScroll = async (page, scrolledHeight) => {
  await page.evaluate(async (scrolledHeight) => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrolledHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  }, scrolledHeight);
};

(async () => {
  // Used `headless: false` option to open a new browser window and see that everything was going correctly
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 900 });
  
  // For the performance data collecting
  await page.tracing.start({ path: 'profile.json', screenshots: true });

  await page.goto('<LISTING_URL>', { waitUntil: 'load' });
  await page.waitForTimeout(3000);

  await autoScroll(page, 2500);
  await page.waitForTimeout(3000);

  // A few times more used autoScroll and page.waitForTimeout...

  await autoScroll(page, 4000);
  await page.waitForTimeout(2000);

  // To stop the data collecting
  await page.tracing.stop();
  await browser.close();
})();
```

I made a simple copy of the listing page and ran this code to show how it worked:

![The example of running Puppeteer script](/images/uploads/puppeteer-using-example.gif "The example of running Puppeteer script")

The result of the running of this code was a `profile.json` file. The file I uploaded to the Performance tab of the Dev tools to see all metrics.

![Opening of the profile.json file on the Performance tab](/images/uploads/uploading-of-the-profile_json-file.gif "Opening of the profile.json file on the Performance tab")

I ran the code ten times for both versions of the impressions analytics. I checked performance results for all of them and got average scripting time for both versions. Here is an example of comparing performance metrics:

![The example of performance data comparing the old and new versions](/images/uploads/screenshot-of-performance-metrics.png "The example of performance data comparing the old and new versions")

Finally, I got the difference between versions. It was **about** **20%**. I showed the results to my manager and got approval to release the new version.

## How A/B tests helped with the release

As I’ve already said, listing is the most important part of the marketplace, and getting the right analytics is crucial. Before releasing, I hid the new version under an A/B test flag. A/B tests are useful for comparing several versions in production. If the new version had a bug or wasn’t working correctly, I’d disable it on production, fix the bug, and release it again.

After a couple of months of running both versions, we saw that impressions and conversions kept the same level of precision in tracking. So, I removed the old version from the project. Also, using A/B tests was useful during development to get metrics for comparing versions on a dev server. I got metrics for the old version, then opened the flags admin panel and turned on a flag to enable the new one.

## Conclusion

I’m happy to have a bunch of tools that can help you complete challenging tasks like this. I used Puppeteer and A/B tests to check my assumption and safely run it on production. At first look, these tools don’t have the same sphere of using them together, so that is why doing this refactoring was interesting.

Many thanks for reading to the end. I hope this article was useful for you.