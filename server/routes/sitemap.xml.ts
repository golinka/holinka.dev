import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

const routes = ["/", "/blog", "/about"];

export default defineEventHandler(async (event) => {
	// Fetch all documents
	const basicRoutes = routes.map((i) => ({ _path: i }));
	const docsRoutes = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find();

	const sitemap = new SitemapStream({
		hostname: "https://holinka.dev",
	});

	for (const route of [...docsRoutes, ...basicRoutes]) {
		sitemap.write({
			url: route._path,
			changefreq: "monthly",
		});
	}

	sitemap.end();

	return streamToPromise(sitemap);
});
