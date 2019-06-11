console.log("main 5 js is called");

objectSet = [];

var myShape = new ControlObject(canvas);

//colour buttons ordered dark-middle-light
/*red*/ 
var myC = new colourButton(25, 60, 60, 30, colArray[2][0], colArray[0][14], canvas, myShape); var myC2 = new colourButton(100, 60, 60, 30, colArray[0][0], colArray[0][14], canvas, myShape); var myC3 = new colourButton(175, 60, 60, 30, colArray[1][0], colArray[0][14], canvas, myShape);
/*orange*/ 
var myC4 = new colourButton(25, 100, 60, 30, colArray[2][1], colArray[0][14], canvas, myShape); var myC5 = new colourButton(100, 100, 60, 30, colArray[0][1], colArray[0][14], canvas, myShape); var myC6 = new colourButton(175, 100, 60, 30, colArray[1][1], colArray[0][14], canvas, myShape);
/*yellow*/ 
var myC7 = new colourButton(25, 140, 60, 30, colArray[2][2], colArray[0][14], canvas, myShape); var myC8 = new colourButton(100, 140, 60, 30, colArray[0][2], colArray[0][14], canvas, myShape); var myC9 = new colourButton(175, 140, 60, 30, colArray[1][2], colArray[0][14], canvas, myShape);
/*green*/ 
var myC10 = new colourButton(25, 180, 60, 30, colArray[2][4], colArray[0][14], canvas, myShape); var myC11 = new colourButton(100, 180, 60, 30, colArray[0][4], colArray[0][14], canvas, myShape); var myC12 = new colourButton(175, 180, 60, 30, colArray[1][4], colArray[0][14], canvas, myShape);
/*aqua*/ 
var myC13 = new colourButton(25, 220, 60, 30, colArray[2][5], colArray[0][14], canvas, myShape); var myC14 = new colourButton(100, 220, 60, 30, colArray[0][5], colArray[0][14], canvas, myShape); var myC15 = new colourButton(175, 220, 60, 30, colArray[1][5], colArray[0][14], canvas, myShape);
/*cool blue*/ 
var myC16 = new colourButton(25, 260, 60, 30, colArray[2][6], colArray[0][14], canvas, myShape); var myC17 = new colourButton(100, 260, 60, 30, colArray[0][6], colArray[0][14], canvas, myShape); var myC18 = new colourButton(175, 260, 60, 30, colArray[1][6], colArray[0][14], canvas, myShape);
/*warm blue*/ 
var myC19 = new colourButton(25, 300, 60, 30, colArray[2][7], colArray[0][14], canvas, myShape); var myC20 = new colourButton(100, 300, 60, 30, colArray[0][7], colArray[0][14], canvas, myShape); var myC21 = new colourButton(175, 300, 60, 30, colArray[1][7], colArray[0][14], canvas, myShape);
/*purple*/ 
var myC22 = new colourButton(25, 340, 60, 30, colArray[2][9], colArray[0][14], canvas, myShape); var myC23 = new colourButton(100, 340, 60, 30, colArray[0][9], colArray[0][14], canvas, myShape); var myC24 = new colourButton(175, 340, 60, 30, colArray[1][9], colArray[0][14], canvas, myShape);
/*cool pink*/ 
var myC25 = new colourButton(25, 380, 60, 30, colArray[2][10], colArray[0][14], canvas, myShape); var myC26 = new colourButton(100, 380, 60, 30, colArray[0][10], colArray[0][14], canvas, myShape); var myC27 = new colourButton(175, 380, 60, 30, colArray[1][10], colArray[0][14], canvas, myShape);
/*warm pink*/ 
var myC28 = new colourButton(25, 420, 60, 30, colArray[2][11], colArray[0][14], canvas, myShape); var myC29 = new colourButton(100, 420, 60, 30, colArray[0][11], colArray[0][14], canvas, myShape); var myC30 = new colourButton(175, 420, 60, 30, colArray[1][11], colArray[0][14], canvas, myShape);
/*black+white*/
var myC31 = new colourButton(25, 460, 60, 90, colArray[0][14], colArray[0][12], canvas, myShape);  var myC32 = new colourButton(100, 460, 60, 90, colArray[0][13], colArray[0][14], canvas, myShape); var myC33 = new colourButton(175, 460, 60, 90, colArray[0][12], colArray[0][14], canvas, myShape);

//shape buttons
var myS = new shapeButton(965, 60, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Rectangle", canvas, myShape); 
var myS2 = new shapeButton(965, 120, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Ellipse", canvas, myShape);
var myS3 = new shapeButton(965, 180, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Square", canvas, myShape);
var myS4 = new shapeButton(965, 240, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Circle", canvas, myShape);
var myS5 = new shapeButton(965, 300, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Brush", canvas, myShape);
var myS6 = new backgroundButton(965, 360, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Paint", canvas, myShape); 
var myS7 = new shapeButton(965, 420, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Undo", canvas, myShape);
var myS8 = new shapeButton(965, 480, 210, 50, colArray[0][14], colArray[0][14], colArray[0][12], "Clear", canvas, myShape);

//width buttons for brush
var myW = new widthButton(260, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 2, canvas);
var myW2 = new widthButton(329, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 4, canvas);
var myW3 = new widthButton(398, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 6, canvas);
var myW4 = new widthButton(467, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 8, canvas);
var myW5 = new widthButton(536, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 10, canvas);
var myW6 = new widthButton(605, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 12, canvas);
var myW7 = new widthButton(674, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 14, canvas);
var myW8 = new widthButton(743, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 16, canvas);
var myW9 = new widthButton(812, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 18, canvas);
var myW10 = new widthButton(881, 575, 59, 50, colArray[0][14], colArray[0][14], colArray[0][12], 20, canvas);

bitmapTwo = new Image();

objectSet.push(myShape, myS, myS2, myS3, myS4, myS5, myS6, myS7, myS8,
    myW, myW2, myW3, myW4, myW5, myW6, myW7, myW8, myW9, myW10,
    myC, myC2, myC3, myC4, myC5, myC6, myC7, myC8, myC9, myC10, myC11, myC12, myC13, myC14, myC15, myC16, myC17, myC18, myC19, myC20, myC21, myC22, myC23, myC24, myC25, myC26, myC27, myC28, myC29, myC30, myC31, myC32, myC33);

function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}

animate();