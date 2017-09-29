// ANIMATE CLOUDS START

var cloud1 = {
	x: 200,
	y: 150,
	w: 100,
	h: 50
}

var cloud2 = {
	x: 275,
	y: 100,
	w: 100,
	h: 50
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	// RUN LOGIC
	// Move cloud1 to the left
	cloud1.x -= 1;
	// When cloud1 is off the screen, teleport to random height on the other
	// side of the screen.
	if (cloud1.x + (cloud1.w / 2) < 0) {
		cloud1.x = width + 100;
		cloud1.y = random(0, 350);
	}
    
	cloud2.x -= 1;
	// When cloud1 is off the screen, teleport to random height on the other
	// side of the screen.
	if (cloud2.x + (cloud1.w / 2) < 0) {
		cloud2.x = width + 100;
		cloud2.y = random(0, 350);
	}  
	
	// DRAW FRAME
	background(0, 102, 255); // Blue Sky
	fill(0, 255, 0); // Green
	rect(0, 350, width, 50); // Ground
	fill(255); // White
	ellipse(cloud1.x, cloud1.y, cloud1.w, cloud1.h); // Cloud #1
	ellipse(cloud2.x, cloud2.y, cloud2.w, cloud2.h); // Cloud #2	
}