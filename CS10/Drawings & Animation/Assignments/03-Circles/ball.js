class Ball {
    //State
    constructor(x, y, xs, ys, r, col) {
        this.x = x;
        this.y = y;
        this.xSpeed = xs;
        this.ySpeed = ys;
        this.r = r;
        this.col = col;
    }

    //Behaviour
    bounce(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if ((this.x + this.r) > width) {
            this.x= width - this.r;
            this.xSpeed= -this.xSpeed;
        } else if ((this.x - this.r) < 0){
            this.x= this.r;
            this.xSpeed= -this.xSpeed;
        }
        
        if ((this.y + this.r) > height){
            this.y = height - this.r; 
            this.ySpeed = -this.ySpeed;
        } else if ((this.y - this.r) < 0){
            this.y = this.r;
            this.ySpeed = -this.ySpeed;
        }
    }
    
    show(){
        fill (this.col);
        
        ellipse (this.x, this.y, 2 * this.r, 2*this.r,);
        
    }

}
