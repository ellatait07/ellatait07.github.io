console.log('rotations js called');

//draw circle x, y, r, fillC(rgb string), strokeC(rgb string), lineWidth, fill(boolean), stroke(boolean)
function drawCircle(x, y, r, fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

function drawRectangle(x, y, w, h, fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

//rotate shape
ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawCircle(0, 0, 20, '', colArray[1][6], 2, false, true);
drawRectangle(0, 0, 100, 200, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();

//loop it
ctx.save();
ctx.translate(500,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0, 0, 50, 50, colArray[2][6], colArray[0][0], 1, true, true);
}
ctx.restore();

function rotatedCircle(xC, yC, r, ang, fillC, strokeC, lineW, fill, stroke){
        ctx.save();
        ctx.translate(xC, yC);
        ctx.rotate(ang*Math.PI/180);
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, 2*Math.PI);
        if(fill == true){
            ctx.fillStyle = fillC;
            ctx.fill();
        }
        if(stroke == true){
            ctx.lineWidth = lineW;
            ctx.strokeStyle = strokeC;
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(0+r, 0, r, 0, 2*Math.PI);
        if(fill == true){
            ctx.fillStyle = fillC;
            ctx.fill();
        }
        if(stroke == true){
            ctx.lineWidth = lineW;
            ctx.strokeStyle = strokeC;
            ctx.stroke();
        }
        ctx.restore();
    
}

//rotatedCircle(100, 100, 50, 55, colArray[2][6], colArray[0][0], 1, true, true);

for(var i=0; i<360; i+=15){
    rotatedCircle(100, 100, 50, i, colArray[2][0], colArray[2][0], 1, true, true);
}