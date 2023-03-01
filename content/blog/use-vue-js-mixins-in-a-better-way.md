---
layout: default
title: Use Vue.js Mixins In A Better Way
image: /images/uploads/1_sxrbw2-rgli-v7tkeiczwa.webp
categories:
  - name: Experience
  - name: Vue
seo:
  description: This article will show you the approach, that is a good practice to
    keep a good developer experience and avoid disadvantages.
  keywords:
    - vue
    - mixins
    - javascript
    - experience
    - codestyle
posted_on: []
createdAt: 2022-04-08
---
Mixins are often used in projects to reuse some piece of business logic, but they have some uncertainties some nuances, which are more and more noticeable during project development. I faced them occasionally, and they cause difficulties with refactoring of a codebase or developing new features.

Before describing my approach, I’d like to go through the advantages and disadvantages of using mixins.

## Advantages:

* Extends DRY principles of code reusing. We can reuse the same business logic in a different component;
* We can use mixin as a global mixin and share context with all components;
* Mixin is a great tool to build a modular project structure.

## Disadvantages:

* Non-transparent logic of components that use mixins. I mean it’s hard to see the whole picture of a component consisting of lots of rows of code and a few connected mixins. Especially, it feels when you are a new developer on a project and onboarding takes more time;
* Overwritable context. You have to pay attention not to overwrite methods, getters, or data by some mixin because of the same name;

Disadvantages are not critical to avoid using mixins, but we should know them. I propose using the way based on these tricks to minimize them:

* Use a prefix at the start of a method, getter, value, and props names. It shows what functionality a mixin relates to. Using this tip gives you the ability to separate easily component props and mixin ones. \
  For example: `$<mixinName>_<(prop|method|value)>`

  ```javascript
  export default {
    props: {
      $impressionsMixin_page: {
        type: Number,
        required: true
      },
      $impressionsMixin_listingId: {
        type: Number,
        required: true
      },
      $impressionsMixin_itemId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        $impressionsMixin_observer: null,
        $impressionsMixin_timeout: null,
        $impressionsMixin_eventObject: null
      };
    },
    methods: {
      $impressionsMixin_getObserverOptions() {
        // ...
      },
      $impressionsMixin_setImpressionObserver() {
        // ...
      },
      $impressionsMixin_resetImpressionObserver() {
        // ...
      },
      $impressionsMixin_logImpression() {
        // ...
      }
    }
  };
  ```

  How using props looks in a parent component:

  ```jsx
  <template>
    <div id="app">
      <ListingItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        textAlign="left"
        :$impressionsMixin_page="page"
        :$impressionsMixin_itemId="item.id"
        :$impressionsMixin_listingId="listingId"
      />
    </div>
  </template>
  ```
* I prefer not to use a prefix for a global mixin. Usually, the name of the methods and values are clear, and their functionality isn’t duplicated in other project parts, so you don’t need a prefix for them.

  ```javascript
  export default {
    config() {
      // ...
    },
    user() {
      // ...
    },
    isMobile() {
      // ...
    },
    isTablet() {
      // ...
    },
    isDesktop() {
      // ...
    }
  };
  ```

## Advantages of the approach:

* Mixins methods or properties are conveniently used by IDE autocomplete.
* Using a prefix avoids accidentally overwriting mixin methods and properties by methods of a component.
* Transparency and convenient reading of component code by developers on big projects

## Conclusion

Mixin is a helpful tool but can make your project more complex, inflexible, and non-transparent on big projects. Using this approach is a good practice to keep a good developer experience and avoid disadvantages.