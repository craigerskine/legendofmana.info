## [legendofmana.info](https://legendofmana.info)

### Live sites
- https://legendofmana.info
- https://legendofmana-info.netlify.app/ (in case the domain expires)

### Tech used
- [Twind](https://twind.dev/)
- [11ty](https://11ty.dev/)

### Instructions
1. [Install node.js](https://nodejs.org/) on your computer
2. Download this repository and extract to a folder where you want to store it locally
3. Open a Terminal or Command prompt:

```bash
# change to the site folder
$ cd /path/to-folder/from-step-2

# install the site dependencies
$ npm install

# start a local hot version of the site
$ npm start
```
4. Open http://localhost:8080 in your browser of choice
5. Start editing the local files in your editor of choice and watch in amazement as your browser hot reloads as you save changes

All data, markup, components, layouts, scripts, files, and images are in the `_site` folder. The site will deploy locally to a `public` folder. Theoretically you could upload that folder to any web host since it's just static HTML.

Keep in mind that there are no CSS files anywhere to be found. This is intentional since I used [Twind](https://twind.dev/) (which auto generate CSS on the client-side during browsing). Everything is styled using [Tailwind CSS](https://tailwindcss.com/) v2 syntax and kept organized via [Twind](https://twind.dev/) grouping/one-offs.

Enjoy!

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/adad5c62-bc49-4a54-9e64-dfa703207f65/deploy-status)](https://app.netlify.com/sites/legendofmana-info/deploys)
