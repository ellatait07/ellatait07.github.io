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

