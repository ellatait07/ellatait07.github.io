console.log("main js is called");

objectSet = [];

var myT = new ControlObject(canvas);
objectSet.push(myT);

function animate(){
    ctx.clearRect(0, 0, width, height);
    
    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}

animate();