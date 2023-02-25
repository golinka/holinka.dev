<script lang="ts" setup>
import { LatestArticle } from "@/types/article";

interface Props {
	article: LatestArticle;
}

const { article } = defineProps<Props>();
</script>

<template>
	<div class="latest-articles-item">
		<NuxtLink :to="article.url" class="inline-block latest-articles-item__title text-xl font-medium hover:underline mb-1">
			{{ article.title }}
		</NuxtLink>
		<div class="latest-articles-item__date text-gray-400 text-sm">{{ article.date }}</div>
	</div>
</template>
