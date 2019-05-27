console.log("main 5 js is called");

objectSet = [];


var myRect = new ControlObjectRect(canvas);

var myT = new button(50, 50, 200, 75, colArray[0][4], colArray[1][4], colArray[0][2], colArray[0][0], "red", canvas, myRect);
var myT2 = new button(50, 125, 200, 75, colArray[0][5], colArray[1][5], colArray[0][2], colArray[0][0], "orange", canvas, myRect);
var myT3 = new button(50, 200, 200, 75, colArray[0][6], colArray[1][6], colArray[0][2], colArray[0][0], "yellow", canvas, myRect);
var myT4 = new button(50, 275, 200, 75, colArray[0][7], colArray[1][7], colArray[0][2], colArray[0][0], "green", canvas, myRect);
var myT5 = new button(50, 350, 200, 75, colArray[0][8], colArray[1][8], colArray[0][2], colArray[0][0], "blue", canvas, myRect);
var myT6 = new button(50, 425, 200, 75, colArray[0][9], colArray[1][9], colArray[0][2], colArray[0][0], "purple", canvas, myRect);



objectSet.push(myT, myT2, myT3, myT4, myT5, myT6, myRect,) ;

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();