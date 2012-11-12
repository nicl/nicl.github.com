---
layout: default
title: projects and experience
---

For code samples, check out [my github account](https://github.com/nicl).

Or [read my my CV](/curriculum-vitae.html).

{% for post in site.posts %}
{% if post.category == 'project' %}
<div class="project">
    <a href="{{ post.url }}"><img src="{{ post.image }}"></a>
</div>
{% endif %}
{% endfor %}