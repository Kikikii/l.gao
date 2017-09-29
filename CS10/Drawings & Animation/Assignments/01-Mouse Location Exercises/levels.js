function drawLevel13() {
	// Circle

	// Draw Circle
	stroke(255);
	strokeWeight(3);
	noFill();
	ellipse(width / 2, height / 2, 200);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", width / 2, height / 2);

	fill(0, 255, 0);
	text("GREEN", 300, 500);
	fill(255);
    
    state= "Level13";
}

function drawLevel12() {
	// Two Boxes

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	noFill();
	rect(100, 200, 150, 150);
	rect(350, 200, 150, 150);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 175, 275);

	fill(0, 255, 0);
	text("GREEN", 425, 275);

	fill(0, 0, 255);
	text("BLUE", 300, 450);
	fill(255);
    
    state="Level12"
}

function drawLevel11() {
	// Box

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	noFill();
	rect(200, 200, 200, 200);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", width / 2, height / 2);

	fill(0, 255, 0);
	text("GREEN", 450, 150);
	fill(255); 
    
    state="Level11";
}

function drawLevel10() {
	// Binary Quadrants

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(300, 0, 300, height);
	line(0, 300, width, 300);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 150, 150);

	fill(0, 255, 0);
	text("GREEN", 450, 150);

	fill(0, 255, 0);
	text("GREEN", 150, 450);

	fill(255, 0, 0);
	text("RED", 450, 450);
	fill(255);
    
    state=Level10;
}

function drawLevel9() {
	// Quadrants

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(300, 0, 300, height);
	line(0, 300, width, 300);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 150, 150);

	fill(0, 255, 0);
	text("GREEN", 450, 150);

	fill(0, 0, 255);
	text("BLUE", 150, 450);

	fill(255, 255, 0);
	text("YELLOW", 450, 450);
	fill(255);
    
    state= Level9;
}

function drawLevel8() {
	// Topleft Quadrant

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(300, 0, 300, height / 2);
	line(0, 300, width / 2, 300);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 150, 150);

	fill(0, 255, 0);
	text("GREEN", 450, 450);
	fill(255);
    
    state= Level8;
}

function drawLevel7() {
	// Chained - Left / Midleft / Midright / Right

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(150, 0, 150, height);
	line(300, 0, 300, height);
	line(450, 0, 450, height);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 75, 300);

	fill(0, 255, 0);
	text("GREEN", 225, 300);

	fill(0, 0, 255);
	text("BLUE", 375, 300);

	fill(255, 255, 0);
	text("YELLOW", 525, 300);
	fill(255);
    
    state= Level6;
}

function drawLevel6() {
	// Binary - Logical - and / or

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(0, 200, width, 200);
	line(0, 400, width, 400);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 300, 100);

	fill(0, 255, 0);
	text("GREEN", 300, 300);

	fill(255, 0, 0);
	text("RED", 300, 500);
	fill(255);
    
    state=Level6;
}

function drawLevel5() {
	// Chained - Top/Middle/Bottom

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(0, 200, width, 200);
	line(0, 400, width, 400);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 300, 100);

	fill(0, 255, 0);
	text("GREEN", 300, 300);

	fill(0, 0, 255);
	text("BLUE", 300, 500);
	fill(255);
    
    state=Level5
}

function drawLevel4() {
	// Binary - Top/Bottom

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(0, 300, width, 300);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 300, 150);

	fill(0, 255, 0);
	text("GREEN", 300, 450);
	fill(255);

    state=Level4
}

function drawLevel3() {
	// Binary - Logical - Solve with both and / or

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(200, 0, 200, height);
	line(400, 0, 400, height);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 100, 300);

	fill(0, 255, 0);
	text("GREEN", 300, 300);

	fill(255, 0, 0);
	text("RED", 500, 300);
	fill(255);
    
    state=Level3
}

function drawLevel2() {
	// Chained - Left / Middle / Right

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(200, 0, 200, height);
	line(400, 0, 400, height);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 100, 300);

	fill(0, 255, 0);
	text("GREEN", 300, 300);

	fill(0, 0, 255);
	text("BLUE", 500, 300);
	fill(255);
    
    state= Level2
}

function drawLevel1() {
	// Binary - Left/Right

	// Draw Lines
	stroke(255);
	strokeWeight(3);
	fill(255);
	line(300, 0, 300, height);

	// Draw Text
	noStroke();
	textSize(24);

	fill(255, 0, 0);
	text("RED", 150, 300);

	fill(0, 255, 0);
	text("GREEN", 450, 300);
	fill(255);
    
    state= Level1
}

function drawGrid() {
	textSize(14);
	stroke(40);
	strokeWeight(2);
	fill(255);
	for(var x = 0; x <= width; x += 50) {
		line(x, 0, x, height);
		text(x, x, 18);
	}

	for(var y = 0; y <= height; y += 50) {
		line(0, y, width, y);
		text(y, 12, y + 5);
	}

}
