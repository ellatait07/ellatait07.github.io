console.log("control object js is called");



class point{
    constructor(x, y, r, c1, c2, canvas){
        this.x = x;
        this.y = y,
        this.r = r;
        this.c1 = c1;
        this.c2 = c2;
        this.col = c1;

        this.xMouse = 0;
        this.yMouse = 0;
     
        this.dragging = false;
        this.selected = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mDown(e){
        if(this.circularBoundCheck(this.x, this.y, this.xMouse, this.yMouse, this.r) == true){
            this.dragging = true;
            point.selected = this;
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
    }

    mUp(e){
        this.dragging = false;
        point.selected = false;

    }

    update(){
        if(this.dragging == true){
            this.x = this.xMouse;
            this.y = this.yMouse;
            this.col = this.c2;
        }
        else{
            this.col = this.c1;
        }
        if(point.selected == this){
            this.x = this.xMouse;
            this.y = this.yMouse;
            this.col = this.c2;
        }
        this.draw();

    }

    draw(){
        this.drawCircle(this.x, this.y, this.r, this.col);
        
    }

    drawCircle(x, y, r, col){
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fillStyle = col
        ctx.fill();
    }

   circularBoundCheck(x1, y1, x2, y2, r){
       var D = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
       if(D<r){
           return true;
       }
       else{
           return false;
       }

   }
}
point.selected = "";