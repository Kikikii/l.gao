// Bouncing circles

var ballArray;
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas (800, 600);
    background(255);
    ballArray = [];
    
    for (var i = 0; i < 90; i++) {
        ballArray.push(new Ball(random(50, 750), random(50, 550), random(-5, 5), random(-5, 5), random(5, 100), color(random(255), random(255), random(255))));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
background(255);

    //Logic
    for (var i = 0; i < 90; i++) {
        ballArray[i].show();
        ballArray[i].bounce();
    }
    
    //Draw
    fruits.splice(fruits.length-1, 0, new Ball)
}

