export async function load({ params }) {
  const post = await import(`../../../lib/content/posts/${params.slug}.md`);
  const { title, date, description, keywords, published } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
    description,
    keywords,
    published
  };
}