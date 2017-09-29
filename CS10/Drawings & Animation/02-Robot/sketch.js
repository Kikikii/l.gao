// P5.JS TEMPLATE

rar
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);
	background(255);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    noStroke();
    fill(80);
    rect(80, 280, 460, 80 ); //ears
    rect(200, 80, 200, 20); //head
    rect(220, 500, 160, 100); //neck
    fill(145);
    rect(100, 100, 400, 400); //head
    
    fill(200);
    ellipse(200, 250, 100, 100); //left eye
    ellipse(400, 250, 100, 100); //right
    rect(200, 350, 200, 60); //mouth
    fill(80);
    ellipse(200, 250, 50, 50); //left pupil
    ellipse(400, 250, 20, 20);
    stroke(85)
    strokeWeight(5) 
    line(150, 180, 250,180 ); //left eyebrow
    line(350, 160, 450, 180); //right
    
}
