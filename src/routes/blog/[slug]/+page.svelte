<script>
  import Time from '$lib/components/Time.svelte';

  export let data;
  const { title, date, content: Content } = data;
</script>

<article>
  <header>
    <h1>{title}</h1>
    <Time {date} />
  </header>

  <svelte:component this={Content} />
</article>

<footer>
  <nav>
    <a href="/blog">Blog</a>
    <a href="/">Home</a>
  </nav>
</footer>