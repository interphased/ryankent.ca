<script lang="ts">
	import ArticleMeta from './ArticleMeta.svelte';

	interface Props {
		date: string;
		readTime: number;
		children?: import('svelte').Snippet;
	}

	let { date, readTime, children }: Props = $props();
</script>

<header class="article-header">
	<h1>
		{@render children?.()}
	</h1>
	<ArticleMeta {date} {readTime} />
</header>

<style>
	.article-header {
		margin: 2rem 0;
		padding: 2rem 0;
	}
	.article-header :global(h1),
	.article-header :global(h2) {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}
	@media screen and (max-width: 40rem) {
		.article-header {
			margin: 0;
			padding: 1rem 0 2rem 0;
		}
	}
</style>
