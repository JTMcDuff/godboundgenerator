# godboundgenerator
Generates quick results from the various Godbound charts.  While currently this focuses on courts, once that structure is built out it will expand to other functions such as ruins, etc.

## Tech Stack
* HTML 5 / CSS
* Javascript, including ES 6 syntax


## TODO
* Add Defense back and front-end.
* Extend conflict generator to actually choose protag and antag.
* Add front-end for conflict generator, either as an extension of the existing table, or as its own table.
* Resolve issue with "they're" leading to strange characters.
* Add Criminal court information.
* Add way for Minor Actors to be involved in court conflicts.
* Add way for firstChart to populate a reference.
  ** Example: Criminal Courts are "main line of crime."

## Court Generation Steps
1.  Generate Organization Power Structure.  -- Working
2.  Choose or Generate Court type.  -- Working
3.  Generate at least three major actors.  Working, set to three actors.
4.  Generate a power structure for each major actor.  -- Working.
5.  Pick at least one conflict.  Start with one, eventually make this selectable.
6.  Pick a protagonist and an antagonist for each conflict.
7.  Generate a few minor actors.  Make this selectable eventually.
8.  Generate a consequence for its destruction. -- Working.
9.  Generate at least one defense.  Default to one, eventually make this selectable.