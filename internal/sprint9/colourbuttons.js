//button for choosing colour of shapes
class colourButton{
    constructor(x, y, w, h, c1, c2, canvas, target){
        this.x = x;
        this.y = y,
        this.w = w;
        this.h = h;
        this.c1 = c1;
        this.c2 = c2;
        this.col = c1;
        this.target = target;


        this.xMouse = 0;
        this.yMouse = 0;

        this.rectboundDown = false;
    
        this.rectboundmove = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mDown(e){
        if(this.rectBoundCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h) == true){
            this.rectboundDown = true;
            colourButton.selected = this;
            this.target.setColour(this.c1);
            backgroundButton.backgroundColour=this.c1;
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
            this.col = this.c1;
        }
        if(this.rectboundDown == true){
            this.col = this.c2;
        }
        if(colourButton.selected == this){
            this.col = this.c2;
        }
        this.draw();
        

    }

    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        
    }

    drawRect(x, y, w, h){
        ctx.fillStyle = this.c1;
        ctx.strokeStyle = this.col;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
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
colourButton.selected = "";

//button to change the background colour
class backgroundButton{
    constructor(x, y, w, h, c1, c2, c3, name, canvas, target){
        this.x = x;
        this.y = y,
        this.w = w;
        this.h = h;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.name = name;
        this.col = c1;
        this.target = target;
        this.target.setBackgroundColour(backgroundButton.backgroundColour);

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
            backgroundButton.selected = this;
            this.target.setBackgroundColour(backgroundButton.backgroundColour);
            
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
        backgroundButton.selected = "";
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
        if(backgroundButton.selected == this){
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
        ctx.textBaseline = 'middle';
        ctx.fillText(this.name, this.x + this.w/2, this.y + this.h/2);

    }

}
backgroundButton.selected = "";
backgroundButton.backgroundColour = colArray[2][12];