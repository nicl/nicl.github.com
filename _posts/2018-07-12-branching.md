If you were to draw your code flow as a graph, what would it look
like?

It's a useful question I've found in discerning what a good and bad
architecture looks like.

Consider, the following two cases:

    1)  /\
       /  \
       |  |
       ...

    2) \  /
        \/
        |
        |\  // switching on case
        |\
        ...

In the first, branching happens early on, and then code paths are
separate. Note, separate does not mean they don't share any helper
behaviour. But it does mean that those blocks of code eschew if/switch
statements based on type.

The second is characterised as a single flow but with lots of
conditional branching.

To make the two examples more concrete, think of a website that must
handle authentication of two different classes of users: visitors, and
administrators.

In example 1 we would detect the class of user as early as possible,
perhaps even via different routes, and then user different functions
to handle each. Of course, some of the auth logic may be the same -
connecting to the database, etc - but only if it is genuinely the same
for each.

Case 2, by contrast, would converge onto a single code path. To handle
the different cases, functions contain plenty of if statements to
handle the different classes of user:

    if (isVisitor) ..
    else if (isAdmin)

This is a relatively simple example, but in practice we often find
more than two classes of user.

So, why is the 2 case nearly always a worse choice?

Firstly, because it complexes concerns, which makes it harder to
understand things. If I want to understand the logic for an admin
user, I need to also wade through code for visitors as well.

Secondly, it results in brittle code. It is difficult to introduce new
cases because I need to understand and modify existing code. New cases
may not fit within the assumptions of existing code, which may force a
larger-scale refactoring.

Often things start of simple, and these problems are less apparent,
but as requirements change cases tend to diverge and multiply and the
problems increase.

When does approach (1) make sense? Perhaps when we can abstract
different cases behind a single, simple, interface. In other words,
when coupled with polymorophism. In this way, we can avoid the
explicit branching of (1) and some of the associated brittleness. As
logic is encapsulated elsewhere, typically a class, we also improve
readability.

However, abstracting things behind a single, simple, interface is
difficult; requirements change, and good abstractions are hard to
find. In general, it is a good idea to avoid introducing abstractions
for as long as possible. If you have many branching cases though,
which are genuinely similar, this may be the best approach. The
canonical example here is UI components, which typically receive data
and need to be drawn onto the screen somehow.
