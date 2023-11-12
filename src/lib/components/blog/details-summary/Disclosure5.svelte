<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const swapInnerHtmlWithResponse = (el: HTMLElement) => fetch(el.dataset.href as string)
      .then((response) => response.text())
      .then((text) => {
        const parser = new DOMParser();
        const parsedResponse = parser.parseFromString(text, "text/html");
        console.log(parsedResponse);
        const textContent = parsedResponse?.body?.firstElementChild?.innerHTML;

        if (textContent) {
          el.innerHTML = textContent;
        }
      });

    const handleVisibilityChanged: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          swapInnerHtmlWithResponse(entry.target as HTMLElement);
        }
      });
    }
    
    let element = document.querySelector("[data-intersect]");

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
  <summary>Fetch the external content when it is revealed.</summary>
  <div data-intersect data-href="/demo/details-summary">
    Loading...
  </div>
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