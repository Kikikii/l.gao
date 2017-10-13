var snake = [];
var lexi = new lexi();
var a = 0;

function setup() {
    createCanvas(400, 400);
    // createCanvas(width, height);
    snake.push([width/2, height/2]);
    noStroke();

}

function draw() {
    background(0);
    lexi.run(a);
}

function lexi() {
    this.x = 200;
    this.y = 200;
    this.dir = "ST";
    this.itemStatus = false;

    this.item = function() {
        if (!this.itemStatus) {
            this.itemx = 20 * round(random(1, 18));
            this.itemy = 20 * round(random(1, 18));
            this.itemStatus = true;
        }

        if (this.itemStatus) {
            fill(0, 0, 255);
            rect(this.itemx, this.itemy, 20, 20);

            if (this.x === this.itemx && this.y === this.itemy) {
                if (this.dir == "E") {
                    snake.push([this.x, this.y]);
                } else if (this.dir == "W") {
                    snake.push([this.x, this.y]);
                } else if (this.dir == "N") {
                    snake.push([this.x, this.y]);
                } else if (this.dir == "S") {
                    snake.push([this.x, this.y]);
                }
                this.itemStatus = false;
            }
        }

    }

    this.logic = function() {
        if (frameCount % 20 === 0) {
            if (this.dir == "E" && !(this.x === 380)) {
                this.x += 20;
                snake.unshift([this.x, this.y]);
                snake.pop();
            } else if (this.dir == "W" && !(this.x === 0)) {
                this.x -= 20;
                snake.unshift([this.x, this.y]);
                snake.pop();
            } else if (this.dir == "N" && !(this.y === 0)) {
                this.y -= 20;
                snake.unshift([this.x, this.y]);
                snake.pop();
            } else if (this.dir == "S" && !(this.y === 380)) {
                this.y += 20;
                snake.unshift([this.x, this.y]);
                snake.pop();
            }
        }
    }

    this.display = function() {
        for (var i = snake.length - 1; i >= 0; i--) {
            if (i === 0) {
                fill(255,0,0);
            } else {
                fill(255);
            }
            rect(snake[i][0], snake[i][1], 20, 20);
        }
    }

    this.debug = function() {
        console.log("X: "+this.x+"; Y:"+this.y);
    }

    this.run = function(a) {
        this.logic();
        this.display();
        this.item();
        if (a === 1) {
            this.debug();
        }
    }
}

function keyPressed() {
    console.log(keyCode);

    if (keyCode === 37) {
        lexi.dir = "W";
    } else if (keyCode === 38) {
        lexi.dir = "N";
    } else if (keyCode === 39) {
        lexi.dir = "E";
    } else if (keyCode === 40) {
        lexi.dir = "S";
    }

    if (keyCode === 32) {
        if (a === 0) {
            a = 1;
        } else {
            a = 0;
        }
    }
}
