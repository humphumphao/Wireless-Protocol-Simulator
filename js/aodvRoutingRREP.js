function aodvRoutingRREP(){

var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
var message = document.getElementById("message");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
document.getElementById("showRouting").disabled = false;
var x = 0;
var y = 0;
var z = 0;
var a = sourceNode.value;
var b = destinationNode.value;

					
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 0; 
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n1 -> 2\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n2 -> 1 \n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 2 \n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1						
						message.value="RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n3 -> 2 -> 1\n4 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "4"){	
						arrow(369, 427, 327, 330, 2); // 1 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						showTableCache4();
						arrow(369, 427, 327, 330, 2); // 1 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\nPath:\n1 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						showTableCache5();
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(606, 331, 653, 202, 2); // 5 to 7	
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 5 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						showTableCache5();
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(580, 329, 482, 226, 2); // 5 to 8
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 5 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						showTableCache4();
						arrow(369, 427, 327, 330, 2); // 1 to 4
						arrow(322, 287, 361, 122, 2); // 4 to 9
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9\n\n1 -> 4\n\n1 -> 5\n\nRREP:\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 1\n\n5 -> 1\n\nPath:\n1 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 0;
					if(destinationNode.value == "1"){
						arrow(195, 413, 345, 453, 2); // 2 to 1		
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){						 
						message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n3 -> 2\n\nPath:\n2 -> 3\n\n*Click on protocol to view RREQ only*"		 				 
						}
					else if(destinationNode.value == "4"){	
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 1 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n6 -> 3 -> 2\n\nPath:\n2 -> 3 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						showTableCache4();
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						showTableCache4();
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 4 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						showTableCache4();
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(322, 287, 361, 122, 2); // 4 to 9
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						message.value="RREQ:\n2 -> 1 -> 5\n2 -> 1 -> 4\n\n2 -> 4\n\n2 -> 3 -> 6 -> 9\n2 -> 3 -> 6 -> 4\n\nRREP:\n5 -> 1 -> 2\n4 -> 1 -> 2\n\n4 -> 2\n\n9 -> 6 -> 3 -> 2\n4 -> 6 -> 3 -> 2\n\nPath:\n2 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 0;
					if(destinationNode.value == "1"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						message.value="RREQ:\n3 -> 2 -> 1\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 2 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						message.value="RREQ:\n3 -> 2\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 6 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 2 -> 1 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n6 -> 3\n\nPath:\n3 ->6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						showTableCache4();
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 2 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						showTableCache4();
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 2 -> 4 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(233, 172, 343, 113, 2); // 6 to 9
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9\n\nRREP:\n5 -> 1 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n9 -> 6 -> 3\n\nPath:\n3 -> 6 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 0;
					showTableCache4();
					if(destinationNode.value == "1"){
						arrow(311, 336, 353, 429, 2); // 4 to 1
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(281, 319, 188, 380, 2); // 4 to 2
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){
						arrow(336, 322, 546, 353, 2); // 4 to 5
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(338, 303, 444, 236, 2); // 4 to 8
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(322, 287, 361, 122, 2); // 4 to 9					
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 0;
					showTableCache5();
					if(destinationNode.value == "1"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 2); // 1 to 2
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 1 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 1 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"		 
						}
					else if(destinationNode.value == "4"){	
						arrow(553, 340, 339, 306, 2); // 5 to 4
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){
						arrow(553, 340, 339, 306, 2); // 5 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(606, 331, 653, 202, 2); // 5 to 7
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(580, 329, 482, 226, 2); // 5 to 8
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(580, 329, 482, 226, 2); // 5 to 8
						arrow(452, 194, 382, 110, 2); // 8 to 9
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n5 -> 8 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 0;
					if(destinationNode.value == "1"){
						showTableCache4();
						arrow(311, 336, 353, 429, 2); // 4 to 1
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						showTableCache4();
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n6 -> 3 -> 2\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){	
						arrow(188, 192, 127, 268, 2); // 6 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n6 -> 3\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 3\n\n*Click on protocol to view RREQ only*"	 
						}
					else if(destinationNode.value == "4"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n5 -> 1 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						showTableCache4();
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(336, 322, 546, 353, 2); // 4 to 5
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n5 -> 1 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){
						showTableCache4();
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n5 -> 1 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						showTableCache4();
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n5 -> 1 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 4 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){	
						arrow(233, 172, 343, 113, 2); // 6 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n6 -> 3 -> 2 -> 1\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4\n\n6 -> 9\n\nRREP:\n1 -> 2 -> 3 -> 6\n4 -> 2 -> 3 -> 6\n5 -> 1 -> 2 -> 3 -> 6\n\n4 -> 6\n\n9 -> 6\n\nPath:\n6 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 0;
					if(destinationNode.value == "1"){
						showTableCache5();
						arrow(635, 197, 590, 320, 2); // 7 to 5
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 5 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						showTableCache4();
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 8 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"		 
						}
					else if(destinationNode.value == "3"){
						showTableCache4();
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 8 -> 4 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"			 
						}
					else if(destinationNode.value == "4"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 8 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){	
						arrow(635, 197, 590, 320, 2); // 7 to 5
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						showTableCache4();
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 8 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						message.value="RREQ:\n7 -> 5\n\n7 -> 8\n\nRREP:\n5 -> 7\n\n8 -> 7\n\nPath:\n7 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(452, 194, 382, 110, 2); // 8 to 9
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 4\n7 -> 8 -> 5\n7 -> 8 -> 9\n\nRREP:\n5 -> 7\n\n4 -> 8 -> 7\n5 -> 8 -> 7\n9 -> 8 -> 7\n\nPath:\n7 -> 8 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 0;
					if(destinationNode.value == "1"){
						showTableCache5();
						arrow(472, 237, 570, 339, 2); // 8 to 5
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 5 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						showTableCache4();
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"	 
						}
					else if(destinationNode.value == "3"){
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 4 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"	 		 
						}
					else if(destinationNode.value == "4"){
						showTableCache4();
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(472, 237, 570, 339, 2); // 8 to 5
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						showTableCache4();
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){	
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n7 -> 8\n\nPath:\n8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){	
						arrow(452, 194, 382, 110, 2); // 8 to 9
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n8 -> 5\n\n8 -> 4\n\n8 -> 9\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n4 -> 8\n\n9 -> 8\n\n5 -> 7 -> 8\n\nPath:\n8 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 0;
					showTableCache9();
					if(destinationNode.value == "1"){
						arrow(345, 118, 306, 284, 2); // 9 to 4
						arrow(311, 336, 353, 429, 2); // 4 to 1
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 4 -> 1\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){	
						arrow(345, 118, 306, 284, 2); // 9 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){	
						arrow(336, 99, 228, 157, 2); // 9 to 6
						arrow(188, 192, 127, 268, 2); // 6 to 3
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"				 
						}
					else if(destinationNode.value == "4"){	
						arrow(345, 118, 306, 284, 2); // 9 to 4
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(372, 118, 440, 202, 2); // 9 to 8
						arrow(472, 237, 570, 339, 2); // 8 to 5
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 8 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(336, 99, 228, 157, 2); // 9 to 6
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(372, 118, 440, 202, 2); // 9 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(372, 118, 440, 202, 2); // 9 to 8
						message.value="RREQ:\n\nRREP:\n\n\nPath:\n9 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
		
}