<script lang="ts" setup>
import { ArticleQueryContent } from "@/types/article";
import ArticleItem from "@/components/pages/blog/ArticleItem.vue";

const { data: articles } = await useAsyncData("blog", () => queryContent<ArticleQueryContent>("blog").find());
</script>

<template>
	<NuxtLayout name="default">
		<ArticleItem v-for="article in articles" :key="article._id" :article="article" class="mb-8 last:mb-0"></ArticleItem>
	</NuxtLayout>
</template>
