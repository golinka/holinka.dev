<template>
	<NuxtLayout name="default">
		<div class="home-page">
			<div class="home-page__about">
				<ShortAboutMe />
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import ShortAboutMe from "@/components/ShortAboutMe.vue";
</script>
