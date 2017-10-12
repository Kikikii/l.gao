// ROCKETS

// Declare Global Variables
let rockets;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize GLobal Variables
    rockets = [];
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // LOGIC
    for (let i = 0; i < rockets.length; i++) {
        rockets[i].move();
        if (rockets[i].offScreen()) {
            rockets.splice(i, 1);
        }
    }

    if (frameCount % 30 === 0) {
        rockets.push(new Rocket(random(width), random(500, height)));
    }
    
    // DRAW
    background(0);
    for (let i = 0; i < rockets.length; i++) {
        rockets[i].show();
    }    
    
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].cState > 0) {
            this.fc = frameCount;
            this.cState++;
        }
        rockets[i].color();
    }
}



//Event function
function mousePressed() {
   for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].click()) {
            rockets.splice(i, 1);
        }
    }    
}