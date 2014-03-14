function showDsr()
{
drawingNormal();
{
document.getElementById("cache").disabled = true;
document.getElementById("source").disabled = false;
document.getElementById("destination").disabled = false;
document.getElementById("radioBrokenNode").disabled = true;
document.getElementById("radioBrokenLink").disabled = true;
document.getElementById("showRouting").disabled = true;
document.getElementById("showRREP").disabled = false;
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
var message = document.getElementById("message");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
document.getElementById("showRREP").value = "Show RREP";
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
message.value="****************Important***************\n\nWhen source node has data packet to send, it initiates RREQ(Route Request) Packet and flood it through the network by repeated broadcasting by other nodes. Sequence number contains in RREQ packet helps avoid loops and multiple transmissions of the same packet received through multiple paths.\n\nDestination node responds with a RREP(Route Reply) Packet after receiving the first RREQ packet. The RREP Packet is sent to the source node through the reverse path. Route constructed as the RREP Packet retraces the path to the source node"

if(sourceNode.value=="1"){
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(124, 313, 158, 384, 1); // 3 to 2
	message.value = "RREQ:\n1 -> 2\n\n1 -> 4 -> 2\n1 -> 4 -> 6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4 -> 6 -> 3\n\n1 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 4\n\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9 -> 4\n\n1 -> 5 -> 4\n1 -> 5 -> 8 -> 4\n1 -> 5 -> 8 -> 9 -> 4 ";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 5\n\n1 -> 4 -> 5\n1 -> 4 -> 8 -> 5\n1 -> 4 -> 8 -> 7 -> 5\n\n1 -> 2 -> 4 -> 5\n1 -> 2 -> 4 -> 8 -> 5\n1 -> 2 -> 4 -> 8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 2 -> 3 -> 6\n1 -> 2 -> 4 -> 6\n\n1 -> 4 -> 6\n1 -> 4 -> 9 -> 6\n1 -> 4 -> 8 -> 9 -> 6\n1 -> 4 -> 5 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 2 -> 4 -> 5 -> 7\n1 -> 2 -> 4 -> 5 -> 8 -> 7\n1 -> 2 -> 4 -> 8 -> 7\n\n1 -> 4 -> 5 -> 7\n1 -> 4 -> 5 -> 8 -> 7\n1 -> 4 -> 8 -> 7\n\n1 -> 5 -> 7\n1 -> 8 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n1 -> 4 -> 8\n1 -> 4 -> 5 -> 8\n1 -> 4 -> 5 -> 7 -> 8\n1 -> 4 -> 9 -> 8\n1 -> 4 -> 6 -> 9 -> 8\n\n1 -> 5 -> 8\n1 -> 5 -> 7 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n1 -> 4 -> 9\n1 -> 4 -> 8 -> 9\n1 -> 4 -> 6 -> 9";
  }
}
else if(sourceNode.value=="2"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 1\n\n2 -> 4 -> 1\n2 -> 4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 3\n\n2 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 4\n\n2 -> 1 -> 4\n2 -> 1 -> 5 -> 4\n2 -> 1 -> 5 -> 8 -> 4\n2 -> 1 -> 5 -> 8 -> 9 -> 4\n\n2 -> 3 -> 6 -> 4\n2 -> 3 -> 6 -> 9 -> 4";
  } 
  else if(destinationNode.value=="5"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 1 -> 5\n\n2 -> 4 -> 5\n2 -> 4 -> 8 -> 5\n2 -> 4 -> 8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n2 -> 3 -> 6\n\n2 -> 4 -> 6\n2 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 1 -> 5 -> 7\n\n2 -> 4 -> 5 -> 7\n2 -> 4 -> 1 -> 5 -> 7\n2 -> 4 -> 8 -> 7\n2 -> 4 -> 8 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n2 -> 1 -> 5 -> 8\n2 -> 1 -> 5 -> 7 -> 8\n2 -> 1 -> 4 -> 8\n2 -> 1 -> 4 -> 5 -> 8\n2 -> 1 -> 4 -> 5 -> 7 -> 8\n\n2 -> 4 -> 8\n2 -> 4 -> 5 -> 8\n2 -> 4 -> 5 -> 7 -> 8\n2 -> 4 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n2 -> 3 -> 6 -> 9\n\n2 -> 4 -> 9\n2 -> 4 -> 6 -> 9\n2 -> 4 -> 8 -> 9";
  }
}
else if(sourceNode.value=="3"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n3 -> 2 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6 -> 4 -> 2\n3 -> 6 -> 4 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n3 -> 2 -> 4\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 1 -> 5 -> 4\n3 -> 2 -> 1 -> 5 -> 8 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9 -> 4\n3 -> 6 -> 9 -> 8 -> 4 ";
  } 
  else if(destinationNode.value=="5"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 4 -> 1 -> 5\n3 -> 2 -> 4 -> 8 -> 5\n3 -> 2 -> 4 -> 8 -> 7 -> 5\n\n3 -> 6 -> 4 -> 5\n3 -> 6 -> 4 -> 1 -> 5\n3 -> 6 -> 4 -> 8 -> 5\n3 -> 6 -> 4 -> 8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n3 -> 6\n\n3 -> 2 -> 4 -> 6\n3 -> 2 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 2 -> 4 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 8 -> 7\n3 -> 2 -> 4 -> 8 -> 5 -> 7\n\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 5 -> 7\n3 -> 6 -> 4 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n3 -> 2 -> 4 -> 8\n3 -> 2 -> 4 -> 5 -> 8\n3 -> 2 -> 4 -> 5 -> 7 -> 8\n\n3 -> 6 -> 9 -> 8\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 4 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n3 -> 2 -> 4 -> 9\n3 -> 2 -> 4 -> 8 -> 9 \n\n3 -> 6 -> 9\n3 -> 6 -> 4 -> 9\n3 -> 6 -> 4 -> 8 -> 9";
  }
}
else if(sourceNode.value=="4"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 1\n\n4 -> 2 -> 1\n\n4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 2\n\n4 -> 1 -> 2\n\n4 -> 6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 2 -> 3\n\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 5\n\n4 -> 1 -> 5\n\n4 -> 8 -> 5\n4 -> 8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n4 -> 6\n\n4 -> 9 -> 6\n\n4 -> 2 -> 3 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 8 -> 7\n4 -> 8 -> 5 -> 7\n\n4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n4 -> 8\n\n4 -> 5 -> 8\n4 -> 5 -> 7 -> 8\n\n4 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n4 -> 9\n\n4 -> 6 -> 9\n\n4 -> 8 -> 9";
  }
}
else if(sourceNode.value=="5"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n5 -> 1\n\n5 -> 4 -> 1\n\n5 -> 4 -> 2 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(322, 287, 361, 122, 1); // 4 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n5 -> 1 -> 2\n\n5 -> 4 -> 2\n5 -> 4 -> 1 -> 2\n5 -> 4 -> 6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
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
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n5 -> 1 -> 2 -> 3\n\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 1 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n5 -> 4\n\n5 -> 1 -> 4\n5 -> 1 -> 2 -> 4\n\n5 -> 8 -> 4\n5 -> 8 -> 9 -> 4\n5 -> 8 -> 9 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
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
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n5 -> 1 -> 2 -> 3 -> 6\n\n5 -> 4 -> 6\n5 -> 4 -> 2 -> 3 -> 6\n5 -> 4 -> 1 -> 2 -> 3 -> 6\n5 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n5 -> 7\n\n5 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n5 -> 8\n\n5 -> 7 -> 8\n\n5 -> 4 -> 8\n5 -> 4 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n5 -> 8 -> 9\n\n5 -> 4 -> 9\n5 -> 4 -> 6 -> 9\n5 -> 4 -> 8 -> 9";
  }
}
else if(sourceNode.value=="6"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 4 -> 1\n6 -> 4 -> 5 -> 1\n6 -> 4 -> 2 -> 1\n\n6 -> 3 -> 2 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3 -> 2\n\n6 -> 4 -> 2\n6 -> 4 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(345, 118, 306, 284, 1); // 9 to 4
	message.value = "RREQ:\n6 -> 4\n\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 4\n\n6 -> 9 -> 4\n6 -> 9 -> 8 -> 4\n6 -> 9 -> 8 -> 5 -> 4\n6 -> 9 -> 8 -> 5 -> 1 -> 4";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 4 -> 5\n6 -> 4 -> 1 -> 5\n6 -> 4 -> 8 -> 5\n6 -> 4 -> 8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 4 -> 5 -> 7\n6 -> 4 -> 8 -> 7\n6 -> 4 -> 1 -> 5 -> 7\n6 -> 4 -> 8 -> 5 -> 7\n6 -> 4 -> 9 -> 8 -> 7\n6 -> 4 -> 9 -> 8 -> 5 -> 7\n\n6 -> 9 -> 8 -> 7\n6 -> 9 -> 8 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 4 -> 8\n6 -> 4 -> 9 -> 8\n6 -> 4 -> 5 -> 8\n6 -> 4 -> 5 -> 7 -> 8\n\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n6 -> 9\n6 -> 4 -> 9\n6 -> 4 -> 8 -> 9";
  }
}
else if(sourceNode.value=="7"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5 -> 1\n\n7 -> 8 -> 5 -> 1\n7 -> 8 -> 4 -> 1\n7 -> 8 -> 4 -> 5 -> 1\n7 -> 8 -> 4 -> 2 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5 -> 1 -> 2\n7 -> 5 -> 4 -> 2\n7 -> 5 -> 4 -> 1 -> 2\n7 -> 5 -> 4 -> 6 -> 3 -> 2\n7 -> 5 -> 1 -> 4 -> 6 -> 3 -> 2\n\n7 -> 8 -> 4 -> 2\n7 -> 8 -> 5 -> 4 -> 2\n7 -> 8 -> 5 -> 1 -> 2\n7 -> 8 -> 5 -> 4 -> 1 -> 2\n7 -> 8 -> 4 -> 6 -> 3 -> 2\n7 -> 8 -> 5 -> 4 -> 6 -> 3 -> 2\n7 -> 8 -> 5 -> 1 -> 4 -> 6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5 -> 1 -> 2 -> 3\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 5 -> 4 -> 1 -> 2 -> 3\n\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 1 -> 2 -> 3\n7 -> 8 -> 5 -> 1 -> 2 -> 3\n7 -> 8 -> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 5 -> 4 -> 1 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(345, 118, 306, 284, 1); // 9 to 4
	message.value = "RREQ:\n7 -> 5 -> 4\n7 -> 5 -> 1 -> 4\n7 -> 5 -> 1 -> 2 -> 4\n\n7 -> 8 -> 4\n7 -> 8 -> 9 -> 4\n7 -> 8 -> 9 -> 6 -> 4\n7 -> 8 -> 5 -> 4\n7 -> 8 -> 5 -> 1 -> 4\n7 -> 8 -> 5 -> 1 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 4 -> 5 \n7 -> 8 -> 4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5 -> 1 -> 2 -> 3 -> 6 \n\n7 -> 8 -> 4 -> 6\n7 -> 8 -> 9 -> 6\n7 -> 8 -> 4 -> 9 -> 6\n7 -> 8 -> 4 -> 2 -> 3 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(372, 118, 440, 202, 1); // 9 to 8
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 8\n\n7 -> 5 -> 8\n7 -> 5 -> 4 -> 8\n7 -> 5 -> 4 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n7 -> 5 -> 4 -> 9\n7 -> 5 -> 4 -> 6 -> 9\n7 -> 5 -> 8 -> 9 \n\n7 -> 8 -> 9\n7 -> 8 -> 4 -> 9\n7 -> 8 -> 4 -> 6 -> 9";
  }
}
else if(sourceNode.value=="8"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 5 -> 1\n\n8 -> 4 -> 1\n8 -> 4 -> 2 -> 1\n8 -> 4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 2\n8 -> 4 -> 1 -> 2\n8 -> 4 -> 6 -> 3 -> 2\n\n8 -> 5 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 2 -> 3\n8 -> 4 -> 6 -> 3\n\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(345, 118, 306, 284, 1); // 9 to 4
	message.value = "RREQ:\n8 -> 4\n\n8 -> 5 -> 4\n8 -> 5 -> 1 -> 4\n8 -> 5 -> 1 -> 2 -> 4\n\n8 -> 9 -> 4\n8 -> 9 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
  	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4 -> 5\n8 -> 4 -> 1 -> 5\n\n8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 4 -> 6\n8 -> 4 -> 9 -> 6\n8 -> 4 -> 2 -> 3 -> 6\n\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 7\n\n8 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(452, 194, 382, 110, 1); // 8 to 9
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(322, 287, 361, 122, 1); // 4 to 9
	message.value = "RREQ:\n8 -> 9\n\n8 -> 4 -> 9\n8 -> 4 -> 6 -> 9";
  }
}
else if(sourceNode.value=="9"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4 -> 1\n9 -> 4 -> 2 -> 1\n9 -> 4 -> 5 -> 1\n9 -> 4 -> 8 -> 5 -> 1\n\n9 -> 8 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4 -> 2\n9 -> 4 -> 1 -> 2\n9 -> 4 -> 6 -> 3 -> 2\n\n9 -> 6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 6 -> 3\n\n9 -> 4 -> 6 -> 3\n9 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(553, 340, 339, 306, 1); // 5 to 4
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 4\n\n9 -> 6 -> 4\n9 -> 6 -> 3 -> 2 -> 4\n9 -> 6 -> 3 -> 2 -> 1 -> 4\n\n9 -> 8 -> 4\n9 -> 8 -> 5 -> 4\n9 -> 8 -> 5 -> 1 -> 4";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 8 -> 5\n9 -> 8 -> 7 -> 5\n\n9 -> 4 -> 5\n9 -> 4 -> 8 -> 5\n9 -> 4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1    
	arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 6\n\n9 -> 4 -> 6\n9 -> 4 -> 2 -> 3 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1    
	arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 8 -> 7\n9 -> 8 -> 5 -> 7\n\n9 -> 4 -> 8 -> 7\n9 -> 4 -> 5 -> 7 \n9 -> 4 -> 8 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(281, 319, 188, 380, 1); // 4 to 2
	arrow(311, 336, 353, 429, 1); // 4 to 1    
	arrow(548, 360, 391, 427, 1); // 5 to 1
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(301, 287, 232, 190, 1); // 4 to 6	
	arrow(338, 303, 444, 236, 1); // 4 to 8
	arrow(336, 322, 546, 353, 1); // 4 to 5
	arrow(606, 331, 653, 202, 1); // 5 to 7	
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(580, 329, 482, 226, 1); // 5 to 8
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(345, 118, 306, 284, 1); // 9 to 4
	arrow(336, 99, 228, 157, 1); // 9 to 6
	arrow(372, 118, 440, 202, 1); // 9 to 8
	message.value = "RREQ:\n9 -> 8\n\n9 -> 4 -> 8\n9 -> 4 -> 5 -> 8\n9 -> 4 -> 5 -> 7 -> 8";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}

}