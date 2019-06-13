//creates array used to update function
objectSet = [];
var myShape = new ControlObject(canvas);

//colour buttons
//dark
for(var i = 60, z = 0; z<13; i+=40, z++){
    if(z<12){
    var dark = new colourButton(25, i, 60, 30, colArray[0][z], colArray[0][12], canvas, myShape); 
    }
    else{
    var dark = new colourButton(25, i, 60, 30, colArray[0][z], colArray[2][12], canvas, myShape);  
    }
    objectSet.push(dark);
}
//medium
for(var i = 60, z = 0; z<13; i+=40, z++){
    var medium = new colourButton(100, i, 60, 30, colArray[1][z], colArray[0][12], canvas, myShape);
    objectSet.push(medium);
}
//light
for(var i = 60, z = 0; z<13; i+=40, z++){
    var light = new colourButton(175, i, 60, 30, colArray[2][z], colArray[0][12], canvas, myShape);
    objectSet.push(light);
}

//width buttons for brush
for(var i = 256, z = 2; z<22; i+=70, z+=2){
    var mywidth = new widthButton(i, 575, 59, 50, colArray[0][12], colArray[0][12], colArray[2][12], z, canvas);
    objectSet.push(mywidth);
}

//shape buttons (cannot be in loop due to string change each time)
var myS = new shapeButton(965, 60, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Rectangle", canvas, myShape); 
var myS2 = new shapeButton(965, 120, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Ellipse", canvas, myShape);
var myS3 = new shapeButton(965, 180, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Square", canvas, myShape);
var myS4 = new shapeButton(965, 240, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Circle", canvas, myShape);
var myS5 = new shapeButton(965, 300, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Brush", canvas, myShape);
var myS6 = new backgroundButton(965, 360, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Paint", canvas, myShape); 
var myS7 = new shapeButton(965, 420, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Undo", canvas, myShape);
var myS8 = new shapeButton(965, 480, 210, 50, colArray[0][12], colArray[0][12], colArray[2][12], "Clear", canvas, myShape);

objectSet.push(myShape, myS, myS2, myS3, myS4, myS5, myS6, myS7, myS8);

//updates objectSet
function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}

animate();