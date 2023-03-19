<script lang="ts" setup>
import { RoutesNames } from "~~/types/router";
</script>

<template>
	<div class="short-about-me flex items-center flex-col md:flex-row-reverse">
		<div class="short-about-me__photo mb-8 pl-0 md:mb-0 md:pl-5">
			<NuxtImg provider="static" src="/images/avatar.webp" width="180px" height="180px" alt="Artem Holinka" class="rounded-full" loading="lazy"></NuxtImg>
		</div>
		<div class="short-about-me__info flex-grow">
			<div class="short-about-me__info-name text-4xl md:text-5xl font-bold mb-4">Artem Holinka</div>
			<div class="short-about-me__info-position text-lg mb-3">
				Senior Frontend Developer at
				<NuxtLink to="https://jiji.ng" target="_blank" ref="noref" class="underline" aria-label="JIJI website">JIJI</NuxtLink>
			</div>
			<div class="short-about-me__info-description mb-5">
				Hi there 🖐 🇺🇦 <br />
				I am an experienced software engineer with extensive knowledge of frontend development, and deep expertise in
				Vue and Nuxt.
			</div>
			<div class="short-about-me__info-more">
				<NuxtLink :to="{ name: RoutesNames.ABOUT }" aria-label="Read more">Read more →</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.short-about-me {
	&__photo {
		img {
			max-width: 180px;
		}
	}
}
</style>
