<script lang="ts" setup>
import ShortAboutMe from "@/components/ShortAboutMe.vue";
import LatestArticles from "@/components/LatestArticles.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import LatestExperience from "@/components/LatestExperience.vue";
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
