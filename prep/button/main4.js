console.log("main js is called");

objectSet = [];
var myBox = new colourBox(400, 50, 300, 450, colArray[0][0]);
var myT = new button(100, 50, 200, 75, colArray[0][4], colArray[1][4], colArray[0][2], colArray[0][0], "red", canvas, myBox);
var myT2 = new button(100, 125, 200, 75, colArray[0][5], colArray[1][5], colArray[0][2], colArray[0][0], "orange", canvas, myBox);
var myT3 = new button(100, 200, 200, 75, colArray[0][6], colArray[1][6], colArray[0][2], colArray[0][0], "yellow", canvas, myBox);
var myT4 = new button(100, 275, 200, 75, colArray[0][7], colArray[1][7], colArray[0][2], colArray[0][0], "green", canvas, myBox);
var myT5 = new button(100, 350, 200, 75, colArray[0][8], colArray[1][8], colArray[0][2], colArray[0][0], "blue", canvas, myBox);
var myT6 = new button(100, 425, 200, 75, colArray[0][9], colArray[1][9], colArray[0][2], colArray[0][0], "purple", canvas, myBox);


objectSet.push(myT, myT2, myT3, myT4, myT5, myT6, myBox);

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();