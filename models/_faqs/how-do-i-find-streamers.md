---
layout: faq
title: How do I find streamers?
permalink: /faq/how-do-i-find-streamers
---
<p>
  You can find streamers on the following pages:
</p>

<ul class="list-default">
  <li>
    <a href="{{ '/lineup' | relative_url }}">Lineup</a>
  </li>

  {%- for science in site.sciences -%}
  <li>
    <a href="{{ science.url }}" class="text-{{ science.tag }}">
      {{ science.title | default: science.tag | replace: '-', ' ' | capitalize }}
    </a>
  </li>
  {%- endfor -%}
</ul>
