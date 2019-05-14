console.log("control object js is called");

class ControlObject{
    constructor(canvas){
        this.objectSet = [];
        

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.mouseBounds = false;

        this.col = "";
        this.shape = 
        this.xB = 250;
        this.yB = 50;
        this.wB = 500;
        this.hB = 410;

        this.eX = 0;
        this.eY = 0;

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
        //checks if the mouse is in bounds when it is clicked down
        if(this.mouseBounds){
            //sets the variable mouseDown to true or false so that we know that when the mouse was first clicked down it was in bounds
            this.mouseDown = true;
        }
        
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        //constant boundary check
        this.mouseBounds = this.rectBoundCheck(this.xMouse, this.yMouse, this.xB, this.yB, this.wB, this.hB)
            
    }

    mUp(e){
        //draws rectangle if the mouse was in bounds when it was down, if it is currently in bounds, and if a colour has been chosen
        if(this.mouseDown && this.mouseBounds && this.col){
            console.log(shapeButton.selectedShape);


            if(shapeButton.selectedShape == "Ellipse"){
                var temp = new Ellipse(this.eX, this.eY, this.eW, this.eH, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }
            else if(shapeButton.selectedShape == "Rectangle"){
                var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }
        }
        //resets mouseDown for the next time it is clicked
        this.mouseDown = false;
        
    }

    update(){
        this.drawCanvasRect(this.xB, this.yB, this.wB, this.hB, colArray[0][12]);
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        this.eW = Math.abs(this.w/2);
        this.eH = Math.abs(this.h/2);

        this.eX = this.xMouseStart + (this.w/2);
        this.eY = this.yMouseStart + (this.h/2);

        //draws the guide rectangle if the mouse is in bounds currently and it was in bounds when it was clicked down
        if(this.mouseBounds && this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
    }

    draw(){
        //draws the guide rectangle if a colour is selected
        if(this.col){
            if(shapeButton.selectedShape == "Ellipse"){
                this.drawEllipse(this.eX, this.eY, this.eW, this.eH);
            }
            else if(shapeButton.selectedShape == "Rectangle"){
                this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
            }
        }

    }

    //boundary check function
    rectBoundCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x + w && yM > y && yM < y + h){
            return true;
        }
        else{
            return false;
        }
    }
    
    //receives colour from button selected
    setColour(c){
        this.col = c;
    }

    //draws the boundary rectangle for the drawing canvas
    drawCanvasRect(x, y, w, h, colour){
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    //guide rectangle function
    drawRect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }

    //guide ellipse function
    drawEllipse(x, y, w, h){
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, 0, 0, 2* Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
}

