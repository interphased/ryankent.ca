<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="article-body">
	{@render children?.()}
</div>

<style>
	.article-body {
		padding: 2rem 2rem 4rem 2rem;
	}
	:global(.article-body > p:first-child::first-letter) {
		font-size: 4.8rem;
		line-height: 3rem;
		float: left;
		margin-top: 0;
		margin-right: 0.2rem;
		font-family: var(--font-serif);
		color: var(--heading-color);
	}
	.article-body :global(h2) {
		position: relative;
		margin: 5rem 0 2rem 0;
	}

	/* .article-body :global(h2::before) {
    content: '';
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: var(--accent-color);
    margin-bottom: 0.5rem;
  } */

	.article-body :global(h3) {
		margin-top: 3rem;
		margin-bottom: 2rem;
	}

	.article-body :global(h4) {
		margin-top: 3rem;
		margin-bottom: 1rem;
	}

	/*.article-body :global(p) {
		margin-left: 2rem;
		margin-right: 2rem;
	}*/

	.article-body :global(ul),
	.article-body :global(ol) {
		margin-left: 2rem;
		margin-right: 2rem;
		padding-left: 1rem;
		list-style: outside;
	}

	.article-body :global(img) {
		max-width: 100%;
		text-align: center;
		margin-inline: auto;
	}

	.article-body :global(figure) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.article-body :global(figcaption) {
		font-style: italic;
		text-align: center;
	}

	.article-body :global(pre[class*='language-']) {
		margin: 2rem -2rem;
		padding: 2rem 2rem;
	}

	.article-body :global(pre[class*='language-'] > code[class*='language-']) {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.article-body :global(blockquote) {
		margin: 2rem -2rem;
		background: var(--blockquote-bg-color);
		padding: 2rem 2rem;
		border-radius: 0.5rem;
		color: var(--heading-color);
	}

	.article-body :global(blockquote p) {
		font-style: italic;
	}

	.article-body :global(blockquote h1),
	.article-body :global(blockquote h2),
	.article-body :global(blockquote h3),
	.article-body :global(blockquote h4),
	.article-body :global(blockquote p) {
		margin: 0;
		color: var(--heading-color);
	}

	@media screen and (max-width: 40rem) {
		.article-body {
			padding-left: 0;
			padding-right: 0;
		}
		.article-body :global(p),
		.article-body :global(h2) {
			margin-left: 0;
			margin-right: 0;
		}
		.article-body :global(blockquote) {
			padding: 1rem 1.5rem;
			margin-left: 0;
			margin-right: 0;
		}
		.article-body :global(pre[class*='language-']) {
			padding: 1rem 1.5rem;
			margin-left: 0;
			margin-right: 0;
		}
	}
</style>
