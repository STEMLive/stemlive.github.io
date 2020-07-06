---
title: BrainBytes
tag: brainbytes
layout: collective
links:
  twitch: https://www.twitch.tv/team/brainbytes
---
{%- assign shared_streamers = site.educators | where: 'collectives', 'brainbytes' | where: 'collectives', 'theknowledgefellowship' -%}
{%- assign affiliated_streamers = site.educators | where: 'collectives', 'brainbytes' -%}
# About BrainBytes

{% if shared_streamers.size >= 3 %}
BrainBytes features many of the same streamers as <a href="{{ '/collectives/theknowledgefellowship' | relative_url }}">The Knowledge Fellowship</a>, including the following:
<ul class="list-streamers">
{% for shared_streamer in shared_streamers limit:3 %}
  <li>
    <a href="{{ shared_streamer.url }}">{{ shared_streamer.name | default: shared_streamer.title }}</a>
  </li>
{% endfor %}
</ul>
{% else %}
BrainBytes features a diverse cast of STEM educators unique to their team, such as:

<ul class="list-streamers">
{%- for affiliated_streamer in affiliated_streamers -%}
  <li>
    <a href="{{ affiliated_streamer.url }}">{{ affiliated_streamer.name | default: affiliated_streamer.title }}</a>
  </li>
{%- endfor -%}
</ul>
{% endif %}

BrainBytes' streamers incorporate a multitude of disciplines, ranging from automotive repair to astronomy.

{% include components/collectives/links.md %}
{% include components/streamers/featured.html collective=page.tag %}
