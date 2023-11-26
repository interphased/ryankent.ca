<svelte:head>
  <title>Ryan Kent - Blog</title>
  <meta name="description" content="Hi! I'm a web application developer from Toronto, Canada" />
  <meta name="og:title" content="Ryan Kent - Blog"/>
  <meta name="og:description" content="Hi! I'm a web application developer from Toronto, Canada" />
</svelte:head>

<script lang="ts">
  import BlogHeader from '$lib/components/BlogHeader.svelte'
	import ArticlePreview from '$lib/components/ArticlePreview.svelte';

  export let data;
</script>

<BlogHeader articleCount={data.posts.length} />

{#if data.posts.length}
  {#each data.posts as post}
    <ArticlePreview {post} />
  {/each}
{:else}
  <article>
    <header>
      <h2>There's nothing here.</h2>
    </header>
    <p>Sorry, no posts could be found. Please check back again later.</p>
  </article>
{/if}