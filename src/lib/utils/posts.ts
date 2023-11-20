export type Metadata = {
    title: string
    date: string
    description: string
    keywords: string[]
    published: boolean
}

export type Post = {
  metadata: Metadata,
  path: string
}

type MarkdownFiles = Record<string, () => Promise<Post>>

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('../content/posts/*.md') as MarkdownFiles;
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts: Post[] = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = `/blog/${path.slice(17, -3)}`;

      return {
        metadata: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};