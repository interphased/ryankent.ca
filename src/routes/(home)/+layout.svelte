<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="home">
	<main class="container container-sm">
		<slot />
	</main>
</div>

<Footer />

<style>
	.home {
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
