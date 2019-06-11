class ControlObject{
    constructor(canvas){
        //declares the objectset array
        this.objectSet = [];
        
        //declares variables
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.mouseBounds = false;
        this.col = "";
        this.w = 0;
        this.h = 0;
        this.r = 0;

        //sets values for the drawing canvas - used for boundary checks
        this.xB = 250;
        this.yB = 50;
        this.wB = 700;
        this.hB = 510;

        //sets up bitmap for brush
        this.tempBitMap = new Image();

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
            /*sets the variable mouseDown to true or false so that we 
            know that when the mouse was clicked down it was in bounds*/
            this.mouseDown = true;
        }
        
    }

    mMove(e){
        //locates the mouse
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        //constant boundary check to see if the mouse is in the drawing canvas
        this.mouseBounds = this.rectBoundCheck(this.xMouse, this.yMouse, this.xB, this.yB, this.wB, this.hB)
    
    }

    //receives the colour selected for the background if the paint button is selected
    setBackgroundColour(colour){
        this.paintbackgroundcolour = colour;
    }

    mUp(e){
        //places shape drawn by guide shape permanently on drawing canvas when the mouse is let go
        if(this.mouseDown && this.mouseBounds && this.col){
            if(shapeButton.selectedShape == "Ellipse"){
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.w, this.h, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }
            else if(shapeButton.selectedShape == "Rectangle"){
                var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }
            else if(shapeButton.selectedShape == "Square"){
                var temp = new Square(this.xMouse, this.xMouseStart, this.yMouse, this.yMouseStart, this.w, this.h, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }
            else if(shapeButton.selectedShape == "Circle"){
                var temp = new Circle(this.xMouse, this.xMouseStart, this.yMouse, this.yMouseStart, this.w, this.h, this.col);
                console.log(temp);
                this.objectSet.push(temp);
            }        

        }
        //pushes the bitmap when the brush line is drawn
        if(shapeButton.selectedShape == "Brush"){
            console.log(this.tempBitMap);
            this.objectSet.push(new DrawImage(this.tempBitMap))
            this.tempBitMap = new Image();
        }
        //removes last item pushed to objectSet array from the page
        else if(shapeButton.selectedShape == 'Undo'){
            this.objectSet.pop();
            shapeButton.selectedShape = "";
        }
        //clears the objectSet array
        else if(shapeButton.selectedShape == 'Clear'){
            this.objectSet = [];
        }
        
        //resets mouseDown for the next time it is clicked
        this.mouseDown = false;
        
    }

    update(){
        //creates the drawing canvas with fixed dimensions
        ctx.save();
        this.drawCanvasRect(this.xB, this.yB, this.wB, this.hB);
        //clip function cuts off the brush tool when it reaches the edge of the canvas
        ctx.clip();

        //creates the brush and bitmap is created from this
        if(shapeButton.selectedShape == "Brush"){
            this.r = widthButton.selectedWidth;
            if(this.mouseDown && this.col && this.r){
                cty.drawImage(this.tempBitMap, 0, 0);
                cty.fillStyle = this.col;
                cty.beginPath();
                cty.arc(this.xMouse, this.yMouse, this.r, 0, 2*Math.PI);
                cty.fill();
                this.tempBitMap = cv.transferToImageBitmap();
                ctx.drawImage(this.tempBitMap, 0, 0);
            }
        }

        //calculates the width and height for the guide shapes
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        //updates the objectSet array
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }

        //runs the draw function when conditions are fulfilled
        if(this.mouseBounds && this.mouseDown){
            this.draw();
        }

        //for clip function
        ctx.restore();
        
    }

    draw(){
        //draws the guide shapes if a colour is selected
        if(this.col){
            if(shapeButton.selectedShape == "Ellipse"){
                this.drawEllipse(this.xMouseStart, this.yMouseStart, this.w, this.h);
            }
            else if(shapeButton.selectedShape == "Rectangle"){
                this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
            }
            else if(shapeButton.selectedShape == "Square"){
                this.drawSquare(this.xMouseStart, this.xMouse, this.yMouseStart, this.yMouse, this.w, this.h);
            }
            else if(shapeButton.selectedShape == "Circle"){
                this.drawCircle(this.xMouseStart, this.xMouse, this.yMouseStart, this.yMouse, this.w, this.h);
            }
        }
        
    }

    //boundary check function (to check if the mouse is inside the drawing canvas)
    rectBoundCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x + w && yM > y && yM < y + h){
            return true;
        }
        else{
            return false;
        }
    }
    
    //receives colour from the colour button that is selected
    setColour(c){
        this.col = c;
    }

    //creates the drawing canvas
    drawCanvasRect(x, y, w, h){
        ctx.fillStyle = this.paintbackgroundcolour;
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
        ctx.ellipse(x + (w/2), y + (h/2), Math.abs(w/2), Math.abs(h/2), 0, 0, 2* Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
    
    //guide square function
    drawSquare(xM, xMS, yM, yMS, w, h){
        var sqside = 0;
        if(Math.abs(w)>Math.abs(h)){
            sqside = Math.abs(h);
        }
        else {
            sqside = Math.abs(w);
        }
        ctx.beginPath();
        ctx.rect((xMS+xM)/2-sqside/2, (yMS+yM)/2-sqside/2,sqside,sqside);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }

    //guide circle function
    drawCircle(xM, xMS, yM, yMS, w, h){
        var sqside = 0;
        if(Math.abs(w)>Math.abs(h)){
            sqside = Math.abs(h);
        }
        else {
            sqside = Math.abs(w);
        }
        ctx.beginPath();
        ctx.arc((xMS+xM)/2, (yMS+yM)/2, sqside/2, 0, 2*Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }

}

