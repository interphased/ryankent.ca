<script>
  import '$lib/styles/prism.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';
	import BlogNav from '$lib/components/BlogNav.svelte';
</script>

<div class="flex-center">
  <div>
    <Header>
      <BlogNav />
    </Header>
    <main class="container">
      <slot />
      <BlogFooter />
    </main>
    <Footer />
  </div>
</div>