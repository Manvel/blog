---
title: CMintS
description: CMintS is a CMS and Static Site Generator that has been implemented with the Internationalization in mind. 
image: images/projects/cmints/logo-small.png
author: saroyanm
date: 2019-02-23
type: post
category: project
tags: [nodejs]
---

Nowdays there are a lot of static site generators as you can see from the
[Netlify](https://www.staticgen.com/) and
[bevry](https://staticsitegenerators.net/) lists, but yet developers are
creating more and more, seems like there shouldn't be need for another SSG -
that's how I were thinking around a year ago.

## Why Static Site Generator(SSG)?

Here couple of reasons why you would like to choose SSG over classic
Blog/Website CMS:
- Security
- Free hosting tools
- Fast

### Security

If you have experienced the hack of your traditional Drupal, Wordpress and/or
any other CMS install after you stopped maintaining it or updating then you know
what I'm talking about. Going through [current twitter
hashtag](https://twitter.com/hashtag/drupalgeddon) you can see how often that
happens and you need constatly take care of your installation, if you haven't
done it for a while, please do it(hope you don't need to reinstall platform and
do bunch of backups).

### Free hosting

There are nowdays a lot of ways how you can host your static website:

- [Github Pages](https://pages.github.com/)
- [Gitlab pages](https://about.gitlab.com/product/pages/)
- [Netlify](https://www.netlify.com/)

Those tools are also provide you free SSL Certificate using [Let's
Encrypt](https://letsencrypt.org/), no need to buy and/or install the
certificate on your own and renewing it. So nowdays there is no reason of having
non encripted websites, getting a SSL certificate issued is just a one checkbox
away.

### Fast

SSGs are generating HTML pages, no dynamic content generation, database calls
and etc. In addition the free hostings are taking care of your website http
caching. So things are as fast as they could be.

## CMintS

Couple of years ago I was researching SSGs in order to find one that would work
perfectly both for my single and multi-language websites, but I was surprised
that there is no SSG that can handle both in the most sensible way for my
projects and if I want use any of the existing SSGs then I will end up adding
bunch of 3-rd party plugins, do a lot of integration work and keep maintaining
all of that.

After stresssing me out for couple of years I have decided to create a project
that will scratch my itch, do all the magic out of the box and make a coffee.
After more than 1 year of hardwork I manage to create CMintS which
unfortunatelly still doesn't make a coffee, but it's finally the SSG that I was
always dreaming of.

Being a web developer for more than 10 years I have been working with bunch of
different CMS, SSGs and Web development tools, unfortunatelly non of them were
making me happy doing the stuff the way I felt sensible.

### Layout creation

Switching from using one templating engine to another it also requires switching
mindset and refreshing memory about the templating engine syntax, the only time
I'm not doing that is when I'm using EJS, as it's using JavaScript syntax, which
makes the usage of EJS quite simple especially when one writes JavaScript almost
every day.

There were never preference between LESS or SASS, as for me they both look
identical, but as LESS is implemented in JavaScript I thought I would go for
that one considering that I'm developing a CMS using NodeJS. In addition It's
quite easy to control the CSS generation and even add minification using CMintS,
it's also something a lot of SSGs are lacking, was surprising that having a
minification configuration out of the box is not as common as I thought.

Modularization of Layout and CSS almost always leaves importance of JavaScript
modularization for the theme and layout creation unnoticed, while I want to
write a modular cross-browser CSS I would like to write Modular JS as well and
with CMintS you can do that, same as with the LESS it comes with the
minification and other helpful magic like source map inclusion and etc.

### Pages

- Switching syntax mindset from one 

[Structure of the CMintS](https://cmints.io/en/documentation/getting-started/structure) websites can seem to be similar to the most of the popular SSGs.

```
├ locales
├ public
├ pages
├ theme
├ config.js
```

- [/locales](https://cmints.io/en/documentation/i18n/) - contains translations of the multi-language website project.
- [/public](https://cmints.io/en/documentation/getting-started/structure#public) - store all your static content, images, CSS and etc.
- [/pages](https://cmints.io/en/documentation/pages/) - here goes your website page contents
- [/theme](https://cmints.io/en/documentation/themes) - theme of the website
- [config.js](https://cmints.io/en/documentation/getting-started/configuration) - Here you can store all your static content, images, CSS and etc.

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

