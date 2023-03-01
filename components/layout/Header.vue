<script lang="ts" setup>
import { RoutesNames } from "~~/types/router";
import BaseMenuButton from "~~/components/base/BaseMenuButton.vue";

const isMenuCollapsed = ref(false);
const links: { name: string; routeName: RoutesNames; iconName: string }[] = reactive([
	{ name: "Home", routeName: RoutesNames.HOME, iconName: "material-symbols:home-outline-rounded" },
	{ name: "Blog", routeName: RoutesNames.BLOG, iconName: "material-symbols:article-outline-rounded" },
	// { name: "Projects", routeName: RoutesNames.PROJECTS, iconName: "material-symbols:apps" },
	// { name: "Experience", routeName: RoutesNames.EXPERIENCE, iconName: "material-symbols:work-outline" },
	// { name: "About", routeName: RoutesNames.ABOUT, iconName: "material-symbols:person-outline" },
]);
</script>

<template>
	<header
		class="group header flex h-[50px] items-center justify-between relative box-content -mx-2 px-2 py-5 md:py-8"
		:class="{ 'is-collapsed': isMenuCollapsed }"
	>
		<nav
			class="header__navigation fixed top-0 left-0 z-10 w-56 h-screen bg-gray-50 -translate-x-full group-[.is-collapsed]:translate-x-0 transition-transform duration-300 group-[.is-collapsed]:shadow-xl md:shadow-none md:h-auto md:transform-none md:bg-transparent md:w-auto md:static md:block md:-ml-2"
		>
			<ul class="flex flex-col h-full items-center justify-center md:flex-row md:h-auto">
				<li v-for="(link, index) in links" :key="index" class="mr-1 last:mr-0 w-full md:w-auto">
					<NuxtLink
						:to="{ name: link.routeName }"
						class="header__navigation-link flex items-center w-full text-gray-800 md:inline-block md:w-auto px-6 md:px-3 py-2 rounded-lg hover:bg-gray-200 transition-all"
						@click="isMenuCollapsed = false"
					>
						<Icon :name="link.iconName" size="1.25em" class="mr-4 md:!hidden" />
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="header__navigation-button block relative h-[50px] md:hidden">
			<BaseMenuButton
				:isActive="isMenuCollapsed"
				@click="isMenuCollapsed = !isMenuCollapsed"
				class="group-[.is-collapsed]:fixed z-20"
			></BaseMenuButton>
		</div>
		<div class="header__resume hidden pr-2">
			<button
				type="button"
				class="text-white py-2 px-4 rounded-lg !bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%] bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-300 shadow-md shadow-indigo-500/50 hover:shadow-purple-500/50"
			>
				Resume
			</button>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	box-sizing: content-box;

	&__navigation {
		&-link {
			&.router-link-active {
				@apply font-bold;
			}
		}
	}
}
</style>
