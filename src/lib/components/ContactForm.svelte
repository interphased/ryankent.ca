<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import Alert from './Alert.svelte';

	let success = $state(false);
	let error = $state(false);
	let email = $state('');
	let message = $state('');

	function handleSubmit(e: SubmitEvent) {
		success = false;
		error = false;

		const formData = new FormData(e.target as HTMLFormElement);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData as any).toString()
		})
			.then(() => (success = true))
			.catch(() => (error = true))
			.finally(() => {
				email = '';
				message = '';
			});
	}
</script>

<form
	onsubmit={preventDefault(handleSubmit)}
	name="contact"
	method="POST"
	netlify-honeypot="bot-field"
	data-netlify="true"
	id="contact">
	<input type="hidden" name="form-name" value="contact" />
	<input
		type="email"
		name="email"
		aria-label="Email address"
		placeholder="your@email.com"
		required
		bind:value={email} />
	<textarea
		name="message"
		aria-label="Message"
		rows="4"
		required
		placeholder="Hi! I'm contacting you because..."
		bind:value={message}></textarea>
	{#if success}
		<Alert type="success">Thanks for submitting your message. I'll get back to you soon.</Alert>
	{/if}
	{#if error}
		<Alert type="error">
			There was a problem sending your message. Please use a different method to contact me, or try
			again later.
		</Alert>
	{/if}
	<button type="submit">Send</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}
	button {
		min-width: 8rem;
	}
</style>
