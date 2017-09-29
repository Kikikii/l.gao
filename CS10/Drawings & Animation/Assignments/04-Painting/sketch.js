// P5.JS TEMPLATE

var strWeight = 1;

//Initiate global variable
var state, brushColor, brushSize;


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    background ("white");
    state = "start";
    brushColor = color(0, 0, 0);
//    fontCenter();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    if (state== "clean"){
        background("white");
    }
    
    
    //the color tiles
    noStroke();
    fill(255, 0, 0); //red
    rect(0, 0, 50, 50);
    fill(249, 138, 0); //orange
    rect(50, 0, 50, 50);
    fill(249, 226, 0); //yellow
    rect(100, 0, 50, 50);
    fill(153, 241, 0); //green
    rect(150, 0, 50, 50);
    fill(73, 199, 255); //blue
    rect(200, 0, 50, 50);
    fill(1, 108, 255); //navy blue
    rect(250, 0, 50, 50);
    fill(174, 3, 255); //violet
    rect(300, 0, 50, 50);

    
    //Shape tiles
    
    //the brush
    if (mouseIsPressed){
        state = "start";
        stroke(brushColor);
        strokeWeight(strWeight);
        line(mouseX, mouseY, pmouseX, pmouseY);
        console.log("hi");
    }
    

}

function keyPressed() {
    console.log(keyCode);
    if (keyCode === 38) {
        strWeight++; 
    } else if (keyCode === 40 && strWeight > 1) {
        strWeight--;
    }
    
    //clean background
    if (keyCode == 32){
        state = "clean";
    }

}

function mousePressed() {
     if (mouseY>0 && mouseY<50){
        if (mouseX>0 && mouseX<50){
            brushColor = color(255, 0, 0); 
            console.log("red");
        } else if (mouseX>50 && mouseX<100){
            brushColor = color(249, 138, 0);
            console.log("orange");
        } else if (mouseX>100 && mouseX<150){
            brushColor = color(249, 226, 0);
            console.log("yellow");
        } else if (mouseX>150 && mouseX<200){
            brushColor = color(153, 241, 0);
            console.log("green");
        } else if (mouseX>200 && mouseX<250){
            brushColor = color(73, 199, 255);
            console.log("blue");
        } else if (mouseX>250 && mouseX<300){
            brushColor = color(1, 108, 255);
            console.log("navy blue");
        } else if (mouseX>300 && mouseX<350){
            brushColor = color(174, 3, 255);
            console.log("purple");
        }       
    }
}