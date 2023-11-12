---
title: "Utilizing Native HTML"
date: 2023-11-06
description: This article gives examples on how to use the native HTML disclosure elements to build a fully accessible "accordion" component, supported across all browsers, with or without vanilla JS or JS libraries.
keywords:
  - HTML
  - CSS
  - Web
  - Native HTML elements
published: true
---

<script>
  import Disclosure1 from '$lib/components/blog/details-summary/Disclosure1.svelte';
  import Disclosure2 from '$lib/components/blog/details-summary/Disclosure2.svelte';
  import Disclosure3 from '$lib/components/blog/details-summary/Disclosure3.svelte';
  import Disclosure4 from '$lib/components/blog/details-summary/Disclosure4.svelte';
  import Disclosure5 from '$lib/components/blog/details-summary/Disclosure5.svelte';
</script>

When developing for the web you should always look to implement existing, native, semantic elements and features before adding unnecessary third-party code or reinventing the wheel. It's the same reason we don't scrolljack the window anymore: users want to consume the content in the most familiar and least obtrusive way possible. Being that your users could be using any device, screen size, or even screenless using a screen-reader, how can we keep up with all the latest features required to support these options? The answer is to use native HTML elements.

This article gives examples on how to use the native disclosure elements to build an accordion, and how to extend it, all without reaching for third-party libraries, fully accessibile, and supported accross all browsers.

## The Details/Summary Disclosure Elements

Let's say we want to have a panel with a title, and that when clicked it will open to reveal new content, or if was already open then collapse to hide the content. This is a common pattern used for across the web, commonly found in FAQ sections. There are hundreds of different JS packages that have been created to handle this seemingly simple functionality. But the core functionality of this is already possible to do without any additional plugins. And in fact, it is natively supported accross all browsers and fully accessible.

Feast your eyes on the `<details>` and `<summary>` elements.

The details element creates a disclosure widget with a triangle arrow on the left side to indicate the status of if the widget is open or closed. Upon pressing the summary, the widget will open to reveal the contents within. 

#### HTML

```html
<details>
  <summary>A summary used as a label for the content.</summary>
  The content, tucked away until the user performs an action to display it.
</details>
```

#### Example

<Disclosure1 />

## Making it pretty

Neat! Although... it does look pretty basic. But the beautiful thing is that this can be styled easily with regular ol' CSS. Let's add a few properties to make it pop. Let's also wrap the contents in a `div` to make it easier to apply some styles.

> Notice how we use the `[open]` selector to style our content when `details` is open.

#### HTML

```html
<details>
  <summary>A stylized summary used as a label for the content.</summary>
  <div>
    The content, tucked away until the user performs an action to display it.
  </div>
</details>

<style>
  details {
    background: lavender;
    border-radius: 0.5rem;
    color: indigo;
    margin-bottom: 1rem;
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
```

> The triangle arrow is handled by the `list-style` property, so it's easy to change or remove.

#### Example

<Disclosure2 />

## Open sesame

Wow! Very cool. But the functionality seems pretty basic. What if I want to have the component already open when the page loads? Well... thankfully, that's actaully really simple. If you open your inspector you'll notice that an attribute is already added or removed from the details element when we open or close it. So it would make sense that we just need to pass in an `open` attribute to the `<details>` element, right?

#### HTML

```html
<details open>
  <summary>An open disclosure.</summary>
  <div>
    The content, already revealed because the parent details element has an open attribute.
  </div>
</details>
```

> The `open` attribute is boolean, so it just needs to be present or not to control the open state of the disclosure.

#### Example

<Disclosure3 />

Success! It looks like it worked perfectly. But if it's just controlled by a simple attribute does that mean...?

## Handle opening and closing

Now that we know about the `open` attribute, we know it will keep track of the open state regardless of how it was added to the DOM. Therefore, if we wanted to have a button somewhere else that toggled the details open and closed, but also left the existing open/close functionality when pressing the summary the same, it's easy.

#### HTML

```html
<button onclick="toggleDetails()">
  Toggle the disclosure open/closed
</button>

<details id="toggleable-details">
  <summary>A disclosure which can be controled by a separate button</summary>
  <div>
    The content, which may or may not be revealed because it is determined by the state of the open attribute.
  </div>
</details>

<script>
  function toggleDetails() {
    details = document.getElementById("toggleable-details");
    details.toggleAttribute("open");
  }
</script>
```

#### Example

<Disclosure4 />

If you use a JS framework like [Svelte](https://svelte.dev/), it's even easier. The same pattern applies to frameworks like [Vue](https://vuejs.org/) or [React](https://react.dev/), you just need to bind the open state as a prop on the `details` element.

#### Svelte

```svelte
<script>
  let open = false;
</script>

<button on:click={() => { open = !open }}>
  Toggle the disclosure open/closed
</button>

<details bind:open={open}>
  <summary>A summary used as a label for the content.</summary>
  <div>The content, which may or may not be revealed because it is determined by the state of the open attribute.</div>
</details>
```

## Load content asyncronously

Let's take this to the next level. What if we have a lot of these disclosures and we don't want to load the content within them until they are opened? That way we can save the user some bandwidth, reduce load times, and can lessen the server load if (for example) each of the disclosures contents require a heavy databse query.

This is where our disclosure component becomes a beautiful thing. Since it is showing and hiding our content already, we just need to use the **Intersection Observer API** to watch for when the content is visible, and then fetch the content from our endpoint and place it inside!

#### HTML

```html
<details>
  <summary>Fetch the external content when it is revealed.</summary>
  <div data-intersect data-href="/content-to-fetch">
    <!-- This content will be replaced, so we can leave a loading message -->
    Loading...
  </div>
</details>

<script>
  const swapInnerHtmlWithResponse = (el) => fetch(el.dataset.href)
    .then((response) => response.text())
    .then((text) => {
      el.innerHTML = text;
    });

  const handleVisibilityChanged = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        swapInnerHtmlWithResponse(entry.target);
      }
    });
  }

  let options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  const visibilityObserver = new IntersectionObserver(handleVisibilityChanged, options);

  const element = document.querySelector("[data-intersect]");

  visibilityObserver.observe(element);
</script>
```

#### Example

<Disclosure5 />

Here, we use a couple attributes that our JS can hook into to make things work. The first is `data-intersect` which, when present, will tell our observer that this is an element it needs to watch. The second is `data-href` which we use to tell the observer what URL to fetch.

This example obviously requires you to trust the server you are fetching data from, and know the response. It doesn't do any error handling or safe typing because they aren't necessary for the purposes of this article.

Admittedly, this approach is a lot easier using a library like [HTMX](https://htmx.org/), [Hotwire: Turbo](https://turbo.hotwired.dev/), or even [AlpineJS](https://alpinejs.dev/). Even though it may be easier to understand for those unfamiliar with the intersection observer API, these libraries mostly tuck away the code we just wrote. Functionally, it is the same thing; when the observed element is revealed, it fires a request to an endpoint, and the body of that response replaces the target elements innerHTML. These libraries just have more comprehensive API's, error checking, and a few more bells and whistles. You can do it yourself!

#### HTMX

```html
<details>
  <summary>Fetch the external content when it is revealed</summary>
  <div hx-get="/content-to-fetch" hx-trigger="intersect">
    Loading...
  </div>
</details>
```

#### Turbo

```html
<details>
  <summary>Fetch the external content when it is revealed</summary>
  <turbo-frame id="content" src="/content-to-fetch" loading="lazy">
    Loading...
  </turbo-frame>
</details>
```

#### AlpineJS (with Intersect Plugin)

```html
<details>
  <summary>Fetch the external content when it is revealed</summary>
  <div
    x-data="{
      swapInnerHtmlWithResponse() {
        fetch('/content-to-fetch')
          .then((response) => response.text())
          .then((text) => {
            this.innerHTML = text;
          });
      }
    }"
    x-intersect:enter="swapInnerHtmlWithResponse()">
  </div>
</details>
```

## Conclusion

And there you have it! That's everything you need to know to work with the `<details>` and `<summary>` elements.