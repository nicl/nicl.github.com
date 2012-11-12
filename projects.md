---
layout: default
title: projects and experience
---

<p class="large">For code samples, check out <a href="https://github.com/nicl">my github account</a>.</p>

<p class="large">For more information about me, <a href="/curriculum-vitae.html">read my CV</a>.</p>

{% for post in site.posts %}
{% if post.category == 'project' %}
<div class="project">
    <a href="{{ post.url }}"><img src="{{ post.image }}"></a>
</div>
{% endif %}
{% endfor %}