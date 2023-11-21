<script lang="ts">
  import Time from '$lib/components/Time.svelte';

  export let date: string;
  export let readTime: number;
</script>

<header class="article-header">
  <h1>
    <slot />
  </h1>
  <div class="meta">
    <Time {date} />
    {#if readTime}
      <span class="read-time">&middot;</span>
      <span class="read-time">{readTime} min read</span>
    {/if}
  </div>
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
  .meta {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
  }
  .read-time {
    color: var(--time-color);
  }
</style>