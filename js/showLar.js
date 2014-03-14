function showLar()
{	
drawingNormal();

document.getElementById("cache").disabled = true;
document.getElementById("source").disabled = false;
document.getElementById("destination").disabled = false;
document.getElementById("radioBrokenNode").disabled = true;
document.getElementById("radioBrokenLink").disabled = true;
document.getElementById("showRouting").disabled = true;
document.getElementById("showRREP").disabled = false;
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var brokenNode=document.getElementById("brokenNode");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
var message = document.getElementById("message");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
greenNode(sourceNode.value);
redNode(destinationNode.value);
document.getElementById('routingTable').innerHTML = 	

"<table border = '1' valign = 'middle' >" +
	
	"<tr>" +
	
	"<tr colspan=3>" +
	
	"Routing Table - Node X" +
	
	"<tr>" +

    "<td>Destn</td>" +

    "<td>Next Node</td>" +

    "<td>Dist</td>" +

    "</tr>" +

    "<table>";
message.value="****************Important***************\n\nUses location information with the availability of Global Positioning System(GPS) to reduce control overhead by Selective Forwarding.\n\nTwo geographic regions(GPS):\n\nRequestZone(RqZone):Region within which the routing request should be restricted.\n\nRqZone is the rectangle that encloses both the source node and ExZone whereby source node is either within or outside of the ExZone.\n\nAny nodes which are not within the RqZone do not need to broadcast the packet.\n\nExpectedZone(ExZone):Region where the destination node is expected, based on its location and mobility information.\n\nOnce received packet, destination node generates RREP back to source node.";

if(sourceNode.value=="1"){
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (92, 251, 350, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 80; // for example
	context.arc(176, 386, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
		
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n1 -> 2\n\n1 -> 5\n\n1 -> 4\n1 -> 4 -> 2\n1 -> 4 -> 5\n1 -> 4 -> 6\n1 -> 4 -> 8\n1 -> 4 -> 9";
  }	
  else if(destinationNode.value=="3"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (92, 251, 350, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 73; // for example
	context.arc(164, 324, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4\n\n1 -> 5\n\n1 -> 4\n1 -> 4 -> 2\n1 -> 4 -> 5\n1 -> 4 -> 6\n1 -> 4 -> 8\n1 -> 4 -> 9
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5


	message.value = "RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4\n\n1 -> 5\n\n1 -> 4\n1 -> 4 -> 2\n1 -> 4 -> 5\n1 -> 4 -> 6\n1 -> 4 -> 8\n1 -> 4 -> 9";
  }
  else if(destinationNode.value=="4"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (260, 253, 250, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(332, 325, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n1 -> 2\n\n1 -> 4\n\n1 -> 5 ";
  } 
  else if(destinationNode.value=="5"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (347, 299, 280, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(550, 368, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n1 -> 2\n\n1 -> 4\n\n1 -> 5 ";
  }
  else if(destinationNode.value=="6"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (174, 145, 230, 350);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 58; // for example
	context.arc(233, 204, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5

	message.value = "RREQ:\n1 -> 4 -> 2\n1 -> 4 -> 5\n1 -> 4 -> 6\n1 -> 4 -> 8\n1 -> 4 -> 9\n\n1 -> 5";
  }
  else if(destinationNode.value=="7"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (538, 123, 230, 350);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 58; // for example
	context.arc(637, 194, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	message.value = "RREQ:\n1 -> 2\n1 -> 4\n\n1 -> 5 -> 7\n1 -> 5 -> 8";
  }
  else if(destinationNode.value=="8"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (400, 128, 230, 350);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 58; // for example
	context.arc(468, 234, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	message.value = "RREQ:\n1 -> 2\n1 -> 4\n\n1 -> 5 -> 7\n1 -> 5 -> 8";
  }
  else if(destinationNode.value=="9"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (233, 65, 230, 350);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 48; // for example
	context.arc(357, 112, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n1 -> 2\n\n1 -> 4 -> 9\n1 -> 4 -> 8\n1 -> 4 -> 6\n1 -> 4 -> 5\n1 -> 4 -> 2\n\n1 -> 5";
  }
}
else if(sourceNode.value=="2"){
if(destinationNode.value=="1"){
		
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (126, 356, 290, 140);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(341, 424, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3\n2 -> 4";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
 		
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (73, 244, 140, 290);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(149, 319, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3\n2 -> 4";
  }
  else if(destinationNode.value=="4"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (144, 273, 200, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(285, 336, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3\n2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (345, 300, 300, 180);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(562, 363, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n2 -> 1 -> 5\n\n2 -> 3\n\n2 -> 4";
  }
  else if(destinationNode.value=="6"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (81, 135, 180, 300);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(188, 205, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3 -> 6\n\n2 -> 4";
  }
  else if(destinationNode.value=="7"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (286, 144, 400, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 35; // for example
	context.arc(653, 178, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	message.value = "RREQ:\n2 -> 1 -> 5\n\n2 -> 3\n\n2 -> 4 -> 5\n2 -> 4 -> 6\n2 -> 4 -> 8 -> 7\n2 -> 4 -> 9";
  }
  else if(destinationNode.value=="8"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (286, 144, 260, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 69; // for example
	context.arc(453, 225, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3\n\n2 -> 4 -> 5\n2 -> 4 -> 6\n2 -> 4 -> 8\n2 -> 4 -> 9";
  }
  else if(destinationNode.value=="9"){
  
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (266, 65, 160, 280);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(342, 125, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n2 -> 1\n\n2 -> 3\n\n2 -> 4 -> 5\n2 -> 4 -> 6\n2 -> 4 -> 8\n2 -> 4 -> 9";
  }
}
else if(sourceNode.value=="3"){
if(destinationNode.value=="1"){

	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (126, 356, 290, 140);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(341, 424, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2 -> 1\n3 -> 2 -> 4\n\n3 -> 6";
  }	
  else if(destinationNode.value=="2"){
 
 	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (73, 244, 140, 290);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(153, 391, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (78, 148, 260, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(277, 290, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
  	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (142, 278, 500, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 76; // for example
	context.arc(556, 377, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 4 -> 1 -> 5\n3 -> 2 -> 4 -> 9\n3 -> 2 -> 4 -> 8\n3 -> 2 -> 4 -> 6";
  }
  else if(destinationNode.value=="6"){

  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (81, 135, 180, 230);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(188, 205, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6";
  }
  else if(destinationNode.value=="7"){

    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (269, 145, 420, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(625, 205, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	message.value = "RREQ:\n3 -> 2 -> 4 -> 1\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 4 -> 6\n3 -> 2 -> 4 -> 8 -> 7\n3 -> 2 -> 4 -> 9\n3 -> 6";
  }
  else if(destinationNode.value=="8"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (269, 145, 300, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(454, 220, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2 -> 4 -> 1\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 4 -> 6\n3 -> 2 -> 4 -> 8\n3 -> 2 -> 4 -> 9\n3 -> 6";
  }
  else if(destinationNode.value=="9"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (153, 54, 250, 146);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(339, 114, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();

	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6 -> 9";
  }
}
else if(sourceNode.value=="4"){
if(destinationNode.value=="1"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (273, 269, 140, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(347, 426, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5

	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }	
  else if(destinationNode.value=="2"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (143, 287, 200, 170);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(200, 396, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }	
  else if(destinationNode.value=="3"){
  
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (90, 250, 200, 170);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(146, 315, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2 -> 3\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (464, 293, 200, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(587, 360, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }
  else if(destinationNode.value=="6"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (150, 133, 200, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(224, 199, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }
  else if(destinationNode.value=="7"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (269, 145, 420, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(625, 205, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8 -> 5\n4 -> 8 -> 7\n4 -> 8 -> 9\n\n4 -> 9";
  }
  else if(destinationNode.value=="8"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (269, 145, 300, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(454, 220, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }
  else if(destinationNode.value=="9"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (272, 54, 250, 146);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(339, 114, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2\n\n4 -> 5\n\n4 -> 6\n\n4 -> 8\n\n4 -> 9";
  }
}
else if(sourceNode.value=="5"){
if(destinationNode.value=="1"){
		
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (347, 299, 280, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(414, 436, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8";
  }	
  else if(destinationNode.value=="2"){

  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (135, 350, 280, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(206, 419, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(346, 434, 208, 397, 1); // 1 to 2
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1 -> 2\n5 -> 1 -> 4\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8";
  }	
  else if(destinationNode.value=="3"){
  
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (72, 252, 350, 230);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(135, 320, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1 -> 2 -> 3\n\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 1 -> 2 -> 3\n5 -> 4 -> 6\n5 -> 4 -> 8\n5 -> 4 -> 9\n\n5 -> 7\n5 -> 8";
  }
  else if(destinationNode.value=="4"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (248, 245, 200, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(305, 307, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (157, 132, 200, 210);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(232, 193, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4 -> 1\n5 -> 4 -> 2\n5 -> 4 -> 6\n5 -> 4 -> 8\n5 -> 4 -> 9\n\n5 -> 7\n\n5 -> 8";
  }
  else if(destinationNode.value=="7"){
    
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (547, 139, 150, 300);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(630, 196, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8";
  }
  else if(destinationNode.value=="8"){
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (414, 158, 200, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(471, 225, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8";
  }
  else if(destinationNode.value=="9"){

    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (299, 38, 200, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(358, 111, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4\n\n5 -> 7\n\n5 -> 8 -> 9";
  }
}
else if(sourceNode.value=="6"){
if(destinationNode.value=="1"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (273, 269, 140, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(347, 426, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8\n6 -> 4 -> 9\n\n6 -> 9";
  }	
  else if(destinationNode.value=="2"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (142, 287, 210, 210);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(197, 402, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8\n6 -> 4 -> 9\n\n6 -> 9";
  }	
  else if(destinationNode.value=="3"){

  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (81, 135, 180, 230);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(157, 292, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4\n\n6 -> 9";
  }
  else if(destinationNode.value=="4"){
  
    context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (241, 217, 140, 180);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(313, 306, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4\n\n6 -> 9";
  } 
  else if(destinationNode.value=="5"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (278, 279, 440, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(587, 360, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8\n6 -> 4 -> 9\n\n6 -> 9";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (267, 152, 440, 179);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(637, 207, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8 -> 7\n6 -> 4 -> 9\n\n6 -> 9";
  }
  else if(destinationNode.value=="8"){
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (267, 152, 290, 179);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(435, 237, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8\n6 -> 4 -> 9\n\n6 -> 9";
  }
  else if(destinationNode.value=="9"){
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (261, 57, 175, 159);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(354, 120, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 1\n6 -> 4 -> 2\n6 -> 4 -> 5\n6 -> 4 -> 8\n6 -> 4 -> 9\n\n6 -> 9";
  }
}
else if(sourceNode.value=="7"){
if(destinationNode.value=="1"){

	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (347, 299, 280, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(414, 436, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();

	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(548, 360, 391, 427, 1); // 5 to 1
	message.value = "RREQ:\n7 -> 5 -> 1\n\n7 -> 8 ";
  }	
  else if(destinationNode.value=="2"){
		
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (147, 194, 410, 242);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(210, 370, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 9\n7 -> 8 -> 4 -> 2\n7 -> 8 -> 4 -> 5\n7 -> 8 -> 4 -> 6\n7 -> 8 -> 4 -> 9";
  }	
  else if(destinationNode.value=="3"){
  
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (77, 194, 410, 242);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(147, 289, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(336, 322, 546, 353, 1); // 4 to 5
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 9\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 5\n7 -> 8 -> 4 -> 6\n7 -> 8 -> 4 -> 9";

  }
  else if(destinationNode.value=="4"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (241, 195, 250, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(304, 286, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 9\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (547, 139, 150, 300);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(602, 352, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();

	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8";
  }
  else if(destinationNode.value=="6"){
  
  	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (160, 134, 400, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(222, 191, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 9\n7 -> 8 -> 4 -> 2\n7 -> 8 -> 4 -> 5\n7 -> 8 -> 4 -> 6\n7 -> 8 -> 4 -> 9";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
  
   	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (414, 134, 270, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(490, 212, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	message.value = "RREQ:\n7 -> 8\n\n7 -> 5";
  }
  else if(destinationNode.value=="9"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (293, 54, 270, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(369, 111, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 8 -> 9\n\n7 -> 5";
  }
}
else if(sourceNode.value=="8"){
if(destinationNode.value=="1"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (347, 299, 280, 200);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 65; // for example
	context.arc(414, 436, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5 -> 1\n8 -> 5 -> 7\n\n8 -> 7\n\n8 -> 9";
  }	
  else if(destinationNode.value=="2"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (143, 287, 200, 170);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(200, 396, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 1\n8 -> 4 -> 2\n8 -> 4 -> 5\n8 -> 4 -> 6\n8 -> 4 -> 9\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }	
  else if(destinationNode.value=="3"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (90, 250, 270, 170);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(146, 315, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 1\n8 -> 4 -> 2 -> 3\n8 -> 4 -> 5\n8 -> 4 -> 6\n8 -> 4 -> 9\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }
  else if(destinationNode.value=="4"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (269, 145, 300, 190);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(454, 220, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5\n8 -> 7\n8 -> 9";
  } 
  else if(destinationNode.value=="5"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (435, 189, 200, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(569, 322, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }
  else if(destinationNode.value=="6"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (150, 133, 200, 240);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(224, 199, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 1\n8 -> 4 -> 2\n8 -> 4 -> 5\n8 -> 4 -> 6\n8 -> 4 -> 9\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }
  else if(destinationNode.value=="7"){
   	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (414, 134, 270, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(620, 192, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (293, 54, 270, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(369, 111, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5\n8 -> 7\n8 -> 9";
  }
}
else if(sourceNode.value=="9"){
if(destinationNode.value=="1"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (273, 269, 140, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(347, 426, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4 -> 1\n9 -> 4 -> 2\n9 -> 4 -> 5\n9 -> 4 -> 6\n9 -> 4 -> 8\n\n9 -> 6\n\n9 -> 8";
  }	
  else if(destinationNode.value=="2"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (143, 287, 200, 170);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(200, 396, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4 -> 1\n9 -> 4 -> 2\n9 -> 4 -> 5\n9 -> 4 -> 6\n9 -> 4 -> 8\n\n9 -> 6\n\n9 -> 8";
  }	
  else if(destinationNode.value=="3"){
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (81, 135, 180, 230);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 59; // for example
	context.arc(157, 292, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(188, 192, 127, 268, 1); // 6 to 3
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6 -> 3\n\n9 -> 8";
  }
  else if(destinationNode.value=="4"){
  
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (266, 65, 160, 280);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 56; // for example
	context.arc(328, 280, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6\n\n9 -> 8";
  } 
  else if(destinationNode.value=="5"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (435, 189, 200, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(569, 322, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6\n\n9 -> 8 -> 5\n9 -> 8 -> 7";
  }
  else if(destinationNode.value=="6"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (161, 70, 250, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(227, 176, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6\n\n9 -> 8";
  }
  else if(destinationNode.value=="7"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (414, 134, 270, 150);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(620, 192, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 8 -> 7\n9 -> 8 -> 5\n9 -> 8 -> 4\n\n9 -> 4\n\n9 -> 6";
  }
  else if(destinationNode.value=="8"){
	
	context.beginPath();
	context.setLineDash([0]); 
	context.strokeStyle = "black";
	context.rect (293, 54, 270, 220);
	context.stroke();
	context.closePath();
	
	context.setLineDash([1]); 
	context.strokeStyle = "red";
	context.beginPath();
	var radius = 55; // for example
	context.arc(445, 200, radius, 0, Math.PI * 2);
	context.closePath();
	context.stroke();
	
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6\n\n9 -> 8";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}




}