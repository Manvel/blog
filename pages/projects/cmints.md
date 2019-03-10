---
title: CMintS
description: CMintS is a CMS and Static Site Generator for single and multi-language websites creation. Comprehensive i18n implementation, create themes using EJS, LESS and Modular JS, write content using Markdown and get TMS integration out of the box.
image: images/projects/cmints/logo-leaf-smm.png
author: saroyanm
date: 2019-03-09
css: [highlight.css]
type: post
category: project
tags: [nodejs, ssg]
---

<img src="/images/projects/cmints/logo-leaf.png" class="right" width="90"> In
mid 2017 I was searching for an Static Site Generator(SSG) that would work
perfectly both for my single and multi-language websites, but I was surprised
not being able to find one that wouldn't require me adding bunch of 3-rd party
plugins, do a lot of customization work and have a scalable i18n implementation.

Today I'm happy to announce release of the CMintS! CMS and Static Site Generator
Which is also powering current blog.

## What is CMintS?

<a href="https://cmints.io/" target="_blank">CMintS</a> 
is a CMS and Static Site Generator for single and multi-language websites
creation. Learn more about CMintS at <a href="https://cmints.io/" target="_blank">https://cmints.io/</a>.
It's an open source project and every related repository can be found in the
<a href="https://github.com/cmints" target="_blank">CMintS GitHub organization</a>.

You can either install CMintS globally as it's described in the [installation
documentation](https://cmints.io/documentation) or as a local dependency by
following the <a href="https://cmints.io/en/quick-start" target="_blank">quick start tutorial</a>.

Single and multi-language website starters can be found at
<a href="https://single.cmints.io/" target="_blank">https://single.cmints.io/</a> and
<a href="https://multi.cmints.io/" target="_blank">https://multi.cmints.io/</a> accordingly.

### Project Structure

<a href="https://cmints.io/en/documentation/getting-started/structure" target="_blank">Structure of the CMintS</a> is quite straightforward:

```css
├── public
├── locales
├── pages
├── theme
└── config.js
```

- <a href="https://cmints.io/en/documentation/i18n/" target="_blank">/locales</a> -
  folder contains translations of the multi-language website project.
- <a href="https://cmints.io/en/documentation/getting-started/structure#public" target="_blank">/public</a> -
  stores all your static content, images, CSS and etc.
- <a href="https://cmints.io/en/documentation/pages/" target="_blank">/pages</a> -
  here goes your website page contents.
- <a href="https://cmints.io/en/documentation/themes" target="_blank">/theme</a> -
  theme of the website.
- <a href="https://cmints.io/en/documentation/getting-started/configuration" target="_blank">config.js</a> -
  used for overwriting various website default configurations, generation options and minification setup.

## Theme
```css
theme
├── layouts
│   ├── partials
│   │   ├── footer.ejs
│   │   └── header.ejs  
│   ├── default.ejs
│   └── home.ejs
├── less
│   ├── _footer.less
│   ├── _header.less
│   ├── index.less
│   └── main.less
└── js
    ├── _contextMenu.js
    └── main.js
```

- <a href="https://cmints.io/documentation/themes/ejs) (**EJS**" target="_blank">/theme/layout</a> -
  CMintS is using EJS as a templating engine for creating layouts. EJS is a
  simple templating language that lets you generate HTML markup while writing
  plain JavaScript.
- <a href="https://cmints.io/documentation/themes/less) (**LESS**" target="_blank">/theme/less</a> - 
  `.less` files are being processed into the `public/css` directory, only
  filenames starting with "_" are not compiled into the target directory, but
  yet they can be used by other less files. You can also
  <a href="https://cmints.io/documentation/getting-started/configuration#lessoptions" target="_blank">
  setup processing options and minification in the config.js</a>.
- <a href="https://cmints.io/documentation/themes/js-modules) (**Browserify**" target="_blank">/theme/js</a> -
  CMintS is using Node.js-style modules and makes Theme functionality
  implementation modular out of the box. JavaScript files that are placed in
  `theme/js` directory and don't have starting `_` in the filename are being
  compiled into the `public/js` directory. You can also
  <a href="https://cmints.io/documentation/getting-started/configuration#jsmoduleoptions" target="_blank">
  setup compilation options  and minification in the config.js
  </a>

## Pages

```css
pages
├── about
│   └── team.md
├── about.md
├── documentation
│   ├── getting-started
│   │   ├── configuration.md
│   │   ├── index.md
│   │   └── _structure.md
│   └── i18n
│       ├── index.md
│       └── markdown.md
├── index.ejs
└── news.md
```

The folder structure inside of the pages directory reflects actual URL path when
the page is requested(unless a
<a href="https://cmints.io/documentation/pages/frontmatter#permalinks" target="_blank">permalink</a> is
specified).

[Front Matter](https://cmints.io/documentation/pages/frontmatter) can be used
for pages metadata specification:

```yaml
---
title: Front Matter
description: Front Matter is a powerful tool for adding metadata to the pages
categories: [documentation, i18n]
showToc: true
---
```

Here are page types suported by CMintS:

- <a href="https://cmints.io/documentation/pages#markdown" target="_blank">Markdown(.md)</a>
- <a href="https://cmints.io/documentation/pages#html" target="_blank">HTML(.html)</a>
- <a href="https://cmints.io/documentation/pages#ejs" target="_blank">EJS(.ejs)</a>

## i18n

```css
locales
├── de
│   ├── header.json
│   └── news.json
├── en
│   ├── header.json
│   └── news.json
└── ru
    ├── about
    │   └── teams.json
    ├── header.json
    ├── index.json
    └── news.json
```

Locale files hold list of the translations strings, the translation strings
consist of stringid, message and an optional description.

```json
{
  "heading-main": {
    "description": "Heading of the main page",
    "message": "Заголовок"
  }
}
```

Source language strings can be defined in
<a href="https://cmints.io/en/documentation/i18n/pages" target="_blank">pages</a>
or
<a href="https://cmints.io/en/documentation/i18n/theme" target="_blank">theme</a>
layouts by placing them inside of opening and closing curly braces containing
stringId, optional description and actual text:

```js
{stringId[Description] Source text}
```

Or by <a href="https://cmints.io/documentation/i18n/#defining-path" target="_blank">
defining stringId and locale file path</a>:

```
{stringId(path)}
```

<a href="https://cmints.io/documentation/i18n/" target="_blank">Learn more about i18n here</a>
