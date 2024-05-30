<script lang="ts" setup>
import { ArticleQueryContent } from "@/types/article";
import ArticleItem from "~~/components/common/ArticleItem.vue";

const { data: articles } = await useAsyncData("blog", () => queryContent<ArticleQueryContent>("blog").sort({ createdAt: -1 }).find());
</script>

<template>
	<NuxtLayout name="default">
		<ArticleItem v-for="article in articles" :key="article._id" :article="article" class="mb-8 last:mb-0"></ArticleItem>
	</NuxtLayout>
</template>
