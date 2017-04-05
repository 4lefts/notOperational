---
title: Process P
publishDate: 2016-08-17
layout: post.handlebars
---
A simple, browser-based drum machine. You can find this app [here](http://notoperational.com/processp), and the source [here](https://github.com/4lefts/processp). It is built using [tonejs].

There are four drums (kick, snare, hat and cymbal), and each is synthesised with sine waves, noise, and filters. It's quite "normal", in that it has that 606-vibe. The sequencer runs vertically since it makes more sense that way on a phone, though the buttons are way too big; there's some work to be done there. It would be good to do a future iteration that used fm/am/ring-mod rather than more "straight" drum synthesis. Ways to alter the number of steps and velocity would be good too, but for a first iteration, I'm pleased.

The performance seems **far** better than using the sound library in [p5js], I'm guessing because the implementation there is tied to the processing-style `draw()` loop? Anyway, sound things are going to use tone from here on out, though a mix of p5 for gui/visualisation and tone for sound is next on the agenda. All gui stuff here is pure html and jQuery.

[tonejs]: http://tonejs.org
[p5js]: http://p5js.org
