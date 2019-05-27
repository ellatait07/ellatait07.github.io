console.log("rectangle js is called");

class BrushCircle{
    constructor(xM, yM, r, c1){
        this.xM = xM;
        this.yM = yM;
        this.r = r;
        this.c1 = c1;
    }
    

    update(){
        this.draw();

    }

    draw(){
        this.drawRect(this.xM, this.xMS, this.yM, this.yMS, this.r, this.c1);
        
    }

    drawRect(xM, xMS, yM, yMS, r){
        ctx.fillStyle = this.c1;
        ctx.beginPath();
        ctx.arc(xM, yM, r, 0, 2*Math.PI);
        ctx.fill();
        
    }
}