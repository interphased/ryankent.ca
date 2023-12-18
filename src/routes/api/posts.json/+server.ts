import { fetchMarkdownPosts, type Post } from '$lib/utils/posts';
import { error, json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const allPosts = await fetchMarkdownPosts();

		const filteredPosts: Post[] = allPosts
			.filter((post) => post.metadata.published)
			.sort((a, b) => {
				return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
			});

		return json(filteredPosts);
	} catch {
		error(500, 'There was an error fetching posts');
	}
};
