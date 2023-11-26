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
    margin: 3rem 0;
  }
  .article-header :global(h1),
  .article-header :global(h2) {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
</style>