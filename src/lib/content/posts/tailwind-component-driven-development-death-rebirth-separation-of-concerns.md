---
title: 'Tailwind, component-driven development, and the death and rebirth of the separation of concerns'
date: 2023-12-17T12:00:00.000Z
description: 'The separation of concerns is a longstanding, tried-and-true design principle in software development. When it comes to the web, the classic separation of concerns is HTML, CSS, and JS. But this has become a tiring, cumbersome, and fragile system to work with. I argue that the traditional separation of concerns on the web has died and been reborn with a new vision for what a "concern" even is.'
keywords:
  - HTML
  - CSS
  - JS
  - Javascript
  - Tailwind
  - Web
  - Web Development
published: true
---

The separation of concerns is a longstanding, tried-and-true design principle in software development. Wikipedia defines it as _"separating a computer program into distinct sections. Each section addresses a separate concern, a set of information that affects the code of a computer program."_ It makes a lot of sense, we should separate each of the concerns so they can be developed in the same "scope" and not bleed over functionality from one to the other.

When it comes to the web, the classic separation of concerns is an easy one to make. We have 3 distinct languages: HTML, CSS, and JS. Each of them covers a role in the development of the web; be it content, presentation, or behaviour. From early on, and for a long time, this has been the way we have developed websites and applications.

But this has become a tiring, cumbersome, and fragile system to work with. I argue that the traditional separation of concerns on the web has died and been reborn with a new vision for what a "concern" even is.

## First, a brief history lesson

I've worked on so many projects over the years where there is a separate **directory** for all the HTML or layout templates, a **directory** for all the CSS, and a **directory** for all the JS. For a long while this made sense, but as applications have grown in complexity, so has the cognitive load of dealing with all these separate files.

For each feature you write you need to do work in 3 or more different places, each requiring a lookup to be in the right place. Any time you need to update code you have to find the correct element, find the selector(s) for the element, and find any hooks, event listeners, or behaviour somewhere in the scripts. It's ridiculous. And "good" code is set up so the same "tree" can followed for all 3 of these concerns, which means there's some kind of organization or method to follow to reach essentially the same place but in 3 different areas.

```
/assets
  /javascripts
    /entrypoints
    /modules
      the-javascript-im-looking-for.js
      ...
  /stylesheets
    /entrypoints
    /sources
      the-stylesheet-im-looking-for.css
      ...
/controllers
/models
/views
  /my-view
    the-view-im-looking-for.html.erb
    _oh-wait-its-actually-in-a-partial.html.erb
    ...
  ...
```

If you're in an unfamiliar codebase or on a team it can also be very dangerous to update code if you're not sure where else it affects. There are a few things that can happen from this. First, is that it can lead to a lot of time wasted looking things up and testing to make sure nothing else breaks. Alternatively, if the developer doesn't want to look it up, they may inline a bunch of code which shouldn't be inline because it breaks the project's existing "separation of concerns." It also leaves a lot of fragmented, dead-end code, as it's easier and safer to leave something in if you're not sure what it affects than remove it to tidy things up.

So, the existing definition of the separation of concerns for web development has some flaws. But we've seen a bit of a revolution in this space over the last few years with component-driven development, which I'll get to in a moment. But first... Why would we want to use something like Tailwind anyway?

## Introducing Tailwind

Here's a quick code example of an alert component using Tailwind classes.

Instead of writing code like this:

```html
<div class="alert" style="margin-top: 8px; margin-bottom: 16px;">Alert!</div>
```

We can do it... sort of the same, but more maintainable.

```html
<div class="mt-2 mb-4 p-2 bg-red-50 text-red-800 rounded">Alert!</div>
```

It doesn't look so different. But there's actually a lot going on. In this case, all the colours, the margin and padding sizes, and the border-radius, all inherit their properties from a theme. The theme is completely configurable, and if changes are made there, it updates the style everywhere.

Let's say for example the branding department wants the red to be "more red" and the rounded corners are too round and should be more pointy. These are sweeping changes required over the whole application.

Well, that's no problem. We can simply adjust them in the theme config and it's only a couple lines of code.

```js
module.exports = {
	theme: {
		colors: {
			...colors,
			red: '#ff0000'
		},
		borderRadius: {
			DEFAULT: '2px'
		}
	}
};
```

Because of Tailwind's utility-class-driven design, we don't need to find and replace values all over the codebase. Worst case scenario, the colours and values are hard-coded inline styles as well as hard-coded in stylesheets, and it's a nightmare to update.

Best case scenario, if your CSS/SASS files are well-organized and use variables, the changes wouldn't be too bad to make, but I find that's often not the case unless you have a well-oiled development team.

## Component-driven development and the rise of SFCs

Typically when working on new features we have to consider the whole picture, the entire user story, and often the full-stack. There may be requirements for how something looks, works, and behaves. There may even be back-end or database requirements. For now, though, let's stick with the front-end.

To work on something like this effectively, it would make a lot of sense to work on each piece of them together. They can't really exist on their own, so why separate them? This is the beauty of _Single File Components_ (SFCs).

We don't need to context shift when developing features anymore, we can just write them all in one place.

> ## The traditional separation of concerns for the web doesn't make a lot of sense anymore. It's cumbersome and fragile. Concerns shouldn't be grouped by filetype, but by feature.

Components, with Tailwind, can have their content, presentation, and behaviours, all unified under one "concern." Custom functionality can be added, and presentation can be modified globally in the theme config, or locally in the component.

```svelte
<script lang="ts">
	export let type: 'success' | 'error';
</script>

<div
	class="mt-2 mb-4 p-2 bg-red-50 text-red-800 rounded custom-class"
	class:error={type === 'error'}
	class:success={type === 'success'}>
	<slot />
</div>

<style>
	/* if needed, we can do custom CSS too */
	.custom-class {
	}
</style>
```

Now when working on something we don't need to context shift into 3 different files. We don't need to worry if our styles bleed into other unwanted places, or if our behaviours do the same too because they don't exist outside of the SFC.

**We also don't need a bunch of query selectors, custom classes or data-attributes, just to locate an element in the DOM 3 different ways to work with it.**

Better yet, when coming back to this in a year, we can work safer knowing we won't break anything unintended. Everything about this feature is packaged together nicely.

There's also something to be said about how this makes copying code from one project to another straightforward. We don't need to maintain big repositories of components that have seemingly unending requirements. We can just copy them over and make some minimal changes without issue. With Tailwind, we know it will work, and it will look more or less the same as the source, albeit some modifications would be applied automatically if the theme configs are different.

## Working with an existing back-end

If you have a back-end that uses GraphQL, then that works great. It can often cover most of the requirements a feature needs without having to dip your toes in the server. Your component can directly make a query for the data you need all by itself, and therefore all the logic is kept in one maintainable place. GraphQL queries can often be used in an SFC without issue, like in this example of a Vue component grabbing testimonials from a Contentful headless CMS so they can be displayed in a grid.

```svelte
<template>
	<div class="grid grid-cols-3">
		<div v-for="(edge, index) in $page.testimonials.edges" :key="edge.node.id" class="p-2">
			<p class="text-lg mb-2">{{ edge.node.testimonial }}</p>
			<p class="text-sm">{{ edge.node.author }}<p>
		</div>
	</div>
</template>

<script>
	// do something
</script>

<page-query>
	query PageQuery {
		testimonials: allContentfulTestimonial(sortBy: "startsAt", order: DESC) {
			edges {
				node {
					id
					testimonial
					author
					position
				}
			}
		}
	}
</page-query>
```

Of course, the server and database need to be updated sometimes too, but at least using graph queries we don't need to create or modify REST endpoints to support trivial modifications. If we were working on something that, for example, now needs to support pagination... It's straightforward to update the query to fetch the data your component needs to build the feature.

## What about monolith applications

If we're talking about something like a [Ruby on Rails](https://rubyonrails.org/) or [Laravel](https://laravel.com/) application, this separation can still be applicable. It's not limited to only Javascript frameworks. For example, Rails has [View Components](https://viewcomponent.org/) (and [StimulusJS](https://stimulus.hotwired.dev/)). The components can be organized similarly so the content, presentation, and behaviour can be together. It has the benefit of already being server-rendered, too.

```
/components
  /navbar
    logo.svg
    navbar.controller.ts
    navbar.html.erb
    navbar.modules.css (optional, often unnecessary with Tailwind)
    navbar.rb
```

## How does this separation of concerns scale into the future?

Well, since we have been talking about keeping all the concerns of a feature together, then it would make sense to have server-side code included there too, right?

Absolutely. There's been a lot of advancements with **server-side components** in meta-frameworks that can accomplish this, such as [server-only modules (SvelteKit)](https://kit.svelte.dev/docs/server-only-modules) and [server components (Next.js)](https://nextjs.org/docs/app/building-your-application/rendering/server-components).

This further extends the idea that the component/feature is the primary concern, and should therefore keep all related content, presentation, behaviour, and logic alongside it; whether that logic is exposed to the client or only the server.

A simple example would be using private 3rd-party API keys to consume that API on the server-side of a component, without exposing the keys or knowledge of the 3rd party to the client. Perhaps it's the logic for a mailer, and the mail content too, maintained in a nearby location to the rest of the authentication pages and components. Below isn't an example from any of those meta-frameworks, but a modified example based on [Bulletproof React](https://github.com/alan2207/bulletproof-react) where they also group their concerns by feature.

```
/features
  /auth
    /api
      currentUser.ts
      login.ts
      register.ts
    /components
      /LoginForm.jsx
      /RegisterForm.jsx
    /mail
      /RegisterMail.jsx
    /routes
      /Login.jsx
      /Register.jsx
```

### Not just Javascript

Additionally, outside of the JS world, we see this pattern emerging in frameworks such as [Leptos](https://www.leptos.dev/) for Rust. On the Leptos homepage, we can see a code example that integrates back-end code with the user interface in something they've dubbed "full-stack components." I've copied it below. Even if you are not familiar with Rust, you can see that there is a method that includes an SQL query in the same file as the component code.

```rust
#[server(SaveFavorites, "/api")]
pub async fn save_favorites(
    favorite_cookie_type: String,
    favorite_color: String,
) -> Result<(), ServerFnError> {
    let pool = get_pool()?;

    let query = "
        INSERT INTO COOKIES
        (favorite_cookie_type, favorite_color)
        VALUES ($1, $2)
    ";

    sqlx::query(query)
        .bind(favorite_cookie_type)
        .bind(favorite_color)
        .execute(&pool)
        .await
        .map_err(|e|
            ServerFnError::ServerError(e.to_string())?;

    Ok(format!("Here, have some {favorite_color} {favorite_cookie_type} cookies!"))
}

#[component]
pub fn FavoritesForm() -> impl IntoView {
    let favorites = create_server_action::<SaveFavorites>();
    let value = favorites.value();
    view! {
        <ActionForm action=favorites>
            <label>
                "Favorite type of cookie"
                <input
                    type="text"
                    name="favorite_cookie_type"
                />
            </label>
            <label>
                "Favorite color"
                <input
                    type="text"
                    name="favorite_color"
                />
            </label>
            <input type="submit"/>
        </ActionForm>
        <Show when=favorites.pending()>
            <div>"Loading..."</div>
        </Show>
        <Show when=move || value.with(Option::is_some)>
            <div>{value}</div>
        </Show>
    }
}
```

Other developers have also been switching back to server-based languages (Go, Rust, Ruby, PHP, etc.) and having responses contain pure HTML or HTML fragments instead of JSON, and a driving factor for that is keeping all the logic for a particular concern together. Then, the "SPA-feel" can be added back in with a sprinkle of [HTMX](https://htmx.org/) or [Hotwire: Turbo](https://turbo.hotwired.dev/).

## So.. What now?

Well, it's up to you the developer. It's an interesting time in web development with such a fundamental shift in thinking. The best thing to do is to just go out and make something. Try things out and see what feels right to you. Then abandon it.

I'd be willing to bet when you revisit it in a few months the projects you'll feel the most comfortable jumping back into are the ones that follow a separation of concerns by feature and not filetype.
