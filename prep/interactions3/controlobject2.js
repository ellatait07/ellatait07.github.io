console.log("control object js is called");



class ControlObject{
    constructor(canvas){
        this.objectSet = [];
        

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.col = "rgb(200, 230, 20)";

        this.r = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
    }

    mUp(e){
        this.mouseDown = false;
        var ROne = new Circle(this.xMouseStart, this.yMouseStart, this.r, this.col);
        this.objectSet.push(ROne);
    }

    update(){
        this.r = Math.abs(this.xMouse - this.xMouseStart);
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }

    draw(){
        this.drawCircle(this.xMouseStart, this.yMouseStart, this.r);

    }

    drawCircle(x, y, r){
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.strokeStyle = this.fill;
        ctx.stroke();
    }
}