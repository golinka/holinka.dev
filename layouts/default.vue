<script lang="ts" setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
	<Header class="mb-6"></Header>
	<main class="container">
		<slot></slot>
	</main>
	<Footer class="mt-6"></Footer>
</template>
