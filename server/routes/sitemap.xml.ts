import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

const basicRoutes = [{ _path: "/", changefreq: "daily" }, { _path: "/blog", changefreq: "daily" }, { _path: "/about" }];

export default defineEventHandler(async (event) => {
	// Fetch all documents
	const docsRoutes = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find();

	const sitemap = new SitemapStream({
		hostname: "https://holinka.dev",
	});

	for (const route of [...docsRoutes, ...basicRoutes]) {
		sitemap.write({
			url: route._path,
			changefreq: route.changefreq || "monthly",
		});
	}

	sitemap.end();

	return streamToPromise(sitemap);
});
