---
id: 9437c7a7-700b-4c96-9115-b7c31bb363ee
blueprint: pages
title: Encyclopedias
updated_by: ea6393ed-5c2e-4abf-b78d-80b9488e0102
updated_at: 1643403017
subtext: 'Game System'
---
## Game Systems / Mechanics

<ul class="mt-8 grid(flow-row cols-2) gap-x-4 md:(grid)">
  {{ nav :from="uri" }}
    {{ if count <= 6 }}
    <li class="pb-8">
      {{ partial:_partials/heading
        tag="h2" 
        :link="url" 
        :subtext="subtext" 
        :img="thumbnail" 
        border="yes" 
      }}
        {{ title }}
      {{ /partial:_partials/heading }}
    </li>
    {{ /if }}
  {{ /nav }}
</ul>