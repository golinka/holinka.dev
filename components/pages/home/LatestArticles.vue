<script lang="ts" setup>
import { RoutesNames } from "~~/types/router";
import { ArticleQueryContent } from "~~/types/article";
import ArticleItem from "~~/components/common/ArticleItem.vue";
import SectionBlock from "~~/components/layout/SectionBlock.vue";

interface IProps {
	articles: ArticleQueryContent[];
}

const { articles } = withDefaults(defineProps<IProps>(), {
	articles: () => []
})
</script>

<template>
	<SectionBlock title="Latest Articles" linkLabel="All articles" :link="RoutesNames.BLOG">
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
