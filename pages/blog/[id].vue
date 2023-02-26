<template>
	<NuxtLayout name="default">
		<ContentDoc>
			<template #empty>
				<p>No content found.</p>
			</template>

			<template #default="{ doc }">
				<article>
					<h1>{{ doc.title }}</h1>
					<ContentRenderer :value="doc" />
				</article>
			</template>
		</ContentDoc>
	</NuxtLayout>
</template>
