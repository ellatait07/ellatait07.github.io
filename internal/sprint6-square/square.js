console.log("rectangle js is called");

class Square{
    constructor(xM, xMS, yM, yMS, w, h, c1){
        this.xM = xM;
        this.xMS = xMS;
        this.yM = yM;
        this.yMS= yMS;
        this.w = w;
        this.h = h;
        this.c1 = c1;
    }
    

    update(){
        this.draw();

    }

    draw(){
        this.drawRect(this.xM, this.xMS, this.yM, this.yMS, this.w, this.h, this.c1);
        
    }

    drawRect(xM, xMS, yM, yMS, w, h){
        ctx.fillStyle = this.c1;
        var sqside = 0;
        if(Math.abs(w)>Math.abs(h)){
            sqside = Math.abs(h);
        }
        else {
            sqside = Math.abs(w);
        }
        ctx.beginPath();
        ctx.rect((xMS+xM)/2-sqside/2, (yMS+yM)/2-sqside/2, sqside, sqside);
        ctx.fill();
        
    }
}