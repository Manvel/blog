---
title: Browser extensions and Webextensions API
description: [TBA]
image: [TBA]
author: saroyanm
date: 2019-12-23
type: post
tags: [extension]
---

Back in 2012 each browser vendor has it's own specific technology for
browser extension creation, for example [addons for Firefox were based on
XUL](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Introduction),
instead of creating HTML pages you would create `.xul` file and use XUL tags for
composing the UI, locales would be located in `.dtd` files and architecture were
quite different. Intenet Explorer addons development would have been done using
C++ or C#. So basically everyone has it's own way of dealing with those.

Chrome started supporting extensions in 2010 and chrome extensions API was the
first browser extension API based on HTML, CSS, and JavaScript. Nowdays most of
major browsers have switched into supporting similar APIs which is based on the
one introduced by Chrome and [Browser Extensions
draft](https://browserext.github.io/browserext/) introduced by W3C group is an
effort of creating a generic specification for browser extensions API.

In 2015 Mozilla had announced the decision to discontinue supporting XUL based
addons and as a result, Firefox team has developed WebExtensions API, which is
to a large extent compatible both with Chrome extensions API and W3C group's
specification draft and currently is the way to develop browser extensions for
Firefox. Event though the API is quite similar to Chrome, there are some notable
differences. Firstly, it uses `browser.*` namespace for Webextensions API
instead of `chrome.*`, but still does support `chrome.*` namespace for simplify
proxy of Chrome exntensions into Firefox, so basically there are both
namespaces, but they work quite differently. WebExtensions API is using
promises, while Chrome is yet using oldfashioned callbacks API.

So nowdays even though it's theoretically possible to use `chrome.*` to easily
port Chrome extension in Firefox, that doesn't sound like a good idea to me,
because now Firefox implementation of web extensions are more generic and using
promises instead of callback APIs looks more appealing, thanksfully, mozilla has
developed a polyfill library for Promise-based WebExtension APIs in Chrome.
