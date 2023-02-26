<script lang="ts" setup>
interface Props {
	label: string;
}

const { label } = defineProps<Props>();
</script>

<template>
	<div
		class="badge text-xs py-1 px-2.5 leading-none whitespace-nowrap align-baseline bg-slate-200 text-gray-700 rounded-lg"
	>
		{{ label }}
	</div>
</template>
