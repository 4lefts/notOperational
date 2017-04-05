---
title: Wheels
publishDate: 2016-08-03
layout: post.handlebars
---
I wrote a drone synthesizer *very* loosely based on the idea of Tibetan singing bowls. You can find it [here](http://notoperational.com/wheels).

[Tibetan singing bowls]. That wikipedia article says that bowls usually produce second and third harmonics: I should probably experiment with the synthesis. Click each wheel to start/stop. The frequency of the fundamental bowl is random between 100 and 400 hz, and the second and third bowls are tuned to the perfect fifth and the either major or minor third using [Pythagorean tuning]. Select a major or minor key with the button.

The colour palette came from the excellent [lolcolors], and I totally stole the slider button idea from [Devtips' CSS animations series]. Travis Neilson makes the best tutorials there are.

### A note on performance

This program uses [p5js] and [p5js.sound]. They're great libraries, but I'm finding the performance on mobile to be pretty rough. I'm assuming this is down to me doing something wrong. This time, rather than responsively resize the p5 canvas depending on viewport width, I've set the size to a fixed 320 pixels, to see if this helps. 320 pixels is not a lot of space to work with, but if these apps are going to work on mobile, then the gui/visualisation will have to fit in that space anyway.

### Edit

Apparently, this is all too much for a humble phone. The canvas size might help a little, but not much. There are 9 sine oscillators (carrier, modulator and amplitude lfo for each wheel) here, and the audio breaks up a lot on my android phone. I'm not too sure where to go from here. I might try using tone.js next, skip some of the procedural drawing in p5, and use html elements for the GUI.

[source here]

[Tibetan singing bowls]: https://en.wikipedia.org/wiki/Singing_bowl
[Pythagorean tuning]: https://en.wikipedia.org/wiki/Pythagorean_tuning
[lolcolors]: http://lolcolors.com
[devtips' css animations series]: https://www.youtube.com/user/DevTipsForDesigners/
[p5js]: https://p5js.org
[p5js.sound]: http://p5js.org/reference/#/libraries/p5.sound
[source here]: https://github.com/4lefts/wheels
