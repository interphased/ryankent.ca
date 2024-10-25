<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="flex-center">
	<div>
		<Header />
		<main class="container">
			{@render children?.()}
		</main>
		<Footer />
	</div>
</div>
