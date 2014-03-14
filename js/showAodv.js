function showAodv()
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
message.value="****************Important***************\n\nUses flooding technique similar to Dynamic Source Routing(DSR) to propagate RREQ Packet.\n\nUsing Route Cache:\nIntermediate nodes store in route cache all possible information extracted from the source route contained in a data packet.\n\nWhen a node receives a new RREQ Packet, it checks its route cache. If it contains route information to the destination, then it will send RREP Packet with complete path information. If not, it will broadcast the packet over to other nodes.";

if(sourceNode.value=="1"){
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n1 -> 2\n\n1 -> 4\n\n1 -> 5";
  }	
  else if(destinationNode.value=="3"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(202, 391, 292, 333, 1); // 2 to 4
	message.value = "RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4\n\n1 -> 4\n\n1 -> 5";
  }
  else if(destinationNode.value=="4"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5";
  } 
  else if(destinationNode.value=="5"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6\n\n1 -> 4\n\n1 -> 5";
  }
  else if(destinationNode.value=="7"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5";
  }
  else if(destinationNode.value=="8"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5";
  }
  else if(destinationNode.value=="9"){
	arrow(346, 434, 208, 397, 1); // 1 to 2
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5";
  }
}
else if(sourceNode.value=="2"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(171, 378, 137, 310, 1); // 2 to 3
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(219, 198, 290, 297, 1); // 6 to 4
	message.value = "RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4";
  }
}
else if(sourceNode.value=="3"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  }	
  else if(destinationNode.value=="2"){
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
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
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  } 
  else if(destinationNode.value=="5"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  }
  else if(destinationNode.value=="6"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(140, 277, 199, 201, 1); // 3 to 6
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(369, 427, 327, 330, 1); // 1 to 4
    arrow(397, 448, 568, 369, 1); // 1 to 5
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(140, 277, 199, 201, 1); // 3 to 6
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9";
  }
}
else if(sourceNode.value=="4"){
if(destinationNode.value=="1"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="2"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="3"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="6"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="7"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="8"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="9"){
	message.value = "RREQ:";
  }
}
else if(sourceNode.value=="5"){
if(destinationNode.value=="1"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="2"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="3"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="4"){
	message.value = "RREQ:";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="7"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="8"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="9"){
	message.value = "RREQ:";
  }
}
else if(sourceNode.value=="6"){
if(destinationNode.value=="1"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n\n6 -> 4\n\n6 -> 9";
  }	
  else if(destinationNode.value=="2"){
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n6 -> 3 -> 2\n\n6 -> 4\n\n6 -> 9";
  }	
  else if(destinationNode.value=="3"){
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	message.value = "RREQ:\n6 -> 3\n\n6 -> 4\n\n6 -> 9";
  }
  else if(destinationNode.value=="4"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9";
  } 
  else if(destinationNode.value=="5"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9";
  }
  else if(destinationNode.value=="8"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9";
  }
  else if(destinationNode.value=="9"){
	arrow(195, 413, 345, 453, 1); // 2 to 1
	arrow(202, 391, 292, 333, 1); // 2 to 4
	arrow(124, 313, 158, 384, 1); // 3 to 2
	arrow(219, 198, 290, 297, 1); // 6 to 4
	arrow(188, 192, 127, 268, 1); // 6 to 3
	arrow(233, 172, 343, 113, 1); // 6 to 9
	arrow(369, 427, 327, 330, 1); // 1 to 4
	arrow(397, 448, 568, 369, 1); // 1 to 5
	message.value = "RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9";
  }
}
else if(sourceNode.value=="7"){
if(destinationNode.value=="1"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }	
  else if(destinationNode.value=="2"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }	
  else if(destinationNode.value=="3"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }
  else if(destinationNode.value=="4"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  } 
  else if(destinationNode.value=="5"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }
  else if(destinationNode.value=="6"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8";
  }
  else if(destinationNode.value=="9"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(620, 173, 482, 201, 1); // 7 to 8
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9";
  }
}
else if(sourceNode.value=="8"){
if(destinationNode.value=="1"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }	
  else if(destinationNode.value=="2"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }	
  else if(destinationNode.value=="3"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }
  else if(destinationNode.value=="4"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  } 
  else if(destinationNode.value=="5"){
  	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }
  else if(destinationNode.value=="6"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }
  else if(destinationNode.value=="7"){
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	arrow(635, 197, 590, 320, 1); // 7 to 5
	arrow(486, 218, 625, 188, 1); // 8 to 7
	arrow(434, 222, 328, 289, 1); // 8 to 4
	arrow(472, 237, 570, 339, 1); // 8 to 5
	arrow(452, 194, 382, 110, 1); // 8 to 9
	message.value = "RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5";
  }
}
else if(sourceNode.value=="9"){
if(destinationNode.value=="1"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="2"){
	message.value = "RREQ:";
  }	
  else if(destinationNode.value=="3"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="4"){
	message.value = "RREQ:";
  } 
  else if(destinationNode.value=="5"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="6"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="7"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="8"){
	message.value = "RREQ:";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}

}