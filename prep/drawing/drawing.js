console.log("drawing js called");

//complete drawing of a rectangle
ctx.strokeStyle = colArray[3]; //colour//
ctx.fillStyle = colArray[2];
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100,100,300,50);
ctx.stroke();
ctx.fill();

//draw circle
ctx.fillStyle = colArray[7];
ctx.strokeStyle = colArray[8];
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(200,60,50,0,2*Math.PI);
//ctx.arc(x,y of centre, radius, 0, 2*Math.PI)
ctx.stroke();
ctx.fill();

//add text
ctx.fillStyle = colArray[5];
var myFont = 'bold 30px monospace';
ctx.font = myFont;
ctx.fillText("Hello WOrld", 300, 50);

//draw line
ctx.strokeStyle = colArray[3];
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(750,200);
ctx.stroke();

//draw polyline with closure
ctx.strokeStyle = colArray[2];
ctx.fillStyle = colArray[4];
ctx.lineWidth = 10;

