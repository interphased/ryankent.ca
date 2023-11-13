<script>
  import '$lib/styles/style.css';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="home">
  <main class="container-sm">
    <slot />
    <Footer social>
      <p><strong>You can also reach me via email or social media</strong></p>
    </Footer>
  </main>
</div>

<style>
  .home {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>