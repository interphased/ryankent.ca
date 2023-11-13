<svelte:head>
  <title>Ryan Kent - Web application developer from Toronto, Canada</title>
  <meta name="description" content="Hi! I'm a web application developer from Toronto, Canada" />
  <meta name="og:title" content="Ryan Kent"/>
  <meta name="og:description" content="Hi! I'm a web application developer from Toronto, Canada" />
</svelte:head>

<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<header>
  <img src="/profile.webp" alt="profile" />
  <h1>Hi, my name is <span>Ryan Kent</span></h1>
  <p>I'm a web application developer from Toronto, Canada.</p>
  <p>I have been working in the web for a long time. I started <a href="https://interphased.com" target="_blank">Interphased</a> back in 2008 and put my heart into that for over a decade. We made lots of cool products and applications for clients all across the world.</p>
  <p>Nowadays, you can find me working passionately on all the interesting products at <a href="https://vidcruiter.com" target="_blank">VidCruiter</a>.</p>
</header>

<section>
  <h2>Read more</h2>
  <p>I sometimes write about the web and stuff. If you're reading this, maybe you should <a href="/blog">check out my blog</a>.</p>
</section>

<section>
  <h2>Send me a message</h2>
  <p>Feel free to contact me for any personal or business request.</p>
  <ContactForm />
</section>

<style>
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
</style>