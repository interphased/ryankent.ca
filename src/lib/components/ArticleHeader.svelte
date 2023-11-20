<script lang="ts">
  import { onMount } from 'svelte';
  import Time from '$lib/components/Time.svelte';

  export let date: string;

  function calculateReadTime(article: string) {
    const wpm = 220;
    const words = article.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return time;
  }

  let readTime = 0;

  onMount(() => {
    let article = document.querySelector<HTMLElement>('.article-body');

    if (article) {
      readTime = calculateReadTime(article.innerText);
    }
  });
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