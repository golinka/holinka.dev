<template>
	<NuxtLayout name="default">
		<div class="home-page">
			<div class="home-page__about">
				<ShortAboutMe class="mb-10"></ShortAboutMe>
				<LatestArticles class="mb-10"></LatestArticles>
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import ShortAboutMe from "@/components/ShortAboutMe.vue";
import LatestArticles from "@/components/LatestArticles.vue";
</script>
