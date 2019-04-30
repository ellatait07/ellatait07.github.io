console.log("circle is called");

class Circle{
    constructor(x, y, r, col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = col;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}
