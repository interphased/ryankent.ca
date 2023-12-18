<script lang="ts">
	export let articleCount: number;
</script>

<header class="blog-header">
	<h2>Articles</h2>
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
	.blog-header > h2 {
		margin-bottom: 0;
		font-family: var(--font-sans);
	}
</style>
