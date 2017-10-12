// P5.JS TEMPLATE

//Variables
var state;
var start;
var message;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	background("white");
    strokeWeight (3);
    textAlign(CENTER);
    
    //Initialize
    state = "start"; 
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    
    //startscreen
    if (state == "start") {
        background (110, 149, 247);
        textSize(60);
        fill(255);
        text("Paaaaaaaint!", width/2, height/2 );
        textSize(30);
        text("Press SPACE to start", width/2, 450);
        textSize(24);
        text("You have 10 seconds.", width/2, 500);
    } else  {
        
        
        if (state == "draw") {
            if(frameCount - start < 120) {
            if(mouseIsPressed) {
            stroke(0);
            line(mouseX,mouseY, pmouseX, pmouseY);
                    }  
                } else{
                message = "TIME UP" 
            }
        }
        
        //Message box
        noStroke()
        fill(167);
        rect (0, 0, width, 50);
        fill(255);
        textSize(36);
        text(message, width/2, 40);
    }
        
            
    } //end draw
        
    
    
        
    
    //drawing
    


//Space 
function keyPressed() {
    if (keyCode == 32) {
        state = "draw";
        background (255);
        start = frameCount;
        
        //Random word
        var randomInt = floor(random (1, 4));
        if (randomInt == 1) {
            message= "cat" ;  
        } else if (randomInt == 2) {
            message= "dog";
        } else {
            message = "fish"
        }
    }
}