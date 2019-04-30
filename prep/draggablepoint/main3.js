console.log("main js is called");

objectSet = [];

var myT = new point(300, 300, 20, colArray[0][4], colArray[0][5], canvas);
var myT2 = new point(600, 500, 20, colArray[0][4], colArray[0][5], canvas);
objectSet.push(myT, myT2);

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();