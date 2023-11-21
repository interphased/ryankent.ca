<script lang="ts">
  export let articleCount: number;
</script>

<header class="blog-header">
  <h1>Blog</h1>
  <p>Showing <strong>{articleCount}</strong> Articles</p>
</header>

<style>
  .blog-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .blog-header > p,
  .blog-header > h1 {
    margin-bottom: 0;
  }
</style>