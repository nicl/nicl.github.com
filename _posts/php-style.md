---
layout: post
title: PHP with Style
---

Style matters; code can be specification correct but still suck. For example,
whitespace is largely optional in PHP, but ignoring whitespace can result in
code which is evidently bad:

$var=$te23t?$a:$b;

Other 'layout' concerns are indenting and the use of line-breaks to increase
legibility.

A fuller understanding of programming style extends beyond the placement of
characters; good style requires an awareness of which language features to use
and which to avoid. Some language features are more error-prone than others; if
an alternative exists which is less error-prone we are better off using that
instead. This practice, of subsetting a language, is advocated strongly by,
among others, Douglas Crockford (well-known in the Javascript world). Many of
the features identified here as 'dangerous' - meaning to be avoided - mirror his
examples for the Javascript language.

++ and --
switch (fall throughs)
== and !=
assignment (=) within if and other expressions
eval (and its cousins)
always use blocks in structured statements
avoid globals
do use the ternary operator ? (for assignment, not for anything else)
massive blocks of html
massive blocks of sql queries
falsy values
spaces between if and ( - and do this generally to distinguish between function
invocation and control operators
one statement per line max
