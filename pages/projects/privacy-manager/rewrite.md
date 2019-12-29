---
title: Rewriting Privacy Manager
description: New web components showcase, automated test implementation using puppeteer for browser extensions and more changes in the new version of the Privacy Manager.
image: images/projects/privacy-manager/rewriting-promo.jpg
author: saroyanm
css: [highlight.css]
date: 2019-12-23
type: post
tags: [extension, tests, web components]
---

First version of the Privacy Manager was created mid 2012 and since then the
codebase didn't have much of drastic updates. In 7 years web technologies has
been advanced quite a lot and maintaining an old monolithic code was quite a
challenge:

- [No modularization.](#web-components)
- [No tests running in the browser.](#automated-tests-and-puppeteer)
- [Callbacks hell.](#webextension-polyfill)
- and more..

Even though it took 24 hours to create [Privacy Manager for a
Hackathon](https://www.youtube.com/watch?v=kORDTtLnJxE) and 1 week, to modify it
with the help of Google Chrome team in Munich, the complete rewrite took me
around 4-5 months. So let's have a look into those changes. 

## Web Components

Initial version of Privacy Manager had a monolith implementation and as it was
designed as part of a Hackathon project, my goal was to just make it work, as a
result I have got a quite messy interconnected widgets, which I was trying to
refactor from time to time. The GIF below describes quite well Privacy
Manager's development experience:

<img src="/images/general/leaking-pipes.gif" width="800" style="display: block; max-width: 100%;"/>

In the mid 2017 decision was made to get rid of Jquery and Jquery UI
dependencies from the Privacy Manager, because most of the things I needed
Jquery for, was already simpler doing in vanila JavaScript. That change saved me
from the need of keeping Jquery up to date and made me realize again how
advanced has JavaScript become, but yet each time there was a request from a
community to add a new feature I kept realizing that in order to keep project
maintainable I need to find another solution to the old monolith architecture.
After getting rid of Jquery UI plan was to decide on a framework that would help
me develop components in isolation, but I always was occupied with other
projects.

Early 2019 I switched to working part-time and decided to provide rest of my
time to my personal projects. Mid 2019 I have started closely looking into Web
Components which seem to be a great fit for Privacy Manager and a good enough
reason for experimenting with the technology, especially after successfull
adaptation of  Web Components in the company where I'm working.

It actually took me longer than I have expected to migrate my old-fashioned
widgets into Web Component, but now they seem to work pretty well and most
importantly be in complete isolzation. They definatelly has a lot of room for
improvement, but in comparison to the previous version of Privacy Manager, the
code looks finally maintainable :) Below you can find Web Components, used in
Privacy Manager.

### pm-toggle

pm-toggle is a basic toggle switch which comes with text, description and actual
toggle.

<iframe height="100"
    src="https://pm-components.netlify.com/smoke/pm-toggle/embed">
</iframe>

You can find [pm-toggle here](https://pm-components.netlify.com/smoke/pm-toggle)
and [source code for pm-toggle
here](https://github.com/Privacy-Managers/pm-components/tree/master/src/components/pm-toggle).

### pm-table

Lazy loaded sortable table which is used in both Cookies and Network tabs of the
Privacy Manager.

<iframe width="100%" height="400"
    src="https://pm-components.netlify.com/smoke/pm-table/embed">
</iframe>

You can find [pm-table here](https://pm-components.netlify.com/smoke/pm-table)
and [source code for pm-table
here](https://github.com/Privacy-Managers/pm-components/tree/master/src/components/pm-table).

### pm-dialog

Modal dialog which is used as informational, confirmation and cookie editing
dialog.

<iframe width="100%" height="100px";
    src="https://pm-components.netlify.com/smoke/pm-dialog/embed">
</iframe>

You can find [pm-dialog here](https://pm-components.netlify.com/smoke/pm-dialog)
and [source code for pm-dialog
here](https://github.com/Privacy-Managers/pm-components/tree/master/src/components/pm-dialog).

### pm-tab-panel

Tab panel which is used for switching between various sections in the Privacy Manager.

<iframe width="100%" height="100px";
    src="https://pm-components.netlify.com/smoke/pm-tab-panel/embed">
</iframe>

You can find [pm-tab-panel here](https://pm-components.netlify.com/smoke/pm-tab-panel)
and [source code for pm-tab-panel
here](https://github.com/Privacy-Managers/pm-components/tree/master/src/components/pm-tab-panel).

### pm-button

Various buttons used in the Privacy Manager.

<iframe width="100%" height="70px";
    src="https://pm-components.netlify.com/smoke/pm-button/embed">
</iframe>

You can find [pm-button here](https://pm-components.netlify.com/smoke/pm-button)
and [source code for pm-button
here](https://github.com/Privacy-Managers/pm-components/tree/master/src/components/pm-button).


## Automated tests and puppeteer

Until lately only test that have been implemented in Privacy Manager was some
linter checks, to ensure consistency of the code and styles. Lack of test always
used to strike back in the form of slow development speed and stress when
addressing changes. 

When the development of the Web Components for Privacy Manager has started I was
hopping that it would be possible to use [jsdom](https://github.com/jsdom/jsdom)
or a similar alternative to implement tests, but unfortunately [jsdom has
problem with Web Components
support](https://github.com/jsdom/jsdom/issues/1030). After spending way too
much time looking into alternatives, the simplest solution for my use case
appears to be runnig actual Chrome browser in order to minimize all issues
related to Web Components support. Even though decision of running actual
browser, in order to test simple components felt in the begining as an overkill,
but it has saved a lot of headache and worked apparently pretty well.

### puppeteer for web components

[Puppeteer](https://github.com/puppeteer/puppeteer) is a powerful Node.js
library that allows running and controling Chromium browser by writing Node.js
code. Puppeteer can run both headless and headfull mode.

Running test in the browser has notable benefit over using other implementation
of web standards like jsdom, simply because tests are being run in much closer
to the production environment, in case of the Privacy Manager production
environment actually is the Chrome browser. Also Browser vendors and especially
Chrome and Firefox team are one of the first to have the standarts
implementation ready in the browsers, so if something works in the puppeteer
than it's much more likely to work in the Chrome browser as well, but surelly
it's a beast in comparison to jsdom because you are running actual browser.

Runnig browser using puppeteer is as simple as running the code below:
```js
const browser = await puppeteer.launch({headless: true}); // Launching browser
const page = await browser.newPage();  // Opening a new tab
// Specifying User-agent.
await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
// Loading a page into the open tab
await page.goto(`https://google.com`);
```

The code above creates a `headless` browser - a browser without a graphical user
interface, if one needs to run the browser with the graphical interface, it's
can be done by using `await puppeteer.launch({headless: false});`.

[Puppeteer has a quite extensive
API](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md), but most
importantly it allows executing script in the page context and also return a
value or a representation of the DOM object(JSHandle) that can be
used in execution method which eventually will reffer to a DOM object.

```js
const pmToggle = await page.evaluateHandle(() => document.querySelector("pm-toggle"));
const result = await page.evaluate((pmToggleElement) =>
{
  return pmToggleElement.isEnabled();
}, pmToggle);
console.log(result); // true | false
```

This makes puppeteer quite flexible and basically that's all I needed for
testing web components, connecting that with [assertion
API](https://nodejs.org/api/assert.html) and [travis CI](https://travis-ci.com/)
was last piece in my [Continues Integration
workflow](https://travis-ci.com/Privacy-Managers/pm-components).

[Puppeteer tests implementation for the pm-components can be found
here](https://github.com/Privacy-Managers/pm-components/tree/master/tests/puppeteer),
implementation would need a refactoring, but currently it serve the purpose
pretty well and it takes in average 3s to run all the tests, which is quite
great considering that they are being run in actual browser.

### puppeteer for web extensions

Even though puppeteer served it's purpose for web compoents, unfortunatelly it
wasn't as smooth when it came to the actual integration tests for the web
extension(Privacy Manager).

There are some limmitations when it comes to testing actual browser extension,
some of the limmitations have workaround, but for others it doesn't seem to
be much of workarounds available.

First limmitation is that it's not possible to load extensions in the headless
mode, in order to load web extension headfull mode should be used instead. To
load the browser extension, we are going to use `--load-extension` and
`--disable-extensions-except` arguments, first we need to specify path of the
extension we would like to use and then disable all other extensions.

```js
const extensionPath = "dist";
const browser = await puppeteer.launch({
    headless: false, // extension are allowed only in the head-full mode
    args: [
        `--disable-extensions-except=${extensionPath}`,
        `--load-extension=${extensionPath}`
    ]
});
```

After loading the extension, we need to find that extension's ID. That can be
done by looping through all available targets, where you can find actual
background page of the extension and hence also extension ID.

```js
const targets = await browser.targets();
const backgroundPage = targets.find(({ _targetInfo }) =>
{
    return _targetInfo.title === "Privacy Manager";
});
const [,, extensionID] = backgroundPage._targetInfo.url.split('/');
```

Main UI of the Privacy Manager is located in the extension's popup window, which
in this case is located in `popup.html`.

```js
await page.goto(`chrome-extension://${extensionID}/popup.html`);
```

Now we can run the code and test the functionality of the popup page.

Privacy Manager is using optional permissions, in order to use cookies tab
and/or monitor the network traffic the extesnion needs to ask the user's consent
to access that data, but the problem is that there seem to be no way to access
browser's native permission consent dialog using puppeteer to confirm or deny
the request, which is quite sad and it prevents the extension from being fully
tested. An [issue was created about requesting and removing optional
permissions](https://github.com/puppeteer/puppeteer/issues/5054), but
unfortunatelly no answer there for 2 months already and I couldn't find a better
solution than modifying the `manifest.json` in the test environment to bypass
the permission wall, which make it possible to test most of the functionality,
but leaves some of the edge cases and permission related tests untouched for
now.

As a result, now most of the important and tidious integration tests are ready
and running automatically, with the exception of several edge cases that wasn't
possible to test because of the limmitations and now it feels so annoying to
realize that I used to test all that manually. Test that used to take sometimes
even 20-30minutes of my time, now are being run in just 9s and automatically.

<img src="/images/projects/privacy-manager/npm-test.gif" width="800" style="display: block; max-width: 100%;"/>

[Puppeteer tests implementation for the privacy-manager are located
here](https://github.com/Privacy-Managers/Privacy-Manager/tree/master/test/puppeteer)
and builds hopefully are passing :)

[![Build Status](https://travis-ci.com/Privacy-Managers/Privacy-Manager.svg?branch=release)](https://travis-ci.com/Privacy-Managers/Privacy-Manager).

### webextension-polyfill

Privacy Manager's code was a real callbacks hell and finally I've got my hands
on fixing that. Plan was to wrap Chrome's callback's based API to one that will
use promises instead and eventually make the code compatible with [Firefox's
WebExtensions
API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions),
for the future plan of making Privacy Manager being available in Firefox as
well. That looked to be a lot of work, but doing a little reseach I have
stumbled upon
[mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
repository, which were basically doing what I was looking for. The problem was
that the project were not supporting all Chrome Privacy APIs, but only those
which were supported by Firefox, thanksfully mozilla development team was very
supportive after the [issue about missing chrome privacy
APIs](https://github.com/mozilla/webextension-polyfill/issues/204) was reported
to them and [they helped me fixing that issue in a spearate
PR]((https://github.com/mozilla/webextension-polyfill/pull/205)).

Currently Privacy Manager is using promises and it's now more closer into being
ported into Firefox, than ever before. There are still some work to do to make
that possible, but it's now more of a documentation work and tests automation.

## Privacy Managers organization

After moving Web Components into a separate repository, it already made sense to
move Privacy Manager related repositories into a new Github organization. Now
the new organization is ready and both, [Privacy Manager
Components](https://github.com/Privacy-Managers/pm-components) and [Privacy
Manager](https://github.com/Privacy-Managers/Privacy-Manager) are moved into the
[Privacy Managers organization](https://github.com/Privacy-Managers). The reason
why the organization name is plural, is that the plan is to host Privacy
Manager's landing page at `privacymanagers.org`(website is in the designing
phase) and hopefully also host there various resources about Privacy and
Security.

[Get Privacy Manager here](https://chrome.google.com/webstore/detail/privacy-manager/giccehglhacakcfemddmfhdkahamfcmd).
