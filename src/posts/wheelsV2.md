---
title: Wheels V2
publishDate: 2016-11-24
layout: post.handlebars
---
Another go at creating a meditative web app that plays cyclical sine waves. Currently plays a major scale centered around a3 (220hz). It's [here](http://notoperational.com/wheels-v2).

It uses [pythagorean tuning](https://en.wikipedia.org/wiki/Pythagorean_tuning) to create the scale.

##To Dos
* Add more scales, and a selection input to choose between them. The number of nodes will need to update.
* Better visualisation - adding in more to the analysis of the playing sound.
* Improve synthesis to add in harmonics. See samples of Tibetan singing bowls for ideas.
* Sort out the panning - at the moment it's just randomised for each node between -1 and 1. The nodes should really be panned according to their positions around the wheel.
* Performance (especially on mobile). This is using [tone.js](https://github.com/Tonejs/Tone.js), so performance is *a lot* better than using the p5 sound library, but it could be a lot better still. Reduce frame rate?

Source [here](https://github.com/4lefts/wheelsV2).
