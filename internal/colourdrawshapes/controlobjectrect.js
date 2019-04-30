console.log("control object js is called");

class ControlObjectRect{
    constructor(canvas, col){
        this.objectSet = [];
        

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.col = col;
        this.xB = 250;
        this.yB = 50;
        this.wB = 500;
        this.hB = 450;

        this.w = 0;
        this.h = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.xB, this.yB, this.wB, this.hB)){
            this.mouseDown = true;
        }
        console.log(this.mouseDown);
        
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
    }

    mUp(e){
        this.mouseDown = false;
        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.xB, this.yB, this.wB, this.hB)){
            var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, this.col);
            this.objectSet.push(ROne);
        }
        
    }

    update(){
        this.drawCanvasRect(this.xB, this.yB, this.wB, this.hB, colArray[0][0]);
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
       

    }

    rectBoundCheck(xM, yM, xMS, yMS, x, y, w, h){
        if(xM > x && xM < x + w && yM > y && yM < y + h && xMS > x && xMS < x + w && yMS > y && yMS < y + h){
            return true;
        }
        else{
            return false;
        }
    }

    setColour(c){
        this.col = c;
    }

    drawCanvasRect(x, y, w, h, colour){
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    drawRect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
}

