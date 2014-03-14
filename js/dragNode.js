function rect(){
 context.beginPath();
 context.rect(75,50,200,100);
 context.closePath();
 context.fill();
}

function clear() {
 context.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
 var c = document.getElementById("myCanvas");
 var context = c.getContext("2d");
 return setInterval(draw, 10);
}

function draw() {
 clear();
 context.fillStyle = "#FAF7F8";
 rect(0,0,WIDTH,HEIGHT);
 context.fillStyle = "#444444";
 rect(x - 15, y - 15, 30, 30);
}

function myMove(e){
 if (dragok){
  x = e.pageX - c.offsetLeft;
  y = e.pageY - c.offsetTop;
 }
}

function myDown(e){
 if (e.pageX < x + 15 + c.offsetLeft && e.pageX > x - 15 +
 c.offsetLeft && e.pageY < y + 15 + c.offsetTop &&
 e.pageY > y -15 + c.offsetTop){
  x = e.pageX - c.offsetLeft;
  y = e.pageY - c.offsetTop;
  dragok = true;
  c.onmousemove = myMove;
 }
}

function myUp(){
 dragok = false;
 c.onmousemove = null;
}

init();
c.onmousedown = myDown;
c.onmouseup = myUp;