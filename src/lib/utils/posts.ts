import type { SvelteComponent } from 'svelte';
import { render } from 'svelte/server';
import { calculate } from './readTime';

export type Post = {
	path: string;
	readTime: number;
	metadata: {
		title: string;
		date: string;
		lastmod: string;
		description: string;
		keywords: string[];
		published: boolean;
	};
};

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('../content/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: Post[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = (await resolver()) as SvelteComponent<Post['metadata']>;
			const postPath = `/blog/${path.split('/').pop()?.slice(0, -3)}`;
			const { body } = render(post.default);
			const readTime = calculate(body);

			return {
				metadata: post.metadata,
				path: postPath,
				readTime
			};
		})
	);

	return allPosts;
};

export const fetchMarkdownPost = async (slug: string) => {
	const trimmedSlug = slug.slice(0, -5);
	const postFile: SvelteComponent<Post['metadata']> = await import(
		`../content/posts/${trimmedSlug}.md`
	);
	const { body } = render(postFile.default);
	const readTime = calculate(body);

	const post: Post = {
		path: `/blog/${trimmedSlug}`,
		readTime,
		metadata: postFile.metadata
	};

	return post;
};
