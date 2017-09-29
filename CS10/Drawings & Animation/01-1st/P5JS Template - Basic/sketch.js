// P5.JS TEMPLATE

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	background("white");
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    if (mouseIsPressed){
        ellipse(mouseX, mouseY, 1, 1);
        fill(0);
        console.log("sdlfkjwef")
        console.log(mouseX, mouseY)
        
        
    }
}
