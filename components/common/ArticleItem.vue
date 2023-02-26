<script lang="ts" setup>
import { ArticleQueryContent } from "@/types/article";
import BaseBadge from "~~/components/base/BaseBadge.vue";

interface Props {
	article: ArticleQueryContent;
	isShowDescription: boolean;
	isShowCategories: boolean;
}

const { article, isShowDescription } = withDefaults(defineProps<Props>(), {
	article: () => ({} as ArticleQueryContent),
	isShowDescription: true,
	isShowCategories: true,
});
</script>

<template>
	<div class="short-article-item">
		<div v-if="isShowCategories" class="short-article-item__categories flex mb-2">
			<BaseBadge
				v-for="(badge, index) in article.categories"
				:key="index"
				:label="badge.name"
				class="mr-3 last:mr-0"
			></BaseBadge>
		</div>
		<NuxtLink
			:to="article._path"
			class="short-article-item__title inline-block text-xl font-medium hover:underline mb-1"
		>
			{{ article.title }}
		</NuxtLink>
		<div v-if="isShowDescription" class="latest-articles-item__description mb-2">
			{{ article.description }}
		</div>
		<div class="latest-articles-item__date text-gray-400 text-sm">
			{{ $dayjs(article.createdAt).format("MMMM DD, YYYY") }}
		</div>
	</div>
</template>
