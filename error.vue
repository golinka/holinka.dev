<script lang="ts" setup>
interface IProps {
	error: { url: string; statusCode: string; statusMessage: string; message: string; description: string; data: any };
}

const { error } = defineProps<IProps>();

useHead({
	title: `Error - ${error.message}`,
});
</script>

<template>
	<div
		class="error-page w-full h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 via-purple-100 to-slate-100 background-animate"
	>
		<div class="error-page-block">
			<div class="error-page-block__icon text-7xl flex font-extrabold justify-center mb-2">
				{{ error.statusCode || "Error page" }}
			</div>
			<h1 class="error-page-block__title text-3xl font-bold text-center mb-6">Ooops...</h1>
			<div class="error-page-block__message text-center">{{ error.message }}</div>
			<div class="error-page-block__home text-center mt-12">
				<NuxtLink to="/" class="px-6 md:px-3 py-2 rounded-lg bg-violet-200 hover:bg-violet-300 text-white transition-all shadow-md shadow-violet-200/50">Go home</NuxtLink>
			</div>
		</div>
	</div>
</template>
