<svelte:head>
  <title>Ryan Kent - {title}</title>
  <meta name="description" content="{description}" />
  <meta name="og:title" content="Ryan Kent - {title}"/>
  <meta name="og:description" content="{description}" />
  <meta name="keywords" content="{keywords.toString()}" />
</svelte:head>

<script>
  import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Social from '$lib/components/Social.svelte';

  export let data;
  const { title, description, keywords, date, content: Content } = data;
</script>

<header class="blog-header">
  <a href="/blog">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    <span>Read more articles</span>
  </a>
</header>

<article>
  <ArticleHeader {date}>
    {title}
  </ArticleHeader>
  <div class="article-body">
    <svelte:component this={Content} />
  </div>
</article>

<footer class="blog-footer">
  <div>
    <h4>About Me</h4>
    <p>My name is Ryan Kent. I'm a web application developer from Toronto, Canada. I specialize in performant, intuitive, user-focused applications and interfaces.</p>
    <p>If you'd like to get in touch, please fill out my contact form or reach out to me on social media.</p>
    <Social />
  </div>
  <div>
    <h4>Contact</h4>
    <ContactForm />
  </div>
</footer>

<style>
  .blog-header {
    margin-bottom: 2rem;
  }
  .blog-header a {
    text-decoration: none;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  svg {
    fill: var(--accent-color);
  }
  .blog-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
  .blog-footer > div {
    flex: 1 1 0%;
    width: 100%;
  }

  @media screen and (max-width: 40rem) {
    .blog-footer {
      flex-direction: column;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>