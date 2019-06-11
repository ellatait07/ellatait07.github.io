// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  myScale=dpr;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  console.log(rect.width);
  console.log(rect.height);
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}
// basic drawing on the canvas with no functions


 // Now this line will be the same size on the page
  // but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
var width = canvas.width/myScale;
var height = canvas.height/myScale;

//creates the offscreen canvas to improve brush performance
var cv = new OffscreenCanvas(1200, 700);
var cty = cv.getContext('2d');

var colArray=[
  //dark colours in spectrum - skin tones - greyscale
  [
    "rgba(255, 51, 51, 1)", "rgba(255, 153, 51, 1)", "rgba(255, 255, 51, 1)",
    "rgba(0, 255, 0, 1)", "rgba(51, 255, 153, 1)", "rgba(0, 230, 230, 1)",
    "rgba(51, 153, 255, 1)", "rgba(153, 51, 255, 1)", "rgba(204, 0, 204, 1)",
    "rgba(255, 51, 153, 1)", "rgba(224, 172, 105, 1)", "rgba(96, 57, 9, 1)", "rgba(0, 0, 0, 1)"
    ],
  //middle colours in spectrum - skin tones - greyscale
  [
  "rgba(255, 102, 102, 1)", "rgba(255, 178, 102, 1)", "rgba(255, 255, 102, 1)",
  "rgba(102, 255, 102, 1)", "rgba(102, 255, 178, 1)", "rgba(102, 255, 255, 1)",
  "rgba(102, 178, 255, 1)", "rgba(178, 102, 255, 1)", "rgba(255, 102, 255, 1)",
  "rgba(255, 102, 178, 1)", "rgba(241, 194, 125, 1)", "rgba(141, 85, 36, 1)", "rgba(153,153,153,1)"
  ],
  //light colours in spectrum - skin tones - greyscale
  [
  "rgba(255, 153, 153, 1)", "rgba(255, 204, 153, 1)", "rgba(255, 255, 153, 1)",
  "rgba(153, 255, 153, 1)", "rgba(153, 255, 204, 1)", "rgba(153, 255, 255, 1)",
  "rgba(153, 204, 255, 1)", "rgba(204, 153, 255, 1)", "rgba(255, 153, 255, 1)",
  "rgba(255, 153, 204, 1)", "rgba(255, 219, 172, 1)", "rgba(198, 134, 66, 1)", "rgba(255,255,255,1)"
  ],
  
  
  ]