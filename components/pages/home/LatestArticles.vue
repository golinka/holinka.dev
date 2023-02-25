<script lang="ts" setup>
import LatestArticlesItem from "~~/components/pages/home/LatestArticlesItem.vue";
import SectionBlock from "@/components/layout/SectionBlock.vue";
import { LatestArticle } from "@/types/article";

const { $routesList } = useNuxtApp();

const latestArticles: LatestArticle[] = reactive([
	{ title: "Use Vue.js Mixins In A Better Way", date: "November 10, 2022", url: "/blog/slug-to-article" },
	{ title: "Use Vue.js Mixins In", date: "November 17, 2022", url: "/blog/slug-to-article" },
	{
		title: "Use Vue.js Mixins In A Better Way Use Vue.js Mixins In",
		date: "December 07, 2022",
		url: "/blog/slug-to-article",
	},
]);
</script>

<template>
	<SectionBlock title="Latest Articles" linkLabel="All articles" :link="$routesList.blog">
		<LatestArticlesItem
			v-for="(article, index) in latestArticles"
			:key="index"
			:article="article"
			class="mb-5 last:mb-0"
		>
		</LatestArticlesItem>
	</SectionBlock>
</template>
