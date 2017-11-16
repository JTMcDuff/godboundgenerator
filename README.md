# Godbound Generator
Generates quick results from the various Godbound charts.  Currently this focuses on courts, once that structure is built out it will expand to other functions such as ruins, etc.

**Godbound is owned and published by Sine Nomine Publishing.  Godbound's content (mostly in the data.js file) may not be used for commercial purposes.**

**See CONTRIBUTING.md for details on how to to contribute.**

## Godbound
* [Sine Nomine Publishing](http://www.sinenomine-pub.com/)
* [Free Version of Godbound](http://www.drivethrurpg.com/product/185959/Godbound-A-Game-of-Divine-Heroes-Free-Edition)

## Tech Stack
* HTML 5 / CSS
* Javascript, including ES6/7 syntax
* jQuery 3.2.1

## TODO
* Write renderConflicts to render a HTML table similar to renderActors.
* Resolve issue with "they're" and other apostrophes leading to strange characters.
* Add selection boxes for number of conflicts.
* Update and organize html for future CSS.

## Court Generation Steps
1.  Generate Organization Power Structure.  -- Working
2.  Choose or Generate Court type.  -- Working
3.  Generate at least three major actors.  Working, set to three actors.
4.  Generate a power structure for each major actor.  -- Working.
5.  Pick at least one conflict.  -- Need to render conflicts.
6.  Pick a protagonist and an antagonist for each conflict.
7.  Generate a few minor actors.  Make this selectable eventually.
8.  Generate a consequence for its destruction. -- Working.
9.  Generate at least one defense.  Default to one, eventually make this selectable. -- Working

## Using Godbound Generator (For non-geeks)
At the moment, this generator can be used in any modern, up-to-date browser.  Just download the entire repo, and then open the index.html file in a new tab (ctrl+o in Chrome).

You could also simply drop it on a simple web-server.  I've done no security checking on this code, so be sure you segregate this from anything valuable.