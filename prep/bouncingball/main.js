console.log('main js is called');

objectSet = [];

var BBOne = new bouncingBall(300, 200, 150, 270, colArray[0][8], 10, 4, -2);
var BBTwo = new bouncingBall(300, 200, 150, 270, colArray[0][8], 10, -3, 1);
var BBThree = new bouncingBall(300, 200, 150, 270, colArray[0][8], 10, 2, 2);
objectSet.push(BBOne, BBTwo, BBThree);

function animate(){
    ctx.clearRect(0, 0, width, height);
    //console.log('hello'); 

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }



    window.requestAnimationFrame(animate);
}

animate();