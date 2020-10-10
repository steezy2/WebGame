/*
 *
 * Declarations 
 * 
 */
var canvas;
var ctx;
var canvasH;
var canvasW;
var carLength;
var carWidth;
var userCarSlow, userCarMed, userCarFast;
var userCar;
var laneOffset;
var moveInterval;
var lTraffic, rTraffic;


/* TODO
 *
 * Initialization
 * 
 */
window.onload = function() {
  setup();
}



// Function to draw everyone
function drawNew() {
	ctx.clearRect(0,0,canvasW, canvasH);
	drawBackground();
	drawTraffic();
	drawUserCar();

	// TODO:
	// draw traffic
	// draw pedestrian
}

// Function to move traffic and peds, then draw
function moveAndDraw() {
	//userCar.y -= 2; //TODO REMOVE... SPEED REFERENCE
	// move traffic
	moveTraffic();
	// move peds
	// redraw
	drawNew();
	//check collisions
	checkCollisions();
}


/*
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
 * Cross Traffic - Array of maybe 6-8 cars that move across the screen, half from left half from right
 * 
 */
function initTraffic() {
	lTraffic = [
		{
			x: Math.floor(Math.random()*1.5*canvasW - canvasW/2), 
			y: (canvasH / 2 + laneOffset), 
			speed: 1, 
			img: document.getElementById("car-slow-right")
		},
		{
			x: Math.floor(Math.random()*1.5*canvasW - canvasW/2), 
			y: (canvasH / 2 + laneOffset), 
			speed: 3, 
			img: document.getElementById("car-med-right")
		},
		{
			x: Math.floor(Math.random()*1.5*canvasW - canvasW/2), 
			y: (canvasH / 2 + laneOffset), 
			speed: 5, 
			img: document.getElementById("car-fast-right")
		}
	];
	rTraffic = [
		{
			x: Math.floor(Math.random()*1.5*canvasW), 
			y: (canvasH / 2 - carWidth - laneOffset), 
			speed: 1, 
			img: document.getElementById("car-slow-left")
		},
		{
			x: Math.floor(Math.random()*1.5*canvasW), 
			y: (canvasH / 2 - carWidth - laneOffset), 
			speed: 3, 
			img: document.getElementById("car-med-left")
		},
		{
			x: Math.floor(Math.random()*1.5*canvasW), 
			y: (canvasH / 2 -carWidth - laneOffset), 
			speed: 5, 
			img: document.getElementById("car-fast-left")
		}
	];
}

function drawTraffic() {
	var numCars = lTraffic.length;
	for (var i = 0; i < numCars; i++) {
		ctx.drawImage(lTraffic[i].img, lTraffic[i].x, lTraffic[i].y, carLength, carWidth);
	}
	numCars = rTraffic.length;
	for (var i = 0; i < numCars; i++) {
		ctx.drawImage(rTraffic[i].img, rTraffic[i].x, rTraffic[i].y, carLength, carWidth);
	}

}

function moveTraffic() {
	var numCars = lTraffic.length;
	for (var i = 0; i < numCars; i++) {
		if (lTraffic[i].x > canvasW + carLength){
			lTraffic[i].x = -1 * (canvasW / 2);
		}
		lTraffic[i].x += lTraffic[i].speed;
	}
	numCars = rTraffic.length;
	for (var i = 0; i < numCars; i++) {
		if (rTraffic[i].x < 0 - carLength){
			rTraffic[i].x =  1.5 * canvasW;
		}
		rTraffic[i].x -= rTraffic[i].speed;
	}
}


/* TODO
 *
 * Pedestrians - Same as cross traffic
 * 
 */


// TODO Function to check collisions
function checkCollisions() {
	// check lTraffic
	var numObs = lTraffic.length;
	var i = 0;
	for (i = 0; i < numObs; i++){
		if (rectOverlap(userCar, lTraffic[i])) {
			handleCollision();
		}
	}
	// TODO check rTraffic
	numObs = rTraffic.length;
	for (i = 0; i < numObs; i++) {
		if (rectOverlap(userCar, rTraffic[i])) {
			handleCollision();
		}
	}
	// TODO check bottom peds
	// TODO check top peds
}

function rectOverlap(uCar, tCar) {
	//if they don't align in x or y, false. else true
	if (uCar.x + carWidth < tCar.x || uCar.x > tCar.x + carLength) {return false;}
	if (uCar.y > tCar.y + carWidth || uCar.y + carLength < tCar.y) {return false;}
	return true;
}

// TODO Function to handle a collision
function handleCollision() {
	window.clearInterval(moveInterval);
}

// TODO Function to handle successful crossing


/* TODO
 *
 * User car(s)
 * 
 */
function drawUserCar() {
	ctx.drawImage(userCar.img, userCar.x, userCar.y, carWidth, carLength);
}

function setUserCar(spd) {
	switch (spd) {
		case 0:
			userCar = {
				x: userCarSlow.x,
				y: userCarSlow.y,
				speed: userCarSlow.speed,
				img: userCarSlow.img
			};
			break;
		case 1:
			userCar = {
				x: userCarMed.x,
				y: userCarMed.y,
				speed: userCarMed.speed,
				img: userCarMed.img
			};
			break;
		default:
			userCar = {
				x: userCarFast.x,
				y: userCarFast.y,
				speed: userCarFast.speed,
				img: userCarFast.img
			};
			break;
	}
}

/* Key press handling */
function keyDown(event) {
	// Do key actions
	switch (event.keyCode) {
		case 38: //UP
			if (userCar.y >= 0) //Move cars at different speeds
				userCar.y -= userCar.speed;
				drawNew();
			break;
		case 40: //DOWN
			if (userCar.y <= canvasH - carLength)
				userCar.y += userCar.speed;
				drawNew();
			break;
	}
}

//resize window
$(window).resize(function() {
  setup();
});


function setup() {
	// ***Get Elements***
  canvas = document.getElementById("myCanvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.width*0.5;
	ctx = canvas.getContext("2d");
	canvasH = canvas.height;
	canvasW = canvas.width;
	laneOffset = 6;
	carLength = canvasH / 6;
	carWidth = canvasH / 8 - 2*laneOffset;

	// ***Draw Background***
	drawBackground();
	// ***Begin Cars Crossing***
	initTraffic();
	// TODO Traffic and Pedestrians

	// ***User Cars and movement***
	userCarFast = {
		x: canvasW / 2 + laneOffset,
		y: canvasH - carLength,
		speed: 12, 
		img: document.getElementById("car-fast")
	};
	userCarMed = {
		x: canvasW / 2 + laneOffset,
		y: canvasH - carLength,
		speed: 8, 
		img: document.getElementById("car-med")
	};
	userCarSlow = {
		x: canvasW / 2 + laneOffset,
		y: canvasH - carLength,
		speed: 4, 
		img: document.getElementById("car-slow")
	};
	// Init to Medium Car
	setUserCar(2);
	drawUserCar();
	// Add keys listener
	window.addEventListener("keydown", keyDown, false);

	// Get everyone Moving
	moveInterval = setInterval(moveAndDraw, 35);
}