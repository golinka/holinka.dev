<script lang="ts" setup>
import LatestArticlesItem from "@/components/LatestArticlesItem.vue";
import { ShortArticle } from "@/types/article";

const { $routesList } = useNuxtApp()

const latestArticles: ShortArticle[] = reactive([
	{ title: "Use Vue.js Mixins In A Better Way", date: "November 10, 2022", url: "/blog/slug-to-article" },
	{ title: "Use Vue.js Mixins In", date: "November 17, 2022", url: "/blog/slug-to-article" },
	{ title: "Use Vue.js Mixins In A Better Way Use Vue.js Mixins In", date: "December 07, 2022", url: "/blog/slug-to-article" },
]);
</script>

<template>
	<div class="latest-articles">
		<div class="latest-articles__title flex items-center mb-5">
			<div class="latest-articles__title-text grow text-3xl font-bold">Latest Articles</div>
			<NuxtLink :to="$routesList.blog" class="latest-articles__title-link text-sm hover:underline pl-3">All articles →</NuxtLink>
		</div>
		<div class="latest-articles__list">
			<LatestArticlesItem
				v-for="(article, index) in latestArticles"
				:key="index"
				:article="article"
				class="mb-5 last:mb-0"
			>
			</LatestArticlesItem>
		</div>
	</div>
</template>
