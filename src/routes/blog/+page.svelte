<script>
  import Time from '$lib/components/Time.svelte';

  export let data;
</script>

<header>
  <h1>Blog</h1>
</header>

{#if data.posts.length}
  {#each data.posts as post}
      <article>
        <header>
          <h2>
            <a href="{post.path}">{post.meta.title}</a>
          </h2>
          <Time date={post.meta.date} />
        </header>
        <p>{post.meta.description}</p>
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