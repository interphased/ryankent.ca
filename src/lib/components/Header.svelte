<header class="container">
  <div class="branding">
    <a href="/">
      <img src="/profile.jpg" alt="profile" />
    </a>
    <h1>
      <span>
        <a href="/blog">Ryan Kent</a>
      </span>
    </h1>
  </div>
  <slot />
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .branding {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0;
    margin-top: -0.6rem;
  }

  a {
    text-decoration: none;
    color: var(--heading-color);
  }
</style>