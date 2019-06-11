console.log('shape buttons js is called')

//button for choosing shapes

class shapeButton{
    constructor(x, y, w, h, c1, c2, c3, name, canvas, target){
        this.x = x;
        this.y = y,
        this.w = w;
        this.h = h;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.col = c1;
        this.name = name;
        this.target = target;


        this.xMouse = 0;
        this.yMouse = 0;

        this.rectboundDown = false;
    
        this.rectboundmove = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.selected = false;



    }

    mDown(e){
        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h) == true){
            this.rectboundDown = true;
            shapeButton.selected = this;
            shapeButton.selectedShape = this.name;
            
        }
        else{
            this.rectboundDown = false;
            
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h) == true){
            this.rectboundMove = true;
            shapeButton.inBounds = this;
            
        }
        else{
            this.rectboundMove = false;
            shapeButton.inBounds = "";
            
        }
    }

    mUp(e){
        this.rectboundDown = false;
    

    }

    update(){
        if(this.rectboundMove == true){
            this.col = this.c2;
        }
        else{
            this.col = this.c3;
        }
        if(this.rectboundDown == true){
            this.col = this.c2;
        }
        if(shapeButton.selected == this){
            this.col = this.c2;

        }
        this.draw();
        

    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        
        
    }

    drawRect(x, y, w, h){
        ctx.fillStyle = this.c3;
        ctx.strokeStyle = this.col;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
        ctx.fill();

        this.writeText();
        
    }

    rectBoundCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x + w && yM > y && yM < y + h){
            return true;
        }
        else{
            return false;
        }
    }

    writeText(){
        ctx.fillStyle = this.c1;
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        const baseline = 'middle';
        ctx.textBaseline = baseline;
        ctx.fillText(this.name, this.x + this.w/2, this.y + this.h/2);

    }
}
shapeButton.selected = "";
shapeButton.selectedShape = "";
shapeButton.inBounds = "";

//Button for controlling the width of the brush

class widthButton{
    constructor(x, y, w, h, c1, c2, c3, width, canvas){
        this.x = x;
        this.y = y,
        this.w = w;
        this.h = h;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.col = c1;
        this.width = width;

        this.xMouse = 0;
        this.yMouse = 0;

        this.rectboundDown = false;
    
        this.rectboundmove = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.selected = false;



    }

    mDown(e){
        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h) == true){
            this.rectboundDown = true;
            widthButton.selected = this;
            widthButton.selectedWidth = this.width;
        }
        else{
            this.rectboundDown = false;
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h) == true){
            this.rectboundMove = true;
        }
        else{
            this.rectboundMove = false;
        }
    }

    mUp(e){
        this.rectboundDown = false;
    

    }

    update(){
        if(this.rectboundMove == true){
            this.col = this.c2;
        }
        else{
            this.col = this.c3;
        }
        if(this.rectboundDown == true){
            this.col = this.c2;
        }
        if(widthButton.selected == this){
            this.col = this.c2;
        }
        this.draw();
        

    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        
        
    }

    drawRect(x, y, w, h){
        ctx.fillStyle = this.c3;
        ctx.strokeStyle = this.col;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
        ctx.fill();

        this.drawCircle(this.x, this.y, this.width, this.w, this.h, this.c1);

        
    }

    drawCircle(x, y, width, w, h, fill){
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(x+(w/2), y+(h/2), width, 0, 2*Math.PI);
        ctx.fill();
    }

    rectBoundCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x + w && yM > y && yM < y + h){
            return true;
        }
        else{
            return false;
        }
    }

}
widthButton.selected = "";
widthButton.selectedWidth = "";