// Grapher Object

function Grapher(ptA, ptB, ptC, ptD) {
	// Properties (State)
	this.ptA = ptA;
	this.ptB = ptB;
	this.ptC = ptC;
	this.ptD = ptD;
	this.selected =  null;
}

// Grapher Prototype Methods
Grapher.prototype.drawLine1 = function() {
	this.drawLine(this.ptA, this.ptB);
};

Grapher.prototype.drawLine2 = function() {
	this.drawLine(this.ptC, this.ptD);
};

Grapher.prototype.drawLine = function(ptA, ptB) {
	// Convert point ordered paris to pixels
	var x1 = map(ptA.x, -10, 10, 0, width);
	var y1 = map(ptA.y, -10, 10, height, 0);
	var x2 = map(ptB.x, -10, 10, 0, width);
	var y2 = map(ptB.y, -10, 10, height, 0);

	// Draw Line
	stroke(0, 0, 255);
	strokeWeight(4);
	line(x1, y1, x2, y2);

	// Draw point A & B
	noStroke();
	fill(0, 0, 255);
	ellipse(x1, y1, 12, 12);
	ellipse(x2, y2, 12, 12);
};

Grapher.prototype.dragAndDrop = function() {
	if (this.selected !== null) {
		var tempX = Math.round(mouseX / 10) * 10;
		var tempY = Math.round(mouseY / 10) * 10;
		this.selected.x = map(tempX, 0, width, -10, 10);
		this.selected.y = map(tempY, 0, height, 10, -10);
	}

};

Grapher.prototype.processMousePressed = function() {
	if (withinPoint(this.ptA)) {
		this.selected = this.ptA;
	} else if (withinPoint(this.ptB)) {
		this.selected = this.ptB;
	} else if (withinPoint(this.ptC)) {
		this.selected = this.ptC;
	} else if (withinPoint(this.ptD)) {
		this.selected = this.ptD;
	}
};

Grapher.prototype.processMouseReleased = function() {
	this.selected = null;
}

function withinPoint(aPoint) {
	// Convert point ordered paris to pixels
	var x1 = map(aPoint.x, -10, 10, 0, width);
	var y1 = map(aPoint.y, -10, 10, height, 0);

	var d = dist(mouseX, mouseY, x1, y1);
	if (d < 6) {
		return true;
	} else {
		return false;
	}
}

Grapher.prototype.drawCoordinatePlane = function() {
	// Draw a grid and axes.
	background(255);

	// Draw the grid
	stroke(0);
	// Draw horizontal lines
	for (var y = 0; y <= width; y += 20) {
		dashedLineHz(0, 400, 5, y);
	}

	// Draw Vertical Lines
	for (var x = 0; x <= width; x += 20) {
		dashedLineVt(0, 400, 5, x);
	}

	// Draw Axes
	strokeWeight(3);
	line(0, 200, 400, 200); // x-axis
	line(200, 0, 200, 400); // y-axis
};

function dashedLineHz(xStart, xStop, length, y) {
	strokeWeight(1);
	for (var x = xStart; x <= xStop; x += 2 * length) {
		line(x, y, x + length, y);
	}
}

function dashedLineVt(yStart, yStop, length, x) {
	strokeWeight(1);
	for (var y = yStart; y <= yStop; y += 2 * length) {
		line(x, y, x, y + length);
	}
}
