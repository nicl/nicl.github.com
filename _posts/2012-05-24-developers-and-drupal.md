---
layout: post
category: blog
title: Drupal - why the talent problem is not going to go away
permalink: /2012/05/24/developers-and-drupal.html
---

*UPDATE 27/05/2012: I wasn't 100% about this article when I wrote it. I was concerned that I was extrapolating (unfairly) a broader picture from my own (particular) experiences. After a great discussion with some clever and kind people on IRC (in drupal-contribute) I still think most of what is said below is an accurate reflection of my opinion and has some validity.*

*But there are(!) seriously talented Drupalshops and people at the top, so if you like Drupal and learning, make an effort to work for one of those. Some of the feedback I received in IRC was from a young Drupaler whose experience was quite different from my own - they had completed an internship at a top Drupalshop and were just about to start working full-time on Drupal. During their internship they felt they'd learnt a lot (and looking at their Drupal contributions, I'm inclined to agree).*

*And as someone else said, if you're a true geek, don't box yourself in; always investigate technologies on the side, if for nothing else than that it will help you become a better Drupaler and Drupal a better product!*

A year ago, when I was just starting out as a developer (PHP being my first proper programming language) I was a gungho Drupalista. Drupal had enabled me to produce sophisticated sites even before I knew how to program. You could even say that without Drupal I would never have become a programmer. A year later, I still think Drupal is great - particularly the community - but I begin to find myself with doubts over whether I want to stick with Drupal for my career.

In this blog I want to explore the reasons for this change in the hope that an analysis can provide some pointers for the community as a whole. I'm exactly the kind of young developer I think Drupal needs to target and if young people like me decide not to pursue or persist with Drupal, then Drupal is in trouble. It may be that the problem is intractable, but I hope not.

Essentially, I am going to suggest that Drupal will struggle to fill the talent gap because talented developers rationally avoid working on Drupal. This is because:

* *Drupal slows the pace of personal development for a programmer*

There are some positive changes for Drupal 8 which may address some of the concerns I express below. But in general, I don't think these will be enough.

In order to explain my thinking, I want to introduce you to the 'Young Developer' (a stylised version of me 1 year ago) and her early development.

The Young Developer
-------------------

The young developer (note by 'young' is meant simply inexperienced) I am depicting arrives fresh on the scene with the following, highly laudable, goals:

* to become a 'programmer' - that is to hold a strong understanding of computer science beyond simply being able to express herself in a single language or paradigm, and to be able to produce sophisticated programs which are well-written and easy to maintain and develop;
* to constantly learn;
* to be at the cutting edge - to have the chance to innovate, work on more complex and interesting problems - both for personal satisfaction, and to provide for greater freedom in career choices later down the line;

This is me. I try to do my best at achieving these goals.

Growing pains
-------------

Like me, the young developer will go through some changes in their early career. For me personally over the last year this has meant:

* I have become a better PHP programmer, learning the basics of OOP and other newer PHP features such as namespaces, and generally having written and been exposed to more code than at year's start;
* I have become aware of a wider range of technologies and approaches, from Symfony and other leading PHP frameworks, to other languages and paradigms such as Ruby, Clojure (and associated functional programming), and the growing importance of Javascript even for the backend;

These changes have prompted a new perspective. In short, the world is bigger than before and Drupal has become correspondingly smaller, less impressive, and less exciting. All of this is, to some extent, inevitable for the younger (by which is meant less experienced) developer. But there are a number of reasons why Drupal might particularly begin to struggle to keep talented individuals.

Specific concerns
-----------------

### Drupal is not sexy

Drupal is not really on the cutting edge. We do not follow the sophisticated decoupling of Symfony, nor do we take advantage of language features such as namespaces that are standard elsewhere. PHP itself is perhaps not the most elegant or expressive language, although as a beginner I certainly appreciated its easy availability and wealth of learning resources.

In short, Drupal has become a bit of a lumbering beast. There are signs of limbering up for Drupal 8, but that is 2 or more years away, and two years is a long time in web-development, not to mention in a young-person's career.

### Drupal makes things too easy

Secondly, Drupal does all the hard work for you. Ironically, this is a great strength of Drupal; the company I work for loves the fact that we can churn out websites with logins, and user-generated content, with relatively little custom code required. But for us developers, half of our expertise is in knowing how to configure various modules (such as Views) and being aware of which modules to use in the first place. Unless you are working at the cutting edge of Drupal development (for one of the big companies - you know who they are) as a Drupal developer there isn't much to the coding. Drupal, like Wordpress, is often a case of rinse, lather, repeat.

### Better alternatives to PHP are now widely available

Another, more personal, reason is that I want to learn more than just PHP. Ruby, Python, Clojure and other languages lurk on the horizon and tempt me from afar. One of the liberating things about being a web-developer is that you have a lot of freedom over the technology stack you employ - you don't have to rely on desktop clients supporting your language of choice; everything is on the server (except Javascript of course). To be tied to Drupal is to be tied to PHP.

Is this just me?
----------------

I don't know is the honest answer. Some of the above can, I'm sure, be put down to individual preference. But much is, I suspect, generalisable: good programmers want to be constantly learning and evolving, and want to work on complex problems. They also want to experience new paradigms and programming languages.

Perhaps, in fact, you are reading this article and want to shout out 'Drupal isn't like that!' You don't recognise the picture I've painted. That's great. I'm speaking from personal experience at a middle-of-the-road Drupal shop and I know that many people are having fulfilling careers working on complex problems in Drupal. And if you think that there are always opportunities to learn and develop with Drupal and that it's a matter of taking them I'd mostly agree. But I don't think my picture is just a crude charicature (although feel free to try and change my opinion). A lot of Drupal work *is* boilerplate and we can't get away from that fact. Most modules involve no architecture at all - you just implement hooks x, y, and z.

Anyway, enough of the moaning. What are you suggesting?!
--------------------------------------------------------

What can we, in the Drupal community do, to tackle the above? Well, to start we should be as radical as possible with Drupal 8. In my mind this means going for WSCCI and CMI full-fat versions, no holding back, and leveraging Symfony and other frameworks where possible to replace some of the cruft.\*

But some of the problems are not going to go away soon, because the 'athletic developer' I describe is not the only or even the core Drupal stakeholder. There is an inherent tension between business interests of cheap and rapid mass-development and backward-compatibility, and the uber-advanced glowing Drupal that the keen developer  would like to see and work on.

A personal conclusion
---------------------

On a personal level, one obvious solution is to try and get into a top Drupal shop where one can work on taking Drupal forward and just avoid the lower end of the market altogether. Top firms like Acquia have started graduate programs ('Acquia-U') which provide a way-in straight to the technical-top of Drupal development. But even then, it is inescapable that a large part of Drupal development will be copy-and-paste (which is mostly what implementing hooks involves) and configuration. And transferable skills gained (understanding architecture, learning new languages, performance, etc.) will likely be less than through working on custom sites or with a framework.

Another possibility is to try and join a shop which uses Drupal *along with* other technologies. There are plenty of shops like this; diversification is obvious, particularly in regard to the various Javascript frameworks now available). I would encourage young Drupal developers to consider this route - leverage your Drupal domain knowledge, if you have some, while at the same time exploring other technologies.

Because, the danger is that working on Drupal alone could limit your personal development. And this is not surprising. Is it really wrong or harsh to suggest that the average ability of a Drupal developer is substantially below that of a Symfony or Rails developer? I don't think it is. (Please don't be offended if you work on Drupal - so do I and I include myself in this). After all, one of Dries' stated aims with Drupal is precisely to cut out the developer. And this is a good thing - to empower all sorts of people and organisations to make websites when before they could not. The thing is, it just might not be a good thing for me personally.

I love Drupal and particularly her vibrant community. But I find myself increasingly doubtful of whether Drupal is a good place to be for the long-term.

*\* When I first started writing the article this wasn't at all certain. The great news is that the plans for Drupal 8 turned out just as radical as I had hoped :) Garfield and co are literally re-writing Drupal from the ground up and leveraging as many Symfony and other components as they can get away with along the way.*