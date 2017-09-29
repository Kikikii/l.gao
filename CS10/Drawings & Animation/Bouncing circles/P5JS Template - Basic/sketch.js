// P5.JS TEMPLATE

//Global Variable
var circle1, circle2, circle3;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(400, 400);
    background("white");

    //Initialize circles
    circle1 = {
        x: 100,
        xSpeed: 1,
        y: 100,
        ySpeed: 0,
        r: 20
    };
    circle2 = {
        x: 300,
        xSpeed: 5,
        y: 50,
        ySpeed: 1,
        r: 20
    };
    circle3 = {
        x: 50,
        y: 20,
        ySpeed: 0,
        r: 20,
        hrz: 40
    };
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background("white");
    //Movements of the balls
    //Horizontal
    circle1.y += circle1.ySpeed;
    circle1.ySpeed += 1;
    circle1.x += circle1.xSpeed; 
    if ((circle1.y + circle1.r / 2) > 400) {
        circle1.ySpeed = -circle1.ySpeed + 1.0;
    }
    if ((circle1.x + circle1.r/2 )> width |(circle1.x -circle1.r/2)<0){
        circle1.xSpeed= -circle1.xSpeed;
    }
    //Vertical
    circle2.x += circle2.xSpeed;
    circle2.xSpeed += 0.8;
    circle2.y += circle2.ySpeed;
    if ((circle2.x + circle2.r / 2) > 400) {
        circle2.xSpeed = -circle2.xSpeed + 0.8;
    }
    if ((circle2.y + circle2.r/2 )> width |(circle2.y -circle2.r/2)<0){
        circle2.ySpeed= -circle2.ySpeed;
    }
    //Diagnal
    circle3.y += circle3.ySpeed;
    circle3.ySpeed += 1;
    circle3.x += 3;
    if ((circle3.y + circle3.r / 2) > circle3.hrz & circle3.ySpeed > 0) {
        circle3.ySpeed = -circle3.ySpeed + 10 ;
        circle3.hrz += 70;
    }

    //Ellipses
    noStroke()
    fill("blue");
    ellipse(circle1.x, circle1.y, circle1.r, circle1.r);
    fill("yellow")
    ellipse(circle2.x, circle2.y, circle2.r, circle2.r);
    fill("green")
    ellipse(circle3.x, circle3.y, circle3.r, circle3.r);
}
