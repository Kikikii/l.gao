// CALC ACCELERATION

// Global Variables
var ball, ball2;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    
    ball = new Ball(0, 30, "red");
    ball2 = new Ball(400, 10, "blue");
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // LOGIC
    ball.bounce();
    ball2.bounce();
    
    // DRAW
    background(0);
    ball.show();
    ball2.show();
}