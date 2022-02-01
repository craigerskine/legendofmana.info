---
id: b9c68eea-3d57-4cac-a216-4dff7ccda800
blueprint: pages
title: Extras
updated_by: ea6393ed-5c2e-4abf-b78d-80b9488e0102
updated_at: 1643666506
subtext: Misc
---
## Goodies

{{ collection:extras sort="order" }}
  <div class="pb-8 lg:(flex space-x-12)">
    <div class="flex-1">
  {{ partial:_partials/heading tag="h2" :subtext="subtext" :link="link" img="/assets/img/encyclopedias/en-tome.png" border="yes" }}{{ title }}{{ /partial:_partials/heading }}
    </div>
    <div class="flex-none">
      <a href="{{ link }}" class="group block relative hover:animate-waggle focus:animate-waggle" download>
        <figure>
          <img src="{{ image }}" alt="{{ title }} Image" class="relative z-[-1] rounded shadow-md ring-1 ring-black ring-opacity-75">
          <figcaption class="p-4 w-16 bg-pri-900 text(white 3xl) flex items-center justify-center absolute z-10 left-0 inset-y-0 transition-all group-hover:(w-full bg-opacity-50) group-focus:(w-full bg-opacity-50)">
            <i class="fal fa-arrow-to-bottom text-yellow-400" title="Download {{ title }}"> </i>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
  {{ if slug == 'save-file' }}
    {{ content }}
  {{ /if }}
{{ /collection:extras }}