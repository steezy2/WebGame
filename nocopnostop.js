/*
 *
 * Declarations 
 * 
 */
var canvas;
var ctx;
var canvasH;
var canvasW;


/* TODO
 *
 * Initialization
 * 
 */
window.onload = function() {
	// Get Elements
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	canvasH = canvas.height;
	canvasW = canvas.width;

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
	// ***BG Grass***
	ctx.fillStyle = "#00FF99";
	ctx.fillRect(0, 0, canvasW, canvasH);

	// ***Pavement***
	ctx.fillStyle = "#BBBBCC";
	// vertical
	var rStart = (canvasW / 2) - (canvasW / 8);
	var rW = canvasW / 4;
	ctx.fillRect(rStart, 0, rW, canvasH);
	// horizontal
	rStart = (canvasH / 2) - (canvasH / 8);
	rW = canvasH / 4;
	ctx.fillRect(0, rStart, canvasW, rW);

	// ***Yellow Lines***
	ctx.fillStyle = "#FFFF00";
	// vertical
	rW = 4;
	rStart = (canvasW / 2) - (rW / 2);
	var rL = 16;
	for (var curY = 0; curY <= canvasH - rL; curY += 2*rL) {
		ctx.fillRect(rStart, curY, rW, rL);
	}
	// horizontal
	rStart = (canvasH / 2) - (rW / 2);
	for (var curX = 0; curX <= canvasW - rL; curX += 2*rL) {
		ctx.fillRect(curX, rStart, rL, rW);
	}
	
	// ***Crosswalk***
	ctx.fillStyle = "#FFFFFF";
	// vertical
	rW = 8;
	rL = 30;
	rStart = (canvasH / 2) - (canvasH / 8) - rL;
	for (var x = (canvasW / 2) - (canvasW / 8); x <= (canvasW / 2) + (canvasW / 8) - rW; x += 2*rW) {
		ctx.fillRect(x, rStart, rW, rL);
		ctx.fillRect(x, (canvasH / 2 + canvasH / 8), rW, rL);
	}

	// ***Fun Extras***
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

