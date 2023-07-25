const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
let isPainting = false;
let currentColor = "#FF0099";

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", updateColor);

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", draw);

function startPainting(event) {
  isPainting = true;
  draw(event);
}

function stopPainting() {
  isPainting = false;
}

function draw(event) {
  if (!isPainting) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = currentColor;
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.stroke();
}

function updateColor() {
  currentColor = colorPicker.value;
}
