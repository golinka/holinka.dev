<script lang="ts" setup>
const { $routesList } = useNuxtApp();
</script>

<template>
	<div class="short-about-me flex items-center">
		<div class="short-about-me__info flex-grow">
			<div class="short-about-me__info-name text-5xl font-bold mb-4">Artem Holinka</div>
			<div class="short-about-me__info-position text-lg mb-3">
				Senior Frontend Developer at
				<NuxtLink to="https://jiji.ng" target="_blank" ref="noref" class="underline">JIJI</NuxtLink>
			</div>
			<div class="short-about-me__info-description mb-5">
				Hi there 🖐 🇺🇦 <br />
				I am an experienced software engineer with extensive knowledge of front-end development, with laser-focus on Vue
				and Nuxt.js
			</div>
			<div class="short-about-me__info-more">
				<NuxtLink :to="{ name: $routesList.about }">Read more →</NuxtLink>
			</div>
		</div>
		<div class="short-about-me__photo pl-5">
			<NuxtImg src="/images/avatar.jpg" class="rounded-full" loading="lazy"></NuxtImg>
		</div>
	</div>
</template>

<style lang="scss">
.short-about-me {
	&__photo {
		img {
			max-width: 200px;
		}
	}
}
</style>
