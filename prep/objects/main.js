console.log("main js has been called");

/*var myRectangle = new Rectangle(100,200,100,30,colArray[0][3]);
myRectangle.update();
var myRectangle1 = new Rectangle(200,300,150,500,colArray[0][6]);
myRectangle1.update();
var myRectangle2 = new Rectangle(300,400,500,40,colArray[0][7]);
myRectangle2.update();*/

var objectSet = []; //empty array aka list

var FDOne = new fiveDot(400, 100, 60, colArray[1][8], colArray[1][0], colArray[0][6]);
var FDTwo = new fiveDot(200, 300, 100, colArray[1][3], colArray[1][6], colArray[1][3]);
var FDThree = new fiveDot(600, 300, 120, colArray[1][5], colArray[1][8], colArray[1][3]);
var FDFour = new fiveDot(400, 400, 80, colArray[1][8], colArray[1][6], colArray[1][4]);

objectSet.push(FDOne, FDTwo, FDThree, FDFour);
objectSet.push(new fiveDotRotate(150, 100, 80, colArray[0][3], colArray[0][4], colArray[0][5], 60));
console.log(objectSet);

for(var i=0; i<objectSet.length; i++){
   objectSet[i].update(); 
}