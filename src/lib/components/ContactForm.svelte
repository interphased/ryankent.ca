<script lang="ts">
  let success = false;
  let error = false;
  let email = '';
  let message = '';

  function handleSubmit (e: SubmitEvent) {
    success = false;
    error = false;

    const formData = new FormData(e.target as HTMLFormElement);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => success = true)
      .catch(() => error = true)
      .finally(() => {
        email = '';
        message = '';
      });
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  name="contact"
  method="POST"
  data-netlify="true"
  id="contact">
  <input type="email" name="email" aria-label="Email address" placeholder="your@email.com" required bind:value={email} />
  <textarea name="message" aria-label="Message" rows="4" required placeholder="Hi! I'm contacting you because..." bind:value={message}></textarea>
  {#if success}
    <span class="alert success">
      Thanks for submitting your message. I'll get back to you soon.
    </span>
  {/if}
  {#if error}
    <span class="alert error">
      There was a problem sending your message. Please use a different method to contact me, or try again later.
    </span>
  {/if}
  <button type="submit">Send</button>
</form>