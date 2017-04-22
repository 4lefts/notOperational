---
title: Sea
publishDate: 2016-08-29
layout: post.handlebars
---
Sea is a simple soundscape/drone synth; you can find the app [here](http://notoperational.com/sea).

[Additive synthesis] doesn't get talked about much. It feels like a poor relation to fm, since you need a lot more oscillators to get a similar result, and it's not immediately obvious how you're going to control them all. What can you do? Multi-breakpoint envelopes and individual detuning control for dozens partials would be interesting, but it would be way too much effort to program and would probably feel like shooting in the dark.

This program has 12 oscillators generating sine waves, and the amplitude of each morphs randomly over time. Each oscillator's frequency is an integer multiple of the fundamental (which is itself a randomly chosen midi note from 23 to 40 (b0 to e2), somewhere around the bottom of a 5 string bass). Every so often the fundamental shifts, choosing a new note from the minor pentatonic scale, and a certain amount of random detuning is added or subtracted from the frequency of each partial. Sometimes a lot.

My personal favourite drone sounds come from this detuning. Too much, with too many partials, at too high a pitch, sounds too shrill for me, but low down, I like the metallic drones it makes.

**Note:** this is a re-write of the original version of the sea app, using [tone.js](https://github.com/Tonejs/Tone.js). The performance is a lot better than it was using the p5 sound library. The visuals are built with the [p5js] library.

[Source here]

[Additive synthesis]: https://en.wikipedia.org/wiki/Additive_synthesis
[p5js]: https://p5js.org
[p5js.sound]: http://p5js.org/reference/#/libraries/p5.sound
[source here]: https://github.com/4lefts/sea
