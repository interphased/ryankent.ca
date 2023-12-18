<script lang="ts">
	export let date: string;
</script>

<time datetime={date}>
	{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
</time>
