/*
 *
 * Declarations 
 * 
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasH = canvas.height;
var canvasW = canvas.width;


/* TODO
 *
 * Initialization
 * 
 */
window.onload = function() {
	// Draw Background
	drawBackground();
	// Begin Cars Crossing
	// Add User Car and movement
}


/* TODO
 *
 * Background
 * 
 */
function drawBackground() {
	// Pavement
	ctx.fillStyle = "#BBBBCC";
	var rdStart = (canvasW / 2) - (canvasW / 8);
	var rdW = canvasW / 4;
	ctx.fillRect(rdStart, 0, rdW, canvasH);
	rdStart = (canvasH / 2) - (canvasH / 8);
	rdW = canvasH / 4;
	ctx.fillRect(0, rdStart, canvasW, rdW);

	// Yellow Lines
	// Crosswalk
	// Fun Extras
}


/* TODO
 *
 * Cross Traffic
 * 
 */


/* TODO
 *
 * Pedestrians
 * 
 */


/* TODO
 *
 * User car(s)
 * 
 */


/* TODO
 *
 * Key press handling
 *
 */
function keyDown(event) {
	// Do key actions
	switch (event.keyCode) {
		// case 38: //UP
		// 	if (pikaY >= 5) Move cars at different speeds
		// 		pikaY -= 5;
		// 		drawNew();
		// 	break;
		// case 40: //DOWN
		// 	if (pikaY <= h - pikaH - 5)
		// 		pikaY += 5;
		// 		drawNew();
		// 	break;
		// case 37: //LEFT
		// 	if (pikaX >= 5)
		// 		pikaX -= 5;
		// 		drawNew();
		// 	break;
		// case 39: //RIGHT
		// 	if (pikaX <= w - pikaW - 5)
		// 		pikaX += 5;
		// 		drawNew();
		// 	break;
	}
}

