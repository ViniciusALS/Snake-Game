"use strict";

// Obtain a reference to the canvas element using its id.
var htmlCanvas = document.getElementById("myCanvas");
// Obtain a graphics context on the canvas element for drawing.
var ctx = htmlCanvas.getContext('2d');

$(function(){
    // Start listening to resize events and draw canvas.
    initialize();
});

function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
    redraw();
}

// Display custom canvas. In this case it's a blue, 5 pixel 
// border that resizes along with the browser window.
function redraw() {
    ctx.fillStyle = "#00293e";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    // context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}