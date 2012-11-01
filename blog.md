---
layout: default
title: blog
---
<p class="large">I like technology and enjoy writing on a range of subjects - books, economics, faith, anything that interests me really...</p>

<ul class="posts">
  {% for post in site.posts %}
  <li><div class="date">{{ post.date | date_to_string }}</div><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>