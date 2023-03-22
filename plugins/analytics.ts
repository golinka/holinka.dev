import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	console.warn('nuxtApp >>>', nuxtApp)
	if (config.public.isProd) {
		nuxtApp.vueApp.use(VueGtag, {
			property: {
				id: config.public.googleAnalyticsId,
			},
		});
		nuxtApp.$gtag.config()
	}
});
