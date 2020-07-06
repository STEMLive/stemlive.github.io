---
title: BrainBytes
tag: brainbytes
layout: collective
links:
  twitch: https://www.twitch.tv/team/brainbytes
---
{%- assign shared_streamers = site.educators | where: 'collectives', 'brainbytes' | where: 'collectives', 'theknowledgefellowship' | where: 'display_on_site', true -%}
{%- assign affiliated_streamers = site.educators | where: 'collectives', 'brainbytes' | where: 'display_on_site', true -%}
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
{% elsif affiliated_streamers.size > 0 %}
BrainBytes features a diverse cast of STEM educators unique to their team, such as:

<ul class="list-streamers">
{%- for affiliated_streamer in affiliated_streamers -%}
  <li>
    <a href="{{ affiliated_streamer.url }}">{{ affiliated_streamer.name | default: affiliated_streamer.title }}</a>
  </li>
{%- endfor -%}
</ul>
{%- else -%}
BrainBytes features a growing number of streamers spanning various disciplines, from automotive repair to astronomy.
{% endif %}

{% include components/collectives/links.md %}
{% include components/streamers/featured.html collective=page.tag %}
