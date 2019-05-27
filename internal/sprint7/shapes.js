console.log("shapes is called");

class Rectangle{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c1 = c1;
    }

    update(){
        this.draw();

    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.c1);
        
    }

    drawRect(x, y, w, h){
        ctx.fillStyle = this.c1;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
        
    }
}

class Ellipse{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c1 = c1;
    }

    update(){
        this.draw();

    }

    draw(){
        this.drawEllipse(this.x, this.y, this.w, this.h, this.c1);
        
    }

    drawEllipse(x, y, w, h){
        ctx.fillStyle = this.c1;
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, 0, 0, 2* Math.PI);
        ctx.fill();
    }
}

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

class Circle{
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
        this.drawCircle(this.xM, this.xMS, this.yM, this.yMS, this.w, this.h, this.c1);
        
    }

    drawCircle(xM, xMS, yM, yMS, w, h){
        ctx.fillStyle = this.c1;
        var sqside = 0;
        if(Math.abs(w)>Math.abs(h)){
            sqside = Math.abs(h);
        }
        else {
            sqside = Math.abs(w);
        }
        ctx.beginPath();
        ctx.arc((xMS+xM)/2, (yMS+yM)/2, sqside/2, 0, 2*Math.PI);
        ctx.fill();
        
    }
}

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