<svelte:head>
  <title>Ryan Kent - Blog</title>
  <meta name="description" content="Hi! I'm a web application developer from Toronto, Canada" />
  <meta name="og:title" content="Ryan Kent - Blog"/>
  <meta name="og:description" content="Hi! I'm a web application developer from Toronto, Canada" />
</svelte:head>

<script>
  import Time from '$lib/components/Time.svelte';
  import SubHeader from '$lib/components/SubHeader.svelte'

  export let data;
</script>

<SubHeader total={data.posts.length}>
  Blog
</SubHeader>

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