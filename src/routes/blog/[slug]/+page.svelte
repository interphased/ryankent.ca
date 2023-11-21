<svelte:head>
  <title>Ryan Kent - {title}</title>
  <meta name="description" content="{description}" />
  <meta name="og:title" content="Ryan Kent - {title}"/>
  <meta name="og:description" content="{description}" />
  <meta name="keywords" content="{keywords.toString()}" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { calculate } from '$lib/utils/readTime.js';
  import ArticleHeader from '$lib/components/ArticleHeader.svelte';
  import ArticleBody from '$lib/components/ArticleBody.svelte';

  export let data;
  const { title, description, keywords, date, content: Content } = data;

  let articleBody: HTMLElement;
  let readTime = 0;

  onMount(() => {
    if (articleBody) {
      readTime = calculate(articleBody.innerText);
    }
  });
</script>

<article>
  <ArticleHeader {date} {readTime}>
    {title}
  </ArticleHeader>
  <ArticleBody>
    <div bind:this={articleBody}>
      <svelte:component this={Content} />
    </div>
  </ArticleBody>
</article>