<script>
  import '$lib/styles/style.css';
	import DarkModeButton from '$lib/components/DarkModeButton.svelte';
</script>

<div class="home">
  <main class="container-sm">
    <slot />
  </main>
  <DarkModeButton />
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