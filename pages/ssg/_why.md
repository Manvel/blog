---
title: Why use Static Site Generator(SSG)?
description: Security, free hosting and blazing fast speed of Static Site Generators. Three reasons of choosing Static Site Generator over classic CMS.
image: images/projects/cmints/ssgs.png
author: saroyanm
date: 2019-02-23
type: post
tags: [ssg]
---

<img src="/images/projects/cmints/ssgs.png" class="full-width">

Nowdays there are a lot of static site generators(SSG) as you can see from the
[staticgen.com](https://www.staticgen.com/) and
[staticsitegenerators.net](https://staticsitegenerators.net/) lists and yet
developers are creating more and more. Here are couple of reasons why you might
like to choose SSG over classic Blog/Website CMS:

### Security

If you have experienced a hack of your traditional CMS installation(like Drupal,
Wordpress and etc) after you have stopped maintaining it for a while, or forgot
to update it, then you know what I'm talking about. As you can see from [current
twitter hashtag thread](https://twitter.com/hashtag/drupalgeddon) security
breaches are happening quite often in such complex installations and a constant
maintenance is required for them, if you haven't updated your installation for a
while, please do it.

### Free hosting

There are nowdays a lot of ways how you can host your static website:

- [Github Pages](https://pages.github.com/)
- [Gitlab pages](https://about.gitlab.com/product/pages/)
- [Netlify](https://www.netlify.com/)

Those tools also provide you with a free SSL Certificate using [Let's
Encrypt](https://letsencrypt.org/), no need to buy and/or install a certificate
on your own and keep maintaining the renewal. So nowdays there is no reason of
having a non encripted website, getting an SSL certificate issued is just a one
free checkbox away.

### Fast

SSGs are generating HTML pages, so they can be requested right away - no dynamic
content generation and database calls are required. In addition free hostings
mentioned above are taking care of your website http caching. So things are
getting as fast as they could be, as you can see also from the audit screenshot
of [https://cmints.io/](https://cmints.io/) homepage below an SSG that is used
to power current blog as well.

<img src="/images/projects/cmints/website-audit-2019-03-06.png" class="full-width">

[Learn more about CMintS](https://cmints.io/).
