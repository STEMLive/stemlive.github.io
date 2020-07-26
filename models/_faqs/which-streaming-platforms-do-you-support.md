---
layout: faq
title: Which streaming platforms do you support?
description: >-
  Learn about the live streaming platforms our STEM educators use.
permalink: /faq/which-streaming-platforms-do-you-support
keywords:
  - STEM livestreaming
  - Science livestreaming
  - Science Twitch
  - Science YouTube
---
<p>
  At present, we support the following live streaming platforms for our STEM educators:
</p>

{%- assign streaming_platforms = '' | split: '' -%}
{%- assign streaming_services = site.educators | where: 'display_on_site', true | group_by: 'streaming_platforms' -%}

{%- for streaming_service in streaming_services -%}
  {%- assign streaming_platform = streaming_service.name | split: '=>' | first | replace: '{"', '' | replace: '"', '' -%}

  {%- if streaming_platforms contains streaming_platform -%}
    {%- continue -%}
  {%- endif -%}

  {%- assign streaming_platforms = streaming_platforms | push: streaming_platform -%}
{%- endfor -%}

{%- if streaming_platforms.size > 0 -%}
  <ul class="list-default">
    {%- for streaming_platform in streaming_platforms -%}
    <li>{{ streaming_platform | capitalize }}</li>
    {%- endfor -%}
  </ul>
{%- endif -%}

<p>
  If you feel that we are missing any vital streaming platforms, please let us know at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
</p>
