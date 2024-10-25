<script lang="ts">
	interface Props {
		date: string;
	}

	let { date }: Props = $props();
</script>

<time datetime={date}>
	{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
</time>
