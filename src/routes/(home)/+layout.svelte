<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="home">
	<main class="container container-sm">
		{@render children?.()}
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
