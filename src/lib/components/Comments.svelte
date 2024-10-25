<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let ready = $state(false);

	const githubTheme = $theme === 'dark' ? 'github-dark' : 'github-light';

	onMount(() => {
		ready = true;
	});
</script>

<article class="card">
	<h4>Comments</h4>
	{#if ready}
		<script
			src="https://utteranc.es/client.js"
			repo="interphased/ryankent.ca"
			issue-term="pathname"
			label="comment"
			theme={githubTheme}
			crossorigin="anonymous"
			async>
		</script>
	{/if}
</article>

<style>
	article {
		margin: 4rem 0 2rem 0;
	}
	article > h4 {
		margin-top: 0;
	}
	:global(.utterances) {
		max-width: 40rem;
	}
</style>
