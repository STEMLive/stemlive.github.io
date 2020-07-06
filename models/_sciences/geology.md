---
tag: geology
title: Geology
short_description: >-
    Geology is a great subject.
parents:
  - biology
  - chemistry
  - physics
layout: science
---
## What is geology?

Geology is the study of the earth. It incorporates various other sciences, including {% for parent in page.parents %}{%- assign science = site.sciences | where: 'tag', parent | first -%}{% if forloop.last %} and{% elsif forloop.index > 1 %},{% endif %} <a href="{{ science.url }}" class="text-{{ science.tag }}">{{ science.tag }}</a>{% endfor %}.

{% include components/streamers/featured.html science="geology" platform="twitch" %}
{% include components/streamers/featured.html science="geology" platform="youtube" %}
