// ROCKET CLASS (FACTORY / BLUEPRINT)
var dot;
//Initiate

dot = {
    x:200,
    y:300,
    s:5,
    state: "still",
}

function move(){
    if (dot.state == "right"){
        dot.x += dot.s;
    } else if (dot.state == "left"){
        dot.x -= dot.s;
    } else if (dot.state == "up") {
        dot.y -= dot.s;
    } else if (dot.state == "down") {
        dot.y += dot.s;
    } else if (dot.state == "still") {
        dot.y -= dot.s;
    }
}

function keyPressed (){
    if (keyCode == 39){
        dot.state = "right";
    } else if (keyCode == 37){
        dot.state = "left";
    } else if (keyCode == 28){
        dot.state = "up";
    } else if (keycode == 40) {
        dot.state = "down";
    }
}

function draw(){
    fill(0);
    noStroke();
    rect (dot.x, dot.y, dot.s, dot.s);
}