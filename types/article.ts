import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export type LatestArticle = {
	title: string;
	date: string;
	url: string;
};

export type Article = {
	title: string;
	description: string;
	layout: string;
	image: string;
	categories: { name: string }[];
	seo: {
		description: string;
		keywords: string[];
	};
	body: Record<string, unknown>;
	createdAt: string;
};

export type ArticleQueryContent = MarkdownParsedContent & Article;
