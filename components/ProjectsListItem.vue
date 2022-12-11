<script lang="ts" setup>
import Badge from "@/components/common/Badge.vue";
import { ShortProject } from "@/types/project";

interface Props {
	project: ShortProject;
}

const { project } = defineProps<Props>();
</script>

<template>
	<div class="project-list-item">
		<div class="project-list-item__image mb-3">
			<NuxtImg provider="static" :src="project.image" loading="lazy"></NuxtImg>
		</div>
		<NuxtLink :to="project.url" class="project-list-item__name inline-block hover:underline mb-3">
			{{ project.name }}
		</NuxtLink>
		<div class="project-list-item__badges flex items-center mb-3">
			<Badge v-for="(badge, index) in project.badges" :key="index" :label="badge" class="mr-3 last:mr-0"></Badge>
		</div>
		<div class="project-list-item__description">
			{{ project.description }}
		</div>
	</div>
</template>
