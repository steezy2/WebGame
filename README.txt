Our game is fun, functions well, and honestly is a little bit addicting. Cars come 10% faster each level, and your score per level is linked to a timer based on how fast you get across the road. 

We used CSS3 key frames to animate multple aspects of our header. On page-load, the header slides nicely into place, and then while you're playing, the stop sign cycles through many colors. We also used CSS to create our instructions that appear when your hover your mouse over the "display instructions" text.

One of the toughest things to deal with was using the same car images while facing them different directions. The canvas has a rotate function that rotates the entire canvas, and you can do that, draw the image, and then un-rotate the canvas, but even then it had really weird effects on the vehicle locations and movements. After spending way too long on this, we decided to just copy the images and rotate them before hand, meaning we have to load 6 more photos than we otherwise would have, but they're all small photos.

We added custom animation for the more info button as well as chaining for hiding/showing the info. Additonally there is screen resizing functionality and a restart button that hide/show on win/lose. Additonally the restart button has some css that moves it depending on screen size. This is to enable mobile support (no space bar on mobile).

Up arrow and Down arrow buttons work on click for mobile.

There was a strange bug trying to do on click events with jquery
instead of using the normal code such as:
$("#restart").click(function(){

we had to use
$(document).on("click", "#restart", function(){

not sure why exactly but it works.