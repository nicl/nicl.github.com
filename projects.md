---
layout: default
title: projects and experience
---

{% for post in site.posts %}
{% if post.category == 'project' %}
<div class="project">
    <a href="{{ post.url }}"><img src="{{ post.image }}"></a>
</div>
{% endif %}
{% endfor %}