---
title: What is wrong with SSGs and i18n?
description: TBA.
image: images/projects/cmints/logo-leaf.png
author: saroyanm
date: 2019-02-23
type: post
tags: [ssg]
---

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