<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Social from '$lib/components/Social.svelte';
</script>

<footer class="blog-footer">
  <div>
    <h4>About Me</h4>
    <p>My name is Ryan Kent. I'm a web application developer from Toronto, Canada. I specialize in performant, intuitive, user-focused applications and interfaces.</p>
    <p>If you'd like to get in touch, please fill out my contact form or reach out to me on social media.</p>
    <Social />
  </div>
  <div>
    <h4>Contact</h4>
    <ContactForm />
  </div>
</footer>

<style>
  .blog-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
  .blog-footer > div {
    flex: 1 1 0%;
    width: 100%;
  }

  @media screen and (max-width: 40rem) {
    .blog-footer {
      flex-direction: column;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>