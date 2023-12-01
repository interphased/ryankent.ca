<script>
  import '$lib/styles/prism.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlogFooter from '$lib/components/BlogFooter.svelte';
</script>

<div class="flex-center">
  <div>
    <Header />
    <main class="container">
      <slot />
      <BlogFooter />
    </main>
    <Footer />
  </div>
</div>