<svelte:head>
  <title>Ryan Kent - {post.metadata.title}</title>
  <meta name="description" content="{post.metadata.description}" />
  <meta name="og:title" content="Ryan Kent - {post.metadata.title}"/>
  <meta name="og:description" content="{post.metadata.description}" />
  <meta name="keywords" content="{post.metadata.keywords.toString()}" />
  <link rel="canonical" href="https://ryankent.ca{post.path}" />
</svelte:head>

<script lang="ts">
  import ArticleHeader from '$lib/components/ArticleHeader.svelte';
  import ArticleBody from '$lib/components/ArticleBody.svelte';
  import Comments from '$lib/components/Comments.svelte';
  import BlogNav from '$lib/components/BlogNav.svelte';

  export let data;
  const { post, component } = data;
</script>

<article>
  <ArticleHeader date={post.metadata.date} readTime={post.readTime}>
    {post.metadata.title}
  </ArticleHeader>
  <ArticleBody>
    <svelte:component this={component} />
  </ArticleBody>
  <BlogNav />
</article>

<Comments />