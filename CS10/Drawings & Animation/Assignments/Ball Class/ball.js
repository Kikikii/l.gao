class Ball {
    constructor(y, r, col) {
        // State (Properties)
        this.x = random(width);
        this.y = y;
        this.r = r;
        this.ySpeed = 0;
        this.accel = 1;
        this.col = col;
    }

    // Behaviour (Methods)
    bounce() {
        // Vertical Movement
        this.y += this.ySpeed; // Move the ball
        this.ySpeed += this.accel; // Apply gravity
        if (this.y + this.r > height) {
            this.y = height - this.r;
            this.ySpeed = -30;
        }
    }
    
    show() {
        fill(this.col);
        ellipse(this.x, this.y, 2 * this.r);
    }
}




