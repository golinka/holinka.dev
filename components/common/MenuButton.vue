<script lang="ts" setup>
interface Props {
	isActive: boolean;
}

const { isActive } = defineProps<Props>();
</script>

<template>
	<button class="menu-button relative group" :class="{ 'is-active': isActive }">
		<div
			class="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200"
		>
			<div
				class="flex flex-col justify-between w-[25px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
			>
				<div
					v-for="index in 3"
					:key="index"
					class="bg-black h-[3px] w-7 transform transition-all duration-300 origin-left group-[.is-active]:translate-x-10"
					:class="`delay-${index * 75}`"
				></div>

				<div
					class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-[.is-active]:translate-x-0 flex w-0 group-[.is-active]:w-12"
				>
					<div
						class="absolute bg-black h-[3px] w-6 transform transition-all duration-500 rotate-0 delay-300 group-[.is-active]:rotate-45"
					></div>
					<div
						class="absolute bg-black h-[3px] w-6 transform transition-all duration-500 -rotate-0 delay-300 group-[.is-active]:-rotate-45"
					></div>
				</div>
			</div>
		</div>
	</button>
</template>
