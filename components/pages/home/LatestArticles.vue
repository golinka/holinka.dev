<script lang="ts" setup>
import { RoutesNames } from "~~/types/router";
import { ArticleQueryContent } from "~~/types/article";
import ArticleItem from "~~/components/common/ArticleItem.vue";
import SectionBlock from "~~/components/layout/SectionBlock.vue";

interface IProps {
	articles: ArticleQueryContent[];
}

const { articles } = withDefaults(defineProps<IProps>(), {
	articles: () => [],
});
</script>

<template>
	<SectionBlock title="Latest Articles" linkLabel="All articles" :link="RoutesNames.BLOG">
		<template #title="slotProps">
			<span class="relative">
				{{ slotProps.title }}
				<NuxtLink to="/rss.xml" title="RSS Feed" class="absolute -top-3 -right-6">
					<Icon name="material-symbols:rss-feed-rounded" size="0.6em" />
				</NuxtLink>
			</span>
		</template>
		<ArticleItem
			v-for="(article, index) in articles"
			:key="index"
			:article="article"
			:isShowCategories="false"
			:isShowDescription="false"
			class="mb-5 last:mb-0"
		>
		</ArticleItem>
	</SectionBlock>
</template>
