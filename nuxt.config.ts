import { resolve } from "path";

export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: "Artem Holinka - Frontend Developer",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "description", content: `I have over ${new Date().getFullYear() - 2015} years of development experience and currently works as Frontend developer at JIJI. Also I write about JavaScript and other things related to WEB.` },
				{ hid: "og-type", property: "og:type", content: "website" },
				{ hid: "og-site_name", property: "og:type", content: "Artem Holinka" },
				{ hid: "og-title", property: "og:title", content: "Artem Holinka - Frontend Developer" },
				{ hid: "og-desc", property: "og:description", content: `I have over ${new Date().getFullYear() - 2015} years of development experience and currently works as Frontend developer at JIJI. Also I write about JavaScript and other things related to WEB.` },
				{ hid: "og-image", property: "og:image", content: "https://holinka.dev/images/avatar.jpg" },
				{ hid: "og-url", property: "og:url", content: 'https://holinka.dev' },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
		},
	},
	css: ["~/assets/scss/index.scss"],
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-typed-router", "@nuxt/image-edge"],
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
			content: ["./src/**/*.{vue,html,ts,js}"],
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
	},
	alias: {
		"@": resolve(__dirname, "./"),
		images: resolve(__dirname, "./assets/images"),
	},
	nuxtTypedRouter: {
		outDir: "./.generated",
	},
});
