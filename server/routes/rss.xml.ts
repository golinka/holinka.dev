import RSS from "rss";
import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
	// Fetch all documents
	const docsRoutes = await serverQueryContent(event).sort({ createdAt: -1 }).where({ _partial: false }).find();

	const feed = new RSS({
		title: "Artem Holinka - Blog",
		site_url: "https://holinka.dev",
		feed_url: "https://holinka.dev/rss.xml",
	});

	for (const route of docsRoutes) {
		feed.item({
			title: route.title ?? "-",
			url: `https://holinka.dev${route._path}`,
			date: route.date,
			description: route.description,
		});
	}

	const feedString = feed.xml({ indent: true });
	event.res.setHeader("content-type", "text/xml");
	event.res.end(feedString);
});
