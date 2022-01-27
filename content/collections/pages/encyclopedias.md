---
id: 9437c7a7-700b-4c96-9115-b7c31bb363ee
blueprint: pages
title: Encyclopedias
updated_by: ea6393ed-5c2e-4abf-b78d-80b9488e0102
updated_at: 1643247149
subtext: 'Game System'
---
<ul>
  {{ nav :from="uri" }}
    <li>
      <a href="{{ url }}">{{ title }}</a>
    </li>
  {{ /nav }}
</ul>