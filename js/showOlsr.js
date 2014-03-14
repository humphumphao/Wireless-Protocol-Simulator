function showOlsr()
{	
drawingNormal();

document.getElementById("cache").disabled = true;
document.getElementById("source").disabled = true;
document.getElementById("destination").disabled = true;
document.getElementById("radioBrokenNode").disabled = true;
document.getElementById("radioBrokenLink").disabled = true;
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

message.value="****************Important***************\n\nOptimized Link State Routing reduces flooding of control packets by using small subset of the neighbours to forward routing packets\n\nFor example,\nStep 1: Node 4 periodically generates link state packets, that consists of information on the state of a link. \n\nStep 2: Nodes in yellow belong to MPR-set(4) will help forward the link state packets originated from node 4 which is in their MPR-Selectors set, while not relaying messages from any other nodes."

arrow(281, 319, 188, 380, 3); // 4 to 2
arrow(301, 287, 232, 190, 3); // 4 to 6	
arrow(338, 303, 444, 236, 3); // 4 to 8
arrow(486, 218, 625, 188, 4); // 8 to 7
arrow(452, 194, 382, 110, 4); // 8 to 9
arrow(472, 237, 570, 339, 4); // 8 to 5
arrow(195, 413, 345, 453, 4); // 2 to 1
arrow(171, 378, 137, 310, 4); // 2 to 3
arrow(233, 172, 343, 113, 4); // 6 to 9
arrow(188, 192, 127, 268, 4); // 6 to 3
}