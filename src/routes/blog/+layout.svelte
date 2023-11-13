<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.css';
  import '$lib/styles/prism.css';
</script>

<div class="blog">
  <div>
    <Header />
    <main class="container">
      <slot />
    </main>
    <Footer />
  </div>
</div>

<style>
  .blog {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>