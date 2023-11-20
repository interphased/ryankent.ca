<footer>
  <slot />
  <nav>
    <div>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
    </div>
    <span>
      <small>&copy; Ryan Kent</small>
    </span>
  </nav>
</footer>

<style>
  footer {
    margin: 2rem 2rem 4rem 2rem;
  }

  nav {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
</style>