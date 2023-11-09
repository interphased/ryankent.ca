type Post = {
  metadata: {
    content: string
    title: string
    date: string
    description: string
    published: boolean
  }
}

type PostFiles = Record<string, () => Promise<Post>>

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/content/posts/*.md') as PostFiles;
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = `/blog/${path.slice(23, -3)}`;

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};