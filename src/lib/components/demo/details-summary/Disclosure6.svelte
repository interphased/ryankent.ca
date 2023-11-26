<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const swapInnerHtmlWithResponse = (el: HTMLElement) => fetch(el.dataset.href as string)
      .then((response) => response.json())
      .then((data) => {
        el.innerHTML = data.content;
      });

    const handleVisibilityChanged: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          swapInnerHtmlWithResponse(entry.target as HTMLElement);
        }
      });
    }

    let element = document.querySelector("[data-intersect-json]");

    if (element) {
      let options = {
        rootMargin: "0px",
        threshold: 1.0,
      };

      let observer = new IntersectionObserver(handleVisibilityChanged, options);

      observer.observe(element);
    }
  });
</script>

<details>
  <summary>Fetch the external JSON content when it is revealed.</summary>
  <article data-intersect-json data-href="/api/demo/details-summary.json">
    Loading...
  </article>
</details>

<style>
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