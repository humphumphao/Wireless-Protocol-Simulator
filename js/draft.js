function drawingNormal()
{
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");

context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
context.moveTo(370,450); // 1 to 2
context.lineTo(175,400);
context.stroke();

context.moveTo(370,450); //1 to 5
context.lineTo(590,350);
context.stroke();

context.moveTo(370,450); // 1 to 4
context.lineTo(310,310);
context.stroke();

context.moveTo(175,400); // 2 to 4
context.lineTo(310,310);
context.stroke();

context.moveTo(175,400); // 2 to 3
context.lineTo(120,290);
context.stroke();

context.moveTo(120,290); // 3 to 6
context.lineTo(210,175);
context.stroke();

context.moveTo(310,310); // 4 to 6
context.lineTo(210,175);
context.stroke();

context.moveTo(310,310); // 4 to 8
context.lineTo(460,215);
context.stroke();

context.moveTo(310,310); // 4 to 5
context.lineTo(590,350);
context.stroke();

context.moveTo(310,310); // 4 to 9
context.lineTo(360,95);
context.stroke();

context.moveTo(590,350); // 5 to 7
context.lineTo(650,175);
context.stroke();

context.moveTo(590,350); // 5 to 8
context.lineTo(460,215);
context.stroke();

context.moveTo(210,175); // 6 to 9
context.lineTo(360,95);
context.stroke();

context.moveTo(460,215); // 8 to 9
context.lineTo(360,95);
context.stroke();

context.moveTo(460,215); // 8 to 7
context.lineTo(650,175);
context.stroke();
context.closePath();

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(370, 450, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("1", 370-radius/4 ,450-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(175, 400, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("2", 175-radius/4 ,400-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(120, 290, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("3", 120-radius/4 ,290-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(310, 310, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("4", 310-radius/4 ,310-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(590, 350, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("5", 590-radius/4 ,350-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(210, 175, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("6", 210-radius/4 ,175-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(650, 175, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("7", 650-radius/4 ,175-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(460, 215, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("8", 460-radius/4 ,215-radius/2);

context.fillStyle = "grey";
context.beginPath();
var radius = 20; // for example
context.arc(360, 95, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 360-radius/4 ,95-radius/2);

var font = "bold" + radius +"px serif";
context.font = font;
context.fillText("Destination Sequenced Distance Vector Routing", 180,10);

{ // legend
context.fillStyle = "green";
context.beginPath();
var radius = 10; // for example
context.arc(20, 120, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "red";
context.beginPath();
var radius = 10; // for example
context.arc(20, 150, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
var img = new Image(); 
img.onload = function(){
	context.drawImage(img, 10, 170);
	};
img.src = 'img/letter.png';

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Packet", 75,170);

var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}


}