import CleanCSS from 'clean-css';
import { EleventyRenderPlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import esbuild from 'esbuild';
import mdAttrs from 'markdown-it-attrs';
import mdFoot from 'markdown-it-footnote';
import mdIt from 'markdown-it';
import mdSpans from 'markdown-it-bracketed-spans';
import recentChanges from 'eleventy-plugin-recent-changes';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import yaml from 'js-yaml';

export default function (eleventyConfig) {

  eleventyConfig.setServerOptions({
    domdiff: false,
  });

  eleventyConfig.setDataFileBaseName('_data');

  eleventyConfig.addPassthroughCopy({
    '_site/_assets/files': '_assets/files',
    '_site/_assets/img': '_assets/img',
    '_site/_assets/_root': './',
  });

  eleventyConfig.addWatchTarget('./_site/_app/_app.js');

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(recentChanges, {
    commits: 10, // max
    //filter: 'news', // includes
  });
  eleventyConfig.addPlugin(syntaxHighlight);

  //{% renderTemplate 'md' %}
  //# Blah{.text-center}
  //{% endrenderTemplate %}
  let markdownLibrary = mdIt({
    html: true
  }).disable('code').use(mdSpans).use(mdFoot).use(mdAttrs);
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // shortcodes
  eleventyConfig.addShortcode('bust', () => `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}${new Date().getHours()}`);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('renderblock', function(name) {
    return (this.page.setblock || {})[name] || '';
  });
  eleventyConfig.addPairedShortcode('setblock', function(content, name) {
    if (!this.page.setblock) this.page.setblock = {};
    this.page.setblock[name] = content;
    return '';
  });

  // md {{ some.content | md | safe }}
  eleventyConfig.addFilter('md', function(content) {
    return markdownLibrary.render(content);
  });

  // cssmin
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // date
  eleventyConfig.addFilter('dateOnly', function (dateVal, locale = 'en-us') {
    var theDate = new Date(dateVal);
    const options = {month: '2-digit', day: '2-digit', year: 'numeric', timeZone: 'UTC'};
    return theDate.toLocaleDateString(locale, options);
  });

  // | randomLimit(6, page.url)
  eleventyConfig.addFilter('randomLimit', (arr, limit, currPage) => {
    const pageArr = arr.filter((page) => page.url !== currPage);
    pageArr.sort(() => {
      return 0.5 - Math.random();
    });
    return pageArr.slice(0, limit);
  });

  // pluck
  eleventyConfig.addFilter('pluck', function (arr, value, attr) {
    return arr.filter((item) => item[attr] === value);
  });

  // for item in (items | flatMap('category') | unique('category'))
  eleventyConfig.addFilter('flatMap', (list, key) => list.flatMap((x) => x[key]));
  eleventyConfig.addFilter('unique', (list, key) => {
    const map = new Map(list.map((x) => [x[key], x]))
    return [...map.values()]
  });

  // esbuild
  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['_site/_app/_app.js'],
      outfile: 'public/_assets/js/_app.js',
      bundle: true,
      minify: true,
      sourcemap: false,
    });
  });

  return {
    jsDataFileSuffix: '.data',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'public',
    },
  };
};
