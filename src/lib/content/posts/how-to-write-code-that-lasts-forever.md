---
title: How to Write Code That Lasts Forever
date: 2023-11-06
description: As developers, often the approach to fixing an issue is not actually fixing it, but gutting it and replacing it with something new. How do we break this pattern to keep our software running for generations to come?
keywords:
  - Programming
  - Code
  - Web
published: false
---

As developers, often the approach to fixing an issue is not actually fixing it, but gutting it and replacing it with something new. A critical factor in causing this is that the cognitive load to read the old code, understand how it works, and then update it, is often more difficult than ripping it out and rewriting it. New code is free of dependencies and past mistakes... and it often comes with better documentation. If you implement this latest trend maybe the issue won't come up again in the future?

Unfortunately, the latest hotness is usually something you've been hearing about because the bloggers and 'tubers have the time (and potentially financial incentive) to make content for. They get to test it all out and report their findings, and talk it up to get views. From the outside it seems like these new technologies are a MUST HAVE, and it would be wise to adopt them now to make our lives easier. But the truth is that, in another year, there will be another new hotness that solves the problems the previous one had, and you'll have to migrate your codebase again. Enough is enough!

It doesn't always have to be this way. There are some practices you could follow in your codebase to make it so your code will last forever.

## Reinvent the wheel
Using existing, tried-and-true development patterns is a mistake. It enables your team to use readily-available documentation and resources online to solve problems in the codebase on their own. It's better if they need to ask you for help to do anything. It makes you indespensible, as they have no experience with your mad creation, and gives them no power to overrule you. Any solutions they come up with can be immediately disregarded, because the complexity of the application is too much, too tightly coupled, that it cannot be simplified.

Components are a fad. We shouldn't combine our related structure, styles, and behaviours into a common place where someone from the outside could make simple updates and know the code they write won't break something else in a random, other place in the application.

Have you heard of the "fat models, skinny controllers" approach to MVC popularized by the likes of DHH and Taylor Otwell? Let's throw that ideology in the trash. They don't work on real-world software, they work on the tools. In the real world we need fat models, fat controllers, and if we run out of room we can put database calls directly in the views to make them fat too. Keep the other developers on your team guessing, requiring them to open 10 different files before they can find the one they need to make an update.

Don't use native elements, behaviours, or features. If you want to have a button to do something, make it a `<div>`. A switch? `<div>`. Checkbox? `<div>`. Don't conform to any kind of system for the attribute names you use either, each of these controls should be unique and special. Attach an event listener to a seemingly arbitrary `classname` to handle the style **and** behaviour.

## Be aware of your dependencies and their approximate lifetime
Make sure all the dependencies you add have reached their end-of-life. That way you know they can never get any better... they are the best they've ever been! And you won't need to worry about upgrading them in the future because they are finally complete!

## Use dependencies nobody has heard of that you know won't change
Using battle-tested, modern libraries and tools that are supported across all devices and platforms, that have a corporate backing or plenty of sponsors and funding, is also a mistake. They iterate too quickly and have too few bugs. It's better to use some tool nobody has heard of, that is no longer maintained, because then the code can never update to a next major version. Major versions cause bugs and upgrading software is tiresome. We want our code to last forever.
> Use dependencies nobody has heard of and talk about them like they are common knowledge. 


## Don't give your team any time to write code
Meetings. Have you heard of them? They are beautiful little torture chambers where your coworkers are forced to listen to you for 30-60 minutes. The more meetings you schedule, the less time they will have to write code, and the longer your code will last.

Set up a workflow system that actively hinders progress. Make sure there are unnecessary steps, and that tasks bounce between many different people before they can be completed.

## Write "Clever" Code
Being a clever developer is way better than being an explicit one.

Abuse event listeners. Add them to everything. Don't put them in any logical structure where they can be found easily either, it should be a surprise and take a full day of tracking down the event to figure out why a feature is behaving in a different way than intended.

### The Simpler, the ~~Better~~ Worser
In order to prevent the codebase from ever becoming upgradable, we have to make it so obfuscated only you know how to work with it.
- Don't buy into a whole new ecosystem just to solve a problem.
  - Rewrite a legacy app with React requires you to... rewrite everything. It's ridiculous. Then you are locked in to React.


## Use a naming convention that makes business sense
- It's better to have a few different models that have duplicated behviours than one generic "business process." Nobody knows what that means. It should be something that not just the development team can understand. There should not have to be an entire translation required in your brain to convert what a support rep, sales rep, manager, or customer mentions into the actual thing you need to work on as a developer.
- Don't name things so specifically generic that they could be misinterpretted as something else. For example, naming something "bucket" is pretty generic, but that term is used so predominantly with S3 it would be detrimental to use it in your logic unless it is referring to S3.

## Document everything
Except the thing that matters.

Document meetings, processes, create a library of pages in the company wiki that don't really mean anything. Be overly generic. Make sure that there are minimal code examples, and the ones that are there, are the "idealized" ones, but the software itself is always too complicated to be ideal so the patterns used in the wiki differ greatly from production. Make the process so difficult to onboard new developers that they pluck their eyeballs out after the 80th page of nonsense that they have to sign to affirm they've read it.

## Write tests
But never run them. Have them fail randomly. Make it optional to add tests to new features so developers can opt out. If a developer wants to write tests then they would need to fix all the existing tests beforehand. Make tests only part of the teams local environments, exclude them from the CI/CD pipeline. Make sure the status of tests passing or failing have no consideration in determining whether a feature should be merged into production.


---


 The team working on them can never iterate faster than that [one guy in Russia who's been working on core-js since 2014](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md). 