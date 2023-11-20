<svelte:head>
  <title>Ryan Kent - Web application developer from Toronto, Canada</title>
  <meta name="description" content="Hi! I'm a web application developer from Toronto, Canada" />
  <meta name="og:title" content="Ryan Kent"/>
  <meta name="og:description" content="Hi! I'm a web application developer from Toronto, Canada" />
</svelte:head>

<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
	import Social from '$lib/components/Social.svelte';
</script>

<header>
  <img src="/profile.jpg" alt="profile" />
  <h1>Hi, my name is <span>Ryan Kent</span></h1>
  <h3>I'm a web application developer specializing in performant, intuitive, user-focused applications and interfaces.</h3>
  <p>I currently live in Toronto, Canada, and work passionately on all the interesting products at <a href="https://vidcruiter.com" target="_blank">VidCruiter</a>.</p>
  <p>I have been in cyberspace for a long time. In 2008 I started <a href="https://interphased.com" target="_blank">Interphased</a> and put my heart into all the work we did there for over a decade. We made lots of cool products and applications for clients all across the world.</p>
</header>

<section>
  <h4><strong>Read more</strong></h4>
  <p>Sometimes I write about the web and stuff. If you're reading this, maybe you should <a href="/blog">check out my blog</a>.</p>
</section>

<section>
  <h4><strong>Send me a message</strong></h4>
  <p>Feel free to contact me for any personal or business request.</p>
  <ContactForm />
</section>

<footer>
  <p>You can also reach me via email or social media</p>
  <Social />
</footer>

<style>
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
</style>