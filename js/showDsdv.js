function showDsdv()
{

document.getElementById("cache").disabled = true;
document.getElementById("source").disabled = false;
document.getElementById("destination").disabled = false;
document.getElementById("radioBrokenNode").disabled = false;
document.getElementById("radioBrokenLink").disabled = false;
document.getElementById("showRouting").disabled = false;
document.getElementById("showRREP").disabled = true;
document.getElementById("showRREP").value = "Show RREP";
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var brokenNode=document.getElementById("brokenNode");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
var message = document.getElementById("message");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
//sourceNode.value="1";
//destinationNode.value="1";
drawingNormal();
message.value="Destination Sequenced Distance Vector Routing(DSDV) uses table driven technique whereby each table contains shortest distance and the first node on the shortest path to every other node in the network.";

if(brokenNode.value == "1")
{
message.value="Node 1 has being broken down.";
brokenNode1();
showTableBrokenNode1(sourceNode.value);
if(sourceNode.value=="1"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="2"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2);	
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2);
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
  	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2);
	arrow(336, 322, 546, 353, 2);
	message.value = "Shortest Route:\n2 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2);
	arrow(140, 277, 199, 201, 2);
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2);
	arrow(338, 303, 444, 236, 2);
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2);
	arrow(322, 287, 361, 122, 2); 
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2);
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
    redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
    redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2);
	arrow(202, 391, 292, 333, 2);
	arrow(336, 322, 546, 353, 2);
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 5 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); 
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2);
	arrow(202, 391, 292, 333, 2);
	arrow(338, 303, 444, 236, 2);
	arrow(486, 218, 625, 188, 2);
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 ->7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2);
	arrow(202, 391, 292, 333, 2);
	arrow(338, 303, 444, 236, 2);
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(233, 172, 343, 113, 2);
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2);
	arrow(171, 378, 137, 310, 2);
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
    redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2);
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
    redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2);
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
    redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2);
	arrow(486, 218, 625, 188, 2);
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
    redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2);
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
    redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2);
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2);
	arrow(301, 287, 232, 190, 2);
	arrow(188, 192, 127, 268, 2);
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2);
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2);
	arrow(301, 287, 232, 190, 2);
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); 
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2);
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2);
	arrow(580, 329, 482, 226, 2);
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
    redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2);
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
   	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2);
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
   	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2);
	arrow(336, 322, 546, 353, 2);
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
   	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2);
	arrow(338, 303, 444, 236, 2); 
	arrow(486, 218, 625, 188, 2); 
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
   	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2);
	arrow(338, 303, 444, 236, 2); 
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
   	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2);
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2);
	arrow(434, 222, 328, 289, 2);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2);
	arrow(434, 222, 328, 289, 2);
	arrow(281, 319, 188, 380, 2);
	arrow(171, 378, 137, 310, 2);
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2);
	arrow(434, 222, 328, 289, 2);
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
    redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2);
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2);
	arrow(434, 222, 328, 289, 2);
	arrow(301, 287, 232, 190, 2);
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); 
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
    redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); 
	arrow(452, 194, 382, 110, 2);
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
    redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
    redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2);
	arrow(281, 319, 188, 380, 2);
	arrow(171, 378, 137, 310, 2);
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
    redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2);
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
    redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2);
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
    redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); 
	arrow(301, 287, 232, 190, 2);
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
    redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2);
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
    redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2);
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
	greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="2"){
    redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2);
	arrow(281, 319, 188, 380, 2);
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2);
	arrow(188, 192, 127, 268, 2);
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
    redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2);
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
    redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2);
	arrow(472, 237, 570, 339, 2);
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
    redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2);
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
    redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2);
	arrow(486, 218, 625, 188, 2);
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
    redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2);
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="2")
{
message.value="Link from Node 2 has being broken down";
brokenNode2();
showTableBrokenNode2(sourceNode.value);
document.getElementById("cache").disabled = true;
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
var message = document.getElementById("message");

if(sourceNode.value=="1"){
	greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); 
	arrow(301, 287, 232, 190, 2);
	arrow(188, 192, 127, 268, 2);
	message.value = "Shortest Route:\n1 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); 
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); 
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); 
	arrow(301, 287, 232, 190, 2);
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); 
	arrow(606, 331, 653, 202, 2);
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); 
	arrow(580, 329, 482, 226, 2);
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); 
	arrow(322, 287, 361, 122, 2); 
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
	message.value = "Error, source node does not exist!";  
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	arrow(311, 336, 353, 429, 2);
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(219, 198, 290, 297, 2);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6

	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1	
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, destination node does not exist!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="3")
{
message.value="Link from Node 3 has being broken down";
brokenNode3();
showTableBrokenNode3(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 \n2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){	
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2\n7 -> 8 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="4")
{
message.value="Link from Node 4 has being broken down";
brokenNode4();
showTableBrokenNode4(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n1 -> 2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n1 -> 5 -> 8 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n2 -> 3 -> 6 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n5 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n6 -> 3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){	
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1	
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n8 -> 5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n9 -> 6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, destination node does not exist!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="5")
{
message.value="Link from Node 5 has being broken down";
brokenNode5();
showTableBrokenNode5(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8 ->7\n3 -> 6 -> 9 -> 8 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);	
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
	message.value = "Error, source node does not exist!"; 
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="6")
{
message.value="Link from Node 6 has being broken down";
brokenNode6();
showTableBrokenNode6(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7\n2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);	
	arrow(606, 331, 653, 202, 2); // 5 to 7		
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2\n7 -> 8 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 1 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="7")
{
message.value="Link from Node 7 has being broken down";
brokenNode7();
showTableBrokenNode7(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\n5 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 1 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="8")
{
message.value="Link from Node 8 has being broken down";
brokenNode8();
showTableBrokenNode8(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7		
	message.value = "Shortest Route:\n2 -> 4 -> 5 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){

greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\n5 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 1 -> 2 -> 3	";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n5 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n6 -> 4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 4 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
	message.value = "Error, source node does not exist!";
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n9 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n9 -> 4 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, destination node does not exist!";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenNode.value=="9")
{
message.value="Link from Node 9 has being broken down";
brokenNode9();
showTableBrokenNode9(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 \n2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 1 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist! ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist! ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 1 -> 2 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, destination node does not exist!";
  }
}
else if(sourceNode.value=="9"){
	message.value = "Error, source node does not exist!";
}
}
else if(brokenLink1.value=="1")
{
if(brokenLink2.value=="2"){
message.value="Link from Node 1 to Node 2 has being broken.";
brokenLink12();
showTableBrokenLink12(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n1 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 4 -> 2 -> 3 \n\nAlternate Route:\n1 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n2 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 5 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3\n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3 \n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}	
}
else if(brokenLink2.value=="4"){
message.value="Link from Node 1 to Node 4 has being broken.";
brokenLink14();
showTableBrokenLink14(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n1 -> 2 -> 4 \n\nAlternate Route:\n1 -> 5 -> 4 ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 2 -> 4 -> 6 \n\nAlternate Route:\n1 -> 2 -> 3 -> 6\n1 -> 5 -> 4 -> 6 ";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 5 -> 4 -> 9 \n\nAlternate Route:\n1 -> 5 -> 8 -> 9\n1 -> 2 -> 4 -> 9";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n4 -> 2 -> 1 \n\nAlternate Route:\n4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 2 -> 1 \n\nAlternate Route:\n6 -> 3 -> 2 -> 1\n6 -> 4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 1 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 1 -> 2 -> 3\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 1 \n\nAlternate Route:\n9 -> 4 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}	
}
else if(brokenLink2.value=="5"){
message.value="Link from Node 1 to Node 5 has being broken.";
brokenLink15();
showTableBrokenLink15(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n1 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 7 \n\nAlternate Route:\n1 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n2 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 5 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n5 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 1 \n\nAlternate Route:\n7 -> 8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7-> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}	
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="2")
{
if(brokenLink2.value=="1"){
message.value="Link from Node 2 to Node 1 has being broken.";
brokenLink12();
showTableBrokenLink12(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n1 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 4 -> 2 -> 3 \n\nAlternate Route:\n1 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n2 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n2 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 5 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3\n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3 \n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}	
}
else if(brokenLink2.value=="3"){
message.value="Link from Node 2 to Node 3 has being broken.";
brokenLink23();
showTableBrokenLink23(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n1 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n2 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	
arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}

}
else if(brokenLink2.value=="4"){
message.value="Link from Node 2 to Node 4 has being broken.";
brokenLink24();
showTableBrokenLink24(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n2 -> 1 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 9 \n\nAlternate Route:\n2 -> 3 -> 6 -> 9";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8	
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
drawingNormal();
message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="3")
{
if(brokenLink2.value=="6"){
message.value="Link from Node 3 to Node 6 has being broken.";
brokenLink36();
showTableBrokenLink36(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);	
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n6 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="2"){
message.value="Link from Node 3 to Node 2 has being broken.";
brokenLink23();
showTableBrokenLink23(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n1 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n2 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	
arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}

}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="4")
{
if(brokenLink2.value=="1"){
message.value="Link from Node 4 to Node 1 has being broken.";
brokenLink24();
showTableBrokenLink24(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n2 -> 1 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 9 \n\nAlternate Route:\n2 -> 3 -> 6 -> 9";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8	
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="2"){
message.value="Link from Node 4 to Node 2 has being broken.";
brokenLink24();
showTableBrokenLink24(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n2 -> 1 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 1 -> 4 -> 9 \n\nAlternate Route:\n2 -> 3 -> 6 -> 9";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 6 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8	
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="5"){
message.value="Link from Node 4 to Node 5 has being broken.";
brokenLink45();
showTableBrokenLink45(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	greenNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n4 -> 8 -> 5 \n\nAlternate Route:\n4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n5 -> 8 -> 4 \n\nAlternate Route:\n5 - > 1 -> 4";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n5 -> 8 -> 9 -> 6 \n\nAlternate Route:\n5 -> 8 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 5 \n\nAlternate Route:\n6 -> 4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="6"){
message.value="Link from Node 4 to Node 6 has being broken.";
brokenLink46();
showTableBrokenLink46(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n1 -> 2 -> 3 -> 6 \n\nAlternate Route:\n1 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n4 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n5 -> 8 -> 9 -> 6 \n\nAlternate Route:\n5 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n6 -> 3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n6 -> 3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 5 \n\nAlternate Route:\n6 -> 9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="8"){
message.value="Link from Node 4 to Node 8 has being broken.";
brokenLink48();
showTableBrokenLink48(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7\ \n\nAlternate Route:n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 9 -> 8 \n\nAlternate Route:\n2 -> 4 -> 5 -> 8\n2 -> 1 -> 5 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n4 -> 9 -> 8 \n\nAlternate Route:\n4 -> 5 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 9 -> 4 -> 2 \n\nAlternate Route:\n8 -> 5 -> 4 -> 2\n8 -> 5 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n8 -> 5 -> 4 \n\nAlternate Route:\n8 -> 9 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="9"){
message.value="Link from Node 4 to Node 9 has being broken.";
brokenLink49();
showTableBrokenLink49(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){	
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 9 \n\nAlternate Route:\n1 -> 4 -> 6 -> 9\n1 -> 5 -> 8 -> 9";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 9 \n\nAlternate Route:\n2 -> 4 -> 6 -> 9";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n4 -> 6 -> 9  \n\nAlternate Route:\n4 -> 8 -> 9 ";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 8 -> 4 -> 1 \n\nAlternate Route:\n9 -> 6 -> 4 -> 1\n9 -> 8 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 8 -> 4 -> 2 \n\nAlternate Route:\n9 -> 6 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n9 -> 8 -> 4 \n\nAlternate Route:\n9 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="5")
{
if(brokenLink2.value=="4"){
message.value="Link from Node 5 to Node 4 has being broken.";
brokenLink45();
showTableBrokenLink45(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	greenNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n4 -> 8 -> 5 \n\nAlternate Route:\n4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n5 -> 8 -> 4 \n\nAlternate Route:\n5 - > 1 -> 4";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n5 -> 8 -> 9 -> 6 \n\nAlternate Route:\n5 -> 8 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 5 \n\nAlternate Route:\n6 -> 4 -> 1 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="1"){
message.value="Link from Node 5 to Node 1 has being broken.";
brokenLink15();
showTableBrokenLink15(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n1 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 7 \n\nAlternate Route:\n1 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n2 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 5 \n\nAlternate Route:\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n5 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n5 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 4 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 1 \n\nAlternate Route:\n7 -> 8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7-> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}	
}
else if(brokenLink2.value=="7"){
message.value="Link from Node 5 to Node 7 has being broken.";
brokenLink57();
showTableBrokenLink57(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 7 \n\nAlternate Route:\n1 -> 5 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n5 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 1 \n\nAlternate Route:\n\n7 -> 8 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n7 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="8"){
message.value="Link from Node 5 to Node 8 has being broken.";
brokenLink58();
showTableBrokenLink58(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n5 -> 7 -> 8 \n\nAlternate Route:\n5 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n5 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n8 -> 7 -> 5 \n\nAlternate Route:\n8 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n9 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
  arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="6")
{
if(brokenLink2.value=="3"){
message.value="Link from Node 6 to Node 3 has being broken.";
brokenLink36();
showTableBrokenLink36(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);	
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n6 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="4"){
message.value="Link from Node 6 to Node 4 has being broken.";
brokenLink46();
showTableBrokenLink46(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n1 -> 2 -> 3 -> 6 \n\nAlternate Route:\n1 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n4 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n5 -> 8 -> 9 -> 6 \n\nAlternate Route:\n5 -> 4 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n6 -> 3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n6 -> 3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n6 -> 3 -> 2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 5 \n\nAlternate Route:\n6 -> 9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="9"){
message.value="Link from Node 6 to Node 9 has being broken.";
brokenLink69();
showTableBrokenLink69(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){	
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n6 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 3 \n\nAlternate Route:\n9 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n9 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="7")
{
if(brokenLink2.value=="5"){
message.value="Link from Node 7 to Node 5 has being broken.";
brokenLink57();
showTableBrokenLink57(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 7 \n\nAlternate Route:\n1 -> 5 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n5 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 1 \n\nAlternate Route:\n\n7 -> 8 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 -> 3 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n7 -> 8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="8"){
message.value="Link from Node 7 to Node 8 has being broken.";
brokenLink78();
showTableBrokenLink78(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2	
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7		
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n6 -> 4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n7 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 5 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n8 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n9 -> 8 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="8")
{
if(brokenLink2.value=="4"){
message.value="Link from Node 8 to Node 4 has being broken.";
brokenLink48();
showTableBrokenLink48(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";

  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7\ \n\nAlternate Route:n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 9 -> 8 \n\nAlternate Route:\n2 -> 4 -> 5 -> 8\n2 -> 1 -> 5 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n3 -> 6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n4 -> 9 -> 8 \n\nAlternate Route:\n4 -> 5 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 9 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n6 -> 9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 9 -> 4 -> 2 \n\nAlternate Route:\n8 -> 5 -> 4 -> 2\n8 -> 5 -> 1 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n8 -> 9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n8 -> 5 -> 4 \n\nAlternate Route:\n8 -> 9 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n8 -> 9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="5"){
message.value="Link from Node 8 to Node 5 has being broken.";
brokenLink58();
showTableBrokenLink58(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n5 -> 7 -> 8 \n\nAlternate Route:\n5 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n5 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n8 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n8 -> 7 -> 5 \n\nAlternate Route:\n8 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n9 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
  arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="7"){
message.value="Link from Node 8 to Node 7 has being broken.";
brokenLink78();
showTableBrokenLink78(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2	
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7		
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 -> 7 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n6 -> 4 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n7 -> 5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 5 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n8 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n9 -> 8 -> 5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="9"){
message.value="Link from Node 8 to Node 9 has being broken.";
brokenLink89();
showTableBrokenLink89(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n5 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 5 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 9  \n\nAlternate Route:\n7 -> 5 -> 4 -> 9";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n8 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){	
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n9 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 4 -> 8 -> 7 \n\nAlternate Route:\n9 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n9 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else if(brokenLink1.value=="9")
{
if(brokenLink2.value=="4"){
message.value="Link from Node 9 to Node 4 has being broken.";
brokenLink49();
showTableBrokenLink49(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){	
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n1 -> 4 -> 8 -> 9 \n\nAlternate Route:\n1 -> 4 -> 6 -> 9\n1 -> 5 -> 8 -> 9";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 9 \n\nAlternate Route:\n2 -> 4 -> 6 -> 9";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n4 -> 6 -> 9  \n\nAlternate Route:\n4 -> 8 -> 9 ";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 8 -> 4 -> 1 \n\nAlternate Route:\n9 -> 6 -> 4 -> 1\n9 -> 8 -> 5 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 8 -> 4 -> 2 \n\nAlternate Route:\n9 -> 6 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n9 -> 8 -> 4 \n\nAlternate Route:\n9 -> 6 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="6"){
message.value="Link from Node 9 to Node 6 has being broken.";
brokenLink69();
showTableBrokenLink69(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){	
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n6 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n9 -> 4 -> 2 -> 3 \n\nAlternate Route:\n9 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n9 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else if(brokenLink2.value=="8"){
message.value="Link from Node 9 to Node 8 has being broken.";
brokenLink89();
showTableBrokenLink89(sourceNode.value);
if(sourceNode.value=="1"){
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n5 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 \n\nAlternate Route:\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n7-> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n7 -> 5 -> 4 \n\nAlternate Route:\n7 -> 8 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 5 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 9  \n\nAlternate Route:\n7 -> 5 -> 4 -> 9";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n8 -> 4 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){	
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n9 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 4 -> 8 -> 7 \n\nAlternate Route:\n9 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n9 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	message.value = "Error, source node and destination node is the same!";
  }
}
}
else{
	drawingNormal();
	message.value = "Error, link does not exist!";
}
}
else
{
drawingNormal();
if(sourceNode.value=="1"){
showTable(sourceNode.value);
greenNode(sourceNode.value);
  if(destinationNode.value=="1"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n1 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n1 -> 2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	message.value = "Shortest Route:\n1 -> 4 \n\nAlternate Route:\nNone ";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n1 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n1 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n1 -> 5 -> 7 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(397, 448, 568, 369, 2); // 1 to 5
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n1 -> 5 -> 8 \n\nAlternate Route:\n1 -> 4 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(369, 427, 327, 330, 2); // 1 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n1 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="2"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	message.value = "Error, source node and destination node is the same!";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n2 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	message.value = "Shortest Route:\n2 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n2 -> 1 -> 5 \n\nAlternate Route:\n2 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(171, 378, 137, 310, 2); // 2 to 3
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n2 -> 3 -> 6 \n\nAlternate Route:\n2 -> 4 -> 6";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n2 -> 4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n2 -> 4 -> 9 \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="3"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	message.value = "Shortest Route:\n3 -> 2 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	message.value = "Shortest Route:\n3 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="4"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n3 -> 6 -> 4 \n\nAlternate Route:\n3 -> 2 -> 4";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(195, 413, 345, 453, 2); // 2 to 1
	arrow(397, 448, 568, 369, 2); // 1 to 5
	message.value = "Shortest Route:\n3 -> 2 -> 1 -> 5 \n\nAlternate Route:\n3 -> 2 -> 4 -> 5\n3 -> 6 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	message.value = "Shortest Route:\n3 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 -> 7 \n\nAlternate Route:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 9 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(124, 313, 158, 384, 2); // 3 to 2
	arrow(202, 391, 292, 333, 2); // 2 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n3 -> 2 -> 4 -> 8 \n\nAlternate Route:\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(140, 277, 199, 201, 2); // 3 to 6
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n3 -> 6 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="4"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
	redNode(destinationNode.value);
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n4 -> 2 -> 3 \n\nAlternate Route:\n4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
	message.value = "Error, source node and destination node is the same!";
  } 
  else if(destinationNode.value=="5"){
	redNode(destinationNode.value);
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	redNode(destinationNode.value);
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n4 -> 8 -> 7 \n\nAlternate Route:\n4 -> 5 -> 7 ";
  }
  else if(destinationNode.value=="8"){
	redNode(destinationNode.value);
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n4 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
	redNode(destinationNode.value);
	arrow(322, 287, 361, 122, 2); // 4 to 9
	message.value = "Shortest Route:\n4 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="5"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	message.value = "Shortest Route:\n5 -> 1 -> 2 \n\nAlternate Route:\n5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(548, 360, 391, 427, 2); // 5 to 1
	arrow(346, 434, 208, 397, 2); // 1 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n5 -> 1 -> 2 -> 3 \n\nAlternate Route:\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	message.value = "Shortest Route:\n5 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(553, 340, 339, 306, 2); // 5 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n5 -> 4 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	arrow(606, 331, 653, 202, 2); // 5 to 7	
	message.value = "Shortest Route:\n5 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	message.value = "Shortest Route:\n5 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
  	redNode(destinationNode.value);
	arrow(580, 329, 482, 226, 2); // 5 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n5 -> 8 -> 9  \n\nAlternate Route:\n5 -> 4 -> 9 ";
  }
}
else if(sourceNode.value=="6"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(311, 336, 353, 429, 2); // 4 to 1
	message.value = "Shortest Route:\n6 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n6 -> 4 -> 2 \n\nAlternate Route:\n6 -> 3 -> 2";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	message.value = "Shortest Route:\n6 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(336, 322, 546, 353, 2); // 4 to 5
	message.value = "Shortest Route:\n6 -> 4 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n6 -> 4 -> 8 -> 7 \n\nAlternate Route:\n6 -> 9 -> 8 -> 7\n6 -> 4 -> 5 -> 7";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(219, 198, 290, 297, 2); // 6 to 4
	arrow(338, 303, 444, 236, 2); // 4 to 8
	message.value = "Shortest Route:\n6 -> 4 -> 8 \n\nAlternate Route:\n6 -> 9 -> 8";
  }
  else if(destinationNode.value=="9"){
  	redNode(destinationNode.value);
	arrow(233, 172, 343, 113, 2); // 6 to 9
	message.value = "Shortest Route:\n6 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="7"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n7 -> 5 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 \n\nAlternate Route:\n7 -> 5 -> 1 -> 2\n7 -> 5 -> 4 -> 2";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 5 -> 1 -> 2 -> 3\n7 -> 8 -> 9 -> 6 -> 3\n7 -> 8 -> 4 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n7 -> 8 -> 4 \n\nAlternate Route:\n7 -> 5 -> 4";
  } 
  else if(destinationNode.value=="5"){
  	redNode(destinationNode.value);
	arrow(635, 197, 590, 320, 2); // 7 to 5
	message.value = "Shortest Route:\n7 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n7 -> 8 -> 4 -> 6 \n\nAlternate Route:\n7 -> 8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	message.value = "Shortest Route:\n7 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
  	redNode(destinationNode.value);
	arrow(620, 173, 482, 201, 2); // 7 to 8
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n7 -> 8 -> 9  \n\nAlternate Route:\nNone";
  }
}
else if(sourceNode.value=="8"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	arrow(548, 360, 391, 427, 2); // 5 to 1
	message.value = "Shortest Route:\n8 -> 5 -> 1 \n\nAlternate Route:\n8 -> 4 -> 1";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	message.value = "Shortest Route:\n8 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(281, 319, 188, 380, 2); // 4 to 2
	arrow(171, 378, 137, 310, 2); // 2 to 3
	message.value = "Shortest Route:\n8 -> 4 -> 2 -> 3 \n\nAlternate Route:\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 6 -> 3";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	message.value = "Shortest Route:\n8 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
  	redNode(destinationNode.value);
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n8 -> 5 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(434, 222, 328, 289, 2); // 8 to 4
	arrow(301, 287, 232, 190, 2); // 4 to 6
	message.value = "Shortest Route:\n8 -> 4 -> 6 \n\nAlternate Route:\n8 -> 9 -> 6";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
	message.value = "Error, source node and destination node is the same!";
  }
  else if(destinationNode.value=="9"){
  	redNode(destinationNode.value);
	arrow(452, 194, 382, 110, 2); // 8 to 9
	message.value = "Shortest Route:\n8 -> 9  \n\nAlternate Route:\nNone ";
  }
}
else if(sourceNode.value=="9"){
greenNode(sourceNode.value);
showTable(sourceNode.value);
if(destinationNode.value=="1"){
	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 1 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="2"){
  	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 -> 2 \n\nAlternate Route:\nNone";
  }	
  else if(destinationNode.value=="3"){
  	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	arrow(188, 192, 127, 268, 2); // 6 to 3
	message.value = "Shortest Route:\n9 -> 6 -> 3 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="4"){
  	redNode(destinationNode.value);
	arrow(345, 118, 306, 284, 2); // 9 to 4
	message.value = "Shortest Route:\n9 -> 4 \n\nAlternate Route:\nNone";
  } 
  else if(destinationNode.value=="5"){
  	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(472, 237, 570, 339, 2); // 8 to 5
	message.value = "Shortest Route:\n9 -> 8 -> 5 \n\nAlternate Route:\n9 -> 4 -> 5";
  }
  else if(destinationNode.value=="6"){
  	redNode(destinationNode.value);
	arrow(336, 99, 228, 157, 2); // 9 to 6
	message.value = "Shortest Route:\n9 -> 6 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="7"){
  	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	arrow(486, 218, 625, 188, 2); // 8 to 7
	message.value = "Shortest Route:\n9 -> 8 -> 7 \n\nAlternate Route:\nNone ";
  }
  else if(destinationNode.value=="8"){
  	redNode(destinationNode.value);
	arrow(372, 118, 440, 202, 2); // 9 to 8
	message.value = "Shortest Route:\n9 -> 8 \n\nAlternate Route:\nNone";
  }
  else if(destinationNode.value=="9"){
 	message.value = "Error, source node and destination node is the same!";
  }
}
}
}
