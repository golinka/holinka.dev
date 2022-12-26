<script lang="ts" setup>
import LatestExperienceItem from "@/components/LatestExperienceItem.vue";
import SectionBlock from "@/components/layout/SectionBlock.vue";
import { Experience } from "@/types/experience";

const { $routesList } = useNuxtApp();

const jobs: Experience[] = reactive([
	{
		position: "Frontend Developer",
		company: "WalletFactory",
		sphere: "Fintech",
		logoUrl: "/images/avatar.jpg",
		jobType: 'full-time',
		dateStart: "11.01.2019",
		dateEnd: "03.01.2021",
		duration: "1 year",
		location: "Kyiv, Ukraine",
		url: "/jobs/walletfactory",
	},
	{
		position: "Frontend Developer",
		company: "WalletFactory",
		sphere: "Fintech",
		logoUrl: "/images/avatar.jpg",
		jobType: 'full-time',
		dateStart: "11.01.2019",
		dateEnd: "03.01.2021",
		duration: "1 year",
		location: "Kyiv, Ukraine",
		url: "/jobs/walletfactory",
	},
]);
</script>

<template>
	<SectionBlock title="Experience" linkLabel="All experience" :link="$routesList.experience">
		<LatestExperienceItem
			v-for="(job, index) in jobs"
			:key="index"
			:job="job"
			class="mb-5 last:mb-0"
		>
		</LatestExperienceItem>
	</SectionBlock>
</template>
