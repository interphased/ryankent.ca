import type { Post } from "$lib/utils/posts";

export async function load({ params, fetch }) {
  // mdsvex component must be rendered client-side
  const postFile = await import(`../../../lib/content/posts/${params.slug}.md`);
  const component = postFile.default;

  // other post data can come from api
  const response = await fetch(`/api/posts/${params.slug}`);
  const post: Post = await response.json();

  return {
    post,
    component
  }
}