---
title: Rewriting chromium browser automation
description: Rewriting Chromium Browser Automation, open sourcing it and the future of CBA.
image: images/projects/cba/rewriting-promo.png
author: saroyanm
css: [highlight.css]
twitterCard: summary_large_image
date: 2021-03-09
type: post
tags: [extension, cba, rewrite]
---

In 2012 I was working for a matchmaking company as a developer at the online
marketing department, affiliate tracking pixels installation was part of my
regular job, also I had to manually test each single of them going through 4-5
pages sign-up form with bunch of validation fields. Sometimes that would occupy
**40-50%** of my time and was a quite frustrative task. That was the time when I
decided to create CBA - a prototype extension that helped me optimizing the task
to only take less than 3% of my time and generate automated reports.

It was quite similar to one of the first videos I have created mid 2012 for
promoting CBA on a random matchmaking website:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_9784gJ4uYk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Since then I was searching for various usecases and enjoying fighting bot
circumvantions, basically I have managed to create a script that would go to
social networks congratulate my friends with birthday, like various posts in
groups, newsfeed, visit various profiles, send friend requests and many more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gP5wC28jCGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## recession

As I have switched my job in 2013 and faild integrating CBA into my daily tasks,
I have stopped actively maintaining the project. Unfortunatelly such projects
require active mainatinance, first was the Facebook liking functionality went
down and instead of playing cat and mouse game with Facebook I have decided to
remove the automation script, later the recording started to work unreliable as
the web was evolving and I was at the time busy developing Adblock Plus, so I
decideded just remove the functionality as the code at that point was barely
maintainable and each small change were introducing a regression. As the result
I have stopped maintaining project in 2015.

## Rewriting

After 5 years of break in 2020 I have finally managed to start rewriting the CBA
and in 2021 I have managed to finally launch the complete rewritten version of
the CBA which include current changes:
- Complete rewrite of the codebase.
- [Modularization using web components.](https://github.com/browser-automation/cba-components)
- Codebase modernization.
- Full automated test coverage.
- [Open sourcing the project.](https://github.com/browser-automation/cba)
- Moved [chrome-automation.com](https://chrome-automation.com/) from slow Drupal instance into a blasing fast
  static website.
- [and more](https://github.com/browser-automation/cba/releases/tag/9.0.0).


### Automated tests

Considering the complexity of the project, regressions are regular thing when I
used to make contributions, opening the project for the community is also
something that requires constant QA. Automations implementation took most of my
time while rewriting the extesnio, but now I can do bugfixes without worrying
that I may spend more time on fixing the regressions.

<img src="/images/projects/cba/npm-test.gif" width="800" style="display: block; max-width: 100%;"/>

### Open sourcing

Finally the CBA has been open sourced and all the source codes can be found in
[browser-automation github organization](https://github.com/browser-automation),
the reason behind the generic organization name is that after the rewrite of the
CBA it should be trivial to prepare builds for Firefox, Edge and plans are to
work on the desktop app and make it less platform dependent in future, so it
seem to be a good idea to start ahead. So if you have a Github account and like
what we do with CBA - please hit that star icon at
[/browser-automation/cba](https://github.com/browser-automation/cba)!
### Components and UI

The rewrite haven't introduced many UI changes, but rather it introduced
replacement of old Jquery libraries with much more lightweight and independent
Web Components. It did required some effort to rewrite the components, but now
they have all the basis for easier modifications and are separate modules, so
it's simpler and safer to introduce changes on top and work on more appealing
UI.

All the components currently live in a [new
repository](https://github.com/browser-automation/cba-components) and whoever
wants can contribute and improve them without worrying that they can introduce
regressions, as the new components are being tested automatically both by unit
and end to end tests.

We are currently working hard to introduce a new UI, to make it more modern less
bulky and provide a better user experience. Stay tuned...
### Modernization

One of the important change is async/await support into code injection,
previously users in order to wait for async script injection they had to use
combination of `sendBgInstruction = false;` and `sendInstruction()`, here is how
it used to look like before:

```js
sendBgInstruction = false;
chrome.tabs.query({active: true}, (tabs) =>
{
  chrome.tabs.remove(tabs[0].id, () =>
  {
    chrome.tabs.remove(tab.id, () =>
    {
      sendInstruction();
    });
  });
});
```

And now same thing can be achieved using:

```js
const [tab] = await browser.tabs.query({active: true});
await browser.tabs.remove(tab.id);
```

### Drupal to SSG

There were several drawbacks in running website on a Drupal, mostly it was
maintainance effort and performance. Thanks to
[@naarrek](https://github.com/naarrek), we were also able to migrate website
which previously fall as a victim of
[drupalgeddon](https://twitter.com/hashtag/drupalgeddon), to much more secure
and performant instance of [CMintS](https://cmints.io/), it definatelly still
have huge room to improve around SEO and finally making the website not look
like so 2010(we are working on it), but yet metrics are much more promising in
comparison to the previous "red" one.

<img src="/images/projects/cba/website-audit-2021-02-15.png" class="full-width"
alt="https://chrome-automation.com homepage performance audit">

## Future of the CBA

I think CBA can have quite promising future regarding the user growth,
considering that it has more than **43 000** weekly users and the project has
already been downloaded more than **250 000** times, it does seem to help people
automate their borring daily tasks and I hope to make the automation creation in
future much more simple and accessible for everyone with the help of
[@Newman](https://www.linkedin.com/in/tigran-sahakyan-b4116268/) with whom we
are working hard on new UI and UX of the product and
[@Alex](https://www.linkedin.com/in/alex-saroyan/) who is helping us with the
business advices and planing.

Surely we have quite a lot of challenges in front of us, one of the biggest and
important challeng will be the changes in the platforms(i.e. [Manifest v3
introduction](https://developer.chrome.com/docs/extensions/mv3/intro/)) and
ensuring that CBA can continue being supported on Chrome in future.

Another challeng which I'm going to take is the revolutionizing the recording of
the automation, currently the recording of the actions isn't working reliable
enough considering the complexity of the modern web, but I'm willing to take the
challeng and in future create automation solution that will require the user
least understanding of the programming and web, in order to create automations.

Those are quite big challenges which we will be working hard to to tackle,
especially now that we can involve more contributors, have better basis and
time.

Also latest data and user feedback analysis provided quite a lot of hints how we
can get more users, increase retention rate and improve the product I would
expect big user growth after some simple modifications. The biggest problem
right now is the small development team and people dedicated to the project, so
any contribution is welcome and if you would like helping us with the
development of CBA please do not hessitate reaching out to me at
[saroyanm@gmail.com](mailto:saroyanm@gmail.com).

Fingers crossed and let's go back to work!
