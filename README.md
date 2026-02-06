## [legendofmana.info](https://legendofmana.info) [![Netlify Status](https://api.netlify.com/api/v1/badges/adad5c62-bc49-4a54-9e64-dfa703207f65/deploy-status)](https://app.netlify.com/sites/legendofmana-info/deploys)

### Live sites
- https://legendofmana.info
- https://legendofmana-info.netlify.app/ (in case the domain expires)

### Tech used
- [11ty](https://11ty.dev/) - static site generator
  - [Nunjucks](https://mozilla.github.io/nunjucks/) - templating
- [Alpine.js](https://alpinejs.dev/) - js framework
- [Twind](https://twind.style/) - tailwind-in-js

### Instructions
1. [Install node.js](https://nodejs.org/) on your computer
2. Download an integrated IDE like [VSCode](https://code.visualstudio.com/download)
3. Download this repository and extract to a folder where you want to store it locally
4. Drag the folder into an empty IDE window and open the integrated terminal [⌃ + `]

```bash
# install the site dependencies
$ npm install

# start a local hot version of the site
$ npm start
```
4. Open [http://localhost:8080](http://localhost:8080) in your browser of choice
5. Start editing the local files in your editor of choice and watch in amazement as your browser hot reloads your saved changes

All data, markup, components, layouts, scripts, files, and images are in the `_site` folder. The site will deploy locally to a `public` folder. Theoretically you could upload that folder to any web host since it's just static HTML.

Keep in mind that there are no CSS files anywhere to be found. This is intentional since I used [Twind](https://twind.style/) (which auto generates CSS on the client-side during browsing). Everything is styled using [Tailwind CSS](https://tailwindcss.com/) v3.0 syntax and kept organized via [Twind](https://twind.style/) grouping/one-offs.

Enjoy!
