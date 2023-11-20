<script lang="ts">
  export let total: number;
</script>

<header class="subheader">
  <h1><slot /></h1>
  <p>Showing <strong>{total}</strong> Articles</p>
</header>

<style>
  .subheader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .subheader > p,
  .subheader > h1 {
    margin-bottom: 0;
  }
</style>