---
title: Designing and Developing Frictionless User Interfaces
date: 2023-11-06
description: Less is more.
published: false
---

Less is more. Keep things consistent. Reuse styles from other components. Let the browser or OS do most of the work so accessibility and native controls function as expected across all platforms and devices.

Everything has already been done before. If you have to invent some new kind of interface, then you may be making things too complicated. The design process should be simple. Think of your interface as a series of Lego blocks, where on their own don't do much, but together make something whole. Each block can be a component, and how they are arranged is what builds our user interface. It's the intelligent arrangement of familiar controls and systems in a way that is invisible to the user. A good user interface is one that the user doesn't have to think about how to use, it's already familiar to them.

The Design of Everyday Things

The teapot has a handle on one side, and the spout on the other. They work together, naturally. Picking up the teapot and pouring it can naturally happens when holding onto the handle. Our user interfaces should behave in a similar way.

Applications designed for both mobile and desktop can all use natural intuitive controls via tapping and dragging the screen, two-finger scrolling, or using a mousewheel to load and display more content. That content is hidden by default if it grows outside the viewport, but the user can perform a natural action to display it should they so choose. They key takeaway here is that vertical scrolling is the natural flow. This is a bit of a carryover because of the way desktops handling scrolling. All different scrolling methods can handle verticality easily, but some do not handle horizonal that well. But, if we had an application that was only designed for mobile, the thumb can naturally swipe left and right just as easily as up and down. We could therefore design a system that has a natural feel but moves content horizontally instead.

Going one step further than this, if we have a navbar of some kind fixed to the bottom of the screen, it would get in the way of our vertical scrolling behaviour on small touchscreen displays. That's why mobile navbars are more often at the top of the screen (well, that and because it's not accessed frequently and can be further from your thumb). If, however, we used horizontal scrolling, then we no longer have that limitation, and a navbar on the bottom of the screen isn't that crazy of an idea. In fact, it may be more usuable, assuming the navbar would be used semi-fequently in our application.