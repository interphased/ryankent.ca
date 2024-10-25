<script lang="ts">
	import '$lib/styles/prism.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BlogFooter from '$lib/components/BlogFooter.svelte';

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
			<BlogFooter />
		</main>
		<Footer />
	</div>
</div>
