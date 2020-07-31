---
layout: faq
title: How do I find streamers?
description: >-
  How do I find science livestreamers on Twitch and YouTube?
permalink: /faq/how-do-i-find-streamers
keywords:
  - STEM livestreaming
  - Science livestreaming
---
<p>
  You can find STEM educators who are livestreaming various sciences on the following pages:
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

<p>
  In addition, you can find streamers through some of the collectives featured on the <a href="{{ '/collectives' | relative_url }}">Collectives</a> page.
</p>

<p>
  (Please Note: This includes those who are livestreaming on Twitch, YouTube, as well as other live streaming platforms.)
</p>
