<div class="home">
  <main class="container container-sm">
    <slot />
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