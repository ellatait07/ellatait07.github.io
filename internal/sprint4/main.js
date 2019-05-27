console.log("main 5 js is called");

objectSet = [];

var myShape = new ControlObject(canvas);
var myT = new Button(50, 50, 200, 75, colArray[0][4], colArray[1][4], colArray[0][2], colArray[0][0], "Rectangle", canvas, myShape);
var myT2 = new Button(50, 125, 200, 75, colArray[0][5], colArray[1][5], colArray[0][2], colArray[0][0], "Ellipse", canvas, myShape);


objectSet.push(myShape, myT, myT2 );

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();