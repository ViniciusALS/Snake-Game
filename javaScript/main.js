"use strict";

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

$(function(){
    initialize();
});

function initialize() {
    window.addEventListener('resize', drawCanvas, false);
    drawCanvas();
}

function drawCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    drawBackground();
}

function drawBackground() {
    var grd = ctx.createRadialGradient(c.width / 2, c.height / 2, c.width / 5, c.width / 2, c.height / 2, c.width / 1.1);
    grd.addColorStop(0, "#001433");
    grd.addColorStop(1, "#425979");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}