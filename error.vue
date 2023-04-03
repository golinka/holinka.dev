<script lang="ts" setup>
interface IProps {
	error: { url: string; statusCode: string; statusMessage: string; message: string; description: string; data: any };
}
const { error } = defineProps<IProps>();
</script>

<template>
	<div class="error-page w-full h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 via-purple-100 to-slate-100 background-animate">
		<div class="error-page-block">
			<div class="error-page-block__icon text-7xl flex font-extrabold justify-center mb-2">
				{{ error.statusCode || "Error page" }}
			</div>
			<h1 class="error-page-block__title text-3xl font-bold text-center mb-6">Ooops...</h1>
			<div class="error-page-block__message text-center">{{ error.message }}</div>
		</div>
	</div>
</template>
