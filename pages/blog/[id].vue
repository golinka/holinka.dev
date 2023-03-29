<script setup lang="ts">
import { useServerHead } from "unhead";
import { ArticleQueryContent } from "~~/types/article";

const route = useRoute();

const { data: article } = await useAsyncData("blog", () => queryContent<ArticleQueryContent>(route.path).findOne());

if (article.value) {
	useServerHead({
		meta: [
			{
				hid: "keywords",
				name: "keywords",
				keywords: (article.value?.seo?.keywords || []).join(", "),
			},
		],
	});
	useServerSeoMeta({
		title: article.value.title,
		description: article.value?.seo?.description,
		ogType: "article",
		ogTitle: article.value.title,
		ogDescription: article.value?.seo?.description,
		ogImage: article.value.image,
		twitterCard: "summary_large_image",
		twitterTitle: article.value.title,
		twitterDescription: article.value?.seo?.description,
		twitterImage: article.value.image,
	});
}
</script>

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
