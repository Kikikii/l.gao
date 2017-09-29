// P5.JS TEMPLATE

//Initialize variables
var x,y,r;
var x2, y2, r2;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);
	background(50, 51, 42);
    noFill();
    
    x= width/2;
    y= height/2;
    r= 10
    
    x2 = width/2;
    y2= height/2;
    r2= 15
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    
    //umm
    x += random(-10, +10);
    y += random (-10, +10)
    
    x2 += random(-10, +10);
    y2 += random (-10, +10)
    
    
    
    //circles
    stroke (185, 242, 0, 180);
    strokeWeight (1);
    ellipse(x, y, r*2, r*2 );
    
    stroke (255, 242, 42, 80);
    strokeWeight (1);
    ellipse(x2, y2, r2 * 2, r2*2);
}