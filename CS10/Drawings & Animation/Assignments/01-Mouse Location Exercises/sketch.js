// MOUSE LOCATION EXERCISES

function setup() {
	createCanvas(600, 600);
	noCursor();
	textAlign(CENTER);
}

function draw() {
	// Draw Grid and Level (Uncomment current level)
	background(0);
	drawGrid();
    // drawLevel1(); // Use Binary
    //drawLevel2(); // Use Chained
	// drawLevel3(); // Use Binary
	// drawLevel4(); // Use Binary
	// drawLevel5(); // Use Chained
	// drawLevel6(); // Use Binary
	// drawLevel7(); // Use Chained
	// drawLevel8(); // Use Binary
	// drawLevel9(); // Use Chained
	// drawLevel10(); // Use Binary
	// drawLevel11(); // Use Binary
	//drawLevel12(); // Use Chained
	 drawLevel13(); // Use Binary (hint: dist() function is useful)

	// IF STATEMENTS TO CONTROL FILL COLOR...
if (state=="Level1"){
    	if (mouseX<287){
        fill (255, 0, 0);
    } else if (mouseX > 287 && mouseX < 313) {
        fill (255, 255, 0);
    } else {
        fill (0, 255, 0);
    }
}	else if (state=="Level13"){
        if (dist(mouseX, mouseY, 300, 300)<100){
            fill (255, 0, 0);
        } else {
            fill (0, 255, 0);
        }
}   else if (state=="Level12"){
    
}
	
	// Draw Ellipse
	noStroke();
	ellipse(mouseX, mouseY, 25);
}
