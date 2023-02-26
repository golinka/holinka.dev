import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

const meta = {
	siteName: "Artem Holinka",
	title: "Artem Holinka - Senior Front-end Engineer",
	description: `I have over ${
		new Date().getFullYear() - 2015
	} years of development experience and currently works as Senior Front-end Engineer at JIJI. Also I write about JavaScript and other things related to WEB.`,
	image: "https://holinka.dev/images/avatar.jpg",
	url: "https://holinka.dev",
};

export default defineNuxtConfig({
	extends: ["@nuxt-themes/typography"],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "Artem Holinka - Senior Front-end Engineer",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "description", content: meta.description },
				{ hid: "og-type", property: "og:type", content: "website" },
				{ hid: "og-site_name", property: "og:site_name", content: meta.siteName },
				{ hid: "og-title", property: "og:title", content: meta.title },
				{ hid: "og-desc", property: "og:description", content: meta.description },
				{ hid: "og-image", property: "og:image", content: meta.image },
				{ hid: "og-url", property: "og:url", content: meta.url },
				{ hid: "twitter-card", property: "twitter:card", content: "summary_large_image" },
				{ hid: "twitter-title", property: "twitter:title", content: meta.title },
				{ hid: "twitter-description", property: "twitter:description", content: meta.description },
				{ hid: "twitter-image", property: "twitter:image", content: meta.image },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
		},
	},
	css: ["~/assets/scss/index.scss"],
	// @ts-ignore
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-typed-router", "@nuxt/image-edge", "nuxt-icon"],
	typescript: {
		strict: true,
		typeCheck: true,
	},
	image: {
		providers: {
			customProvider: {
				name: "static",
				provider: "~/providers/static",
			},
		},
	},
	tailwindcss: {
		config: {
			content: [
				"./components/**/*.{vue,html,ts,js}",
				"./layouts/**/*.{vue,html,ts,js}",
				"./pages/**/*.{vue,html,ts,js}",
			],
			theme: {
				extend: {
					backgroundPosition: {
						"pos-0": "0% 0%",
						"pos-100": "100% 100%",
					},
				},
			},
		},
	},
	content: {
		markdown: {
			mdc: true,
		},
		highlight: {
			theme: {
				dark: "github-dark",
				default: "github-light",
			},
		},
	},
	alias: {
		images: resolve(__dirname, "./assets/images"),
	},
	nuxtTypedRouter: {
		outDir: "./.generated",
	},
});
