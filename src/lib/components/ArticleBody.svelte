<div class="article-body">
  <slot />
</div>

<style>
  .article-body :global(h2) {
    position: relative;
    margin: 6rem 0 2rem 0;
  }

  .article-body :global(h3) {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .article-body :global(h4) {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .article-body :global(p) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .article-body :global(pre[class*="language-"]) {
    margin: 2rem 0 2rem 0;
    padding: 2rem;
  }

  .article-body :global(pre[class*="language-"] > code[class*="language-"]) {
    white-space: pre-wrap;
    word-break: break-word;
  }

  .article-body :global(blockquote) {
    margin: 2rem 0;
    background: var(--blockquote-bg-color);
    padding: 2rem 3rem;
    border-radius: 0.5rem;
  }

  .article-body :global(blockquote p) {
    font-style: italic;
  }

  .article-body :global(blockquote h1),
  .article-body :global(blockquote h2),
  .article-body :global(blockquote h3),
  .article-body :global(blockquote h4),
  .article-body :global(blockquote p) {
    margin: 0;
  }

  @media screen and (max-width: 40rem) {
    .article-body :global(p) {
      margin-left: 0;
      margin-right: 0;
    }
    .article-body :global(blockquote) {
      padding: 1rem;
    }
    .article-body :global(pre[class*="language-"]) {
      padding: 1rem;
    }
  }
</style>