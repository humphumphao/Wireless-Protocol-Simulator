function showCgsr()
{

drawingNormal();

document.getElementById("cache").disabled = true;
document.getElementById("source").disabled = false;
document.getElementById("destination").disabled = false;
document.getElementById("radioBrokenNode").disabled = true;
document.getElementById("radioBrokenLink").disabled = true;
document.getElementById("showRouting").disabled = false;
document.getElementById("showRREP").disabled = true;
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var brokenNode=document.getElementById("brokenNode");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
var message = document.getElementById("message");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
document.getElementById("showRREP").value = "Show RREP";
greenNode(sourceNode.value);
redNode(destinationNode.value);
message.value="****************Important***************\n\nCluster-Head Gateway Switch Routing(CGSR) is an extension of DSDV. Every member-node maintains a cluster-member table containing the destination cluster-head for every node in the network.\n\nThe cluster-heads maintain a routing table that contains the gateway node for every destination cluster.\n\nWhen a node gets a token from the cluster-head it forwards the packet to the cluster-head with the destination cluster-head information. The cluster-head look up its routing table to identify the gateway node to which the packet should be forwarded to.";


if(sourceNode.value=="1"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 1 -> 2 \n\nPacket send out by Gateway Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 1 -> 2 -> 3 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 1 -> 2 -> 4 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 1 -> 5 \n\nPacket send out by Gateway Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 1 -> 2 -> 4 -> 9 -> 6 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2, Gateway Node 4 and Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 1 -> 5 -> 7 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 1 -> 5 -> 8 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 1 -> 2 -> 4 -> 9 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2 and Gateway Node 4 before reaching Destination Node.";
	}
}
else if(sourceNode.value=="2"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 2 -> 1 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 2 -> 3 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 2 -> 4 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 2 -> 4 -> 5 \n\nAlternative Route: 2 -> 1 -> 5 \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 or 1 before reaching Destination Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 2 -> 4 -> 9 -> 6 \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 2 -> 4 -> 5 -> 7 \n\nAlternative Route: 2 -> 1 -> 5 -> 7  \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 or 1 and Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 2 -> 4 -> 5 -> 8 \n\nAlternative Route: 2 -> 1 -> 5 -> 8  \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 or 1 and Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 2 -> 4 -> 9 \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 before reaching Destination Node.";
	}
}
else if(sourceNode.value=="3"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 3 -> 2 -> 1\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 3 -> 2";
	}
	else if(destinationNode.value=="3"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 3 -> 2 -> 4\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 3 -> 2 -> 4 -> 5 \n\nAlternative Route: 3 -> 2 -> 1 -> 5\n\nPacket will pass by Cluster Head 2 and Gateway Node 4 or 1 before reaching Destination Node. ";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 3 -> 2 -> 4 -> 9 -> 6\n\nPacket will pass by Cluster Head Node 2 and Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 3 -> 2 -> 4 -> 5 -> 7 \n\nAlternative Route: 3 -> 2 -> 1 -> 5 -> 7\n\nPacket will pass by Cluster Head 2, Gateway Node 4 or 1 and Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 3 -> 2 -> 4 -> 5 -> 8 \n\nAlternative Route: 3 -> 2 -> 1 -> 5 -> 8\n\nPacket will pass by Cluster Head 2, Gateway Node 4 or 1 and Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 3 -> 2 -> 4 -> 9\n\nPacket will pass by Cluster Head Node 2 and Gateway Node 4 before reaching Destination Node.";
	}
}
else if(sourceNode.value=="4"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 4 -> 2 -> 1 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 4 -> 2 \n\nPacket send out by Gateway Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 4 -> 2 -> 3 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 4 -> 5 \n\nPacket send out by Gateway Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 4 -> 9 -> 6 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 4 -> 5 -> 7 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 4 -> 9 -> 8 \n\nAlternative Route: 4 -> 5 -> 8 \n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 9 or 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 4 -> 9 \n\nPacket send out by Gateway Node.";
	}
}
else if(sourceNode.value=="5"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 5 -> 1 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 5 -> 4 -> 2 \n\nAlternative Route: 5 -> 1 -> 2 \n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 or 1 before reaching Destination Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 5 -> 4 -> 2 -> 3\n\nAlternative Route: 5 -> 1 -> 2 -> 3\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 or 1 and Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 5 -> 4 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 5 -> 8 -> 9 -> 6\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 8 and Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 5 -> 7 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 5 -> 8 \n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 5 -> 8 -> 9\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 8 before reaching Destination Node.";
	}
}
else if(sourceNode.value=="6"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 6 -> 9 -> 4 -> 2 -> 1\n\nPacket will pass by Cluster Head Node 9, Gateway Node 4 and Cluster Head 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 6 -> 9 -> 4 -> 2\n\nPacket will pass by Cluster Head Node 9 and Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 6 -> 9 -> 4 -> 2 -> 3\n\nPacket will pass by Cluster Head Node 9, Gateway Node 4 and Cluster Head 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: Shortest Route: 6 -> 9 -> 4 \n\nPacket will pass by Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 6 -> 9 -> 8 -> 5\n\nPacket will pass by Cluster Head Node 9 and Gateway Node 8 before reaching Destination Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 6 -> 9 -> 8 -> 5 -> 7\n\nPacket will pass by Cluster Head Node 9, Gateway Node 8 and Cluster Head 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 6 -> 9 -> 8\n\nPacket will pass by Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 6 -> 9";
	}
}
else if(sourceNode.value=="7"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 7 -> 5 -> 1\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 7 -> 5 -> 4 -> 2 \n\nAlternative Route: 7 -> 5 -> 1 -> 2\n\nPacket will pass by Cluster Head Node 5 and Gateway Node 4 or 1 before reaching Destination Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 7 -> 5 -> 4 -> 2 -> 3 \n\nAlternative Route: 7 -> 5 -> 1 -> 2 -> 3\n\nPacket will pass by Cluster Head Node 5, Gateway Node 4 or 1 and Cluster Head 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 7 -> 5 -> 4\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 7 -> 5";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 7 -> 5 -> 8 -> 9 -> 6\n\nPacket will pass by Cluster Head Node 5, Gateway Node 8 and Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 7 -> 5 -> 8\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 7 -> 5 -> 8 -> 9 \n\nPacket will pass by Cluster Head Node 5 and Gateway Node 8 before reaching Destination Node.";
	}
}
else if(sourceNode.value=="8"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 8 -> 5 -> 1\n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 8 -> 5 -> 4 -> 2\n\nPacket send out by Gateway Node. \n\nPacket will pass by Cluster Head Node 5 and Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 8 -> 5 -> 4 -> 2 -> 3\n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5, Gateway Node 4 and Cluster Head 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 8 -> 5 -> 4\n\nPacket send out by Gateway Node. \n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 8 -> 5\n\nPacket send out by Gateway Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 8 -> 9 -> 6\n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 9 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 8 -> 5 -> 7\n\nPacket send out by Gateway Node.\n\nPacket will pass by Cluster Head Node 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Error, source node and destination node is the same!";
	}
	else if(destinationNode.value=="9"){
		message.value = "Shortest Route: 8 -> 9\n\nPacket send out by Gateway Node.";
	}
}
else if(sourceNode.value=="9"){
showCgsrTable(sourceNode.value);
	if(destinationNode.value=="1"){
		message.value = "Shortest Route: 9 -> 4 -> 2 -> 1\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 and Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="2"){
		message.value = "Shortest Route: 9 -> 4 -> 2\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="3"){
		message.value = "Shortest Route: 9 -> 4 -> 2 -> 3\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 4 and Cluster Head Node 2 before reaching Destination Node.";
	}
	else if(destinationNode.value=="4"){
		message.value = "Shortest Route: 9 -> 4\n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="5"){
		message.value = "Shortest Route: 9 -> 8 -> 5\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 8 before reaching Destination Node.";
	}
	else if(destinationNode.value=="6"){
		message.value = "Shortest Route: 9 -> 4 -> 6 \n\nPacket send out by Cluster Head Node. \n\nPacket will pass by Gateway Node 4 before reaching Destination Node.";
	}
	else if(destinationNode.value=="7"){
		message.value = "Shortest Route: 9 -> 8 -> 5 -> 7\n\nPacket send out by Cluster Head Node.\n\nPacket will pass by Gateway Node 8 and Cluster Head 5 before reaching Destination Node.";
	}
	else if(destinationNode.value=="8"){
		message.value = "Shortest Route: 9 -> 8\n\nPacket send out by Cluster Head Node.";
	}
	else if(destinationNode.value=="9"){
		message.value = "Error, source node and destination node is the same!";
	}
}

}
