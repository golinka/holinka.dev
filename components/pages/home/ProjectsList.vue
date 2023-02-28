<script lang="ts" setup>
import { RoutesNames } from "~~/types/router";
import { ShortProject } from "~~/types/project";
import SectionBlock from "~~/components/layout/SectionBlock.vue";
import ProjectsListItem from "~~/components/pages/home/ProjectsListItem.vue";

const projects: ShortProject[] = reactive([
	{
		image: "/projects/jiji.jpg",
		badges: ["vue", "typescript", "nuxt"],
		name: "JIJI",
		description: "jsdlfkjsfsd fsdfs dfsdfs df sdf sdfsd fsdf sdf sdf sdf",
		url: "/projects/jiji",
	},
	{
		image: "/projects/jiji.jpg",
		badges: ["vue", "typescript", "nuxt"],
		name: "JIJI",
		description: "jsdlfkjsfsd fsdfs dfsdfs df sdf sdfsd fsdf sdf sdf sdf",
		url: "/projects/jiji",
	},
	{
		image: "/projects/jiji.jpg",
		badges: ["vue", "typescript", "nuxt"],
		name: "JIJI",
		description: "jsdlfkjsfsd fsdfs dfsdfs df sdf sdfsd fsdf sdf sdf sdf",
		url: "/projects/jiji",
	},
	{
		image: "/projects/jiji.jpg",
		badges: ["vue", "typescript", "nuxt"],
		name: "JIJI",
		description: "jsdlfkjsfsd fsdfs dfsdfs df sdf sdfsd fsdf sdf sdf sdf",
		url: "/projects/jiji",
	},
]);
</script>

<template>
	<SectionBlock title="Projects" linkLabel="All projects" description="I've participated or have been still participating  in the next projects" :link="RoutesNames.PROJECTS" class="projects-list">
		<div class="projects-list__container flex flex-wrap">
			<ProjectsListItem v-for="(project, index) in projects" :key="index" :project="project" class="sm:w-full md:w-1/2 mb-5 last:mb-0">
			</ProjectsListItem>
		</div>
	</SectionBlock>
</template>
