console.log("main 5 js is called");

objectSet = [];


var myRect = new ControlObjectBrush(canvas);

var myT = new button(50, 50, 200, 75, colArray[0][4], colArray[1][4], colArray[0][2], colArray[0][0], "red", canvas, myRect);




objectSet.push(myT, myT2, myT3, myT4, myT5, myT6, myRect);

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();