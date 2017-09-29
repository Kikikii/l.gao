// Painting 1

//Global Variables
var sun, cloud1, cloud2, sunColor;

// SETUP FUNCTION - Runs once at beginning of program

function setup() {
    createCanvas(400, 400);
    background(110, 200, 205);

    //Initialize Variables
    sun = {
        x: width / 2,
        y: 300,
        r1: 30,
        r2: 30
    };
    cloud1 = {
        x: 170,
        y: 150,
        r1: 150,
        r2: 60,
    };
    cloud2 = {
        x: 220,
        y: 120,
        r1: 150,
        r2: 60
    };
    sunColor = {
        x: 250,
        y: 0,
        z: 0
    };
}



// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(110, 200, 205);
        //Movements
    //sun
    sun.y += -3;
    sun.r1 += +1;
    sun.r2 += +1;
    //clouds
    cloud1.x += -2;
    cloud2.x += +2;
    //color
    sunColor.y += +3;
    
    //sun
    noStroke();
    fill(sunColor.x, sunColor.y, sunColor.z);
    ellipse(sun.x, sun.y, sun.r1, sun.r2);
    //clouds
    fill(255);
    ellipse(cloud1.x, cloud1.y, cloud1.r1, cloud1.r2);
    ellipse(cloud2.x, cloud2.y, cloud2.r1, cloud2.r2);
    //field
    fill(189, 230, 0);
    rect(0, 300, 400, 100);



}
