---
title: BrainBytes
tag: brainbytes
layout: collective
links:
  twitch: https://www.twitch.tv/team/brainbytes
---
{%- assign shared_streamers = site.educators | where: 'collectives', 'brainbytes' | where: 'collectives', 'theknowledgefellowship' | where: 'display_on_site', true -%}
{%- assign exclusive_streamers = site.educators | where: 'collectives', 'brainbytes' | where_exp: 'educator', 'educator.collectives.size == 1' | where: 'display_on_site', true -%}
{%- assign affiliated_streamers = site.educators | where: 'collectives', 'brainbytes' | where: 'display_on_site', true -%}
# About {{ page.title }}

{% if shared_streamers.size >= 3 %}
{{ page.title }} features many of the same streamers as <a href="{{ '/collectives/theknowledgefellowship' | relative_url }}">The Knowledge Fellowship</a>, including the following:
<ul class="list-streamers">
{% for shared_streamer in shared_streamers limit:3 %}
  <li>
    <a href="{{ shared_streamer.url }}">{{ shared_streamer.name | default: shared_streamer.title }}</a>
  </li>
{% endfor %}
</ul>
{% elsif exclusive_streamers.size > 0 %}
{{ page.title }} features a diverse cast of STEM educators exclusive to their team, such as:

<ul class="list-streamers">
{%- for exclusive_streamer in exclusive_streamers -%}
  <li>
    <a href="{{ exclusive_streamer.url }}">{{ exclusive_streamer.name | default: exclusive_streamer.title }}</a>
  </li>
{%- endfor -%}
</ul>
{%- else -%}
{{ page.title }} features a growing number of streamers spanning various disciplines, from automotive repair to astronomy.

At present, {{ page.title }} has a number of <span class="counter">{{ affiliated_streamers.size }}</span> registered on {{ site.title }}.
{% endif %}
