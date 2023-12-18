---
title: 'Utilizing Native HTML Elements'
date: 2023-11-13T12:00:00.000Z
description: There are quite a lot of native HTML elements we can use to enhance our components to give them the most support and features "out of the box." In this article we are going to dive into the native HTML disclosure elements to build an accordion component, learn how to use and extend it, all with vanilla JS and optionally some other popular JS frameworks.
keywords:
  - HTML
  - CSS
  - JS
  - Javascript
  - Svelte
  - HTMX
  - AlpineJS
  - Hotwire Turbo
  - Web
  - Web Development
  - Native HTML Elements
published: true
---

<script>
  import Disclosure1 from '$lib/components/demo/details-summary/Disclosure1.svelte';
  import Disclosure2 from '$lib/components/demo/details-summary/Disclosure2.svelte';
  import Disclosure3 from '$lib/components/demo/details-summary/Disclosure3.svelte';
  import Disclosure4 from '$lib/components/demo/details-summary/Disclosure4.svelte';
  import Disclosure5 from '$lib/components/demo/details-summary/Disclosure5.svelte';
  import Disclosure6 from '$lib/components/demo/details-summary/Disclosure6.svelte';
</script>

When developing for the web you should always look to implement existing, native, semantic elements and features before adding unnecessary third-party code or reinventing the wheel. It's the same reason we don't scroll-jack the window anymore: users want to consume the content in the most familiar and least obtrusive way possible. Since your users could be using any device from the last decade, with any screen size, or maybe even without a screen using a screen-reader, how can we keep up with all the latest features required to support these options? The answer is to use existing native HTML elements as a solid foundation.

The base of any feature you work on should be an existing HTML element it most closely resembles. This makes sure all the work browser developers put into the HTML renderer can be used as a starting, and maybe even finishing point.

> ### With the current state of web development there is simply no reason you should be using a `<div>` for everything. There is often a better alternative which can more accurately describe your intent.

If you are creating a button that doesn't navigate to a new page, use a `<button>` tag, if you are creating a button that does navigate to a new page, you should use an `<a>` tag since it is effectively a link. The same logic applies to navigation parents; a list of anchor tags should be in a `<nav>` container, while a menu that has interactive, non-link, items should be in a `<menu>` container.

There are quite a lot of native HTML elements we can use to enhance our components to give them the most support and features "out of the box." In this article we are going to dive into the native HTML disclosure elements, `<details>` and `<summary>`, to build an accordion component. We will then learn how to use and extend it, all with vanilla JS and optionally some other popular JS frameworks.

## The Details/Summary Disclosure Elements

Let's say we want to have a panel with a title, and that when clicked it will open to reveal new content, or if was already open then collapse to hide the content. This is a common pattern used for across the web, commonly found in FAQ sections. There are hundreds of different JS packages that have been created to handle this seemingly simple functionality. But the core functionality of this is already possible to do without any additional plugins. And in fact, it is natively supported across all browsers and fully accessible.

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

> <Disclosure1 />

## Making it pretty

Neat! Although, it does look pretty basic. But the beautiful thing is that this can be styled easily with regular ol' CSS. Let's add a few properties to make it pop. Let's also wrap the contents in an `<article>` to make it easier to apply some styles, since that is the closest semantic tag for the type of content we want to display.

> We can use the `[open]` selector to style our content when `<details>` is open. Notice also that the triangle arrow is handled by the `list-style` property, so it's easy to change or remove.

#### HTML

```html
<details>
	<summary>A stylized summary used as a label for the content.</summary>
	<article>The content, tucked away until the user performs an action to display it.</article>
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

#### Example

> <Disclosure2 />

## Open sesame

Wow! Very cool. But the functionality seems pretty basic. What if I want to have the component already open when the page loads? Well... thankfully, that is actually really simple. If you open your inspector you'll notice that an attribute is already added or removed from the details element when we open or close it. So it would make sense that we just need to pass in an `open` attribute to the `<details>` element, right?

Absolutely!

> Since the `open` attribute is boolean, it just needs to be present to control opening the disclosure. **We do not want `open="true"` or `open="false"`**.

#### HTML

```html
<details open>
	<summary>An open disclosure.</summary>
	<article>The content, already revealed because details has the open attribute.</article>
</details>
```

#### Example

> <Disclosure3 />

## External controls

Now that we know about the `open` attribute, we can assume it will keep track of the open state regardless of how it was added to the DOM. Therefore, if we want to have a button somewhere else that toggles the disclosure open and closed, but also keep the existing open/close functionality when pressing the summary present, it's easy.

#### HTML

```html
<button onclick="toggleDetails()">Toggle the disclosure open/closed</button>

<details id="toggle-details">
	<summary>A disclosure which can be controlled by a separate button</summary>
	<article>
		The content, which may or may not be revealed because it is determined by the state of the open
		attribute.
	</article>
</details>

<script>
	function toggleDetails() {
		details = document.getElementById('toggle-details');
		details.toggleAttribute('open');
	}
</script>
```

#### Example

> <Disclosure4 />

## What about JS frameworks?

If you use a JS framework like [Svelte](https://svelte.dev/), it's even easier. The same pattern applies to frameworks like [Vue](https://vuejs.org/) or [React](https://react.dev/), you just need to bind the open state as a prop on the `details` element.

#### Svelte

```svelte
<script>
	// Create a reactive boolean variable
	let open = false;
</script>

<!-- When clicking the button, set the variable to its opposite value -->
<button
	on:click={() => {
		open = !open;
	}}>
	Toggle the disclosure open/closed
</button>

<!-- Bind the variable so the `open` prop only appears when true -->
<details bind:open>
	<summary>A summary used as a label for the content.</summary>
	<article>
		The content, which may or may not be revealed because it is determined by the state of the open
		attribute.
	</article>
</details>
```

## Taking it to the next level

This is starting to look pretty good, but we've got an issue. The [bosmang](https://expanse.fandom.com/wiki/Bosmang) says our servers are overloading. There's too many expensive database queries to fetch the content in each of our disclosures. Uh oh!

How can we fix it? Well... What if we didn't eagerly load the content inside the disclosures and instead waited until they open? That way we can save the user some bandwidth, reduce load times, and can put out the fire in the server room.

This is where our disclosure component becomes a beautiful thing. Since it is already showing and hiding our content, we just need to use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to watch for when the content is visible, and then fetch the content from our endpoint and place it inside!

#### HTML

```html
<details>
	<summary>Fetch the external HTML content when it is revealed.</summary>
	<article data-intersect data-href="/content-to-fetch">
		<!-- This content will be replaced, so we can leave a loading message -->
		Loading...
	</article>
</details>

<script>
	const swapInnerHtmlWithResponse = (el) =>
		fetch(el.dataset.href)
			.then((response) => response.text())
			.then((text) => {
				el.innerHTML = text;
			});

	const handleVisibilityChanged = (entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				swapInnerHtmlWithResponse(entry.target);
			}
		});
	};

	let options = {
		rootMargin: '0px',
		threshold: 1.0
	};

	const visibilityObserver = new IntersectionObserver(handleVisibilityChanged, options);

	const element = document.querySelector('[data-intersect]');

	visibilityObserver.observe(element);
</script>
```

#### Example

> <Disclosure5 />

Here, we use a couple attributes that our JS can hook into to make things work. The first is `data-intersect` which, when present, will tell our observer that this is an element it needs to watch. The second is `data-href` which we use to tell the observer what URL to fetch. The response is a simple HTML string, so we can swap it in using `el.innerHTML`.

This example obviously requires you to trust the server you are fetching data from, and know the response. It doesn't do any error handling or safe typing because they aren't necessary for the purposes of this article.

Admittedly, this approach is a lot easier using a library like [HTMX](https://htmx.org/), [Hotwire: Turbo](https://turbo.hotwired.dev/), or even [AlpineJS](https://alpinejs.dev/). Even though it may be easier to understand for those unfamiliar with the intersection observer API, these libraries mostly tuck away the code we just wrote. Functionally, it is the same thing; when the observed element is revealed, it fires a request to an endpoint, and the body of that response replaces the target elements innerHTML. These libraries just have more comprehensive API's, error checking, and a few more bells and whistles. You can do it yourself!

#### HTMX

```html
<details>
	<summary>Fetch the external HTML content when it is revealed</summary>
	<article hx-get="/content-to-fetch" hx-trigger="intersect">Loading...</article>
</details>
```

#### Turbo

```html
<details>
	<summary>Fetch the external HTML content when it is revealed</summary>
	<turbo-frame id="content" src="/content-to-fetch" loading="lazy"> Loading... </turbo-frame>
</details>
```

#### AlpineJS (with Intersect Plugin)

```html
<details>
	<summary>Fetch the external HTML content when it is revealed</summary>
	<article
		x-data="{
      swapInnerHtmlWithResponse() {
        fetch('/content-to-fetch')
          .then((response) => response.text())
          .then((text) => {
            this.innerHTML = text;
          });
      }
    }"
		x-intersect:enter="swapInnerHtmlWithResponse()"></article>
</details>
```

## Only a lunatic would work with HTML fragment responses. Use JSON!

With the current state of web development you never know. It seems we've come full circle. But just to be explicit, it's straightforward to work with a JSON API as well. Simply modify the `swapInnerHtmlWithResponse` function to handle the JSON response and put the contents inside.

#### Javascript

```js
// Example response object:
// {
//   id: 1,
//   summary: 'Fetch the external JSON content when it is revealed.',
//   content: 'The returned JSON content! Check your network monitor.'
// }

const swapInnerHtmlWithResponse = (el) =>
	fetch(el.dataset.href)
		.then((response) => response.json())
		.then((data) => {
			el.innerHTML = data.content;
		});
```

#### Example

> <Disclosure6 />

## Accessibility

If you are reading this on a computer, press the `TAB` button. Notice how all the disclosures already have full accessible controls, you can tab through them as you would links or buttons, and press `ENTER` or `SPACE` to open and close them. Even the separate button to control the disclosure works and you didn't have to do a thing to enable that. It's like magic. A screen reader will also read an open disclosure like so:

**"The summary text. Expanded, summary, group."**

And a closed one:

**"The summary text. Collapsed, summary, group."**

For the people that aren't very familiar with using a voiceover tool this may sound weird, but to those that are this is a pretty optimal way to announce the content. And to reiterate, this functionality came for free, and will be supported for years and years over countless devices, many of which haven't even been dreamt of. If we end up having AI read websites to us, it's going to use the same HTML API that we are using now, and there will be no extra work on our end to support it.

## That's a wrap

So there you have it! I hope you've learned a thing or two about using native HTML elements as the basis for all your components, and how the details/summary elements work and how to supercharge them with asynchronous content.

It amazes me that so many developers don't take advantage of these free features and try to reinvent them, and ultimately either fail or end up having to fix bugs and do support/maintenance on their components for a long time.
