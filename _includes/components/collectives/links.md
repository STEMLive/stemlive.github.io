{% if page.links.size > 0 %}
## Links

<ul class="links">
{%- for link in page.links -%}
  <li>
    {%- assign link_type = link[0] | replace: '-', ' ' -%}
    {%- assign link_uri = link[1] -%}
    <span>{{ link_type  }}</span>: <a href="{{ link_uri }}" target="_blank">{{ link_uri }}</a>
  </li>
{% endfor %}
</ul>
{% endif %}
