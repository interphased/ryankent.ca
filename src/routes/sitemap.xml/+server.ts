import { fetchMarkdownPosts, type Post } from '$lib/utils/posts';

const site = 'https://ryankent.ca';
const pages: string[] = ['blog'];
const posts: Post[] = await fetchMarkdownPosts();

export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
	<url>
	<loc>${site}</loc>
	<changefreq>weekly</changefreq>
	<priority>1.0</priority>
	</url>
	${pages
		.map(
			(page) => `
				<url>
				<loc>${site}/${page}</loc>
				<changefreq>daily</changefreq>
				<priority>0.8</priority>
				</url>
				`
		)
		.join('')}
	${posts
		.filter((p) => p.metadata.published)
		.map(
			(post) => `
				<url>
				<loc>${site}${post.path}</loc>
				<changefreq>daily</changefreq>
				<lastmod>${post.metadata.lastmod}</lastmod>
				<priority>0.5</priority>
				</url>
				`
		)
		.join('')}
</urlset>`;
