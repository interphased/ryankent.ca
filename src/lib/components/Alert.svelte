<script lang="ts">
	interface Props {
		type: 'success' | 'error';
		children?: import('svelte').Snippet;
	}

	let { type, children }: Props = $props();
</script>

<span class="alert" class:error={type === 'error'} class:success={type === 'success'}>
	{@render children?.()}
</span>

<style>
	.alert {
		transition: opacity 150ms ease-in-out;
		opacity: 1;
		line-height: 1.2rem;
		display: block;
		box-sizing: border-box;
		width: 100%;
		padding: 0.8rem;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		font-size: 1rem;
	}

	.alert.success {
		background: var(--success-bg-color);
		color: var(--success-text-color);
	}

	.alert.error {
		background: var(--error-bg-color);
		color: var(--error-text-color);
	}
</style>
