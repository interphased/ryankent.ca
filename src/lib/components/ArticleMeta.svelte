<script lang="ts">
	import Time from './Time.svelte';

	interface Props {
		date: string;
		readTime: number;
	}

	let { date, readTime }: Props = $props();
</script>

<div class="article-meta">
	<Time {date} />
	<span>&middot;</span>
	<span>{readTime} min read</span>
</div>

<style>
	.article-meta {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 0.8rem;
		color: var(--time-color);
	}
</style>
