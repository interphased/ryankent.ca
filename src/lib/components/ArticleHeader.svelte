<script lang="ts">
  import Time from '$lib/components/Time.svelte';
	import ArticleMeta from './ArticleMeta.svelte';

  export let date: string;
  export let readTime: number;
</script>

<header class="article-header">
  <h1>
    <slot />
  </h1>
  <ArticleMeta {date} {readTime} />
</header>

<style>
  .article-header {
    background: var(--article-header-bg-color);
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .article-header :global(h1),
  .article-header :global(h2) {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
</style>