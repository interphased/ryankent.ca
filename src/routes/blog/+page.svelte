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

<!-- <article>
  <header>
    <h2>
      <a href="/blog/utilizing-the-native-web">Utilizing the Native Web</a>
    </h2>
    <time datetime="2023-11-05">November 5, 2023</time>
  </header>
  <p>When developing for the web you should always look to implement existing, native features, before trying to reinvent the wheel.</p>
  <p>This article gives an example using the native <code>&lt;details&gt;</code> element instead of implementing a custom accordion component.</p>
</article> -->

<!-- <article>
  <h2>
    <a href="/blog/using-native-web-elements.html">Designing and Developing Frictionless User Interfaces</a>
  </h2>
  <time datetime="2023-11-05">November 5, 2023</time>
  <p>Less is more. Keep things consistent. Reuse styles from other components. Let the browser or OS do most of the work so accessibility and native controls function as expected across all platforms and devices.</p>
</article> -->

<!-- <article>
  <h2>
    <a href="/blog/using-native-web-elements.html">Understanding Web Components</a>
  </h2>
  <time datetime="2023-11-05">November 5, 2023</time>
  <p>What are web components? Why would I want to use them? How do I use them? How do I style them?</p>
</article> -->