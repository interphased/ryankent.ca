<script lang="ts">
  import Time from '$lib/components/Time.svelte';

  export let date: string;
</script>

<header class="article-header">
  <h1>
    <slot />
  </h1>
  <Time {date} />
</header>

<style>
  .article-header {
    background: var(--article-header-bg-color);
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
</style>