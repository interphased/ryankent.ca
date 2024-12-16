---
title: Back to basics with Ruby on Rails as a JavaScript developer
date: 2024-12-15
description: Are you tired of React? Has it become too cumbersome and complicated to work with? Do you find yourself often rewriting code that was a best practice a few months ago but is now no longer recommended? Do you have framework fatigue? Learn the differences developing web applications between React and Rails. Change your mental model and go back to the basics.
keywords:
  - Programming
  - Code
  - Web
  - JavaScript
  - Ruby
  - Ruby on Rails
  - Hotwire
published: true
---

I have been working on Rails full-time since joining [Vidcruiter](https://vidcruiter.com/) a few years ago. When I joined, it had been quite some time since I had considered myself a Rails developer... probably nearly a decade! After my stint with Rails, a lot of my projects were developed with Laravel (way back in v4.2!) and Vue. I worked for my own company [Interphased](https://interphased.com) and was mostly building web apps and tools for small businesses, or one-off web or digital products for live or in-person events. There was a lot of scaffolding new projects from nothing, so these tools made my life a lot easier to quickly spin something up. Time is money in this case, and I was really happy with how much work I could get done so quickly.

I then progressed to more of a front-end specialization with frameworks like React (including React Native) and Vue when I joined [Caddie Service](https://caddieservice.co/). The work I did there was on more long-lasting projects, and I didn't get to make technical decisions on frameworks since they were already live.

Recently, I've been spending time with Svelte and Rust on my personal projects. I'm always trying to learn new things. I have dabbled with Rails here and there throughout the years but haven't needed to use it heavily for quite some time -- and even then, I was more familiar with the Laravel way of doing things since I spent way more time with it than I ever did with Rails (thankfully, they have many similarities).

I remember years ago when migrating from older web application ideologies to learn reactive frameworks and components-driven design, there was a very defined mental model shift. Coming back to Rails, I felt that model had to shift yet again. It was almost as though I was transported back in time. There have certainly been some difficulties, yet for the most part, it's been a real breath of fresh air to dive into Rails again.

### Back to basics

Are you tired of React? It's not that it's *hard* but it can be cumbersome to do a lot of things that you actually get for free without JS frameworks, such as routing, forms, miscellaneous accessibility issues, and more.

For those of you who have only ever worked on the web using JS frameworks, you may have no idea just how many *difficult* problems either the framework or you the developer need to handle that has already been solved before.

For example, React now has Server Side Rendering (SSR)... but there are a lot of stipulations around it that I'm not going to get into here. Frankly, I don't have enough experience with it yet to pass judgment, I just know it has caused a big ripple in the community... which honestly is a little crazy. Using Rails you get server-side rendering by default, without jumping through any hoops.

Many modern JavaScript frameworks have stopped making our lives easier and I find are often just pushing toward solving whatever the next big challenge is. There is never a limit, nothing is ever out of scope, and there is no end in sight until the framework can do literally everything. They add complexity for seemingly no reason for many beginner or intermediate users, the reasons are only apparent when you become more or less an expert. This is not unique to React... Vue did this too with its transition from the much simpler options API to the context API. As for React, we went from class components until that was deemed wrong, then functional components, to hooks, to realizing that some hooks are half-baked and `useEffect` is a big foot-gun. What is going to change next? Every few months there's a new solution to a problem that shouldn't have existed to begin with.

### JS framework fatigue

Do you have JavaScript framework fatigue? Is it annoying to keep up with the latest ecosystem trends? Does Dependabot raise too many new vulnerability issues every week? The Rails doctrine promotes "convention over configuration." Many decisions have already been made and there is a common, standardized way of doing many things. No need to reinvent the wheel, or learn all new tech, just to solve your non-unique issue.

Frameworks in general make a lot of assumptions about how things should be done. My problem with React over the years has been that the way things should be done is constantly changing. Methods of doing things that were acceptable even a few months ago become stale very quickly. And in the JS ecosystem, there's always some new hotness that can disrupt the entire scene. I feel like it's always at odds with just trying to get things done. This is fine for shorter-lived projects but for longstanding ones it introduces a lot of technical debt and overhead. It's great to take a step back and see how things could be simplified.

### Web standards have improved

Vanilla JS and HTML have improved substantially during all the time you've been using frameworks. There are so many new things we can do compared to a few years ago. We have:
- [Custom web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
- [Input validation enhancements](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation)
- [Better DOM manipulation methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
- [View transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)
- [Intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

The [list goes on...](https://developer.mozilla.org/en-US/docs/Web/API)

### HTML First and Low JS

I'm a firm believer in the [HTML first](https://html-first.com/) methodology.

> HTML First is a style of writing web software that favours using the native capabilities and languages of the browser and reducing layers of abstraction (languages and toolchains) on top of them. 

We don’t need JavaScript for everything, and writing less code often leads to faster, more reliable, and easier-to-maintain code. Many challenges that JavaScript frameworks try to solve — like routing, forms, or state management — are already handled natively by the browser. By leaning into HTML and CSS, you can avoid unnecessary complexity while improving performance and accessibility.

Instead of defaulting to heavy frameworks, tools like Stimulus or small vanilla JS snippets can handle most needs while keeping your app simple, fast, and maintainable. Fewer layers of abstraction mean more focus on what matters: building a great user experience.

## Ok, I'm sold. Tell me more about Rails

### The Rails Doctrine

The goals of Rails are outlined very clearly on their [website](https://rubyonrails.org/doctrine). It is opinionated, but it's those opinions that make it a great technology to work with to just **get things done**.

- Optimize for programmer happiness
- Convention over Configuration
- The menu is omakase
- No one paradigm
- Exalt beautiful code
- Provide sharp knives
- Value integrated systems
- Progress over stability
- Push up a big tent

### Rails is a complete ecosystem

There aren't a million different packages to choose from. There is an ecosystem that already exists, is maintained, has predefined best practices, and has a documented and opinionated way to do things that work at scale for huge companies like GitHub.

You can also still use familiar JS libraries with Rails. Although DHH spouts that "no build" is the future I think that's a little bit ridiculous. You can use `esbuild` and Typescript just fine, it's not like you are locked in.

### Ruby is pretty easy

Ruby is an object-oriented language with an emphasis on developer happiness and clean, readable code.

It's not too dissimilar from JavaScript and has even picked up some niceties from the language in the most recent versions (optional chaining / safe navigation, for example). 

The weirdest part is just getting used to `do` and `end` instead of `{}`. Here's a generic code sample for comparison (ignore the fact that this doesn't use the built-in `join` methods for either language).

```ruby
def concatenate_and_lowercase(strings)
  result = ""
  strings.each do |str|
    result += str + " "
  end
  result.strip.downcase
end

concatenate_and_lowercase(["Hello", "WORLD", "Ruby"]) # "hello world ruby"
```

```javascript
function concatenateAndLowercase(strings) {
  let result = "";
  for (const str of strings) {
    result += str + " ";
  }
  return result.trim().toLowerCase();
}

concatenateAndLowercase(["Hello", "WORLD", "JavaScript"]); // "hello world javascript"
```

### Hotwire Turbo / Stimulus

[Turbo](https://turbo.hotwired.dev/) is neat. It makes it so you just pop in a new UI from the server in a SPA-like way. Since the server is our source of truth in Rails it's really convenient. It also allows for the use of WebSockets to update UI automatically when something happens on the server. It can save thousands of lines of code and a lot of complexity.

[Stimulus](https://stimulus.hotwired.dev/) is... fine. It is there to help bridge a gap for things that need custom functionality that maybe couldn't be handled easily by Turbo. It's not great, but it can get the job done. It is nice to interact with the DOM directly and use vanilla JS again.

Stimulus certainly works better for smaller self-contained components. For larger purposes, it can be a bit of a pain to work with sometimes. To communicate cross-components you need to use `outlets` and they are frustrating when they don't work. The naming conventions are sometimes weird but are required to make the "magic" work. You do trade off some of the niceties of modern JS frameworks here, but at the same time, many of them just require a shift in your mental model to use the DOM to, for example, store state in a `data` attribute on an element.

Overall, it's still a pleasant experience once you become a little familiar with it. Many times the problem I have trying to work with Stimulus is that I make something more complicated than it needs to be, and it's best to take a step back and think about it again the "Rails" way.

## What are the differences between Rails and React?

### Organization

I always like to take a look at the directory and file structure to get a high-level view of all the things going on in a framework. 
For React, we're going to look at NextJS because it's the most popular React framework right now.

In Rails, front-end and back-end code live together in a glorious mono-repo. Rails organizes things into Model-View-Controller (MVC) and has a predefined home for everything. It is customizable, but these are the defaults. NextJS on the other hand lets you make your own decisions on where things should be, although there are some recommendations, jumping between different projects could be wildly different.

#### NextJS
```
next-app/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
└── pages/
```

#### Rails
```
rails-app/
├── app/
│   ├── assets/
│   ├── components/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   └── helpers/
├── bin/
├── config/
│   ├── environments/
│   ├── initializers/
│   ├── locales/
│   └── routes.rb
├── db/
├── lib/
├── log/
├── public/
├── test/
├── tmp/
└── vendor/
```

### Package managers

NPM and Ruby Gems are both package managers. NPM (Node Package Manager) provides access to an enormous library of packages but often requires developers to navigate versioning issues, dependency conflicts, and sometimes overwhelming choices for accomplishing similar tasks. Gems, on the other hand, are Ruby’s package management solution and reflect the language's philosophy of convention over configuration. The Ruby community's focus on opinionated tools often means there’s a single, well-maintained Gem for most tasks, reducing decision fatigue.

```
npm install my-package

bundle add my-package
```

### Routing

You don't need to choose between `react-router`, `tanstack-router`, or whatever else comes along. It's built-in. Routing is a core part of the web server and browser relationship and doesn't need to be re-engineered.

If we want to have SPA-like transitions between pages, that's what Turbo Drive does automatically. We can write normal server-side code and get the seamless transitions that a SPA offers with no need to re-engineer anything.

Alternatively, we could use the new [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) if we wanted to do things manually.

### Components

Rails uses [View Components](https://viewcomponent.org/). They are fundamentally similar to React components. They are simple Ruby objects and are therefore stateless and render without a view context (meaning they are rendered without any baggage from the server like global variables). This also makes them great for testing and previewing in a sandbox (check out [Lookbook](https://lookbook.build/) for an example -- it's an add-on similar to Storybook).

Let's build a simple increment component in both Rails and React for comparison.

#### View Component

In Rails, the logic for the component goes inside the Ruby class, and you define the initialization of the component's properties here. We are only adding properties here, and aren't defining any custom methods since it's rather simple. Note that this uses [dry-initializer](https://dry-rb.org/gems/dry-initializer/3.1/) to keep it clean.

```ruby
# button_component.rb
class ButtonComponent < ViewComponent::Base
	option :label
	option :classnames
end
```

The view part of the component will be in a `.html.erb` file, where we can use ERB (Embedded Ruby) syntax to render the final HTML output. There are a couple of special attributes here. `data-controller` tells Stimulus this is a controller, `data-action` tells Stimulus what to do when an action is performed here, and `data-*-target` tells gives an identifier to Stimulus so it can track the element (essentially a ref).

```erb
<!-- button_component.html.erb -->
<div data-controller="button">
  <button
    data-action="click->button#increment"
    class="btn <%= classnames %>"
  >
    <%= label %>
  </button>
  <span data-button-target="counter">0</span>
</div>
```

The Stimulus controller is where custom JavaScript behaviour can be added to the component. It's plain vanilla JS but with some "magic methods" like `initialize()` to do something on component initialization, `targets` to tell Stimulus which elements to track, and many more you can read about in the [documentation](https://stimulus.hotwired.dev/handbook/introduction).

```javascript
// button_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["counter"];

  initialize() {
    this.count = 0;
  }

  increment() {
    this.count++;
    this.counterTarget.textContent = this.count;
  }
}
```

To use the component in a Rails view, you would render it using the render helper and pass in the arguments.

```erb
<%= render ButtonComponent.new(label: "Increment", classnames: "btn-primary") %>
```

It's all fairly straightforward. Plain HTML, Ruby, and JS with a couple of special attributes. Nothing fancy.

#### React

Here is the same example in React. Keep in mind we are already 1 layer away from "bare metal" since we need to write JSX because writing React in plain JS is an *awful* experience.

```javascript
// Button.jsx
import React, { useState } from 'react';

const Button = ({ label, classnames }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button className={`btn ${classnames}`} onClick={increment}>
        {label}
      </button>
      <span className="counter">{count}</span>
    </>
  );
}

export default Button;
```

Using the component we have to import it then create it and pass in the props.

```javascript
import Button from './components/Button';

<Button label="Click Me" classnames="btn-primary" />
```

Admittedly this example, if you know React, is much easier to do in React. But we have to know the `useState` hook, we have to understand the reactivity model (which is unique to React; all reactive frameworks have their own quips), and we even have to know that React requires a single parent so the component needs to be wrapped in a fragment. In contrast, Rails is just plain Ruby, HTML, and JS... albeit with a few magic methods to make life easier.

However, where this gets more challenging, is what do we do if we want that `count` to not be initialized at 0 and instead be a value from our server?

### State management

In React there are countless different ways to handle state. Based on our component above, in order to fetch an initial state from the server we now need to talk about different state management libraries. Maybe `react-query` would be good because we can do some automatic HTTP querying, or perhaps use `redux` or `zustand` with manual querying. Or forget all that and just `useEffect` with a `fetch` request to get the data (or wait... isn't that a foot-gun?).

For Rails, we can simply add it to the component when it is rendered by the server.

```ruby
# button_component.rb
class ButtonComponent < ViewComponent::Base
	option :label
	option :classnames
	option :count # add the new count
end
```

```erb
<!-- button_component.html.erb -->
<div
	data-controller="button"
	data-button-count-value="<%= count %>" <%# add count as a Stimulus value attribute %>
>
```

```javascript
// button_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["counter"];

	// add the count value and cast it as a Number
	static values = {
    count: Number
  }

  increment() {
		// use countValue directly. No need to initialize() a local variable
    this.countValue++;
    this.counterTarget.textContent = this.countValue;
  }
}
```

```erb
<%= render ButtonComponent.new(count: @count, label: "Increment", classnames: "btn-primary") %>
```

We've now moved the state from JS right into the DOM, where it can be injected with a variable from the server. This is an important distinction when building components with View Components. The interactive state lives in the DOM, not hidden in the browser's virtual memory.

#### Tips

- In Rails, the server state is the source of truth. When performing actions you can always just refresh a component from the server with the most updated state instead of trying to sync JS state with the server state.

- Use elements `data-*=""` attributes to keep the state on the page.

- Don't be afraid to use the element `id=""`. It is your friend. Rails even uses `dom_id()` to generate ids for your elements that correspond to the resource. No need to bind `ref`'s like in React or Vue. This also plays nicely with Turbo and morphing the DOM when new updates are fetched from the server.

## Closing thoughts

Working with Rails again after years in the JavaScript ecosystem has been an interesting journey. I enjoy the way Rails emphasizes simplicity and productivity, enabling me to get a lot of work done without being bottlenecked by choices.

For developers accustomed to modern JS frameworks, Rails offers a simpler approach to solving web development challenges. Whether you’re looking for something with less abstraction or just curious to explore a new paradigm, Rails is worth trying. At the very least, it’s a chance to revisit a simpler way of building web applications.

