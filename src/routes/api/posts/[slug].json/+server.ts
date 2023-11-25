import { fetchMarkdownPost } from '$lib/utils/posts';
import { error, json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
  const slug = url.pathname.split('/').pop();

  if (!slug) {
    throw error(404, 'The request is missing a parameter')
  }

  try {
    const post = await fetchMarkdownPost(slug);
    return json(post);
  } catch {
    throw error(500, 'There was an error fetching the post');
  }
};