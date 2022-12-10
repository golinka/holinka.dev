<script lang="ts" setup>
const { $routesList } = useNuxtApp();
const route = useRoute();

const links: { name: string; routeName: string }[] = reactive([
	{ name: "Home", routeName: $routesList.index },
	{ name: "Blog", routeName: $routesList.blog },
	{ name: "Projects", routeName: $routesList.projects },
	{ name: "Experience", routeName: $routesList.experience },
	{ name: "About", routeName: $routesList.about },
]);

const activeRouteName = computed(() => route.name);
</script>

<template>
	<header class="header flex items-center justify-between py-8">
		<nav class="header__navigation -ml-2">
			<ul class="flex">
				<li v-for="(link, index) in links" :key="index" class="mr-1 last:mr-0">
					<NuxtLink
						:to="{ name: link.routeName }"
						class="header__navigation-link inline-block text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all"
						:class="{ 'header__navigation-link--active font-bold': activeRouteName === link.routeName }"
					>
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="header__resume">
			<button
				type="button"
				class="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%] bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-300 shadow-md shadow-indigo-500/50 hover:shadow-purple-500/50"
			>
				Resume
			</button>
		</div>
	</header>
</template>
