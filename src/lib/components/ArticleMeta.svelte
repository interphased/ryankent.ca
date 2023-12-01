<script lang="ts">
  import Time from "./Time.svelte";

  export let date: string;
  export let readTime: number;
</script>

<div class="article-meta">
  <Time {date} />
  <span>&middot;</span>
  <span>{readTime} min read</span>
</div>

<style>
  .article-meta {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
    color: var(--time-color);
  }
</style>