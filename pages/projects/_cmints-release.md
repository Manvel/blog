---
title: CMintS
description: CMintS is a CMS and Static Site Generator that has been implemented with the Internationalization in mind. 
image: images/projects/cmints/logo-small.png
author: saroyanm
date: 2019-02-23
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

```
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
```
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


**Why EJS:** Switching from using one templating engine to another it also requires switching
mindset and refreshing memory about the templating engine syntax, the only time
I'm not doing that is when I'm using EJS, as it's using JavaScript syntax, which
makes the usage of EJS quite simple especially when one writes JavaScript almost
every day. [Learn more about Using EJS in CMintS themes](https://cmints.io/documentation/themes/ejs).

**Why LESS:** There were never preference between LESS or SASS, as for me they both look
identical, but as LESS is implemented in JavaScript I thought I would go for
that one considering that I'm developing a CMS using NodeJS. In addition It's
quite easy to control the CSS generation and even add minification using CMintS,
it's also something a lot of SSGs are lacking, was surprising that having a
minification configuration out of the box is not as common as I thought. [Learn more about Using LESS in CMintS themes](https://cmints.io/documentation/themes/less).

**JS Modules:** Modularization of Layout and CSS almost always leaves importance of JavaScript
modularization for the theme and layout creation unnoticed, while I want to
write a modular cross-browser CSS I would like to write Modular JS as well and
with CMintS you can do that, same as with the LESS it comes with the
minification and other helpful magic like source map inclusion and etc. [Learn more about Using JS Modules in CMintS themes](https://cmints.io/documentation/themes/js-modules)

### Multi-language

Most of the existing SSGs don't provide i18n support out of the box, or don't
provide at all, SSGs that provide it, are usually handling that by creating a
separate page per language. If you are creating a website where you don't care
about the languages being in sync with the source text(wikipedia style), this
suppose to be a fine choice, but if you have also seen a lot of websites where
the content is different in different languages causing a spread of
missinformation you know what I'm talking about.

In most of the cases this is a wrong architectural
decision, because it's making very hard to almost impossible to maintain
especially when you are trying to scale, if you have noticed that there are a
lot of websites which content provide complete different information in
different languages you know what I'm talking about. Such solution can be fine
if you are creating a website where translations don't have to match(ex.
wikipedia), but that's far away from being ideal when you need to keep the
content of the page consistent.

