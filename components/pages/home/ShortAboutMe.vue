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
				Senior Frontend Developer @
				<NuxtLink to="https://jiji.ng" target="_blank" ref="noref" class="underline" aria-label="Jiji website">Jiji</NuxtLink>
			</div>
			<div class="short-about-me__info-description mb-5">
				Hey! 👋  <br />
				Welcome to my corner of the Web. I'm all about creating awesome frontend experiences and mostly playing with JavaScript.<br/>
				Have a look around and feel free to reach out!
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
