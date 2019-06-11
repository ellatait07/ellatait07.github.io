console.log("init js file has been called");
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
console.log(width);
console.log(height);

//new
var cv = new OffscreenCanvas(800, 600);
var cty = cv.getContext('2d');

var colArray=[
  [
  "rgba(255,255,255,1)", "rgba(153,153,153,1)", "rgba(0,0,0,1)", 
  "rgba(204,0,0,1)","rgba(243, 129, 129, 1)", "rgba(251, 176, 105, 1)", "rgba(247, 222, 99, 1)",
  "rgba(147, 255, 158, 1)","rgba(163, 232, 249, 1)", "rgba(205, 132, 245, 1)"
  ],
  [
      "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
      "rgba(204,0,0,0.67)","rgba(243, 129, 129, 0.67)", "rgba(251, 176, 105, 0.67)", "rgba(247, 222, 99, 0.67)",
      "rgba(147, 255, 158, 0.67)","rgba(163, 232, 249, 0.67)", "rgba(205, 132, 245, 0.67)"
      ],
  [
      "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
      "rgba(204,0,0,0.33)","rgba(255,204,51,0.33)", "rgba(251, 176, 105, 0.33)", "rgba(51,51,255,0.33)",
      "rgba(0,153,204,0.33)","rgba(147, 255, 158, 0.33)","rgba(163, 232, 249, 0.33)"
      ]
  ]