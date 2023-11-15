<header class="container">
  <div class="branding">
    <a href="/">
      <img src="/profile.jpg" alt="profile" />
    </a>
    <h1>
      <span>
        <a href="/">Ryan Kent</a>
      </span>
    </h1>
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .branding {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  h1 {
    margin-bottom: 0;
    margin-top: -0.6rem;
  }

  a {
    text-decoration: none;
    color: var(--heading-color);
  }
</style>