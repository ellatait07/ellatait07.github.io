console.log('loops js called');

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




//loop it across
for(var i=0; i<10; i++){
    console.log(i);
    drawCircle(40 +40*i, 400, 10, colArray[0][4], colArray[0][6], 1, true, true);
}
//loop it down
for(var j=0; j<10; j++){
    console.log(j);
    drawCircle(500, 10 +j*30, 10, colArray[0][4], colArray[0][6], 1, true, true);
}

//grid
for(var i=0; i<5; i++){

    for(var j=0; j<5; j++){
        drawCircle(10 +30*i, 10 +30*j, 10, colArray[0][4], colArray[0][6], 1, true, true);
    }




}