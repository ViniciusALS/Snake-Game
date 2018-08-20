"use strict";

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

$(function(){
    initialize();
});

function initialize() {
    $(window).resize(drawCanvas);
    drawCanvas();
}

function drawCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    drawBackground();
    homePage();
}

function drawBackground() {
    var grd = ctx.createRadialGradient(c.width / 2, c.height / 2, c.width / 5, c.width / 2, c.height / 2, c.width / 1.1);
    grd.addColorStop(0, "#44897A");
    grd.addColorStop(1, "#00372B");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}

function homePage() {
    ctx.font = "12em Roboto Mono";
    ctx.fillStyle = "#00372B";
    ctx.textAlign = "center";
    ctx.fillText("SNAKE GAME", c.width / 2, c.height * 0.4, c.width * 0.8);
}

// function comandPage(params) {

// }

// function startGame(){

// }

// function keyPressed() {

// }

