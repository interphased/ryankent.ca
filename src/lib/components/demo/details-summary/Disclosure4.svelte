<script>
  let open = false;
</script>

<button on:click={() => { open = !open }}>
  Toggle the disclosure open/closed
</button>

<details bind:open={open}>
  <summary>A disclosure which can be controled by a separate button</summary>
  <article>The content, which may or may not be revealed because it is determined by the state of the open attribute.</article>
</details>

<style>
  button {
    margin-bottom: 1rem;
    border: 1px solid #fff;
  }

  details {
    background: lavender;
    border-radius: 0.5rem;
    color: indigo;
  }

  details > * {
    padding: 1rem;
  }

  details > article {
    background: lavender;
    border-radius: 0 0 0.5rem 0.5rem;
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