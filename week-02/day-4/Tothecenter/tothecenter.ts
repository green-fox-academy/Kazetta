"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const width = 600;
const heigth = 400;
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

for (let i = 50; i < 500; i += 100) {
  drawLine(i, i, "black");
}

function drawLine(xPos: number, yPos: number, color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  ctx.lineTo(200, 300);
  ctx.stroke();
}

