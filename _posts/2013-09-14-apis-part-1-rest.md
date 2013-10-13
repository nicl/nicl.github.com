---
layout: post
category: blog
title: APIs: Rest
permalink: /2012/07/10/apis-rest.html
---

(First post in a series on REST in the context of APIs.)

I first heard the term 'REST' a while ago. I wasn't exactly sure what
it meant, but I knew it was a good thing. It's surprising looking back
how confident I was in this perspective given I mostly understood REST
to mean pretty endpoints of the form /noun[id]. I've since done some
reading* and turns out there is a lot more to the idea than I first
thought.** REST itself (often used in the form RESTful - as in 'an API
should be RESTful') has become a buzzword of sorts, so it's useful to
remind ourselves what it actually is.

## What is REST?

REST is a pattern for network communication. In particular, it
is a series of constraints:

* Client-Server
* Stateless
* Cache semantics
* Uniform Interface

The last part, a uniform interface, deserves special attention. For
REST the interface is expressed as four things:

1. identification of resources
2. manipulation of resources through representations
3. self-descriptive messages
4. hypermedia as the engine of application state (abbreviated as 'HATEOS')

## What about HTTP?

Note, we haven't said anything about HTTP yet. REST is a
*pattern*. HTTP is just an implementation of the general idea, albeit
an incredibly important one.

It is easy to see how HTTP expresses the basic principles of
REST. Clients make requests to servers via HTTP requests, requests are
stateless (that is, the server does not hold session state), and there
are in-built cache semantics (GET vs POST, but also various control
headers and more***). Each part of the uniform interface specified by
Fielding also has a direct corollary in HTTP:

* Identification of resources => URIs
* Manipulation of resources through representations (HTTP methods)
* Self-descriptive messages => HTTP headers/methods
* HATEOS => URIs used to indicate state transitions

## So it's baked in?

Given the above, you might be wondering what the big fuss is about? If
HTTP is itself RESTful won't any web API automatically be RESTful too?

As it turns out, few web APIs are RESTful, very few in fact. The
reason for this is that, while HTTP enables RESTful interaction, it
does not enforce it. You can, if you like, redefine GET to mean
whatever you like. Or, you could use cookies and break
statelessness. Fundamentally, HTTP enables two computers to
communicate. But what we do with that ability is still largely up to
us.

## Are there *any* RESTful APIs?!

Most web APIs are not RESTful. In particular, even if they leverage
HTTP methods correctly, and represent resources using URIs, few APIs
are hypermedia driven; there is nearly always some kind of out-of-band
communication (online documentation or whatever) to describe available
resources. HATEOS, truly expressed, would mean an API which works
more like a normal website: you arrive at the homepage and then follow
links to get to your destination.

There are some examples. Stack Overflow, as is often the case, has
already considered this question (closed as not constructive):
http://stackoverflow.com/questions/256103/some-good-examples-of-restful-web-apis. [Twilio](https://api.twilio.com/2010-04-01.json)
might be a good example - they seem to take REST seriously.

## Should I use REST?

I'll discuss this question in a future blog post.

\* Fielding's original
  dissertation
  (http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) is a
  good starting points here.
** Who could have predicted that?!
*** See: http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html.
