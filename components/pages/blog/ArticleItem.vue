<script lang="ts" setup>
import { ArticleQueryContent } from "@/types/article";
import Badge from "@/components/common/Badge.vue";

interface Props {
	article: ArticleQueryContent;
}

const { article } = defineProps<Props>();
</script>

<template>
	<div class="short-article-item">
		<div class="short-article-item__categories flex mb-2">
			<Badge v-for="(badge, index) in article.categories" :key="index" :label="badge.name" class="mr-3 last:mr-0">
			</Badge>
		</div>
		<NuxtLink
			:to="article._path"
			class="short-article-item__title inline-block text-xl font-medium hover:underline mb-1"
		>
			{{ article.title }}
		</NuxtLink>
		<div class="latest-articles-item__description mb-2">
			{{ article.description }}
		</div>
		<div class="latest-articles-item__date text-gray-400 text-sm">
			{{ $dayjs(article.createdAt).format("MMMM DD, YYYY") }}
		</div>
	</div>
</template>
