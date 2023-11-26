<svelte:head>
  <title>Ryan Kent - Blog</title>
  <meta name="description" content="Hi! I'm a web application developer from Toronto, Canada" />
  <meta name="og:title" content="Ryan Kent - Blog"/>
  <meta name="og:description" content="Hi! I'm a web application developer from Toronto, Canada" />
</svelte:head>

<script lang="ts">
  import BlogHeader from '$lib/components/BlogHeader.svelte'
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

  export let data;
</script>

<BlogHeader articleCount={data.posts.length} />

{#if data.posts.length}
  {#each data.posts as post}
    <article class="article-preview">
      <header>
        <h2>
          <a href="{post.path}">{post.metadata.title}</a>
        </h2>
        <ArticleMeta date={post.metadata.date} readTime={post.readTime} />
      </header>
      <p>{post.metadata.description}</p>
    </article>
  {/each}
{:else}
  <article>
    <header>
      <h2>There's nothing here.</h2>
    </header>
    <p>Sorry, no posts could be found. Please check back again later.</p>
  </article>
{/if}

<style>
  .article-preview {
    background: var(--blockquote-bg-color);
    padding: 2rem;
    border-radius: 0.5rem;
  }
  .article-preview header {
    margin-bottom: 1rem;
  }
</style>