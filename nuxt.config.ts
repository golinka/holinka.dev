import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

const meta = {
	siteName: "Artem Holinka",
	title: "Artem Holinka - Senior Frontend Developer",
	description: `Welcome to my corner of the Web. I'm all about creating awesome frontend experiences, mostly playing around with Vue and Nuxt. Additionally, I have a passion for writing, with a particular focus on JavaScript and other topics related to web development. Have a look around and feel free to reach out!`,
	image: "https://holinka.dev/images/avatar.webp",
	url: "https://holinka.dev",
};

export default defineNuxtConfig({
	extends: ["@nuxt-themes/typography"],
	runtimeConfig: {
		// Config exposed to the client-side
		public: {
			isProd: process.env.NODE_ENV === "production",
			googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "Artem Holinka - Senior Frontend Developer",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "charset", content: "UTF-8" },
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
	nitro: {
		prerender: {
			routes: ["/sitemap.xml", "/rss.xml"],
		},
	},
	// @ts-ignore
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/robots", "@nuxt/image-edge", "nuxt-icon"],
	robots: {
		rules: {
			UserAgent: "*",
			Disallow: "",
			Sitemap: "https://holinka.dev/sitemap.xml",
		},
	},
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
});
