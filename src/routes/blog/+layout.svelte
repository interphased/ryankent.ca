<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex-center">
	<div>
		<Header />
		<main class="container">
			<slot />
		</main>
		<Footer />
	</div>
</div>
