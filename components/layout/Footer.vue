<script lang="ts" setup>
const links = ref([
	{ icon: "uil:github", url: "https://github.com/golinka", ariaLabel: "Github profile" },
	{ icon: "uil:linkedin", url: "https://www.linkedin.com/in/artem-holinka/", ariaLabel: "LinkedIn profile" },
]);
const emojis = ["🫀", "☕️", "🧠", "🥤", "🪄"];
const random = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const emoji = computed(() => emojis[random(0, emojis.length - 1)]);
</script>

<template>
	<footer
		class="footer flex items-center justify-between text-sm border-t border-t-gray-200 text-gray-500 py-5 px-2 md:py-8"
	>
		<div class="footer__copyright">
			© {{ new Date().getFullYear() }}
			<span class="ml-1">
				Made with
				<ClientOnly fallback-tag="span" fallback="">
					{{ emoji }}
				</ClientOnly>
				by Artem Holinka
			</span>
		</div>
		<div class="footer__social">
			<NuxtLink
				v-for="(link, index) in links"
				:key="index"
				:to="link.url"
				:aria-label="link.ariaLabel"
				target="_blank"
				rel="noindex"
				class="mr-3 last:mr-0"
			>
				<Icon :name="link.icon" size="24" />
			</NuxtLink>
		</div>
	</footer>
</template>

<style lang="scss"></style>
