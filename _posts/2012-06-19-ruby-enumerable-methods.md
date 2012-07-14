---
layout: post
title: Enumerable methods in Ruby
---
Ruby is a lightweight scripting language and as such it provides a variety of in-built mechanisms for enumerating through collections (arrays and hashes mostly).

These methods can often replace the traditional 'for' and 'while' loops, which are error-prone because they require implementing an iterator of some kind.

The methods to know are:

* \#each
* \#map
* \#select
* \#inject
* \#reject
* \#detect

Some methods do not necessarily require a block (for example, inject).

Most of the methods are callable by different names (this is Ruby after all!).

All methods can be used with either the one-line or do..end forms.

All methods do not operate on the collection directly, but return a new collection. Sometimes, versions which modify are available (usually suffixed with '!').

\#each
-----

Allows iterating through a collection and operating (via a block) on each item:

{% highlight ruby %}
array = [1, 2, 3]
array.each() do |value|
  ...
end
{% endhighlight %}

\#map
----

Operate on each item using a block and generate an array from the results.

{% highlight ruby %}
array = [1, 2, 3]
new = array.map() { |value| value + '!'}
# new is ['1!', '2!', '3!']. array is unchanged.
{% endhighlight %}

The collect() method is equivalent (and is perhaps more obviously named).

\#select
-------

Like map but rather than modifying an array, filters it to return a new array of values for which your expression returns true.

{% highlight ruby %}
array = [1, 2, 3]
new = array.select() { |n| n > 1}
# new is [2, 3]. array is unchanged.
{% endhighlight %}

\#inject
-------

Combine all elements using a binary operation. 

I.e. you are injecting each value into some calculation. Alternatively put, you are reducing the collection to a single value.

{% highlight ruby %}
array = [1, 2, 3]
reduced = array.inject(:+)
#reduced is 6 (the sum of all the values)
{% endhighlight %}

There are many options/rules for this method (about accumulators, etc.). See the docs [here](http://ruby-doc.org/core-1.9.3/Enumerable.html#method-i-inject).

Also known accessible as 'reduce'.

\#reject
-------

Returns an array of all elements for which the block returns false.

Opposite of map/collect.

\#detect
-------

Iterates over elements and returns the first for which the block returns true.

{% highlight ruby %}
(1..100).detect {|i| i % 5 == 0 and i % 7 == 0 }   #=> 35
{% endhighlight %}