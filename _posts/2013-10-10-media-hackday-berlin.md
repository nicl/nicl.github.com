---
layout: post
category: blog
title: APIs - Media Hackday Berlin
permalink: /2013/10/10/media-hackday-berlin.html
---

Last Friday I flew to Berlin to take part in the Wan-Infra media
hackday. Several media organisations, including The Guardian, opened
up their APIs for participants to hack on. The event ran over the
entire weekend as 13 team from the breadth of Europe desperately tried
to revolutionise the media landscape against the clock. As
representative for the Content API team at The Guardian my role was to
help teams get maximum use of our API by running a workshop and also
sitting down with teams throughout the event to help when needed. What
follows are some thoughts/takeaways from the event.

## You should have an API

If data is core to your organisation, you need to make it available,
certainly internally and possibly publicly too, via an API.

By presenting a single, stable interface, APIs enable the dynamic
emergence of clients. Development teams don't need to coordinate their
efforts. Clients can even emerge under the radar, through
side-projects, or hack events, from within the company or, if you have
a public API, from without.

It's discovery on the cheap. Berlin was a great example of this. While
some ideas were polished versions of things already seen, others
caught me off guard - generating a 'how did I not think of that
before' reaction, both frustrating and exciting at the same time.

Don't shut yourself off from this energy by keeping things closed,
coupled, and synchronous.

Even if you only have one app. And even if you think this is all you
will ever need<a href="#mistakes">\*</a>, an API is still
beneficial. The decoupling an API provides facilitates faster
development. Front-end and back-end apps are prevented from
communicating directly, allowing each to be developed independently of
the other. This same separation also serves to ward off the dreaded
monolith - the single, giant, app<a href="#monolith">\*\*</a> which is
too complex and tangled to modify safely or speedily. By presenting a
layer of abstraction over a database, an API can also act as a point
of scalability.

## Structured data is Queen

Data is only useful insofar as it is structured. Even limited
structure can take you a long way via good textual analysis,
machine-learning, etc., but a richer structure enables richer and more
diverse clients.

It was painfully obvious that some of the APIs at the event were more
useful than others. The poor ones lacked sufficient structure - the
categorisations and meta-data that makes data understandable.

As for The Guardian's own API, well it has the advantages of being
performant, and relatively easy to use. We provide some rich meta-data
around our content - taxonomies, dates, authors, and more. And, most
importantly, it contains all of The Guardian's content.

An area where we don't do so well is our data-model: it's pretty
limited. There's only one real data type, 'content'. An article is a
headline, meta-data, and body text. A video is, you guessed it, a
headline, meta-data, and body text. (The body text contains an HTML
representation of the video.) The same goes for picture galleries,
audio, etc.

As a client this is all highly frustrating. If you're interested only
in audio content how do you access it? Or what about video? The API
doesn't understand the differences between these types of content, so
neither can you.

Thankfully things are starting to change on this front. Our new CMS
tools allow for a richer content model which will hopefully make it's
way into the API at some point. It certainly needs to.

## People love The Guardian

Berlin was my first event as a Guardian representative and I was
struck by the level of interest in how we work. And people also like
our content; our API was by far the most used at the event.

This is hugely encouraging. From an API perspective, it reinforced my
belief that people want to access our content and make stuff with
it. We can and should do more to enable this.

## Eat your own dogfood

It is strange but true that I learnt more about using our API over the
weekend than in the several months that preceeded it. Our team work on
the Content API everyday but we don't *consume* it. Somehow, as a
team, we need to find a way to address this - through side-projects,
hack events, anything really.

## Location, location, location

Not really sure wheether this was just noise but it was notable how
many teams focused on location<a href="#location">\*\*\*</a> as a way
to filter content. Is location a crucial bit of meta-data that is
presently underexploited, or just a fad? I don't know but it will be
interesting to find out.

<a name="mistakes">\*</a> ...then you're crazy.
<a name="monolith">\*\*</a> Inevitably written in Java or some such.
<a name="location">\*\*\*</a> Location either explicitly provided by the API or imputed using cleverness (see @localstream).
