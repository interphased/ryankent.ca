import { fetchMarkdownPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const filteredPosts = allPosts
    .filter((post) => post.metadata.published)
    .sort((a, b) => {
    return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
  });

  return json(filteredPosts);
};