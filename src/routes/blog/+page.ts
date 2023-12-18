import type { Post } from '$lib/utils/posts';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts.json`);
	const posts: Post[] = await response.json();

	return {
		posts
	};
};
