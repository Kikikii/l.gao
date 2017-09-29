// P5.JS TEMPLATE

//Initialize variables
var cricle1, circle2, circle3;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);
	background("black");
    noFill();
    
    //Initialize Variables
    circle1= {x: width/2, y: height/2, r:10};
    circle2= {x2: width/2, y2: height/2, r2:10};
    circle3= {x3: width/2, y3: height/2, r3:10};
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    
    //umm
    circle1.x += random(-10, +10);
    circle1.y += random (-10, +10);
    circle1.r += random (-5, +5);
    
    circle2.x2 += random(-10, +10);
    circle2.y2 += random (-7, +10);
    circle2.r2 += random (0, +1);
    
    circle3.x3 += random(-10, +10);
    circle3.y3 += random(-10, +10);
    circle3.r3 += random (0, +5);
    
    
    //circles
  
    //circle3
    stroke (110, 140, 247, 20);
    strokeWeight (4);
    ellipse(circle3.x3, circle3.y3, 2* circle3.r3, 2* circle3.r3 );

    //circle1
    stroke (185, 242, 0, 255);
    strokeWeight (1);
    ellipse(circle1.x, circle1.y, 0.5* circle1.r, 0.5 *circle1.r );
    
    //circle2
    stroke (255, 242, 42, 80);
    strokeWeight (1);
    ellipse(circle2.x2, circle2.y2, 2* circle2.r2, 2* circle2.r2 );
    

}