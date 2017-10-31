# godboundgenerator
Generates quick results from the various Godbound charts.  While currently this focuses on courts, once that structure is built out it will expand to other functions such as ruins, etc.

## Tech Stack
* HTML 5 / CSS
* Javascript, including ES 6 syntax
* jQuery 3.2.1


## TODO
*  Refactor renderResult into renderCourt with appropriate handling of court object.
*  Refactor genCourt to create a court object.
*  Refactor Major Actor functionality to be an array inside the court object.
*  Refactor genMajorActors to include power sources.

## Court Generation Steps
1.  Generate Organization Power Structure.  -- Working
2.  Choose or Generate Court type.  -- Working
3.  Generate at least three major actors.  Right now force to three, eventually add options.
4.  Generate a power structure for each major actor.
5.  Pick at least one conflict.  Start with one, eventually make this selectable.
6.  Pick a protagonist and an antagonist for each conflict.
7.  Generate a few minor actors.  Make this selectable eventually.
8.  Generate a consequence for its destruction.
9.  Generate at least one defense.  Default to one, eventually make this selectable.