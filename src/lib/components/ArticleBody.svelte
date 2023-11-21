<div class="article-body">
  <slot />
</div>

<style>
  .article-body :global(h2) {
    position: relative;
    margin-top: 6rem;
    margin-bottom: 2rem;
    padding-bottom: 0.2rem;
    border-left: 0.5rem solid var(--accent-color);
    padding-left: 1rem;
  }

  .article-body :global(h3) {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .article-body :global(h4) {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .article-body :global(pre[class*="language-"]) {
    margin: 1rem 0 1rem 0;
    padding: 1rem;
  }

  .article-body :global(pre[class*="language-"] > code[class*="language-"]) {
    white-space: pre-wrap;
    word-break: break-word;
  }

  .article-body :global(blockquote h1),
  .article-body :global(blockquote h2),
  .article-body :global(blockquote h3),
  .article-body :global(blockquote h4),
  .article-body :global(blockquote p) {
    margin: 0;
  }
</style>