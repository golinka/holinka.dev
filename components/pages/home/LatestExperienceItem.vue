<script lang="ts" setup>
import { Experience } from "@/types/experience";

interface Props {
	job: Experience;
}

const { job } = defineProps<Props>();
</script>

<template>
	<div class="latest-experience-item flex">
		<div class="latest-experience-item__logo mr-4">
			<img :src="job.logoUrl" :alt="`${job.position} - ${job.company}`" />
		</div>
		<div class="latest-experience-item__details flex-1">
			<NuxtLink
				:to="job.url"
				class="latest-experience-item__details-position inline-block font-semibold leading-3 cursor-pointer hover:underline mb-2"
			>
				{{ job.position }}
			</NuxtLink>
			<div class="latest-experience-item__details-company text-sm mb-1">{{ job.company }}, {{ job.sphere }}</div>
			<div class="latest-experience-item__details-period text-slate-400 text-sm">
				{{ job.dateStart }}
				<template v-if="job.dateEnd"> {{ job.dateEnd }}, {{ job.duration }} </template>
			</div>
			<div class="latest-experience-item__details-location text-slate-400 text-sm">{{ job.location }}</div>
		</div>
	</div>
</template>

<style lang="scss">
.latest-experience-item {
	&__logo {
		width: 50px;
		height: 50px;
	}
}
</style>
