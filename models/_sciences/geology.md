---
tag: geology
title: Geology
short_description: >-
  Interested in learning about the formation of the earth and how it has changed over time?
keywords:
  - Geology livestreaming
  - Geology livestreaming Twitch
parents:
  - biology
  - chemistry
  - physics
  - maths
layout: science
---
## What is geology?

Geology is the study of the earth. It incorporates various other sciences, including {% for parent in page.parents %}{%- assign science = site.sciences | where: 'tag', parent | first -%}{% if forloop.last %} and{% elsif forloop.index > 1 %},{% endif %} <a href="{{ science.url }}" class="text-{{ science.tag }}">{{ science.tag }}</a>{% endfor %}.
