<svelte:head>
  <title>Ryan Kent - {title}</title>
  <meta name="description" content="{description}" />
  <meta name="og:title" content="Ryan Kent - {title}"/>
  <meta name="og:description" content="{description}" />
  <meta name="keywords" content="{keywords.toString()}" />
</svelte:head>

<script>
  import Time from '$lib/components/Time.svelte';

  export let data;
  const { title, description, keywords, date, content: Content } = data;
</script>

<article>
  <header>
    <h1>{title}</h1>
    <Time {date} />
  </header>

  <svelte:component this={Content} />
</article>