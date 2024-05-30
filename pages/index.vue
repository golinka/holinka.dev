<script lang="ts" setup>
import { ArticleQueryContent } from "~~/types/article";
import ShortAboutMe from "~~/components/pages/home/ShortAboutMe.vue";
import LatestArticles from "~~/components/pages/home/LatestArticles.vue";
import ProjectsList from "~~/components/pages/home/ProjectsList.vue";
import LatestExperience from "~~/components/pages/home/LatestExperience.vue";

const { data: articles } = await useAsyncData("blog", () => queryContent<ArticleQueryContent>("blog").sort({ createdAt: -1 }).limit(3).find());
</script>

<template>
	<NuxtLayout name="default">
		<div class="home-page">
			<ShortAboutMe class="mb-10"></ShortAboutMe>
			<LatestArticles v-if="articles && articles.length" :articles="articles" class="mb-10"></LatestArticles>
			<ProjectsList v-if="false" class="mb-10"></ProjectsList>
			<LatestExperience v-if="false" class="mb-10"></LatestExperience>
		</div>
	</NuxtLayout>
</template>
