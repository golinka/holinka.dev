import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	if (config.public.isProd) {
		nuxtApp.vueApp.use(VueGtag, {
			property: {
				id: config.public.googleAnalyticsId,
				params: {
					send_page_view: true,
				},
			},
		});
		trackRouter(nuxtApp.$router);
	}
});
