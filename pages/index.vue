<script lang="ts" setup>
import ShortAboutMe from "~~/components/pages/home/ShortAboutMe.vue";
import LatestArticles from "~~/components/pages/home/LatestArticles.vue";
import ProjectsList from "~~/components/pages/home/ProjectsList.vue";
import LatestExperience from "~~/components/pages/home/LatestExperience.vue";
</script>

<template>
	<NuxtLayout name="default">
		<div class="home-page">
			<ShortAboutMe class="mb-10"></ShortAboutMe>
			<LatestArticles class="mb-10"></LatestArticles>
			<ProjectsList class="mb-10"></ProjectsList>
			<LatestExperience class="mb-10"></LatestExperience>
		</div>
	</NuxtLayout>
</template>
