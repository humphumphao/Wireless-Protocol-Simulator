function drawTable(canvas){

var bw = 120;
var bh = 400;
var p = 10;
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;


context.beginPath();
for (var x = 0; x <= bw; x += 40) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
}


for (var x = 0; x <= bh; x += 40) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
}

context.strokeStyle = "black";
context.stroke();
context.closePath();
}

function drawingNormal(){
context.clearRect (0, 0, 745, 510);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		
		arrow(10, 175, 69, 175, 1);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		arrow(10, 215, 69, 215, 0);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
		
		arrow(10, 255, 69, 255, 2);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Selected", 75, 250);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 295);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,320);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		arrow(10, 175, 69, 175, 1);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		arrow(10, 215, 69, 215, 0);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
		
		arrow(10, 255, 69, 255, 2);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Selected", 75, 250);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 295);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,320);
		
		context.fillStyle = "yellow";
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
		
		context.fillStyle = "yellow";
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

		context.fillStyle = "yellow";
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
	}
	/*else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "red";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.beginPath();
		context.setLineDash([0]); 
		context.strokeStyle = "black";
		context.rect (10, 80, 20, 20);
		context.stroke();
		context.closePath();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		arrow(10, 175, 69, 175, 1);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		arrow(10, 215, 69, 215, 0);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
		
		arrow(10, 255, 69, 255, 2);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Selected", 75, 250);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 295);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,320);
	}*/
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR set of Node 4", 40, 83);
		
		arrow(10, 175, 69, 175, 3);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Step 1", 75,170);
		
		arrow(10, 215, 69, 215, 4);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Step 2", 75, 210);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 255);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,250);

		
		context.fillStyle = "white";
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
		
		context.fillStyle = "yellow";
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
		
		context.fillStyle = "yellow";
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
		
		context.fillStyle = "yellow";
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
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.fillStyle = "white";
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
		
		context.fillStyle = "white";
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
		
		context.fillStyle = "white";
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
		
		context.fillStyle = "yellow";
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

		context.fillStyle = "yellow";
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

		context.fillStyle = "yellow";
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
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}
}

function brokenNode1(){
context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode2(){
context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
context.moveTo(370,450); //1 to 5
context.lineTo(590,350);
context.stroke();

context.moveTo(370,450); // 1 to 4
context.lineTo(310,310);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode3(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode4(){
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

context.moveTo(175,400); // 2 to 3
context.lineTo(120,290);
context.stroke();

context.moveTo(120,290); // 3 to 6
context.lineTo(210,175);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode5(){
context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
context.moveTo(370,450); // 1 to 2
context.lineTo(175,400);
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

context.moveTo(310,310); // 4 to 9
context.lineTo(360,95);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode6(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode7(){
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

context.moveTo(590,350); // 5 to 8
context.lineTo(460,215);
context.stroke();

context.moveTo(210,175); // 6 to 9
context.lineTo(360,95);
context.stroke();

context.moveTo(460,215); // 8 to 9
context.lineTo(360,95);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode8(){
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

context.moveTo(310,310); // 4 to 5
context.lineTo(590,350);
context.stroke();

context.moveTo(310,310); // 4 to 9
context.lineTo(360,95);
context.stroke();

context.moveTo(590,350); // 5 to 7
context.lineTo(650,175);
context.stroke();

context.moveTo(210,175); // 6 to 9
context.lineTo(360,95);
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
context.arc(360, 95, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.fillStyle = "black"; // font color to write the text with
var font = "bold " + radius +"px serif";
context.font = font;
context.textBaseline = "top";
context.fillText("9", 360-radius/4 ,95-radius/2);

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenNode9(){
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

context.moveTo(590,350); // 5 to 7
context.lineTo(650,175);
context.stroke();

context.moveTo(590,350); // 5 to 8
context.lineTo(460,215);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink12(){
context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink14(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink15(){
context.clearRect (0, 0, 745, 490);
context.beginPath();
context.strokeStyle = '#000000'
context.lineWidth=1
context.setLineDash([8]); 
context.moveTo(370,450); // 1 to 2
context.lineTo(175,400);
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink23(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink24(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink36(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink45(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink46(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink48(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink49(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink57(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink58(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}
}

function brokenLink69(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function brokenLink78(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}

function arrow(fromx, fromy, tox, toy, z){
	context.beginPath();
	context.setLineDash([0]); 
	if(z == "0"){
	context.strokeStyle = '#FF9A00'
	}
	else if(z=="2")
	context.strokeStyle = '#FF0000'
	else if(z=="3")
	context.strokeStyle = '#00FFFF'
	else if(z=="4")
	context.strokeStyle = '#FE2EF7'
	else{
	context.strokeStyle = '#2D37F4'
	}
	context.lineWidth=2
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	context.stroke();
}

function brokenLink89(){
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

if(document.getElementById("dsdv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Destination Sequenced Distance Vector Routing", 180,10);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("dsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Dynamic Source Routing", 280,10);
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("aodv").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Ad Hoc On-Demand Distance Vector Routing", 195,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cache Node", 40, 83);
		
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("lar").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Location-Aided Routing", 280,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("EX Zone", 40, 53);
		
		context.fillStyle = "yellow";
		context.fillRect (10, 80, 20, 20);
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RQ Zone", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREQ", 75,170);
		
		var img1 = new Image(); 
		img1.onload = function()
		{
			context.drawImage(img1, 10, 210);
			};
		img1.src = 'img/letter2.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("RREP", 75, 210);
	}
	else if(document.getElementById("olsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Optimized Link State Routing", 255,10);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("MPR Node", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}
	else if(document.getElementById("cgsr").checked){
		var font = "bold" + radius +"px serif";
		context.font = font;
		context.fillText("Cluster-Head Gateway Switch Routing", 220,10);
		
		context.setLineDash([1]); 
		context.strokeStyle = "blue";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 60, radius, 0, Math.PI * 2);
		context.closePath();
		context.stroke();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Gateway", 40, 53);
		
		context.fillStyle = "yellow";
		context.beginPath();
		var radius = 10; // for example
		context.arc(20, 90, radius, 0, Math.PI * 2);
		context.closePath();
		context.fill();
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Cluster Head", 40, 83);
		
		var img = new Image(); 
		img.onload = function()
		{
			context.drawImage(img, 10, 170);
			};
		img.src = 'img/letter.png';
		
		context.fillStyle = "black";
		var font = "bold 12px serif";
		context.font = font;
		context.fillText("Packet", 75,170);
	}


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

context.fillStyle = "black";
var font = "bold 12px serif";
context.font = font;
context.fillText("Source Node", 40,110);

var font = "bold 12px serif";
context.font = font;
context.fillText("Destination Node", 40,143);
}

}
