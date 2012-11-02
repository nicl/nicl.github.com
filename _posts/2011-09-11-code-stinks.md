---
layout: post
category: blog
title: Code smells
permalink: /2011/09/11/code-stinks.html
---

Code smells are indicators of bad coding practice and possible problems down the line. By learning how to identify these stinks we can write cleaner code which is easier to read, easier to maintain, and which is less prone to unexpected behaviour.

The more I learn about programming, the simpler my programs get. Not necessarily in terms of functionality, but definitely in terms of how I use and write code. This philosophy, of filtering out complexity and ambiguity, was presented with charateristic force by Palantir's Larry Garfield in a [brilliant talk](http://london2011.drupal.org/conference/sessions/code-stinks) at Drupalcon London entitled 'This code stinks' (links to the Drupalcon London site, with the session video and pdf). In his talk Larry outlined some simple rules/guidelines that, if adhered to, can lead to better code\*. For my own memory/understanding, I'm re-stating these 'code smells' below. I hope they are useful, particularly for people like me who came to programming in a somewhat roundabout manner and do not have the benefit of a full on computer science course (where one would hope they teach this sort of thing\*\*).

Without further ado, the (as Larry calls them) 7 stinky smells...

\#1 And
------

**=> do X and Y (...and Z ... etc.)**

Avoid code that does multiple things. Keep functions atomic. Avoid so-called 'God objects', which;

* do more than one thing
* know too much

Instead, adopt a 'divide and conquer' strategy, where each piece of code block achieves a clear and specific task.

\#2 Or
-----

**=> do X or sometimes Y**

For an example of this anti-pattern see: D7's registry_check_code() function. Or see the hook_block() function in D6 (thankfully now replaced by separate info/save/view/configure functions in D7).

\#3 If
-----

**=> excessive branching**

Overly complex code leads to overly complex bugs. Excessive branching makes code hard to follow and outcomes hard to predict. Note, the level of branching is also called 'cyclomatic complexity' in posh terms.

As a general rule of thumb: avoid more than 3 levels of indentation in your code.

\#4 (Lack of) Unit testing
-------------------------

**=> lack of true unit testing**

I think this one is a particular pet-hate of Larry's. A unit is the 'smallest possible part of an application' but most testing tends to be 'system testing' - testing a large block of functionality together. Particularly with complicated systems like Drupal, system testing doesn't actually tell you that your code works as intended (at least, not for every case). Larry also outlines some strategies to make code more unit testable:

* avoid globals (as much as possible, you should be doing this anyway)
* avoid
* do use dependency injection - object / functions should be given what they need (as parameters), they shouldn't grab it for themselves
* minimize singletons - this is not an anti-pattern but should be generally avoided.

\#5 (Lack of) documentation
----------------

**=> document everything**

You can't teach what you don't actually know. It is especially important to comment code if you are embarrassed about it. (Rather than pretending it has nothing to do with you!) What to document? Everything. Every single...

* function (including methods)
* class
* object property
* constant
* parameter

No exceptions.

\#6 Inappropriate intimacy
-------------------------

**=> when one piece of code knows too much about another**

This is often called 'tight coupling' and the result is that you can't change one piece of code without also having to change another (because the two are tightly coupled). This makes refactoring much more difficult. Unfortunately in Drupal there is a lot of this going on - all the large arrays we use (think Form API, Render API, Node API etc.) are inevitably tightly coupled because they do not allow the benefits of OOP (thinking of polymorphism here). One solution to avoid tight coupling is to utilise interfaces.

\#7 Impurity
-----------

**=> keep functions 'pure'**

Pure functions always...

* given the same obvious input, give the same output
* have no side effects or I/O.

For example, a pure function called multiple times (with the same parameters) will always yield the same result. To help ensure 'pure' code:

* avoid globals
* avoid side effects
* avoid functions which cannot be repeated (without changing).

There are obviously some exceptions to this requirement. For example, code which interacts with a database will not be 'pure'. The suggestion here is that: a function/piece of code can be impure if the goal of the function is a side effect. In these cases, the policy is to keep pure and impure separate so as to yield the benefits of 'pure' code as much as possible.

Durian to Strawberries (good smells)
------------------------------------

Lastly, it's not all doom and gloom. If the above is Durian, than here we have some Strawberries; there are some more positive things we can look for and encourage in our code. Here are some 'good smells' (code which is...):

* single-purpose
* self-contained
* predictable
* repeatable
* unit testable
* documented

\* Many have attempted to define what good/better code actually is. For example, I recently came across this useful (and fairly comprehensive) definition - ['How virtuous is your code'](http://pragprog.com/magazines/2011-08/how-virtuous-is-your-code).  For the purposes of this article I am mainly just thinking in terms of code which is easier to read / maintain and that displays more predictable behaviour / generates fewer errors.

** Clearly this is not always the case! There is, as any programmer will know, a lot of bad code out there. For some educational examples, I recommend this blog: [CSI:PHP](http://csiphp.com/blog/).