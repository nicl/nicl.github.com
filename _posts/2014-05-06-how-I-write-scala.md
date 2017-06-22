--
// some meta-data
--

# How I write Scala

Scala is a multi-paradigm, permissive, language. It supports writing
code in an imperative or mostly functional style. It also supports
OOP.

Language features include: pattern matching, implicits, for
expressions, singleton objects, traits, structural typing, and
higher-kinded types.

Some of these features are dangerous; others introduce more complexity
than they are worth for the majority of teams.

For my part, I like to subset the language. The 'good parts' of Scala
are relatively small. They are:

- objects without state
- case classes without behaviour

These features, taken together, are sufficient for most code and lend
themselves to a functional approach. Objects act as namespaces for
functions; case classes are a type-safe way to model heterogeneous
data.

Below I attempt to justify the choice of excluded features.


## The exception - components

Before we start, let us note a key exception to the above:
components.

In complex applications, it is necessary to manage stateful
dependencies. In a web app, these are typically clients of some kind -
perhaps to a database or external service. The clients are expensive,
by which is meant they occupy threads or some other resource, and we
do not want to duplicate them unnecessarily.

To address this problem, people use dependency injection; dependencies
are injected into stateful components using a library of some kind, or
perhaps manually. In most languages (including Scala), components take
the form of classes and dependencies are passed in as constructor
arguments.* - Closures can achieve the same effect.

This approach has several advantages:

* dependencies are explicit, leading to better understanding and
  testability
* libraries can handle the creation and injection of dependencies,
  reducing the need for lots of boilerplate code
* ensures dependencies are shared where possible
* less tedious passing dependencies around - especially if using
  implicits in Scala - as classes are less granular than
  functions/methods

(Non-case) classes are not in my approved list though! Should we make
an exception to the rules here?

I don't think there's a clear 'yes' or 'no' answer here. But, for the
most part, I veer towards sticking to pure functions. This has the
virtue of keeping things very simple and facilitates unit testing.

The latter is especially important. While DI does aid testing insofar
as it ensures dependencies are passed in, it forces us to write
methods (accessing the dependency as object state) instead of pure
functions. Testing a function now requires instantiating a class. If
the class requires additional dependencies to the function we are
forced into extra work, and this is frequently the case.

Unit tests are worth prioritising:

* they are quick to write and run
* they make it easy to detect errors in logic. Glue-code breaking may
  result in a complete failure, but is it usually easy to diagnose and
  fix; subtle errors in logic are much more pernicious. Integration or
  feature tests will catch the former, but unit tests will catch the
  latter.

Unfortunately, the most popular web-framework (Play) in Scala strongly
encourages a DI/class-based approach. It is, I think, possible to
stick to functions, but it is certainly not idiomatic.

The ubiquity of stateful components represents a challenge to those,
like me, who favour a functional approach. If stateful components are
so bad, why are they so popular?

[The benefits of true OOP - message passing.]

Patterns to avoid - DAGs and cyclical graphs. (C.f. Parnas.)

A purist approach seems elegant then, but reality is more complex than
you'd sometimes like. Consider, the following scenario:

A -> B -> D
   \ C /

We have a parent component (A), calling B and C, both of which call
D.



Avoid:

- regular classes (the 'new' keyword is to be avoided)
- inheritance
- mutable state

I have mixed feelings about the following:

- implicits (and, by association, type classes)
- what about other type subtleties - like structural types?

Essentially then, what you are left with is a functional style of
programming where behaviour is made up of pure functions with objects
used as pseudo-namespaces - painful I know, but still the only way-
and case classes acting as containers for data (this includes, the use
of immutable lists, maps, etc.).

We deliberately do not use certain of the more complex features
offered by the Scala type system; while useful, these features make
code harder to read for non-expert developers. If you're writing code
alone this is probably fine, but if you are in a team then this
becomes quite important. The purist in me hates this, but there's a
place for pragmaticism here.
