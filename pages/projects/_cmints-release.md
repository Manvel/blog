---
title: CMintS
description: CMintS is a CMS and Static Site Generator that has been implemented with the Internationalization in mind. 
image: images/projects/cmints/logo-small.png
author: saroyanm
date: 2019-02-23
css: [highlight.css]
type: post
category: project
tags: [nodejs, ssg]
---

Nowdays there are a lot of static site generators(SSG) as you can see from the
[staticgen.com](https://www.staticgen.com/) and
[staticsitegenerators.net](https://staticsitegenerators.net/) lists, but yet
developers are creating more and more, seems like there shouldn't be need for
another SSG - that's how I were thinking couple of years ago.

In mid 2016 I was searching for a SSGs that would work perfectly both for my
single and multi-language websites, but I was surprised not being able to find
one that wouldn't require me adding bunch of 3-rd party plugins or have a
sensible i18n implementation.

After more than 1 year of development I'm proudly announcing release of CMintS -
the SSG I was missing, for such a long time.

## What is CMintS?

[CMintS](https://cmints.io/) is a CMS and Static Site Generator for single and
multi-language websites creation.

You can learn more about CMintS at [https://cmints.io/](https://cmints.io/).
It's an open source project and you can find every related repository in the
[CMintS Github organization](https://github.com/cmints).

You can either install CMintS globally as it's described in [installation
documentaion](https://cmints.io/documentation) or by installing it locally, as
it's described in the [Quick Start tutorial](https://cmints.io/en/quick-start).

You can also find Single and Multi lanuguage website starters at [https://single.cmints.io/](https://single.cmints.io/) and [https://multi.cmints.io/](https://multi.cmints.io/) accordingly.

### Project Structure

[Structure of the CMintS](https://cmints.io/en/documentation/getting-started/structure) is quite straightforward:

```css
├── public
├── locales
├── pages
├── theme
└── config.js
```

- [/locales](https://cmints.io/en/documentation/i18n/) - contains translations of the multi-language website project.
- [/public](https://cmints.io/en/documentation/getting-started/structure#public) - store all your static content, images, CSS and etc.
- [/pages](https://cmints.io/en/documentation/pages/) - here goes your website page contents
- [/theme](https://cmints.io/en/documentation/themes) - theme of the website
- [config.js](https://cmints.io/en/documentation/getting-started/configuration) - Here you can store all your static content, images, CSS and etc.

## Layout creation
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

- [/theme/layout](https://cmints.io/documentation/themes/ejs) (**EJS**) - CMintS
  is using EJS as a templating engine for creating layouts. EJS is a simple
  templating language that lets you generate HTML markup while writing plain
  JavaScript.
- [/theme/less](https://cmints.io/documentation/themes/less) (**LESS**) - 
  `.less` files are being processed into the `public/css` directory, only
  filenames starting with "_" are not compiled into the target directory, but
  yet they can be used by other less files. You can also [setup processing options/minification in the config.js](https://cmints.io/documentation/getting-started/configuration#lessoptions).
- [/theme/js](https://cmints.io/documentation/themes/js-modules) (**Browserify**) -
  CMintS is using Node.js-style modules and makes Theme functionality
  implementation modular out of the box. JavaScript files that are placed in
  `theme/js` directory and don't have starting `_` in the filename are being
  compiled into the `public/js` directory. You can also [setup compilation
  options/minification in the
  config.js](https://cmints.io/documentation/getting-started/configuration#jsmoduleoptions)

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
[permalink](https://cmints.io/documentation/pages/frontmatter#permalinks) is
specified).

You can also use [Front
Matter](https://cmints.io/documentation/pages/frontmatter) to specify metadata
for pages:

```yaml
---
title: Front Matter
description: Front Matter is a powerful tool for adding metadata to the pages
categories: [documentation, i18n]
showToc: true
---
```

Here are the pages suported by CMintS:

- [Markdown(.md)](https://cmints.io/documentation/pages#markdown)
- [HTML(.html)](https://cmints.io/documentation/pages#html)
- [EJS(.ejs)](https://cmints.io/documentation/pages#ejs)

## i18n

