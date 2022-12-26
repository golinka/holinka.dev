<script lang="ts" setup>
const links = ref([
	{ icon: "uil:github", url: "https://github.com/golinka" },
	{ icon: "uil:linkedin", url: "https://www.linkedin.com/in/artem-holinka/" },
]);
</script>

<template>
	<footer class="footer flex items-center justify-between text-sm border-t border-t-gray-200 text-gray-500 py-8">
		<div class="footer__copyright">
			© {{ new Date().getFullYear() }} <span class="ml-1">Made with ❤️ by Artem Holinka</span>
		</div>
		<div class="footer__social">
			<NuxtLink
				v-for="(link, index) in links"
				:key="index"
				:to="link.url"
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
