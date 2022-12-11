import { resolve } from "path";

export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
		},
	},
	css: ["~/assets/scss/index.scss"],
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-typed-router", "@nuxt/image-edge"],
	typescript: {
		strict: true,
		typeCheck: true,
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
