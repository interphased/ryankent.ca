---
title: Writing Code That Lasts
slug: writing-code-that-lasts
date: 2023-11-06
description: As developers, often the approach to tackling a problem is to rip out the old thing and replace it with a shiny new one. How do we break this pattern?
tags:
  - Development
---

As developers, often the approach to tackling a problem is to rip out the old thing and replace it with a shiny new one. One of the leading causes of this is that the cognitive load to understand the old code and how it works is more difficult than implementing something new. New code is free of dependencies and past mistakes... plus it often comes with better documentation from whatever the latest hotness is. If you implement this latest trend maybe the issue won't come up again in the future?

Unfortunately, the latest hotness is usually something you've been hearing about because the bloggers and 'tubers have the time (and potentially financial incentive) to make content for. They get to test it all out and report their findings, and talk it up to get views or hits. From the outside it seems like these new technologies are a MUST HAVE, and it would be wise to adopt them now to make our lives easier. But the truth is that, in another year, there will be another new hotness that solves the problems the previous one had, and you'll have to migrate your codebase to that now. Enough is enough!

It doesn't always have to be this way. There are some practices you could follow in your codebase to make it so you and your team will be able to develop and iterate on existing code without the cognitive overload, or fear of breaking things.

## Don't reinvent the wheel
Use native controls, elements, and behaviours before implementing something new. Extend them instead. They are battle-tested and supported across all devices and platforms.

```html
<details>
  <summary>A summary of the content.</summary>
  The content, tucked away until the user performs an action to display it.
</details>
```

## Be aware of your dependencies and their approximate lifetime
- Don't add dependencies that solve simple problems. You can get locked into them where they or another dependency can no longer be updated.

## Keep it simple
- Don't buy into a whole new ecosystem just to solve a problem.
  - Rewrite a legacy app with React requires you to... rewrite everything. It's ridiculous. Then you are locked in to React.

## Use a naming convention that makes business sense
- It's better to have a few different models that have duplicated behviours than one generic "business process." Nobody knows what that means. It should be something that not just the development team can understand. There should not have to be an entire translation required in your brain to convert what a support rep, sales rep, manager, or customer mentions into the actual thing you need to work on as a developer.
- Don't name things so specifically generic that they could be misinterpretted as something else. For example, naming something "bucket" is pretty generic, but that term is used so predominantly with S3 it would be detrimental to use it in your logic unless it is referring to S3.

## Document everything


## Write tests

