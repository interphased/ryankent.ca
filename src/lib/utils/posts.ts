import type { SvelteComponent } from "svelte"
import { calculate } from "./readTime"

export type Post = {
  path: string,
  readTime: number,
  metadata: {
    title: string
    date: string
    description: string
    keywords: string[]
    published: boolean
  }
}

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('../content/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts: Post[] = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver() as SvelteComponent<Post["metadata"]>;
      const content = post.default.render()
      const postPath = `/blog/${path.split('/').pop()?.slice(0, -3)}`;
      const readTime = calculate(content.html)

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
  const postFile: SvelteComponent<Post["metadata"]> = await import(`../content/posts/${trimmedSlug}.md`);
  const content = postFile.default.render();
  const readTime = calculate(content.html);

  const post: Post = {
    path: `/blog/${trimmedSlug}`,
    readTime,
    metadata: postFile.metadata
  }

  return post;
};