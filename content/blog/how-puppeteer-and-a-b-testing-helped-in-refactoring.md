---
layout: default
title: How Puppeteer and A/B Testing Helped in Refactoring
image: /images/uploads/article-poster-about-puppeteer-and-abtesting.webp
categories:
  - name: Puppeteer
  - name: A/B Testing
  - name: Experience
seo:
  description: How I used Puppeteer and A/B tests to check my assumption and
    safely run it on production
  keywords:
    - puppeteer
    - puppeteer examples
    - a/b
    - a/b testing
    - how to use a/b testing
    - testing
    - performance
    - performance improving
    - vue.js
    - mixins
    - scroll handling
    - IntersactionObserver
    - IntersactionObserver examples
    - observer
createdAt: 2023-04-03
---
During a feature development, I saw that our impression analytics mixin was using a scroll listener for checking the existence of a listing item in the user viewport.

```typescript
// Imports and consts

@Component
export default class ImpressionMixinOld extends Vue {
  // Here props and data...
  
  $impressionsMixin_addScrollHandler(): void {
    this.$impressionsMixin_throttledOnscrollFunction = throttle(this.$impressionsMixin_logImpression, THROTTLE_DELAY)

    window.addEventListener(`scroll`, this.$impressionsMixin_throttledOnscrollFunction || (() => ({})))
  }

  $impressionsMixin_removeScrollHandler(): void {
    window.removeEventListener(`scroll`, this.$impressionsMixin_throttledOnscrollFunction || (() => ({})))
  }
    
  // Rest of the mixin...
}
```

> *Why mixin methods names have the strange naming format you can read in this [article](https://holinka.dev/blog/use-vue-js-mixins-in-a-better-way).*

Listing is a page where you see a list of advertisements:

![A listing with advertisements](/images/uploads/jiji-listing.webp "A listing with advertisements")

The listing has an infinity scroll as a type of pagination and each item on the page uses the analytics. At that moment, it meant that as much user scroll as many scroll listeners are used for cracking items. It could lead to poor performance.

Having experience with [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) helped me with the finding of a better solution for checking the existence of an element on the user’s viewport. Replacing the scroll handler with IntersectionObserver should reduce the Scripting time on the page and improve the performance.

![The performance tab with highlighting the Scripting time](/images/uploads/screenshot-of-the-performance-tab.webp "The performance tab with highlighting the Scripting time")

I made a new version of the analytics. I refactored the part of a viewport checking:

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
      callback: this.$impressionsMixin_logImpression
    }
  }

  $impressionsMixin_setIntersectionObserver(options: ObserverOptions): CacheObserver | null {
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
    
  // Rest of the mixin...
}
```

Before releasing this change, I had to be sure of the next two things:

* this refactoring really improves performance;
* we have the same level of precision in tracking the impressions after refactoring;

I had to convince a product manager that it was a valuable change. Changes in the listings are difficult to promote without justification because a listing is a key part of the marketplace. I decided to collect somehow the performance data of both versions to compare them.

## How I compared the performance of versions

As impressions analytics collects data based on viewport checking, I had to find a way to always have the same scrolling behavior. After achieving this, I’d be sure that a different scroll behavior wouldn’t affect the performance metrics in any way.

Impression analytics collects data during user scrolling. I had to find a way to open the listing page, start to collect performance data, automatically scroll it with stops to log impressions, and collect performance metrics. I had to have the same scrolling behavior not to affect the metrics in any way.

Previously, I have experience with Puppeteer, so I chose it for the implementation of automated scrolling and collection of performance metrics. Then, I wrote this code:

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

Here is an example of running this code on the listing page:

![Running of the code on the listing page](/images/uploads/pupputeer-example-jiji-short-minified.gif "Running of the code on the listing page")

The result of the running of the code was a `profile.json` file. The file I uploaded to the Performance tab of the Dev tools to see all metrics.

![Opening of the profile.json file on the Performance tab](/images/uploads/uploading-of-the-profile_json-file.gif "Opening of the profile.json file on the Performance tab")

I ran the code ten times for each of the versions. I checked all results and got average scripting time for both versions. Here is an example of comparing performance metrics:

![The example of performance data comparing the old and new versions](/images/uploads/screenshot-of-performance-metrics.webp "The example of performance data comparing the old and new versions")

Finally, I got the difference in performance between versions. It was **about** **20%**. I showed the results to my manager and got approval to release the new version.

## How A/B tests helped with the release

As I’ve already said, the listing page is one the most important pages of the marketplace, and getting the right analytics for the page is crucial. The specificity of impression analytics is that I could test it only on production. Before releasing, I hid the new version under an A/B test flag. A/B tests are useful for checking hypotheses in production if you have analytics that gives the ability to get a better version of functionality.

In my case, it was useful because I could turn off the new version of analytics if it worked incorrectly. Then I would fix a bug and release it again and we would not lose all data of the analytics. Also, using A/B testing helped during comparing versions on a dev server. I got the old version metrics, then opened the flags admin panel and turned on a flag to enable the new one.

After a couple of months of running both versions, we saw that impressions and conversions kept the same level of precision in tracking. So, I removed the old version from the project.

## Summary

I’m happy to have a bunch of tools that can help you complete challenging tasks like this. I used Puppeteer and A/B tests to check my assumption and safely run and test it on production. These tools don’t have an obvious sphere of using them together, so that is why this refactoring was interesting.

*More of my articles you can see [here](https://holinka.dev/blog/).*