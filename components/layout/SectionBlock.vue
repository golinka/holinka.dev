<script lang="ts" setup>
interface Props {
	title: string;
	link: string;
	linkLabel: string;
	description?: string;
}

const { title, link, linkLabel, description } = defineProps<Props>();
</script>

<template>
	<div class="section-block">
		<div class="section-block__header flex items-center mb-5">
			<div class="section-block__header-text grow">
				<div class="section-block__header-text-title text-3xl font-bold mb-1">
					<slot name="title" :title="title">{{ title }}</slot>
				</div>
				<div v-if="description" class="section-block__header-text-title text-sm text-gray-500">
					{{ description }}
				</div>
			</div>
			<NuxtLink :to="link" class="section-block__title-link text-sm hover:underline pl-3" :aria-label="title">
				{{ linkLabel }} →
			</NuxtLink>
		</div>
		<div class="section-block__content">
			<slot></slot>
		</div>
	</div>
</template>
