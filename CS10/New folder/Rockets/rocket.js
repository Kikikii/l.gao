// ROCKET CLASS (FACTORY / BLUEPRINT)
class Rocket {
    // STATE (Properties)
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 40;
        this.c1 = 255;
        this.c2 = 0;
        this.c3 = 0;
        this.dy = 0;
        this.a = -0.01;
        this.fc = 0;
        this.cState = 1;
    }
    
    // BEHAVIOUR (Methods)
    move() {
        this.y += this.dy; // Move
        this.dy += this.a; // Accelerate
    }
    
    color() {
        
        console.log (frameCount - this.fc)
        if ((frameCount - this.fc) >= 51 && (frameCount - this.fc) <130 && (this.c2 <= 255)) {
            this.c2 += 5;
        } else if ((frameCount - this.fc) >= 102 && (frameCount - this.fc) < 180 && this.c1 >= 0 ) {
            this.c1 -= 5;
        } else if ((frameCount - this.fc) >= 153 && (frameCount - this.fc) <205 && this.c3 <= 255) {
            this.c3 += 5;
        } else if ((frameCount - this.fc) >= 204 && this.c2 >= 0 ){
            this.c2 -= 5;
        } else if ((frameCount - this.fc) >= 255 && this.c1 <= 255){
            this.c1 += 5;
        } else if ((frameCount - this.fc) >= 306 && this.c3 >= 0) {
            this.c3 -= 5;
        } else if ((frameCount - this.fc) >= 357) {
            this.cState = 0;
        }
    }
    
    offScreen() {
        if (this.y < 0) {
            return true;
        } else {
            return false;
        }
    }
    
    click(){
        if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
            return true;
        } else {
            return false;
        }
    }
   

    
    show() {
        noStroke();
        fill(color(this.c1, this.c2, this.c3));
        ellipse(this.x, this.y, 2 * this.r);
    }
}