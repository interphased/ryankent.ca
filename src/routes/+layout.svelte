<script lang="ts">
	import '$lib/styles/style.css';
	import ThemeButton from '$lib/components/ThemeButton.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

{@render children?.()}

<ThemeButton />
