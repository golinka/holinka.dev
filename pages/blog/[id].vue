<template>
	<NuxtLayout name="default">
		<ContentDoc>
			<template #empty>
				<article>
					<p>No content found.</p>
				</article>
			</template>

			<template #default="{ doc }">
				<article class="prose">
					<ProseH1 id="Heading">{{ doc.title }}</ProseH1>
					<ProseImg v-if="doc.image" :src="doc.image" :alt="doc.title"></ProseImg>
					<ContentRenderer :value="doc" />
				</article>
			</template>
		</ContentDoc>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { ArticleQueryContent } from "~~/types/article";

const route = useRoute();

const { data: article } = await useAsyncData("blog", () => queryContent<ArticleQueryContent>(route.path).findOne());

if (article.value) {
	useServerSeoMeta({
		title: article.value.title,
		ogType: "article",
		ogTitle: article.value.title,
		description: article.value.description,
		ogDescription: article.value.description,
		ogImage: article.value.image,
		twitterCard: "summary_large_image",
		twitterTitle: article.value.title,
		twitterDescription: article.value.description,
		twitterImage: article.value.image,
	});
}
</script>
