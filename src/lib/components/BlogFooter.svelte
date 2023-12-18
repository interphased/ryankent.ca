<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Social from '$lib/components/Social.svelte';
</script>

<footer class="blog-footer card">
	<div>
		<h4>About Me</h4>
		<p>
			My name is Ryan Kent. I'm a web application developer from Toronto, Canada. I specialize in
			performant, intuitive, user-focused applications and interfaces.
		</p>
		<p>
			If you'd like to get in touch, please fill out my contact form or reach out to me on social
			media.
		</p>
	</div>
	<div>
		<h4>Contact</h4>
		<ContactForm />
	</div>
	<div class="flex-center">
		<Social />
	</div>
</footer>

<style>
	.blog-footer {
		margin-top: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2rem;
	}
	.blog-footer > div {
		flex: 1 1 0%;
		width: 100%;
	}
	.blog-footer h4 {
		margin-top: 0;
	}
</style>
