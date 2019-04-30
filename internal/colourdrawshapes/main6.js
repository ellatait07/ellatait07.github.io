console.log("main 5 js is called");

objectSet = [];

var myCircle = new ControlObjectCircle(canvas, colArray[0][0]);

var myT = new ColourButton(50, 50, 200, 75, colArray[0][4], colArray[1][4], colArray[0][2], colArray[0][0], "red", canvas, myCircle);
var myT2 = new ColourButton(50, 125, 200, 75, colArray[0][5], colArray[1][5], colArray[0][2], colArray[0][0], "orange", canvas, myCircle);
var myT3 = new ColourButton(50, 200, 200, 75, colArray[0][6], colArray[1][6], colArray[0][2], colArray[0][0], "yellow", canvas, myCircle);

objectSet.push(myCircle, myT, myT2, myT3);

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();