---
title: Rewriting chromium browser automation
description: TBA
image: images/projects/privacy-manager/rewriting-promo.jpg
author: saroyanm
css: [highlight.css]
twitterCard: summary_large_image
date: 2021-02-12
type: post
tags: [extension, tests, web components]
---

In 2012 I was working for a matchmaking company as a developer in the online
marketing department, as part of my regular task was affiliate tracking pixels
installation and as we didn't have a dedicated QA I should manually test each
single of them going through 4-5 steps of validation forms. Somtimes that would
occupy **40-50%** of my time and was quite frustrative task. That was the time when
I decided to create CBA - a prototype extension that helped me optimizing the
task to only take less than 3% of my time and generate automated reports.

It was quite similar to one of the first videos I have created mid 2012 for
promoting CBA on a random matchmaking website:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_9784gJ4uYk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Since then I was searching for various usecases and enjoying fighting bot
circumvantions, basically I have managed to create a script that would go to
social networks congratulate my friends with birthday, like various posts in
groups, newsfeed, visit various profiles and automating matchmaking.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gP5wC28jCGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hackathons participations and social media activity brought a small fame to the
project back in the time.

## recession

As I have switched my job in 2013 and faild integrating CBA into my daily job, I
have stopped actively maintaining the project. Unfortunatelly such projects
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
- Full automated test coverage.
- [Open sourcing the project.](https://github.com/browser-automation/cba)
- Moved [chrome-automation.com](https://chrome-automation.com/) from slow Drupal instance into a blasing fast
  static website.
- [and more](https://github.com/browser-automation/cba/releases/tag/9.0.0).

### Components and UI

The rewrite currently doesn't introduce much UI changes, but rather it
introduces complete rewrite of old Jquery libraries, which is more lightweight
and independent. It did required some effort to rewrite the components, but it
now provide all the basis to easy modification and modularization for the future
UI changes.

All the components currently live in a [new
repository](https://github.com/browser-automation/cba-components) and whoever
wants can contribute and improve them without worrying that they can introduce
regressions, as the new components are being tested automatically both by unit
and end to end tests.

We are currently working hard to introduce a new UI, to make it more modern less
bulky and provide a better user experience. Stay tuned...

### Automated tests

Considering the complexity of the project, regressions are regular thing when I
used to make contributions, opening the project for the community is also
something that requires constant QA. Automations implementation took most of my
time while rewriting the extesnio, but now I can do bugfixes without worrying
that I may spend more time on fixing the regressions.

<img src="/images/projects/cba/npm-test.gif" width="800" style="display: block; max-width: 100%;"/>

### Drupal to SSG

There were several drawbacks in running website on a Drupal, mostly it was
maintainance effort and performance. Thanks to
[@naarrek](https://github.com/naarrek), we were also able to migrate website
which previously fall as a victim of
[drupalgeddon](https://twitter.com/hashtag/drupalgeddon), to much more secure
and performant instance of [CMintS](https://cmints.io/), it definatelly still
have huge room to improve around SEO and finally making the website not look
like so 2010(we are working on it), but yet metrics are much more promising in
comparison to the previous "red" metrics.

<img src="/images/projects/cba/website-audit-2021-02-15.png" class="full-width"
alt="https://chrome-automation.com homepage performance audit">

### Open sourcing

Finally the CBA is open source and all the source codes can be found in
[browser-automation github organization](https://github.com/browser-automation),
the reason behind the generic organization name is that after the rewrite of the
CBA it should be trivial to prepare builds for Firefox, Edge and plans are to
work on the desktop app and make it less platform dependent.
