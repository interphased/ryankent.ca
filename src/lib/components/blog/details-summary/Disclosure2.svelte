<details>
  <summary>A stylized summary used as a label for the content.</summary>
  <div>The content, tucked away until the user performs an action to display it.</div>
</details>

<style>
  details {
    background: lavender;
    border-radius: 0.5rem;
    color: indigo;
    margin-bottom: 2rem;
  }

  details > * {
    padding: 1rem;
  }

  summary {
    background: rebeccapurple;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
    transition-duration: 100ms;
  }

  summary:hover {
    opacity: 0.9;
  }

  details[open] > summary {
    border-radius: 0.5rem 0.5rem 0 0;
    opacity: 0.9;
  }
</style>