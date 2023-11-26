<script lang="ts">
	import type { Post } from '$lib/utils/posts';
	import ArticleMeta from './ArticleMeta.svelte';

  export let post: Post;
</script>

<article class="article-preview card">
  <header>
    <h2>
      <a href="{post.path}">{post.metadata.title}</a>
    </h2>
    <ArticleMeta date={post.metadata.date} readTime={post.readTime} />
  </header>
  <p>{post.metadata.description}</p>
</article>

<style>
  .article-preview header {
    margin-bottom: 1rem;
  }
</style>