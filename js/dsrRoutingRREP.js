function dsrRoutingRREP(){

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

if (document.getElementById("radioBrokenLink").checked){
		if(brokenLink1.value == "1"){
			if(brokenLink2.value == "2"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 12;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,1,2)',3500);
						}
					else if(destinationNode.value == "3"){								 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,1,3)',3500);
						 setTimeout('move2to3(153,375,12,1,3)',6400);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,12,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,12,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,12,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,12,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 12;
					if(destinationNode.value == "1"){
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,12,2,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,12,2,5)',3000);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,12,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,12,2,7)',2900);
						 setTimeout('move8to7(433, 190,12,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,12,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,12,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 12;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,12,3,1)',2300);
						 setTimeout('move4to1(285,283,12,3,1)',5300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,12,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,12,3,5)',2300);
						 setTimeout('move4to5(285,283,12,3,5)',5300);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,12,3,7)',2300);
						 setTimeout('move4to8(285,283,12,3,7)',5200);
						 setTimeout('move8to7(433,190,12,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,12,3,8)',2300);
						 setTimeout('move4to8(285,283,12,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,12,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 12;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,12,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,12,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 12;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,5,2)',3600); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,5,3)',3600);  
						 setTimeout('move2to3(153,375,12,5,3)',6600); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,12,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,12,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 12;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,12,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,12,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,12,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,12,6,7)',3000);	
						 setTimeout('move8to7(433,190,12,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,12,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 12;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,12,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,12,7,2)',2700);
						 setTimeout('move4to2(285,283,12,7,2)',6000);				 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,12,7,3)',2700);
						 setTimeout('move4to2(285,283,12,7,3)',6000);
						 setTimeout('move2to3(153,375,12,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,12,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,12,7,6)',2700);
						 setTimeout('move4to6(285,283,12,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,12,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 12;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,12,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,8,3)',3300);
						 setTimeout('move2to3(153,375,12,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,12,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 12;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,12,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,12,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,12,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,12,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,12,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				
			}
			else if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 14;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,14,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,1,4)',3000);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,1,6)',3000);
						 setTimeout('move4to6(285,283,14,1,6)',5900);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,14,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,14,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,14,1,9)',3300);
						 setTimeout('move4to9(285,283,14,1,9)',6900);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 14;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,14,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93,267,14,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,2,7)',2900);
						 setTimeout('move8to7(433, 190,14,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,14,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 14;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,14,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,3,5)',2300);
						 setTimeout('move1to5(346,424,14,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,3,7)',2300);
						 setTimeout('move4to8(285,283,14,3,7)',5200);
						 setTimeout('move8to7(433,190,14,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,3,8)',2300);
						 setTimeout('move4to8(285,283,14,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,14,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 14;
					if(destinationNode.value == "1"){
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,4,1)',3000); 
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,14,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,14,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 14;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,14,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,14,5,3)',2900); 
						 setTimeout('move2to3(153,375,14,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,14,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,14,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 14;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,6,1)',3000);
						 setTimeout('move2to1(153,375,14,6,1)',6000); 
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,14,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,14,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,14,6,7)',3000);	
						 setTimeout('move8to7(433,190,14,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 14;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,14,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,2)',2700);
						 setTimeout('move4to2(285,283,14,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,3)',2700);
						 setTimeout('move4to2(285,283,14,7,3)',6000);
						 setTimeout('move2to3(153,375,14,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,6)',2700);
						 setTimeout('move4to6(285,283,14,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,14,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 14;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,14,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,8,3)',3300);
						 setTimeout('move2to3(153,375,14,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,14,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 14;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,9,1)',3000);
						 setTimeout('move2to1(153,375,14,9,1)',6000); 
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,14,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,14,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,14,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
			}
			}
			else if(brokenLink2.value == "5"){
			if(sourceNode.value == "1"){
					x = 346; y = 424; z = 15;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,15,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,15,1,5)',3400);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,1,7)',3400);
						 setTimeout('move8to7(433,190,15,1,7)',7000);
						}
					else if(destinationNode.value == "8"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,1,8)',3400);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,15,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 15;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,15,2,5)',3000);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,15,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,2,7)',2900);
						 setTimeout('move8to7(433, 190,15,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,15,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 15;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,15,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,15,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,5)',2300);
						 setTimeout('move4to5(285,283,15,3,5)',5300);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,7)',2300);
						 setTimeout('move4to8(285,283,15,3,7)',5200);
						 setTimeout('move8to7(433,190,15,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,8)',2300);
						 setTimeout('move4to8(285,283,15,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,15,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 15;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,15,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,15,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 15;
					if(destinationNode.value == "1"){
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,5,1)',3600); 
					}
					else if(destinationNode.value == "2"){						 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,5,2)',3600);  		
						}
					else if(destinationNode.value == "3"){								 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,5,3)',3600);  	
						 setTimeout('move2to3(153,375,15,5,3)',6600); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,15,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 15;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,15,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,15,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,15,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,6,7)',3000);	
						 setTimeout('move8to7(433,190,15,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 15;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,15,7,1)',2500);
						 setTimeout('move4to1(285,283,15,7,1)',6100);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,2)',2700);
						 setTimeout('move4to2(285,283,15,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,3)',2700);
						 setTimeout('move4to2(285,283,15,7,3)',6000);
						 setTimeout('move2to3(153,375,15,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,6)',2700);
						 setTimeout('move4to6(285,283,15,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,15,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 15;
					if(destinationNode.value == "1"){
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,8,1)',3300);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,8,3)',3300);
						 setTimeout('move2to3(153,375,15,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 15;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,15,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,15,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,15,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
			}
			
			}
		}
		else if(brokenLink1.value == "2"){
			if(brokenLink2.value == "1"){
				if(sourceNode.value == "1"){
						x = 346; y = 424; z = 12;
						if(destinationNode.value == "1"){
							message.value = "Packet is at destination node";
						}
						else if(destinationNode.value == "2"){						 
							 move1to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,1,2)',3500);
							}
						else if(destinationNode.value == "3"){								 
							 move1to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,1,3)',3500);
							 setTimeout('move2to3(153,375,12,1,3)',6400);
							}
						else if(destinationNode.value == "4"){				
							 move1to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 move1to5(x,y,z,a,b);
							}
						else if(destinationNode.value == "6"){				
							 move1to4(x,y,z,a,b);
							 setTimeout('move4to6(285,283,12,1,6)',3400);
							}
						else if(destinationNode.value == "7"){						 
							 move1to5(x,y,z,a,b);
							 setTimeout('move5to7(565,323,12,1,7)',3100);
							}
						else if(destinationNode.value == "8"){				
							 move1to5(x,y,z,a,b);
							 setTimeout('move5to8(565,323,12,1,8)',3300);
							}
						else if(destinationNode.value == "9"){				
							 move1to4(x,y,z,a,b);
							 setTimeout('move4to9(285,283,12,1,9)',3500);
							}
						}
					else if(sourceNode.value == "2"){
						x = 153; y = 375; z = 12;
						if(destinationNode.value == "1"){
							 move2to4(x,y,z,a,b);
							 setTimeout('move4to1(285,283,12,2,1)',3000);
						}
						else if(destinationNode.value == "2"){						 
							 message.value = "Packet is at destination node";
							}
						else if(destinationNode.value == "3"){								 
							 move2to3(x,y,z,a,b);			 				 
							}
						else if(destinationNode.value == "4"){				
							 move2to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 move2to4(x,y,z,a,b);
							 setTimeout('move4to5(285,283,12,2,5)',3000);
							}
						else if(destinationNode.value == "6"){				
							  move2to3(x,y,z,a,b);
							  setTimeout('move3to6(93, 267,12,2,6)',2000);
							}
						else if(destinationNode.value == "7"){								 
							 move2to4(x,y,z,a,b);
							 setTimeout('move4to8(285, 283,12,2,7)',2900);
							 setTimeout('move8to7(433, 190,12,2,7)',6200);
							}
						else if(destinationNode.value == "8"){							 
							 move2to4(x,y,z,a,b);
							 setTimeout('move4to8(285, 283,12,2,8)',2900);
							}
						else if(destinationNode.value == "9"){				
							 move2to4(x,y,z,a,b);
							 setTimeout('move4to9(285, 283,12,2,9)',2900);
							}
						}
					else if(sourceNode.value == "3"){
						x = 93; y = 267; z = 12;
						if(destinationNode.value == "1"){
							 move3to2(x,y,z,a,b);
							 setTimeout('move2to4(153,375,12,3,1)',2300);
							 setTimeout('move4to1(285,283,12,3,1)',5300);
						}
						else if(destinationNode.value == "2"){						 
							 move3to2(x,y,z,a,b);
							}
						else if(destinationNode.value == "3"){								 
							 message.value = "Packet is at destination node!";			 				 
							}
						else if(destinationNode.value == "4"){				
							 move3to6(x,y,z,a,b);
							 setTimeout('move6to4(186, 148,12,3,4)',2100);
							}
						else if(destinationNode.value == "5"){							 
							 move3to2(x,y,z,a,b);
							 setTimeout('move2to4(153,375,12,3,5)',2300);
							 setTimeout('move4to5(346,424,12,3,5)',5300);
							}
						else if(destinationNode.value == "6"){				
							  move3to6(x,y,z,a,b);
							}
						else if(destinationNode.value == "7"){								 
							 move3to2(x,y,z,a,b);
							 setTimeout('move2to4(153,375,12,3,7)',2300);
							 setTimeout('move4to8(285,283,12,3,7)',5200);
							 setTimeout('move8to7(433,190,12,3,7)',8500);
							}
						else if(destinationNode.value == "8"){							 
							 move3to2(x,y,z,a,b);
							 setTimeout('move2to4(153,375,12,3,8)',2300);
							 setTimeout('move4to8(285,283,12,3,8)',5200);
							}
						else if(destinationNode.value == "9"){				
							 move3to6(x,y,z,a,b);
							 setTimeout('move6to9(186, 148,12,3,9)',2100);
							}
						}
					else if(sourceNode.value == "4"){
						x = 285; y = 283; z = 12;
						if(destinationNode.value == "1"){
							 move4to1(x,y,z,a,b);
						}
						else if(destinationNode.value == "2"){						 
							 move4to2(x,y,z,a,b);
							}
						else if(destinationNode.value == "3"){								 
							 move4to2(x,y,z,a,b);
							 setTimeout('move2to3(153,375,12,4,3)',3000); 				 
							}
						else if(destinationNode.value == "4"){				
							 message.value = "Error, packet cannot be transmitted!";	
							}
						else if(destinationNode.value == "5"){							 
							 move4to5(x,y,z,a,b);
							}
						else if(destinationNode.value == "6"){				
							  move4to6(x,y,z,a,b);
							}
						else if(destinationNode.value == "7"){								 
							 move4to8(x,y,z,a,b);
							 setTimeout('move8to7(433,190,12,4,7)',3300);
							}
						else if(destinationNode.value == "8"){							 
							 move4to8(x,y,z,a,b);
							}
						else if(destinationNode.value == "9"){				
							 move4to9(x,y,z,a,b);
							}
						}
					else if(sourceNode.value == "5"){
						x = 565; y = 323; z = 12;
						if(destinationNode.value == "1"){
							 move5to1(x,y,z,a,b);
						}
						else if(destinationNode.value == "2"){						 
							 move5to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,5,2)',3600); 		
							}
						else if(destinationNode.value == "3"){								 
							 move5to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,5,3)',3600);  
							 setTimeout('move2to3(153,375,12,5,3)',6600); 					 
							}
						else if(destinationNode.value == "4"){				
							 move5to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 message.value = "Packet is at destination node!";
							}
						else if(destinationNode.value == "6"){				
							 move5to4(x,y,z,a,b);
							 setTimeout('move4to6(285,283,12,5,6)',3600); 	
							}
						else if(destinationNode.value == "7"){								 
							 move5to7(x,y,z,a,b);
							}
						else if(destinationNode.value == "8"){							 
							 move5to8(x,y,z,a,b);
							}
						else if(destinationNode.value == "9"){				
							 move5to8(x,y,z,a,b);
							 setTimeout('move8to9(433,190,12,5,9)',3000);
							}
						}
					else if(sourceNode.value == "6"){
						x = 186; y = 148; z = 12;
						if(destinationNode.value == "1"){
							 move6to4(x,y,z,a,b);
							 setTimeout('move4to1(285, 283,12,6,1)',3000);
						}
						else if(destinationNode.value == "2"){						 
							 move6to4(x,y,z,a,b);
							 setTimeout('move4to2(285, 283,12,6,2)',3000);	
							}
						else if(destinationNode.value == "3"){								 
							 move6to3(x,y,z,a,b);			 
							}
						else if(destinationNode.value == "4"){				
							 move6to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 move6to4(x,y,z,a,b);
							 setTimeout('move4to5(285, 283,12,6,5)',3000);	
							}
						else if(destinationNode.value == "6"){				
							 message.value = "Packet is at destination node!";
							}
						else if(destinationNode.value == "7"){								 
							 move6to4(x,y,z,a,b);
							 setTimeout('move4to8(285,283,12,6,7)',3000);	
							 setTimeout('move8to7(433,190,12,6,7)',6600);
							}
						else if(destinationNode.value == "8"){							 
							 move6to4(x,y,z,a,b);
							 setTimeout('move4to8(285, 283,12,6,8)',3000);	
							}
						else if(destinationNode.value == "9"){				
							 move6to9(x,y,z,a,b);
							}
						}
					else if(sourceNode.value == "7"){
						x = 623; y = 150; z = 12;
						if(destinationNode.value == "1"){
							 move7to5(x,y,z,a,b);
							 setTimeout('move5to1(565, 323,12,7,1)',2500);
						}
						else if(destinationNode.value == "2"){						 
							 move7to8(x,y,z,a,b);
							 setTimeout('move8to4(433,190,12,7,2)',2700);
							 setTimeout('move4to2(285,283,12,7,2)',6000);				 
							}
						else if(destinationNode.value == "3"){								 
							 move7to8(x,y,z,a,b);
							 setTimeout('move8to4(433,190,12,7,3)',2700);
							 setTimeout('move4to2(285,283,12,7,3)',6000);
							 setTimeout('move2to3(153,375,12,7,3)',8900); 				 
							}
						else if(destinationNode.value == "4"){				
							 move7to8(x,y,z,a,b);
							 setTimeout('move8to4(433,190,12,7,4)',2700);
							}
						else if(destinationNode.value == "5"){							 
							 move7to5(x,y,z,a,b);
							}
						else if(destinationNode.value == "6"){				
							 move7to8(x,y,z,a,b);
							 setTimeout('move8to4(433,190,12,7,6)',2700);
							 setTimeout('move4to6(285,283,12,7,6)',6000);
							}
						else if(destinationNode.value == "7"){								 
							 message.value = "Packet is at destination node!";
							}
						else if(destinationNode.value == "8"){							 
							 move7to8(x,y,z,a,b);
							}
						else if(destinationNode.value == "9"){				
							 move7to8(x,y,z,a,b);
							 setTimeout('move8to9(433,190,12,7,9)',2700);
							}
						}
					else if(sourceNode.value == "8"){
						x = 433; y = 190; z = 12;
						if(destinationNode.value == "1"){
							 move8to5(x,y,z,a,b);
							 setTimeout('move5to1(565, 323,12,8,1)',2900);
						}
						else if(destinationNode.value == "2"){						 
							 move8to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,8,2)',3300);			 
							}
						else if(destinationNode.value == "3"){								 
							 move8to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,8,3)',3300);
							 setTimeout('move2to3(153,375,12,8,3)',6300);					 
							}
						else if(destinationNode.value == "4"){				
							 move8to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 move8to5(x,y,z,a,b);
							}
						else if(destinationNode.value == "6"){				
							 move8to4(x,y,z,a,b);
							 setTimeout('move4to6(285,283,12,8,6)',3300);
							}
						else if(destinationNode.value == "7"){								 
							 move8to7(x,y,z,a,b);
							}
						else if(destinationNode.value == "8"){							 
							 message.value = "Packet is at destination node!";
							}
						else if(destinationNode.value == "9"){				
							 move8to9(x,y,z,a,b);
							}
						}
					else if(sourceNode.value == "9"){
						x = 330; y = 70; z = 12;
						if(destinationNode.value == "1"){
							 move9to4(x,y,z,a,b);
							 setTimeout('move4to1(285,283,12,9,1)',3000);
						}
						else if(destinationNode.value == "2"){						 
							 move9to4(x,y,z,a,b);
							 setTimeout('move4to2(285,283,12,9,2)',3000);		 
							}
						else if(destinationNode.value == "3"){								 
							 move9to6(x,y,z,a,b);
							 setTimeout('move6to3(186,148,12,9,3)',2300);						 
							}
						else if(destinationNode.value == "4"){				
							 move9to4(x,y,z,a,b);
							}
						else if(destinationNode.value == "5"){							 
							 move9to8(x,y,z,a,b);
							 setTimeout('move8to5(433,190,12,9,5)',2600);
							}
						else if(destinationNode.value == "6"){				
							 move9to6(x,y,z,a,b);
							}
						else if(destinationNode.value == "7"){								 
							 move9to8(x,y,z,a,b);
							 setTimeout('move8to7(433,190,12,9,7)',2600);
							}
						else if(destinationNode.value == "8"){							 
							 move9to8(x,y,z,a,b);
							}
						else if(destinationNode.value == "9"){				
							 message.value = "Packet is at destination node!";
							}
						}
					
			}
			else if(brokenLink2.value == "3"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 23;
				if(destinationNode.value == "1"){
					message.value = "Packet is at destination node";
				}
				else if(destinationNode.value == "2"){						 
					 move1to2(x,y,z,a,b);
					}
				else if(destinationNode.value == "3"){								 
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to6(285,283,23,1,3)',2900);
					 setTimeout('move6to3(186,148,23,1,3)',5900);
					}
				else if(destinationNode.value == "4"){				
					 move1to4(x,y,z,a,b);
					}
				else if(destinationNode.value == "5"){							 
					 move1to5(x,y,z,a,b);
					}
				else if(destinationNode.value == "6"){				
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to6(285,283,23,1,6)',3400);
					}
				else if(destinationNode.value == "7"){						 
					 move1to5(x,y,z,a,b);
					 setTimeout('move5to7(565,323,23,1,7)',3100);
					}
				else if(destinationNode.value == "8"){				
					 move1to5(x,y,z,a,b);
					 setTimeout('move5to8(565,323,23,1,8)',3300);
					}
				else if(destinationNode.value == "9"){				
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to9(285,283,23,1,9)',3500);
					}
				}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 23;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,2,3)',2900);
						 setTimeout('move6to3(186,148,23,2,3)',5900);						 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,23,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to4(x,y,z,a,b);
						  setTimeout('move4to6(285,283,23,2,6)',2900);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,23,2,7)',2900);
						 setTimeout('move8to7(433,190,23,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,23,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,23,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 23;
					if(destinationNode.value == "1"){
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,1)',2100);
						 setTimeout('move4to1(285,283,23,3,1)',5100);
					}
					else if(destinationNode.value == "2"){						 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,2)',2100);
						 setTimeout('move4to2(285,283,23,3,2)',5100);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,23,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,5)',2100);
						 setTimeout('move4to5(285,283,23,3,5)',5100);
						}
					else if(destinationNode.value == "6"){				
						 move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,23,3,7)',2100);
						 setTimeout('move9to8(330,70,23,3,7)',4400);
						 setTimeout('move8to7(433,190,23,3,7)',7700);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,8)',2100);
						 setTimeout('move4to8(285,283,23,3,8)',5100);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,23,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 23;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,23,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,23,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 23;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,23,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,5,3)',3600); 	
						 setTimeout('move6to3(186,148,23,5,3)',6600); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,23,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 23;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,23,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,23,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,23,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,23,6,7)',3000);	
						 setTimeout('move8to7(433,190,23,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,23,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 23;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,23,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,2)',2700);
						 setTimeout('move4to2(285,283,23,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,3)',2700);
						 setTimeout('move4to6(285,283,23,7,3)',6000);
						 setTimeout('move6to3(186,148,23,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,6)',2700);
						 setTimeout('move4to6(285,283,23,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,23,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 23;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,23,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,23,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,8,3)',3300);
						 setTimeout('move6to3(186,148,23,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 23;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,23,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,23,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,23,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,23,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,23,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
					}
			else if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 24;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,24,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,24,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,24,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,24,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 24;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,4)',2600);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,24,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,24,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,24,2,7)',2600);
						 setTimeout('move5to7(565,323,24,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,8)',2600);
						 setTimeout('move4to8(285,283,24,2,8)',6100);
						}
					else if(destinationNode.value == "9"){				
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,9)',2600);
						 setTimeout('move4to9(285,283,24,2,9)',6100);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 24;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,24,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,5)',2300);
						 setTimeout('move1to5(346,424,24,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,7)',2300);
						 setTimeout('move1to5(346,424,24,3,7)',5700);
						 setTimeout('move5to7(565,323,24,3,7)',8800);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,24,3,8)',2100);
						 setTimeout('move4to8(285,283,24,3,8)',5100);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,24,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 24;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,4,2)',3500); 
						}
					else if(destinationNode.value == "3"){								 
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,24,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,24,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 24;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,5,3)',2900); 
						 setTimeout('move2to3(153,375,24,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,24,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 24;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,24,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,24,6,2)',2100);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,24,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,24,6,7)',3000);	
						 setTimeout('move8to7(433,190,24,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,24,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 24;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,24,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,24,7,2)',2500);
						 setTimeout('move1to2(346,424,24,7,2)',5400);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,3)',2700);
						 setTimeout('move4to6(285,283,24,7,3)',6000);
						 setTimeout('move6to3(186,148,24,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,6)',2700);
						 setTimeout('move4to6(285,283,24,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,24,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 24;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,24,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,8,2)',3300);
						 setTimeout('move1to2(346,424,24,8,2)',6800);						 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,8,3)',3300);
						 setTimeout('move6to3(186,148,24,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 24;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,9,2)',3000);
						 setTimeout('move1to2(346,424,24,9,2)',6500);						 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,24,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,24,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,24,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
		else if(brokenLink1.value == "3"){
			if(brokenLink2.value == "2"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 23;
				if(destinationNode.value == "1"){
					message.value = "Packet is at destination node";
				}
				else if(destinationNode.value == "2"){						 
					 move1to2(x,y,z,a,b);
					}
				else if(destinationNode.value == "3"){								 
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to6(285,283,23,1,3)',2900);
					 setTimeout('move6to3(186,148,23,1,3)',5900);
					}
				else if(destinationNode.value == "4"){				
					 move1to4(x,y,z,a,b);
					}
				else if(destinationNode.value == "5"){							 
					 move1to5(x,y,z,a,b);
					}
				else if(destinationNode.value == "6"){				
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to6(285,283,23,1,6)',3400);
					}
				else if(destinationNode.value == "7"){						 
					 move1to5(x,y,z,a,b);
					 setTimeout('move5to7(565,323,23,1,7)',3100);
					}
				else if(destinationNode.value == "8"){				
					 move1to5(x,y,z,a,b);
					 setTimeout('move5to8(565,323,23,1,8)',3300);
					}
				else if(destinationNode.value == "9"){				
					 move1to4(x,y,z,a,b);
					 setTimeout('move4to9(285,283,23,1,9)',3500);
					}
				}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 23;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,2,3)',2900);
						 setTimeout('move6to3(186,148,23,2,3)',5900);						 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,23,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to4(x,y,z,a,b);
						  setTimeout('move4to6(285,283,23,2,6)',2900);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,23,2,7)',2900);
						 setTimeout('move8to7(433,190,23,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,23,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,23,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 23;
					if(destinationNode.value == "1"){
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,1)',2100);
						 setTimeout('move4to1(285,283,23,3,1)',5100);
					}
					else if(destinationNode.value == "2"){						 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,2)',2100);
						 setTimeout('move4to2(285,283,23,3,2)',5100);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,23,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,5)',2100);
						 setTimeout('move4to5(285,283,23,3,5)',5100);
						}
					else if(destinationNode.value == "6"){				
						 move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,23,3,7)',2100);
						 setTimeout('move9to8(330,70,23,3,7)',4400);
						 setTimeout('move8to7(433,190,23,3,7)',7700);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,23,3,8)',2100);
						 setTimeout('move4to8(285,283,23,3,8)',5100);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,23,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 23;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,23,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,23,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 23;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,23,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,5,3)',3600); 	
						 setTimeout('move6to3(186,148,23,5,3)',6600); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,23,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 23;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,23,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,23,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,23,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,23,6,7)',3000);	
						 setTimeout('move8to7(433,190,23,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,23,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 23;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,23,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,2)',2700);
						 setTimeout('move4to2(285,283,23,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,3)',2700);
						 setTimeout('move4to6(285,283,23,7,3)',6000);
						 setTimeout('move6to3(186,148,23,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,23,7,6)',2700);
						 setTimeout('move4to6(285,283,23,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,23,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 23;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,23,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,23,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,8,3)',3300);
						 setTimeout('move6to3(186,148,23,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,23,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 23;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,23,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,23,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,23,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,23,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,23,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
					}
			else if(brokenLink2.value == "6"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 36;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,36,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,36,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,36,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,36,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 36;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,36,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to6(285, 283,36,2,6)',2900);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,2,7)',2900);
						 setTimeout('move8to7(433, 190,36,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,36,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 36;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,36,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,4)',2300);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,36,3,5)',2300);
						 setTimeout('move1to5(346,424,36,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,6)',2300);
						 setTimeout('move4to6(285,283,36,3,6)',5200);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,7)',2300);
						 setTimeout('move4to8(285,283,36,3,7)',5200);
						 setTimeout('move8to7(433,190,36,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,8)',2300);
						 setTimeout('move4to8(285,283,36,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,9)',2300);
						 setTimeout('move4to9(285,283,36,3,9)',5200);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 36;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,36,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,36,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 36;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,36,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,36,5,3)',2900); 
						 setTimeout('move2to3(153,375,36,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,36,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 36;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,36,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,36,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,36,6,3)',3000);		
						 setTimeout('move2to3(153, 375,36,6,3)',6000);						 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,36,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,36,6,7)',3000);	
						 setTimeout('move8to7(433,190,36,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 36;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,36,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,2)',2700);
						 setTimeout('move4to2(285,283,36,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,3)',2700);
						 setTimeout('move4to2(285,283,36,7,3)',6000);
						 setTimeout('move2to3(153,375,36,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,6)',2700);
						 setTimeout('move4to6(285,283,36,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,36,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 36;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,36,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,8,3)',3300);
						 setTimeout('move2to3(153,375,36,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 36;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,36,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,9,3)',3000);	
						 setTimeout('move2to3(153,375,36,9,3)',6000);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,36,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,36,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
		}
		}
		else if(brokenLink1.value == "6"){
			if(brokenLink2.value == "3"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 36;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,36,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,36,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,36,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,36,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 36;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,36,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to6(285, 283,36,2,6)',2900);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,2,7)',2900);
						 setTimeout('move8to7(433, 190,36,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,36,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 36;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,36,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,4)',2300);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,36,3,5)',2300);
						 setTimeout('move1to5(346,424,36,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,6)',2300);
						 setTimeout('move4to6(285,283,36,3,6)',5200);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,7)',2300);
						 setTimeout('move4to8(285,283,36,3,7)',5200);
						 setTimeout('move8to7(433,190,36,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,8)',2300);
						 setTimeout('move4to8(285,283,36,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,36,3,9)',2300);
						 setTimeout('move4to9(285,283,36,3,9)',5200);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 36;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,36,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,36,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 36;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,36,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,36,5,3)',2900); 
						 setTimeout('move2to3(153,375,36,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,36,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 36;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,36,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,36,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,36,6,3)',3000);		
						 setTimeout('move2to3(153, 375,36,6,3)',6000);						 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,36,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,36,6,7)',3000);	
						 setTimeout('move8to7(433,190,36,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,36,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 36;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,36,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,2)',2700);
						 setTimeout('move4to2(285,283,36,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,3)',2700);
						 setTimeout('move4to2(285,283,36,7,3)',6000);
						 setTimeout('move2to3(153,375,36,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,36,7,6)',2700);
						 setTimeout('move4to6(285,283,36,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,36,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 36;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,36,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,8,3)',3300);
						 setTimeout('move2to3(153,375,36,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,36,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 36;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,36,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,36,9,3)',3000);	
						 setTimeout('move2to3(153,375,36,9,3)',6000);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,36,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,36,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
		}
			else if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 64;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,1,6)',3000);
						 setTimeout('move3to6(93,267,64,1,6)',5100);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,64,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,64,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,64,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 64;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,64,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,64,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,64,2,7)',2900);
						 setTimeout('move8to7(433, 190,64,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,64,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,64,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 64;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,64,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,4)',2300);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,64,3,5)',2300);
						 setTimeout('move1to5(346,424,64,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,7)',2300);
						 setTimeout('move4to8(285,283,64,3,7)',5200);
						 setTimeout('move8to7(433,190,64,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,8)',2300);
						 setTimeout('move4to8(285,283,64,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,64,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 64;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to9(x,y,z,a,b);
						  setTimeout('move9to6(330,70,64,4,6)',3000);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,64,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 64;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,64,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,64,5,3)',2900); 
						 setTimeout('move2to3(153,375,64,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,5,6)',3000);
						 setTimeout('move9to6(330,70,64,5,6)',5600);						 
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 64;
					if(destinationNode.value == "1"){
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,1)',2100);
						 setTimeout('move2to1(153,375,64,6,1)',4400);
					}
					else if(destinationNode.value == "2"){						 
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,2)',2100);
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,4)',2100);
						 setTimeout('move2to4(153,375,64,6,4)',4400);
						}
					else if(destinationNode.value == "5"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,5)',2300);	
						 setTimeout('move8to5(433,190,64,6,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,7)',2300);	
						 setTimeout('move8to7(433,190,64,6,7)',4900);
						}
					else if(destinationNode.value == "8"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,8)',2300);
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 64;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,64,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,2)',2700);
						 setTimeout('move4to2(285,283,64,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,3)',2700);
						 setTimeout('move4to2(285,283,64,7,3)',6000);
						 setTimeout('move2to3(153,375,64,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,7,6)',2700);
						 setTimeout('move9to6(330,70,64,7,6)',5300);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 64;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,64,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,8,3)',3300);
						 setTimeout('move2to3(153,375,64,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,64,8,6)',2600);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 64;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,64,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,64,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,64,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,64,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
			}
			else if(brokenLink2.value == "9"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 69;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,69,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,69,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,69,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,69,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 69;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,69,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,69,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,2,7)',2900);
						 setTimeout('move8to7(433, 190,69,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,69,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 69;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,69,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,69,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,69,3,5)',2300);
						 setTimeout('move1to5(346,424,69,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,69,3,7)',2300);
						 setTimeout('move4to8(285,283,69,3,7)',5200);
						 setTimeout('move8to7(433,190,69,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,69,3,8)',2300);
						 setTimeout('move4to8(285,283,69,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,69,3,9)',2100);
						 setTimeout('move4to9(285, 283,69,3,9)',5100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 69;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,69,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,69,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 69;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,69,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,69,5,3)',2900); 
						 setTimeout('move2to3(153,375,69,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,69,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 69;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,69,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,69,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,69,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,69,6,7)',3000);	
						 setTimeout('move8to7(433,190,69,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,69,6,9)',3000);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 69;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,69,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,2)',2700);
						 setTimeout('move4to2(285,283,69,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,3)',2700);
						 setTimeout('move4to2(285,283,69,7,3)',6000);
						 setTimeout('move2to3(153,375,69,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,6)',2700);
						 setTimeout('move4to6(285,283,69,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,69,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 69;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,69,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,8,3)',3300);
						 setTimeout('move2to3(153,375,69,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 69;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,69,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,69,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,69,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,9,6)',3000);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,69,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
			}
		}
		else if(brokenLink1.value == "9"){
			if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
				x = 346; y = 424; z = 94;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,94,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,94,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,94,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,1,9)',3500);
						 setTimeout('move8to9(433,190,94,1,9)',6800);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 94;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,94,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,94,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,2,7)',2900);
						 setTimeout('move8to7(433, 190,94,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,2,9)',2900);
						 setTimeout('move8to9(433,190,94,2,9)',6200);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 94;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,94,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,94,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,94,3,5)',2300);
						 setTimeout('move1to5(346,424,94,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,94,3,7)',2300);
						 setTimeout('move4to8(285,283,94,3,7)',5200);
						 setTimeout('move8to7(433,190,94,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,94,3,8)',2300);
						 setTimeout('move4to8(285,283,94,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,94,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 94;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,94,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,0,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,94,4,9)',3000);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 94;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,94,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,94,5,3)',2900); 
						 setTimeout('move2to3(153,375,94,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,94,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 94;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,94,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,94,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,94,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,6,7)',3000);	
						 setTimeout('move8to7(433,190,94,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 94;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,94,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,2)',2700);
						 setTimeout('move4to2(285,283,94,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,3)',2700);
						 setTimeout('move4to2(285,283,94,7,3)',6000);
						 setTimeout('move2to3(153,375,94,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,6)',2700);
						 setTimeout('move4to6(285,283,94,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,94,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 94;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,94,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,94,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,94,8,3)',3300);
						 setTimeout('move2to3(153,375,94,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 94;
					if(destinationNode.value == "1"){
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,1)',2600);
						 setTimeout('move4to1(285,283,94,9,1)',5900);
					}
					else if(destinationNode.value == "2"){						 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,2)',2600);
						 setTimeout('move4to2(285,283,94,9,2)',5900);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,94,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,4)',2600);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,94,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,94,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "6"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 69;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,69,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,69,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,69,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,69,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 69;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,69,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,69,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,2,7)',2900);
						 setTimeout('move8to7(433, 190,69,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,69,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 69;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,69,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,69,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,69,3,5)',2300);
						 setTimeout('move1to5(346,424,69,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,69,3,7)',2300);
						 setTimeout('move4to8(285,283,69,3,7)',5200);
						 setTimeout('move8to7(433,190,69,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,69,3,8)',2300);
						 setTimeout('move4to8(285,283,69,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,69,3,9)',2100);
						 setTimeout('move4to9(285, 283,69,3,9)',5100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 69;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,69,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,69,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 69;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,69,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,69,5,3)',2900); 
						 setTimeout('move2to3(153,375,69,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,69,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 69;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,69,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,69,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,69,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,69,6,7)',3000);	
						 setTimeout('move8to7(433,190,69,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,69,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,69,6,9)',3000);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 69;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,69,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,2)',2700);
						 setTimeout('move4to2(285,283,69,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,3)',2700);
						 setTimeout('move4to2(285,283,69,7,3)',6000);
						 setTimeout('move2to3(153,375,69,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,69,7,6)',2700);
						 setTimeout('move4to6(285,283,69,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,69,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 69;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,69,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,8,3)',3300);
						 setTimeout('move2to3(153,375,69,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 69;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,69,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,69,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,69,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,69,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,69,9,6)',3000);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,69,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
			}
			else if(brokenLink2.value == "8"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 98;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,98,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,98,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,98,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 98;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,98,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,98,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,2,7)',2900);
						 setTimeout('move8to7(433, 190,98,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,98,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 98;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,98,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,98,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,98,3,5)',2300);
						 setTimeout('move1to5(346,424,98,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,98,3,7)',2300);
						 setTimeout('move4to8(285,283,98,3,7)',5200);
						 setTimeout('move8to7(433,190,98,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,98,3,8)',2300);
						 setTimeout('move4to8(285,283,98,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,98,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 98;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,98,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,98,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 98;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,98,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,98,5,3)',2900); 
						 setTimeout('move2to3(153,375,98,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,5,9)',3600); 
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 0;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,98,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,98,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,98,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,6,7)',3000);	
						 setTimeout('move8to7(433,190,98,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 98;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,98,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,2)',2700);
						 setTimeout('move4to2(285,283,98,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,3)',2700);
						 setTimeout('move4to2(285,283,98,7,3)',6000);
						 setTimeout('move2to3(153,375,98,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,6)',2700);
						 setTimeout('move4to6(285,283,98,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,9)',2700);
						 setTimeout('move4to9(285,283,98,7,9)',6000);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 98;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,98,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,8,3)',3300);
						 setTimeout('move2to3(153,375,98,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,8,9)',3300);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 98;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,98,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,98,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,98,9,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,9,7)',3000);
						 setTimeout('move8to7(433,190,98,9,7)',6300);
						}
					else if(destinationNode.value == "8"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,9,8)',3000);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
		else if(brokenLink1.value == "8"){
			if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 84;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,84,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,84,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,84,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,84,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,84,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 84;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,84,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,84,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,84,2,7)',2600);
						 setTimeout('move5to7(565,323,84,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,84,2,8)',2900);
						 setTimeout('move9to8(330, 70,84,2,8)',5900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,84,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 84;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,84,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,84,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,84,3,5)',2300);
						 setTimeout('move1to5(346,424,84,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,84,3,7)',2100);
						 setTimeout('move9to8(330,70,84,3,7)',4400);
						 setTimeout('move8to7(433,190,84,3,7)',7000);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,84,3,8)',2100);
						 setTimeout('move9to8(330,70,84,3,8)',4400);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,84,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 84;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,84,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,84,4,7)',3600);
						}
					else if(destinationNode.value == "8"){							 
						 move4to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,4,8)',3000);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 84;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,84,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,84,5,3)',2900); 
						 setTimeout('move2to3(153,375,84,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,84,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 84;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,84,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,84,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,84,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,6,7)',2300);	
						 setTimeout('move8to7(433,190,84,6,7)',4900);
						}
					else if(destinationNode.value == "8"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,6,8)',2300);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 84;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,84,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,84,7,2)',2500);
						 setTimeout('move1to2(346,424,84,7,2)',6200);		 
						}
					else if(destinationNode.value == "3"){								 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,84,7,3)',2500);
						 setTimeout('move1to2(346,424,84,7,3)',6200);
						 setTimeout('move2to3(153,375,84,7,3)',9200); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,84,7,4)',2500);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,7,6)',2700);
						 setTimeout('move9to6(330,70,84,7,6)',5300);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 84;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,84,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to4(330,70,84,8,2)',2600);
						 setTimeout('move4to2(285,283,84,8,2)',5600);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,84,8,3)',2600);
						 setTimeout('move6to3(184,148,84,8,3)',4900);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,84,8,4)',2900);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,84,8,6)',2600);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 84;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,84,1,9)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,84,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,84,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,84,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,84,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "5"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 85;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,85,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,85,1,8)',3400);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,85,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 85;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,85,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,85,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,2,7)',2900);
						 setTimeout('move8to7(433, 190,85,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,85,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 85;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,85,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,85,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,85,3,5)',2300);
						 setTimeout('move1to5(346,424,85,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,85,3,7)',2300);
						 setTimeout('move4to8(285,283,85,3,7)',5200);
						 setTimeout('move8to7(433,190,85,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,85,3,8)',2300);
						 setTimeout('move4to8(285,283,85,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,85,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 85;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,85,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 0;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,85,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,85,5,3)',2900); 
						 setTimeout('move2to3(153,375,85,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to7(x,y,z,a,b);
						 setTimeout('move7to8(623,150,85,5,8)',2500);
						}
					else if(destinationNode.value == "9"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,85,5,9)',3600); 
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 85;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,85,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,85,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,85,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,85,6,7)',3000);	
						 setTimeout('move8to7(433,190,85,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 85;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,85,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,2)',2700);
						 setTimeout('move4to2(285,283,85,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,3)',2700);
						 setTimeout('move4to2(285,283,85,7,3)',6000);
						 setTimeout('move2to3(153,375,85,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,6)',2700);
						 setTimeout('move4to6(285,283,85,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,85,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 85;
					if(destinationNode.value == "1"){
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,85,8,1)',3300);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,8,3)',3300);
						 setTimeout('move2to3(153,375,85,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to7(x,y,z,a,b);
						 setTimeout('move7to5(623,150,85,8,5)',3300);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 85;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,85,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,85,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,85,9,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,85,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "9"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 98;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,98,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,98,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,98,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 98;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,98,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,98,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,2,7)',2900);
						 setTimeout('move8to7(433, 190,98,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,98,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 98;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,98,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,98,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,98,3,5)',2300);
						 setTimeout('move1to5(346,424,98,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,98,3,7)',2300);
						 setTimeout('move4to8(285,283,98,3,7)',5200);
						 setTimeout('move8to7(433,190,98,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,98,3,8)',2300);
						 setTimeout('move4to8(285,283,98,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,98,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 98;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,98,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,98,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 98;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,98,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,98,5,3)',2900); 
						 setTimeout('move2to3(153,375,98,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,5,9)',3600); 
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 0;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,98,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,98,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,98,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,6,7)',3000);	
						 setTimeout('move8to7(433,190,98,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,98,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 98;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,98,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,2)',2700);
						 setTimeout('move4to2(285,283,98,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,3)',2700);
						 setTimeout('move4to2(285,283,98,7,3)',6000);
						 setTimeout('move2to3(153,375,98,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,6)',2700);
						 setTimeout('move4to6(285,283,98,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,98,7,9)',2700);
						 setTimeout('move4to9(285,283,98,7,9)',6000);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 98;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,98,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,8,3)',3300);
						 setTimeout('move2to3(153,375,98,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,98,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,98,8,9)',3300);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 98;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,98,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,98,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,98,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,98,9,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,9,7)',3000);
						 setTimeout('move8to7(433,190,98,9,7)',6300);
						}
					else if(destinationNode.value == "8"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,98,9,8)',3000);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "7"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 87;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,87,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,87,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 87;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,87,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,87,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,87,2,7)',2600);
						 setTimeout('move5to7(565,323,87,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,87,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,87,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 87;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,87,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,5)',2300);
						 setTimeout('move1to5(346,424,87,3,5)',5100);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,7)',2300);
						 setTimeout('move1to5(346,424,87,3,7)',5100);
						 setTimeout('move5to7(565,323,87,3,7)',8400);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,87,3,8)',2300);
						 setTimeout('move4to8(285,283,87,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,87,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 87;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,87,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,4,7)',3600);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 87;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,87,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,87,5,3)',2900); 
						 setTimeout('move2to3(153,375,87,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,87,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 87;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,87,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,87,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,87,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,87,6,7)',3000);		
						 setTimeout('move5to7(565,323,87,6,7)',7500);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,87,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 87;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,87,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,87,7,2)',2500);
						 setTimeout('move1to2(346,424,87,7,2)',5800);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,87,7,3)',2500);
						 setTimeout('move1to2(346,424,87,7,3)',5800);	
						 setTimeout('move2to3(153,375,87,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,87,7,4)',2500);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,87,7,6)',2500);
						 setTimeout('move4to6(285,283,87,7,6)',5800);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,87,7,9)',2500);
						 setTimeout('move8to9(433,190,87,7,9)',5500);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 87;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,87,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,8,3)',3300);
						 setTimeout('move2to3(153,375,87,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,8,7)',2900);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 87;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,87,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,87,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,87,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,87,9,7)',2600);
						 setTimeout('move5to7(565,323,87,9,7)',5500);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
		else if(brokenLink1.value == "7"){
			if(brokenLink2.value == "5"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 75;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,75,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,75,1,7)',3400);
						 setTimeout('move8to7(433,190,75,1,7)',6700);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,75,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,75,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 75;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,75,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,75,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,2,7)',2900);
						 setTimeout('move8to7(433, 190,75,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,75,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 0;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,75,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,75,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,75,3,5)',2300);
						 setTimeout('move1to5(346,424,75,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,75,3,7)',2300);
						 setTimeout('move4to8(285,283,75,3,7)',5200);
						 setTimeout('move8to7(433,190,75,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,75,3,8)',2300);
						 setTimeout('move4to8(285,283,75,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,75,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 75;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,75,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 75;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,75,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,75,5,3)',2900); 
						 setTimeout('move2to3(153,375,75,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,5,7)',3000);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,75,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 75;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,75,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,75,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,75,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,75,6,7)',3000);	
						 setTimeout('move8to7(433,190,75,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 75;
					if(destinationNode.value == "1"){
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,1)',2700);
						 setTimeout('move4to5(285,283,75,7,1)',6000);	
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,2)',2700);
						 setTimeout('move4to2(285,283,75,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,3)',2700);
						 setTimeout('move4to2(285,283,75,7,3)',6000);
						 setTimeout('move2to3(153,375,75,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,75,7,5)',2700);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,6)',2700);
						 setTimeout('move4to6(285,283,75,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,75,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 75;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,75,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,8,3)',3300);
						 setTimeout('move2to3(153,375,75,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 75;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,75,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,75,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,75,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "8"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 87;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,87,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,87,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 87;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,87,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,87,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,87,2,7)',2600);
						 setTimeout('move5to7(565,323,87,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,87,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,87,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 87;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,87,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,5)',2300);
						 setTimeout('move1to5(346,424,87,3,5)',5100);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,87,3,7)',2300);
						 setTimeout('move1to5(346,424,87,3,7)',5100);
						 setTimeout('move5to7(565,323,87,3,7)',8400);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,87,3,8)',2300);
						 setTimeout('move4to8(285,283,87,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,87,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 87;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,87,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,4,7)',3600);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 87;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,87,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,87,5,3)',2900); 
						 setTimeout('move2to3(153,375,87,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,87,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 87;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,87,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,87,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,87,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,87,6,7)',3000);		
						 setTimeout('move5to7(565,323,87,6,7)',7500);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,87,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 87;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,87,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,87,7,2)',2500);
						 setTimeout('move1to2(346,424,87,7,2)',5800);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,87,7,3)',2500);
						 setTimeout('move1to2(346,424,87,7,3)',5800);	
						 setTimeout('move2to3(153,375,87,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,87,7,4)',2500);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,87,7,6)',2500);
						 setTimeout('move4to6(285,283,87,7,6)',5800);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,87,7,9)',2500);
						 setTimeout('move8to9(433,190,87,7,9)',5500);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 87;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,87,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,8,3)',3300);
						 setTimeout('move2to3(153,375,87,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,87,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,87,8,7)',2900);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 87;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,87,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,87,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,87,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,87,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,87,9,7)',2600);
						 setTimeout('move5to7(565,323,87,9,7)',5500);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
		else if(brokenLink1.value == "5"){
			if(brokenLink2.value == "1"){
			if(sourceNode.value == "1"){
					x = 346; y = 424; z = 15;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,15,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,15,1,5)',3400);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,1,7)',3400);
						 setTimeout('move8to7(433,190,15,1,7)',7000);
						}
					else if(destinationNode.value == "8"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,1,8)',3400);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,15,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 15;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,15,2,5)',3000);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,15,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,2,7)',2900);
						 setTimeout('move8to7(433, 190,15,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,15,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 15;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,15,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,15,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,5)',2300);
						 setTimeout('move4to5(285,283,15,3,5)',5300);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,7)',2300);
						 setTimeout('move4to8(285,283,15,3,7)',5200);
						 setTimeout('move8to7(433,190,15,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,15,3,8)',2300);
						 setTimeout('move4to8(285,283,15,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,15,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 15;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,15,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,15,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 15;
					if(destinationNode.value == "1"){
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,5,1)',3600); 
					}
					else if(destinationNode.value == "2"){						 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,5,2)',3600);  		
						}
					else if(destinationNode.value == "3"){								 
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,5,3)',3600);  	
						 setTimeout('move2to3(153,375,15,5,3)',6600); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,15,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 15;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,15,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,15,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,15,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,15,6,7)',3000);	
						 setTimeout('move8to7(433,190,15,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,15,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 15;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,15,7,1)',2500);
						 setTimeout('move4to1(285,283,15,7,1)',6100);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,2)',2700);
						 setTimeout('move4to2(285,283,15,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,3)',2700);
						 setTimeout('move4to2(285,283,15,7,3)',6000);
						 setTimeout('move2to3(153,375,15,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,15,7,6)',2700);
						 setTimeout('move4to6(285,283,15,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,15,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 15;
					if(destinationNode.value == "1"){
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,8,1)',3300);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,8,3)',3300);
						 setTimeout('move2to3(153,375,15,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,15,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 15;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,15,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,15,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,15,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,15,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,15,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
			}	
			}
			else if(brokenLink2.value == "4"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 54;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,54,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,54,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,54,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,54,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,54,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 54;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,54,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,54,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,2,7)',2900);
						 setTimeout('move8to7(433, 190,54,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,54,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 54;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,54,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,54,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,54,3,5)',2300);
						 setTimeout('move1to5(346,424,54,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,54,3,7)',2300);
						 setTimeout('move4to8(285,283,54,3,7)',5200);
						 setTimeout('move8to7(433,190,54,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,54,3,8)',2300);
						 setTimeout('move4to8(285,283,54,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,54,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 54;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,54,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,54,4,5)',3300);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,54,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 54;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,54,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,54,5,3)',2900); 
						 setTimeout('move2to3(153,375,54,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,5,4)',3000);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,5,6)',3000);
						 setTimeout('move9to6(330,70,54,5,6)',5600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 54;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,54,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,54,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,54,6,5)',3000);	
						 setTimeout('move8to5(433,190,54,6,5)',6600);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,54,6,7)',3000);	
						 setTimeout('move8to7(433,190,54,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 54;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,54,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,2)',2700);
						 setTimeout('move4to2(285,283,54,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,3)',2700);
						 setTimeout('move4to2(285,283,54,7,3)',6000);
						 setTimeout('move2to3(153,375,54,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,6)',2700);
						 setTimeout('move4to6(285,283,54,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 54;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,54,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,8,3)',3300);
						 setTimeout('move2to3(153,375,54,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,54,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 54;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,54,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,54,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,54,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,54,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "7"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 75;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,75,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,75,1,7)',3400);
						 setTimeout('move8to7(433,190,75,1,7)',6700);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,75,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,75,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 75;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,75,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,75,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,2,7)',2900);
						 setTimeout('move8to7(433, 190,75,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,75,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 0;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,75,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,75,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,75,3,5)',2300);
						 setTimeout('move1to5(346,424,75,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,75,3,7)',2300);
						 setTimeout('move4to8(285,283,75,3,7)',5200);
						 setTimeout('move8to7(433,190,75,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,75,3,8)',2300);
						 setTimeout('move4to8(285,283,75,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,75,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 75;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,75,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 75;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,75,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,75,5,3)',2900); 
						 setTimeout('move2to3(153,375,75,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,5,7)',3000);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,75,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 75;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,75,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,75,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,75,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,75,6,7)',3000);	
						 setTimeout('move8to7(433,190,75,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,75,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 75;
					if(destinationNode.value == "1"){
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,1)',2700);
						 setTimeout('move4to5(285,283,75,7,1)',6000);	
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,2)',2700);
						 setTimeout('move4to2(285,283,75,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,3)',2700);
						 setTimeout('move4to2(285,283,75,7,3)',6000);
						 setTimeout('move2to3(153,375,75,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,75,7,5)',2700);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,75,7,6)',2700);
						 setTimeout('move4to6(285,283,75,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,75,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 75;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,75,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,8,3)',3300);
						 setTimeout('move2to3(153,375,75,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,75,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 75;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,75,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,75,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,75,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,75,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,75,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "8"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 85;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,85,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,85,1,8)',3400);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,85,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 85;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,85,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,85,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,2,7)',2900);
						 setTimeout('move8to7(433, 190,85,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,85,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 85;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,85,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,85,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,85,3,5)',2300);
						 setTimeout('move1to5(346,424,85,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,85,3,7)',2300);
						 setTimeout('move4to8(285,283,85,3,7)',5200);
						 setTimeout('move8to7(433,190,85,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,85,3,8)',2300);
						 setTimeout('move4to8(285,283,85,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,85,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 85;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,85,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,85,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 0;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,85,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,85,5,3)',2900); 
						 setTimeout('move2to3(153,375,85,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to7(x,y,z,a,b);
						 setTimeout('move7to8(623,150,85,5,8)',2500);
						}
					else if(destinationNode.value == "9"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,85,5,9)',3600); 
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 85;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,85,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,85,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,85,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,85,6,7)',3000);	
						 setTimeout('move8to7(433,190,85,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,85,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 85;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,85,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,2)',2700);
						 setTimeout('move4to2(285,283,85,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,3)',2700);
						 setTimeout('move4to2(285,283,85,7,3)',6000);
						 setTimeout('move2to3(153,375,85,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,85,7,6)',2700);
						 setTimeout('move4to6(285,283,85,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,85,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 85;
					if(destinationNode.value == "1"){
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,85,8,1)',3300);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,8,3)',3300);
						 setTimeout('move2to3(153,375,85,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to7(x,y,z,a,b);
						 setTimeout('move7to5(623,150,85,8,5)',3300);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,85,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 85;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,85,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,85,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,85,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to5(285,283,85,9,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,85,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
		else if(brokenLink1.value == "4"){
			if(brokenLink2.value == "1"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 14;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,14,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,1,4)',3000);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,1,6)',3000);
						 setTimeout('move4to6(285,283,14,1,6)',5900);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,14,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,14,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,14,1,9)',3300);
						 setTimeout('move4to9(285,283,14,1,9)',6900);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 14;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,14,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93,267,14,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,2,7)',2900);
						 setTimeout('move8to7(433, 190,14,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,14,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 14;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,14,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,3,5)',2300);
						 setTimeout('move1to5(346,424,14,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,3,7)',2300);
						 setTimeout('move4to8(285,283,14,3,7)',5200);
						 setTimeout('move8to7(433,190,14,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,14,3,8)',2300);
						 setTimeout('move4to8(285,283,14,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,14,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 14;
					if(destinationNode.value == "1"){
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,14,4,1)',3000); 
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,14,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,14,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 14;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,14,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,14,5,3)',2900); 
						 setTimeout('move2to3(153,375,14,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,14,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,14,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 14;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,6,1)',3000);
						 setTimeout('move2to1(153,375,14,6,1)',6000); 
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,14,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,14,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,14,6,7)',3000);	
						 setTimeout('move8to7(433,190,14,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,14,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 14;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,14,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,2)',2700);
						 setTimeout('move4to2(285,283,14,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,3)',2700);
						 setTimeout('move4to2(285,283,14,7,3)',6000);
						 setTimeout('move2to3(153,375,14,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,14,7,6)',2700);
						 setTimeout('move4to6(285,283,14,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,14,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 14;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,14,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,8,3)',3300);
						 setTimeout('move2to3(153,375,14,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,14,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 14;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,9,1)',3000);
						 setTimeout('move2to1(153,375,14,9,1)',6000); 
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,14,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,14,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,14,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,14,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
			}
			}
			else if(brokenLink2.value == "2"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 24;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,24,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,24,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,24,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,24,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 24;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,4)',2600);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,24,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,24,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,24,2,7)',2600);
						 setTimeout('move5to7(565,323,24,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,8)',2600);
						 setTimeout('move4to8(285,283,24,2,8)',6100);
						}
					else if(destinationNode.value == "9"){				
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to4(346,424,24,2,9)',2600);
						 setTimeout('move4to9(285,283,24,2,9)',6100);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 24;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,24,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,5)',2300);
						 setTimeout('move1to5(346,424,24,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,24,3,7)',2300);
						 setTimeout('move1to5(346,424,24,3,7)',5700);
						 setTimeout('move5to7(565,323,24,3,7)',8800);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186,148,24,3,8)',2100);
						 setTimeout('move4to8(285,283,24,3,8)',5100);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,24,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 24;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,4,2)',3500); 
						}
					else if(destinationNode.value == "3"){								 
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,24,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,24,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 24;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,24,5,3)',2900); 
						 setTimeout('move2to3(153,375,24,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,24,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 24;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,24,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,24,6,2)',2100);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,24,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,24,6,7)',3000);	
						 setTimeout('move8to7(433,190,24,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,24,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 24;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,24,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,24,7,2)',2500);
						 setTimeout('move1to2(346,424,24,7,2)',5400);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,3)',2700);
						 setTimeout('move4to6(285,283,24,7,3)',6000);
						 setTimeout('move6to3(186,148,24,7,3)',9000); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,24,7,6)',2700);
						 setTimeout('move4to6(285,283,24,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,24,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 24;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,24,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,8,2)',3300);
						 setTimeout('move1to2(346,424,24,8,2)',6800);						 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,8,3)',3300);
						 setTimeout('move6to3(186,148,24,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,24,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 24;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,24,9,2)',3000);
						 setTimeout('move1to2(346,424,24,9,2)',6500);						 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,24,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,24,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,24,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "5"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 54;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,54,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,54,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,54,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,54,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,54,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 54;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,54,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,54,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,2,7)',2900);
						 setTimeout('move8to7(433, 190,54,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,54,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 54;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,54,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,54,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,54,3,5)',2300);
						 setTimeout('move1to5(346,424,54,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,54,3,7)',2300);
						 setTimeout('move4to8(285,283,54,3,7)',5200);
						 setTimeout('move8to7(433,190,54,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,54,3,8)',2300);
						 setTimeout('move4to8(285,283,54,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,54,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 54;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,54,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,54,4,5)',3300);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,54,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 54;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,54,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,54,5,3)',2900); 
						 setTimeout('move2to3(153,375,54,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,5,4)',3000);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,5,6)',3000);
						 setTimeout('move9to6(330,70,54,5,6)',5600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 54;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,54,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,54,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,54,6,5)',3000);	
						 setTimeout('move8to5(433,190,54,6,5)',6600);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,54,6,7)',3000);	
						 setTimeout('move8to7(433,190,54,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,54,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 54;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,54,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,2)',2700);
						 setTimeout('move4to2(285,283,54,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,3)',2700);
						 setTimeout('move4to2(285,283,54,7,3)',6000);
						 setTimeout('move2to3(153,375,54,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,54,7,6)',2700);
						 setTimeout('move4to6(285,283,54,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,54,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 54;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,54,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,8,3)',3300);
						 setTimeout('move2to3(153,375,54,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,54,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 54;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,54,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,54,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,54,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,54,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,54,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "6"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 64;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,1,6)',3000);
						 setTimeout('move3to6(93,267,64,1,6)',5100);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,64,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,64,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,64,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 64;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,64,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,64,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,64,2,7)',2900);
						 setTimeout('move8to7(433, 190,64,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,64,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,64,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 64;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,64,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,4)',2300);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,64,3,5)',2300);
						 setTimeout('move1to5(346,424,64,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,7)',2300);
						 setTimeout('move4to8(285,283,64,3,7)',5200);
						 setTimeout('move8to7(433,190,64,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,64,3,8)',2300);
						 setTimeout('move4to8(285,283,64,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,64,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 64;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,64,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to9(x,y,z,a,b);
						  setTimeout('move9to6(330,70,64,4,6)',3000);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,64,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 64;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,64,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,64,5,3)',2900); 
						 setTimeout('move2to3(153,375,64,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,5,6)',3000);
						 setTimeout('move9to6(330,70,64,5,6)',5600);						 
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 64;
					if(destinationNode.value == "1"){
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,1)',2100);
						 setTimeout('move2to1(153,375,64,6,1)',4400);
					}
					else if(destinationNode.value == "2"){						 
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,2)',2100);
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to3(x,y,z,a,b);
						 setTimeout('move3to2(93,267,64,6,4)',2100);
						 setTimeout('move2to4(153,375,64,6,4)',4400);
						}
					else if(destinationNode.value == "5"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,5)',2300);	
						 setTimeout('move8to5(433,190,64,6,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,7)',2300);	
						 setTimeout('move8to7(433,190,64,6,7)',4900);
						}
					else if(destinationNode.value == "8"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,64,6,8)',2300);
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 64;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,64,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,2)',2700);
						 setTimeout('move4to2(285,283,64,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,3)',2700);
						 setTimeout('move4to2(285,283,64,7,3)',6000);
						 setTimeout('move2to3(153,375,64,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,64,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,7,6)',2700);
						 setTimeout('move9to6(330,70,64,7,6)',5300);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,64,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 64;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,64,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,8,3)',3300);
						 setTimeout('move2to3(153,375,64,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,64,8,6)',2600);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 64;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,64,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,64,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,64,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,64,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,64,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
			}
			else if(brokenLink2.value == "8"){
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 84;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,84,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,84,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,84,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,84,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,84,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 84;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,84,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,84,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,84,2,7)',2600);
						 setTimeout('move5to7(565,323,84,2,7)',5900);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,84,2,8)',2900);
						 setTimeout('move9to8(330, 70,84,2,8)',5900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285, 283,84,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 84;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,84,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,84,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,84,3,5)',2300);
						 setTimeout('move1to5(346,424,84,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,84,3,7)',2100);
						 setTimeout('move9to8(330,70,84,3,7)',4400);
						 setTimeout('move8to7(433,190,84,3,7)',7000);
						}
					else if(destinationNode.value == "8"){							 
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,84,3,8)',2100);
						 setTimeout('move9to8(330,70,84,3,8)',4400);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,84,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 84;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,84,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,84,4,7)',3600);
						}
					else if(destinationNode.value == "8"){							 
						 move4to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,4,8)',3000);
						}
					else if(destinationNode.value == "9"){				
						 move4to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 84;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,84,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,84,5,3)',2900); 
						 setTimeout('move2to3(153,375,84,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,84,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 84;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,84,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,84,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,84,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,6,7)',2300);	
						 setTimeout('move8to7(433,190,84,6,7)',4900);
						}
					else if(destinationNode.value == "8"){							 
						 move6to9(x,y,z,a,b);
						 setTimeout('move9to8(330,70,84,6,8)',2300);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 84;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,84,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,84,7,2)',2500);
						 setTimeout('move1to2(346,424,84,7,2)',6200);		 
						}
					else if(destinationNode.value == "3"){								 
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565,323,84,7,3)',2500);
						 setTimeout('move1to2(346,424,84,7,3)',6200);
						 setTimeout('move2to3(153,375,84,7,3)',9200); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,84,7,4)',2500);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,7,6)',2700);
						 setTimeout('move9to6(330,70,84,7,6)',5300);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,84,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 84;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,84,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to4(330,70,84,8,2)',2600);
						 setTimeout('move4to2(285,283,84,8,2)',5600);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,84,8,3)',2600);
						 setTimeout('move6to3(184,148,84,8,3)',4900);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to4(565,323,84,8,4)',2900);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to9(x,y,z,a,b);
						 setTimeout('move9to6(330,70,84,8,6)',2600);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 84;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,84,1,9)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,84,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,84,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,84,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,84,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
			else if(brokenLink2.value == "9"){
				if(sourceNode.value == "1"){
				x = 346; y = 424; z = 94;
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){						 
						 move1to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move1to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,94,1,3)',3000);
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,94,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,94,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,1,9)',3500);
						 setTimeout('move8to9(433,190,94,1,9)',6800);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 94;
					if(destinationNode.value == "1"){
						 move2to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){								 
						 move2to3(x,y,z,a,b);			 				 
						}
					else if(destinationNode.value == "4"){				
						 move2to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move2to1(x,y,z,a,b);
						 setTimeout('move1to5(346,424,94,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,94,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,2,7)',2900);
						 setTimeout('move8to7(433, 190,94,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,2,9)',2900);
						 setTimeout('move8to9(433,190,94,2,9)',6200);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 94;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,94,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,94,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,94,3,5)',2300);
						 setTimeout('move1to5(346,424,94,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,94,3,7)',2300);
						 setTimeout('move4to8(285,283,94,3,7)',5200);
						 setTimeout('move8to7(433,190,94,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,94,3,8)',2300);
						 setTimeout('move4to8(285,283,94,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,94,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 94;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,94,4,3)',3000); 				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){							 
						 move4to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						  move4to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move4to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,0,4,7)',3300);
						}
					else if(destinationNode.value == "8"){							 
						 move4to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move4to6(x,y,z,a,b);
						 setTimeout('move6to9(186,148,94,4,9)',3000);
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 94;
					if(destinationNode.value == "1"){
						 move5to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,94,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,94,5,3)',2900); 
						 setTimeout('move2to3(153,375,94,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,94,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 94;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,94,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,94,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,94,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,94,6,7)',3000);	
						 setTimeout('move8to7(433,190,94,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,94,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 94;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,94,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,2)',2700);
						 setTimeout('move4to2(285,283,94,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,3)',2700);
						 setTimeout('move4to2(285,283,94,7,3)',6000);
						 setTimeout('move2to3(153,375,94,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,7,6)',2700);
						 setTimeout('move4to6(285,283,94,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,94,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 94;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,94,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,94,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,94,8,3)',3300);
						 setTimeout('move2to3(153,375,94,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,94,8,6)',3300);
						}
					else if(destinationNode.value == "7"){								 
						 move8to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){				
						 move8to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 94;
					if(destinationNode.value == "1"){
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,1)',2600);
						 setTimeout('move4to1(285,283,94,9,1)',5900);
					}
					else if(destinationNode.value == "2"){						 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,2)',2600);
						 setTimeout('move4to2(285,283,94,9,2)',5900);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,94,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,94,9,4)',2600);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,94,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,94,9,7)',2600);
						}
					else if(destinationNode.value == "8"){							 
						 move9to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
				}
		}
	}
	else{					
				if(sourceNode.value == "1"){
					x = 346; y = 424; z = 0; 
					if(destinationNode.value == "1"){
						message.value = "Packet is at destination node";
					}
					else if(destinationNode.value == "2"){
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(202, 391, 292, 333, 0); // 2 to 4						
						arrow(311, 336, 353, 429, 0); // 4 to 1						
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						message.value="RREQ:\n1 -> 2\n\n1 -> 4 -> 2\n1 -> 4 -> 6 -> 3 -> 2\n\nRREP:\n2 -> 1 \n\n2 -> 4 -> 1 \n2 -> 3 -> 6 -> 4 -> 1 \n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2								
						message.value="RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4 -> 6 -> 3\n\n1 -> 4 -> 6 -> 3\n\nRREP:\n3 -> 2 -> 1\n3 -> 6 -> 4 -> 2 -> 1\n\n3 -> 6 -> 4 -> 1 \n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "4"){	
						arrow(369, 427, 327, 330, 2); // 1 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						message.value="RREQ:\n1 -> 4\n\n1 -> 2 -> 4\n1 -> 2 -> 3 -> 6 -> 4\n1 -> 2 -> 3 -> 6 -> 9 -> 4\n\n1 -> 5 -> 4\n1 -> 5 -> 8 -> 4\n1 -> 5 -> 8 -> 9 -> 4\n\nRREP:\n4 -> 1\n\n4 -> 2 -> 1\n4 -> 6 -> 3 -> 2 -> 1\n4 -> 9 -> 6 -> 3 -> 2 -> 1\n\n4 -> 5 -> 1\n4 -> 8 -> 5 -> 1\n4 -> 9 -> 8 -> 5 -> 1\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){	
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1	
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						message.value="RREQ:\n1 -> 5\n\n1 -> 4 -> 5\n1 -> 4 -> 8 -> 5\n1 -> 4 -> 8 -> 7 -> 5\n\n1 -> 2 -> 4 -> 5\n1 -> 2 -> 4 -> 8 -> 5\n1 -> 2 -> 4 -> 8 -> 7 -> 5\n\nRREP:\n5 -> 1 \n\n5 -> 4 -> 1\n5 -> 8 -> 4 -> 1\n5 -> 7 -> 8 -> 4 -> 1\n\n5 -> 4 -> 2 -> 1\n5 -> 8 -> 4 -> 2 -> 1\n5 -> 7 -> 8 -> 4 -> 2 -> 1\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){	
						arrow(369, 427, 327, 330, 2); // 1 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2	
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n1 -> 2 -> 3 -> 6\n1 -> 2 -> 4 -> 6\n\n1 -> 4 -> 6\n1 -> 4 -> 9 -> 6\n1 -> 4 -> 8 -> 9 -> 6\n1 -> 4 -> 5 -> 8 -> 9 -> 6\n\nRREP:\n6 -> 3 -> 2 -> 1\n6 -> 4 -> 2 -> 1\n\n6 -> 4 -> 1\n6 -> 9 -> 4 -> 1\n6 -> 9 -> 8 -> 4 -> 1\n6 -> 9 -> 8 -> 5 -> 4 -> 1\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						 arrow(397, 448, 568, 369, 2); // 1 to 5
						 arrow(606, 331, 653, 202, 2); // 5 to 7	
						 arrow(635, 197, 590, 320, 0); // 7 to 5
						 arrow(553, 340, 339, 306, 0); // 5 to 4
						 arrow(281, 319, 188, 380, 0); // 4 to 2
						 arrow(195, 413, 345, 453, 0); // 2 to 1
						 arrow(620, 173, 482, 201, 0); // 7 to 8
						 arrow(472, 237, 570, 339, 0); // 8 to 5
						 arrow(434, 222, 328, 289, 0); // 8 to 4
						 arrow(311, 336, 353, 429, 0); // 4 to 1
						 arrow(548, 360, 391, 427, 0); // 5 to 1
						 message.value="RREQ:\n1 -> 2 -> 4 -> 5 -> 7\n1 -> 2 -> 4 -> 5 -> 8 -> 7\n1 -> 2 -> 4 -> 8 -> 7\n\n1 -> 4 -> 5 -> 7\n1 -> 4 -> 5 -> 8 -> 7\n1 -> 4 -> 8 -> 7\n\n1 -> 5 -> 7\n1 -> 8 -> 5 -> 7\n\nRREP:\n7 -> 5 -> 4 -> 2 -> 1\n7 -> 8 -> 5 -> 4 -> 2 -> 1\n7 -> 8 -> 4 -> 2 -> 1\n\n7 -> 5 -> 4 -> 1\n7 -> 8 -> 5 -> 4 -> 1\n7 -> 8 -> 4 -> 1\n\n7 -> 5 -> 1 \n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						 arrow(397, 448, 568, 369, 2); // 1 to 5
						 arrow(580, 329, 482, 226, 2); // 5 to 8
						 arrow(434, 222, 328, 289, 0); // 8 to 4
						 arrow(311, 336, 353, 429, 0); // 4 to 1
						 arrow(472, 237, 570, 339, 0); // 8 to 5
						 arrow(548, 360, 391, 427, 0); // 5 to 1
						 arrow(486, 218, 625, 188, 0); // 8 to 7
						 arrow(635, 197, 590, 320, 0); // 7 to 5
						 arrow(553, 340, 339, 306, 0); // 5 to 4
						 arrow(345, 118, 306, 284, 0); // 9 to 4
						 arrow(452, 194, 382, 110, 0); // 8 to 9
						 arrow(336, 99, 228, 157, 0); // 9 to 6
						 arrow(219, 198, 290, 297, 0); // 6 to 4
						 message.value="RREQ:\n1 -> 4 -> 8\n1 -> 4 -> 5 -> 8\n1 -> 4 -> 5 -> 7 -> 8\n1 -> 4 -> 9 -> 8\n1 -> 4 -> 6 -> 9 -> 8\n\n1 -> 5 -> 8\n1 -> 5 -> 7 -> 8\n\nRREP:\n8 -> 4 -> 1\n8 -> 5 -> 4 -> 1\n8 -> 7 -> 5 -> 4 -> 1\n8 -> 9 -> 4 -> 1\n8 -> 9 -> 6 -> 4 -> 1\n\n8 -> 5 -> 1\n8 -> 7 -> 5 -> 1\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						 arrow(369, 427, 327, 330, 2); // 1 to 4
						 arrow(322, 287, 361, 122, 2); // 4 to 9
						 arrow(336, 99, 228, 157, 0); // 9 to 6
						 arrow(345, 118, 306, 284, 0); // 9 to 4
						 arrow(434, 222, 328, 289, 0); // 8 to 4
						 arrow(219, 198, 290, 297, 0); // 6 to 4
						 arrow(311, 336, 353, 429, 0); // 4 to 1
						 arrow(372, 118, 440, 202, 0); // 9 to 8
						 message.value="RREQ:\n1 -> 4 -> 9\n1 -> 4 -> 8 -> 9\n1 -> 4 -> 6 -> 9\n\nRREP:\n9 -> 4 -> 1\n9 -> 8 -> 4 -> 1\n9 -> 6 -> 4 -> 1\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 0;
					if(destinationNode.value == "1"){
						arrow(195, 413, 345, 453, 2); // 2 to 1					
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n2 -> 1\n\n2 -> 4 -> 1\n2 -> 4 -> 5 -> 1\n\nRREP:\n1 -> 2\n\n1 -> 4 -> 2\n1 -> 5 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){						 
						message.value = "Packet is at destination node";
						}
					else if(destinationNode.value == "3"){
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						message.value="RREQ:\n1 -> 2 -> 3\n1 -> 2 -> 4 -> 6 -> 3\n\n1 -> 4 -> 6 -> 3\n\nRREP:\n3 -> 2\n\n3 -> 6 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"		 				 
						}
					else if(destinationNode.value == "4"){	
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(311, 336, 353, 429, 0); // 4 to 1		
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(372, 118, 440, 202, 0); // 9 to 8
						message.value="RREQ:\n2 -> 4\n\n2 -> 1 -> 4\n2 -> 1 -> 5 -> 4\n2 -> 1 -> 5 -> 8 -> 4\n2 -> 1 -> 5 -> 8 -> 9 -> 4\n\n2 -> 3 -> 6 -> 4\n2 -> 3 -> 6 -> 9 -> 4\n\nRREP:\n4 -> 2\n\n4 -> 1 -> 2\n4 -> 5 -> 1 -> 2\n4 -> 8 -> 5 -> 1 -> 2\n4 -> 9 -> 8 -> 5 -> 1 -> 2\n\n4 -> 6 -> 3 -> 2\n4 -> 9 -> 6 -> 3 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						message.value="RREQ:\n2 -> 1 -> 5\n\n2 -> 4 -> 5\n2 -> 4 -> 8 -> 5\n2 -> 4 -> 8 -> 7 -> 5\n\nRREP:\n5 -> 1 -> 2\n\n5 -> 4 -> 2\n5 -> 8 -> 4 -> 2\n5 -> 7 -> 8 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n2 -> 3 -> 6\n\n2 -> 4 -> 6\n2 -> 4 -> 9 -> 6\n\nRREP:\n6 -> 3 -> 2\n\n6 -> 4 -> 2\n6 -> 9 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n2 -> 1 -> 5 -> 7\n\n2 -> 4 -> 5 -> 7\n2 -> 4 -> 1 -> 5 -> 7\n2 -> 4 -> 8 -> 7\n2 -> 4 -> 8 -> 5 -> 7\n\nRREP:\n7 -> 5 -> 1 -> 2\n\n7 -> 5 -> 4 -> 2\n7 -> 5 -> 1 -> 4 -> 2\n7 -> 8 -> 4 -> 2\n7 -> 5 -> 8 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(202, 391, 292, 333, 2); // 2 to 4	
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n2 -> 1 -> 5 -> 8\n2 -> 1 -> 5 -> 7 -> 8\n2 -> 1 -> 4 -> 8\n2 -> 1 -> 4 -> 5 -> 8\n2 -> 1 -> 4 -> 5 -> 7 -> 8\n\n2 -> 4 -> 8\n2 -> 4 -> 5 -> 8\n2 -> 4 -> 5 -> 7 -> 8\n2 -> 4 -> 9 -> 8\n\nRREP:\n8 -> 5 -> 1 -> 2\n8 -> 7 -> 5 -> 1 -> 2\n8 -> 4 -> 1 -> 2\n8 -> 5 -> 4 -> 1 -> 2\n8 -> 7 -> 5 -> 4 -> 1 -> 2\n\n8 -> 4 -> 2\n8 -> 5 -> 4 -> 2\n8 -> 7 -> 5 -> 4 -> 2\n8 -> 9 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(322, 287, 361, 122, 2); // 4 to 9
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(219, 198, 290, 297, 0); // 6 to 4
						message.value="RREQ:\n2 -> 3 -> 6 -> 9\n\n2 -> 4 -> 9\n2 -> 4 -> 6 -> 9\n2 -> 4 -> 8 -> 9\n\nRREP:\n9 -> 6 - > 3 -> 2\n\n9 -> 4 -> 2\n9 -> 6 -> 4 -> 2\n9 -> 8 -> 4 -> 2\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 0;
					if(destinationNode.value == "1"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						message.value="RREQ:\n3 -> 2 -> 1\n\nRREP:\n1 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(369, 427, 327, 330, 0); // 1 to 4 
						message.value="RREQ:\n3 -> 2\n\n3 -> 6 -> 4 -> 2\n3 -> 6 -> 4 -> 1 -> 2\n\nRREP:\n2 -> 3\n\n2 -> 4 -> 6 -> 3\n2 -> 1 -> 4 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n3 -> 2 -> 4\n3 -> 2 -> 1 -> 4\n3 -> 2 -> 1 -> 5 -> 4\n3 -> 2 -> 1 -> 5 -> 8 -> 4\n\n3 -> 6 -> 4\n3 -> 6 -> 9 -> 4\n3 -> 6 -> 9 -> 8 -> 4 \n\nRREP:\n4 -> 2 -> 3\n4 -> 1 -> 2 -> 3\n4 -> 5 -> 1 -> 2 -> 3\n4 -> 8 -> 5 -> 1 -> 2 -> 3\n\n4 -> 6 -> 3\n4 -> 9 -> 6 -> 3\n4 -> 8 -> 9 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(195, 413, 345, 453, 2); // 2 to 1
						arrow(397, 448, 568, 369, 2); // 1 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n3 -> 2 -> 1 -> 5\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 4 -> 1 -> 5\n3 -> 2 -> 4 -> 8 -> 5\n3 -> 2 -> 4 -> 8 -> 7 -> 5\n\n3 -> 6 -> 4 -> 5\n3 -> 6 -> 4 -> 1 -> 5\n3 -> 6 -> 4 -> 8 -> 5\n3 -> 6 -> 4 -> 8 -> 7 -> 5\n\nRREP:\n5 -> 1 -> 2 -> 3\n5 -> 4 -> 2 -> 3\n5 -> 1 -> 4 -> 2 -> 3\n5 -> 8 -> 4 -> 2 -> 3\n5 -> 7 -> 8 -> 4 -> 2 -> 3\n\n5 -> 4 -> 6 -> 3\n5 -> 1 -> 4 -> 6 -> 3\n5 -> 8 -> 4 -> 6 -> 3\n5 -> 7 -> 8 -> 4 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){		
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						message.value="RREQ:\n3 -> 6\n\n3 -> 2 -> 4 -> 6\n3 -> 2 -> 4 -> 9 -> 6\n\nRREP:\n6 -> 3\n\n6 -> 4 -> 2 -> 3\n6 -> 9 -> 4 -> 2 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 2 -> 4 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 8 -> 7\n3 -> 2 -> 4 -> 8 -> 5 -> 7\n\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 5 -> 7\n3 -> 6 -> 4 -> 1 -> 5 -> 7\n\nRREP:\n7 -> 5 -> 1 -> 2 -> 3\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 1 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 5 -> 8 -> 4 -> 2 -> 3\n\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 5 -> 8 -> 4 -> 6 -> 3\n7 -> 5 -> 1 -> 4 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(124, 313, 158, 384, 2); // 3 to 2
						arrow(202, 391, 292, 333, 2); // 2 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n3 -> 2 -> 4 -> 8\n3 -> 2 -> 4 -> 5 -> 8\n3 -> 2 -> 4 -> 5 -> 7 -> 8\n\n3 -> 6 -> 9 -> 8\n3 -> 6 -> 4 -> 8\n3 -> 6 -> 4 -> 9 -> 8\n\nRREP:\n8 -> 4 -> 2 -> 3\n8 -> 5 -> 4 -> 2 -> 3\n8 -> 7 -> 5 -> 4 -> 2 -> 3\n\n8 -> 9 -> 6 -> 3\n8 -> 4 -> 6 -> 3\n8 -> 9 -> 4 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(140, 277, 199, 201, 2); // 3 to 6
						arrow(233, 172, 343, 113, 2); // 6 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(372, 118, 440, 202, 0); // 9 to 8
						message.value="RREQ:\n3 -> 2 -> 4 -> 9\n3 -> 2 -> 4 -> 8 -> 9 \n\n3 -> 6 -> 9\n3 -> 6 -> 4 -> 9\n3 -> 6 -> 4 -> 8 -> 9\n\nRREP:\n9 -> 4 -> 2 -> 3\n9 -> 8 -> 4 -> 2 -> 3\n\n9 -> 6 -> 3\n9 -> 4 -> 6 -> 3\n9 -> 8 -> 4 -> 6 -> 3\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 0;
					if(destinationNode.value == "1"){
						arrow(311, 336, 353, 429, 2); // 4 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n4 -> 1\n\n4 -> 2 -> 1\n\n4 -> 5 -> 1\n\nRREP:\n1 -> 4\n\n1 -> 2 -> 4\n\n1 -> 5 -> 4\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(140, 277, 199, 201, 0); // 3 to 6
						message.value="RREQ:\n4 -> 2\n\n4 -> 1 -> 2\n\n4 -> 6 -> 3 -> 2\n\nRREP:\n2 -> 4 \n\n2 -> 1 -> 4 \n\n2 ->  3 -> 6 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(219, 198, 290, 297, 0); // 6 to 4
						message.value="RREQ:\n4 -> 2 -> 3\n\n4 -> 6 -> 3\n\nRREP:\n3 -> 2 -> 4\n\n3 -> 6 -> 4\n\n*Click on protocol to view RREQ only*"				 
						}
					else if(destinationNode.value == "4"){				
						 message.value = "Error, packet cannot be transmitted!";	
						}
					else if(destinationNode.value == "5"){
						arrow(336, 322, 546, 353, 2); // 4 to 5
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						message.value="RREQ:\n4 -> 5\n\n4 -> 1 -> 5\n\n4 -> 8 -> 5\n4 -> 8 -> 7 -> 5\n\nRREP:\n5 -> 4\n\n5 -> 1 -> 4\n\n5 -> 8 -> 4\n5 -> 7 -> 8 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){	
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n4 -> 6\n\n4 -> 9 -> 6\n\n4 -> 2 -> 3 -> 6\n\nRREP:\n6 -> 4\n\n6 -> 9 -> 4\n\n6 -> 3 -> 2 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n4 -> 8 -> 7\n4 -> 8 -> 5 -> 7\n\n4 -> 5 -> 7\n\nRREP:\n7 -> 8 -> 4\n7 -> 5 -> 8 -> 4 \n\n7 -> 5 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n4 -> 8\n\n4 -> 5 -> 8\n4 -> 5 -> 7 -> 8\n\n4 -> 9 -> 8\n\nRREP:\n8 -> 4\n\n8 -> 5 -> 4\n\n8 -> 7 -> 5 -> 4\n\n8 -> 9 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){	
						arrow(322, 287, 361, 122, 2); // 4 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(434, 222, 328, 289, 0); // 8 to 4
						message.value="RREQ:\n4 -> 9\n\n4 -> 6 -> 9\n\n4 -> 8 -> 9\n\nRREP:\n9 -> 4\n\n9 -> 6 -> 4\n\n9 -> 8 -> 4\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "5"){
					x = 565; y = 323; z = 0;
					if(destinationNode.value == "1"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						message.value="RREQ:\n5 -> 1\n\n5 -> 4 -> 1\n\n5 -> 4 -> 2 -> 1\n\nRREP:\n1 -> 5\n\n1 -> 4 -> 5\n\n1 -> 2 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						message.value="RREQ:\n5 -> 1 -> 2\n\n5 -> 4 -> 2\n5 -> 4 -> 1 -> 2\n5 -> 4 -> 6 -> 3 -> 2\n\nRREP:\n2 -> 1 -> 5\n\n2 -> 4 -> 5\n2 -> 1 -> 4 -> 5\n2 -> 3 -> 6 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"	
						}
					else if(destinationNode.value == "3"){
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 2); // 1 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(369, 427, 327, 330, 0); // 1 to 4
						message.value="RREQ:\n5 -> 1 -> 2 -> 3\n\n5 -> 4 -> 2 -> 3\n5 -> 4 -> 1 -> 2 -> 3\n5 -> 4 -> 6 -> 3\n\nRREP:\n3 -> 2 -> 1 -> 5\n\n3 -> 2 -> 4 -> 5\n3 -> 2 -> 1 -> 4 -> 5\n3 -> 6 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"			 
						}
					else if(destinationNode.value == "4"){	
						arrow(553, 340, 339, 306, 2); // 5 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(233, 172, 343, 113, 0); // 6 to 9
						 message.value="RREQ:\n5 -> 4\n\n5 -> 1 -> 4\n5 -> 1 -> 2 -> 4\n\n5 -> 8 -> 4\n5 -> 8 -> 9 -> 4\n5 -> 8 -> 9 -> 6 -> 4\n\nRREP:\n4 -> 5\n\n4 -> 1 -> 5\n4 -> 2 -> 1 -> 5\n\n4 -> 8 -> 5\n4 -> 9 -> 8 -> 5\n4 -> 6 -> 9 -> 8 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){
						arrow(553, 340, 339, 306, 2); // 5 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						message.value="RREQ:\n5 -> 1 -> 2 -> 3 -> 6\n\n5 -> 4 -> 6\n5 -> 4 -> 2 -> 3 -> 6\n5 -> 4 -> 1 -> 2 -> 3 -> 6\n5 -> 4 -> 9 -> 6\n\nRREP:\n6 -> 3 -> 2 -> 1 -> 5\n\n6 -> 4 -> 5\n6 -> 3 -> 2 -> 4 -> 5\n6 -> 3 -> 2 -> 1 -> 4 -> 5\n6 -> 9 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){							
						arrow(606, 331, 653, 202, 2); // 5 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						message.value="RREQ:\n5 -> 7\n\n5 -> 8 -> 7\n\nRREP:\n7 -> 5\n\n7 -> 8 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(580, 329, 482, 226, 2); // 5 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n5 -> 8\n\n5 -> 7 -> 8\n\n5 -> 4 -> 8\n5 -> 4 -> 9 -> 8\n\nRREP:\n8 -> 5\n\n8 -> 7 -> 5\n\n8 -> 4 -> 5\n8 -> 9 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){	
						arrow(580, 329, 482, 226, 2); // 5 to 8
						arrow(452, 194, 382, 110, 2); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6	
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(434, 222, 328, 289, 0); // 8 to 4
						message.value="RREQ:\n5 -> 8 -> 9\n\n5 -> 4 -> 9\n5 -> 4 -> 6 -> 9\n5 -> 4 -> 8 -> 9\n\nRREP:\n9 -> 8 -> 5\n\n9 -> 4 -> 5\n9 -> 6 -> 4 -> 5\n9 -> 8 -> 4 -> 5\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 0;
					if(destinationNode.value == "1"){
						arrow(311, 336, 353, 429, 2); // 4 to 1
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(171, 378, 137, 310, 0); // 2 to 3
						message.value="RREQ:\n6 -> 4 -> 1\n6 -> 4 -> 5 -> 1\n6 -> 4 -> 2 -> 1\n\n6 -> 3 -> 2 -> 1\n\nRREP:\n1 -> 4 -> 6\n1 -> 5 -> 4 -> 6\n1 -> 2 -> 4 -> 6\n\n1 -> 2 -> 3 -> 6\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(369, 427, 327, 330, 0); // 1 to 4
						message.value="RREQ:\n6 -> 3 -> 2\n\n6 -> 4 -> 2\n6 -> 4 -> 1 -> 2\n\nRREP:\n2 -> 3 -> 6\n\n2 -> 4 -> 6\n2 -> 1 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "3"){
						arrow(188, 192, 127, 268, 2); // 6 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(124, 313, 158, 384, 0); // 3 to 2
						message.value="RREQ:\n6 -> 3\n\n6 -> 4 -> 2 -> 3\n\nRREP:\n3 -> 6\n\n3 -> 2 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"			 
						}
					else if(destinationNode.value == "4"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(452, 194, 382, 110, 0); // 8 to 9
						message.value="RREQ:\n6 -> 4\n\n6 -> 3 -> 2 -> 4\n6 -> 3 -> 2 -> 1 -> 4\n\n6 -> 9 -> 4\n6 -> 9 -> 8 -> 4\n6 -> 9 -> 8 -> 5 -> 4\n6 -> 9 -> 8 -> 5 -> 1 -> 4\n\nRREP:\n4 -> 6\n\n4 -> 2 -> 3 -> 6\n4 -> 1 -> 2 -> 3 -> 6\n\n4 -> 9 -> 6\n4 -> 8 -> 9 -> 6\n4 -> 5 -> 8 -> 9 -> 6\n4 -> 1 -> 5 -> 8 -> 9 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(336, 322, 546, 353, 2); // 4 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(620, 173, 482, 201, 0); // 7 to 8
						message.value="RREQ:\n6 -> 4 -> 5\n6 -> 4 -> 1 -> 5\n6 -> 4 -> 8 -> 5\n6 -> 4 -> 8 -> 7 -> 5\n\nRREP:\n5 -> 4 -> 6\n5 -> 1 -> 4 -> 6\n5 -> 8 -> 4 -> 6\n5 -> 7 -> 8 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n6 -> 4 -> 5 -> 7\n6 -> 4 -> 8 -> 7\n6 -> 4 -> 1 -> 5 -> 7\n6 -> 4 -> 8 -> 5 -> 7\n6 -> 4 -> 9 -> 8 -> 7\n6 -> 4 -> 9 -> 8 -> 5 -> 7\n\n6 -> 9 -> 8 -> 7\n6 -> 9 -> 8 -> 5 -> 7\n\nRREP:\n7 -> 5 -> 4 -> 6\n7 -> 8 -> 4 -> 6\n7 -> 5 -> 1 -> 4 -> 6\n7 -> 5 -> 8 -> 4 -> 6\n7 -> 8 -> 9 -> 4 -> 6\n7 -> 5 -> 8 -> 9 -> 4 -> 6\n\n7 -> 8 -> 9 -> 6\n7 -> 5 -> 8 -> 9 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(219, 198, 290, 297, 2); // 6 to 4
						arrow(338, 303, 444, 236, 2); // 4 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(336, 99, 228, 157, 0); // 9 to 6
						message.value="RREQ:\n6 -> 4 -> 8\n6 -> 4 -> 9 -> 8\n6 -> 4 -> 5 -> 8\n6 -> 4 -> 5 -> 7 -> 8\n\n6 -> 9 -> 8\n\nRREP:\n8 -> 4 -> 6\n8 -> 9 -> 4 -> 6\n8 -> 5 -> 4 -> 6\n8 -> 7 -> 5 -> 4 -> 6\n\n8 -> 9 -> 6\n\n*Click on protocol to view RREQ only*"	
						}
					else if(destinationNode.value == "9"){
						arrow(233, 172, 343, 113, 2); // 6 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(434, 222, 328, 289, 0); // 8 to 4
						message.value="RREQ:\n6 -> 9\n6 -> 4 -> 9\n6 -> 4 -> 8 -> 9\n\nRREP:\n9 -> 6\n9 -> 4 -> 6\n9 -> 8 -> 4 -> 6\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 0;
					if(destinationNode.value == "1"){
						arrow(635, 197, 590, 320, 2); // 7 to 5
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(202, 391, 292, 333, 0); // 2 to 4
						message.value="RREQ:\n7 -> 5 -> 1\n\n7 -> 8 -> 5 -> 1\n7 -> 8 -> 4 -> 1\n7 -> 8 -> 4 -> 5 -> 1\n7 -> 8 -> 4 -> 2 -> 1\n\nRREP:\n1 -> 5 -> 7\n\n1 -> 5 -> 8 -> 7\n1 -> 4 -> 8 -> 7\n1 -> 5 -> 4 -> 8 -> 7\n1 -> 2 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n7 -> 5 -> 1 -> 2\n7 -> 5 -> 4 -> 2\n7 -> 5 -> 4 -> 1 -> 2\n7 -> 5 -> 4 -> 6 -> 3 -> 2\n7 -> 5 -> 1 -> 4 -> 6 -> 3 -> 2\n\n7 -> 8 -> 4 -> 2\n7 -> 8 -> 5 -> 4 -> 2\n7 -> 8 -> 5 -> 1 -> 2\n7 -> 8 -> 5 -> 4 -> 1 -> 2\n7 -> 8 -> 4 -> 6 -> 3 -> 2\n7 -> 8 -> 5 -> 4 -> 6 -> 3 -> 2\n7 -> 8 -> 5 -> 1 -> 4 -> 6 -> 3 -> 2\n\nRREP:\n2 -> 1 -> 5 -> 7\n2 -> 4 -> 5 -> 7\n2 -> 1 -> 4 -> 5 -> 7\n2 -> 3 -> 6 -> 4 -> 5 -> 7\n2 -> 3 -> 6 -> 4 -> 1 -> 5 -> 7\n\n2 -> 4 -> 8 -> 7\n2 -> 4 -> 5 -> 8 -> 7\n2 -> 1 -> 5 -> 8 -> 7\n2 -> 1 -> 4 -> 5 -> 8 -> 7\n2 -> 3 -> 6 -> 4 -> 8 -> 7\n2 -> 3 -> 6 -> 4 -> 5 -> 8 -> 7\n2 -> 3 -> 6 -> 4 -> 1 -> 5 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"		 
						}
					else if(destinationNode.value == "3"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(140, 277, 199, 201, 0); // 3 to 6	
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(606, 331, 653, 202, 0); // 5 to 7
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(338, 303, 444, 236, 0); // 4 to 8
						message.value="RREQ:\n7 -> 5 -> 1 -> 2 -> 3\n7 -> 5 -> 4 -> 2 -> 3\n7 -> 5 -> 4 -> 6 -> 3\n7 -> 5 -> 4 -> 1 -> 2 -> 3\n\n7 -> 8 -> 4 -> 2 -> 3\n7 -> 8 -> 4 -> 6 -> 3\n7 -> 8 -> 4 -> 1 -> 2 -> 3\n7 -> 8 -> 5 -> 1 -> 2 -> 3\n7 -> 8 -> 5 -> 4 -> 2 -> 3\n7 -> 8 -> 5 -> 4 -> 6 -> 3\n7 -> 8 -> 5 -> 4 -> 1 -> 2 -> 3\n\nRREP:\n3 -> 2 -> 1 -> 5 -> 7\n3 -> 2 -> 4 -> 5 -> 7\n3 -> 6 -> 4 -> 5 -> 7\n3 -> 2 -> 1-> 4 -> 5 -> 7\n\n3 -> 2 -> 4 -> 8 -> 7\n3 -> 6 -> 4 -> 8 -> 7\n3 -> 2 -> 1 -> 4 -> 8 -> 7\n3 -> 2 -> 1 -> 5 -> 8 -> 7\n3 -> 2 -> 4 -> 5 -> 8 -> 7\n3 -> 6 -> 4 -> 5 -> 8 -> 7\n3 -> 2 -> 1 -> 4 -> 5 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"				 
						}
					else if(destinationNode.value == "4"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6	
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n7 -> 5 -> 4\n7 -> 5 -> 1 -> 4\n7 -> 5 -> 1 -> 2 -> 4\n\n7 -> 8 -> 4\n7 -> 8 -> 9 -> 4\n7 -> 8 -> 9 -> 6 -> 4\n7 -> 8 -> 5 -> 4\n7 -> 8 -> 5 -> 1 -> 4\n7 -> 8 -> 5 -> 1 -> 2 -> 4\n\nRREP:\n4 -> 5 -> 7\n4 -> 1 -> 5 -> 7\n4 -> 2 -> 1 -> 5 -> 7\n\n4 -> 8 -> 7\n4 -> 9 -> 8 -> 7\n4 -> 6 -> 9 -> 8 -> 7\n4 -> 5 -> 8 -> 7\n4 -> 1 -> 5 -> 8 -> 7\n4 -> 2 -> 1 -> 5 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(635, 197, 590, 320, 2); // 7 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(369, 427, 327, 330, 0); // 1 to 4
						message.value="RREQ:\n7 -> 5\n\n7 -> 8 -> 5\n7 -> 8 -> 4 -> 5 \n7 -> 8 -> 4 -> 1 -> 5\n\nRREP:\n5 -> 7\n\n5 -> 8 -> 7\n5 -> 4 -> 8 -> 7\n5 -> 1 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6	
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(345, 118, 306, 284, 0); // 9 to 4
						message.value="RREQ:\n7 -> 5 -> 1 -> 2 -> 3 -> 6 \n\n7 -> 8 -> 4 -> 6\n7 -> 8 -> 9 -> 6\n7 -> 8 -> 4 -> 9 -> 6\n7 -> 8 -> 4 -> 2 -> 3 -> 6\n\nRREP:\n6 -> 3 -> 2 -> 1 -> 5 -> 7\n\n6 -> 4 -> 8 -> 7\n6 -> 9 -> 8 -> 7\n6 -> 9 -> 4 -> 8 -> 7\n6 -> 3 -> 2 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 322, 546, 353, 0); // 4 to 5
						message.value="RREQ:\n7 -> 8\n\n7 -> 5 -> 8\n7 -> 5 -> 4 -> 8\n7 -> 5 -> 4 -> 9 -> 8\n\nRREP:\n8 -> 7\n\n8 -> 5 -> 7\n8 -> 4 -> 5 -> 7\n8 -> 9 -> 4 -> 5 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){
						arrow(620, 173, 482, 201, 2); // 7 to 8
						arrow(452, 194, 382, 110, 2); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(472, 237, 570, 339, 0); // 8 to 5
						message.value="RREQ:\n7 -> 5 -> 4 -> 9\n7 -> 5 -> 4 -> 6 -> 9\n7 -> 5 -> 8 -> 9 \n\n7 -> 8 -> 9\n7 -> 8 -> 4 -> 9\n7 -> 8 -> 4 -> 6 -> 9\n\nRREP:\n9 -> 4 -> 5 -> 7\n9 -> 6 -> 4 -> 5 -> 7\n9 -> 8 -> 5 -> 7\n\n9 -> 8 -> 7\n9 -> 4 -> 8 -> 7\n9 -> 6 -> 4 -> 8 -> 7\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 0;
					if(destinationNode.value == "1"){
						arrow(472, 237, 570, 339, 2); // 8 to 5
						arrow(548, 360, 391, 427, 2); // 5 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n8 -> 5 -> 1\n\n8 -> 4 -> 1\n8 -> 4 -> 2 -> 1\n8 -> 4 -> 5 -> 1\n\nRREP:\n1 -> 5 -> 8\n\n1 -> 4 -> 8\n1 -> 2 -> 4 -> 8\n1 -> 5 -> 4 -> 8\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n8 -> 4 -> 2\n8 -> 4 -> 1 -> 2\n8 -> 4 -> 6 -> 3 -> 2\n\n8 -> 5 -> 1 -> 2\n\nRREP:\n2 -> 4 -> 8\n2 -> 1 -> 4 -> 8\n2 -> 3 -> 6 -> 4 -> 8\n\n2 -> 1 -> 5 -> 8\n\n*Click on protocol to view RREQ only*"		 
						}
					else if(destinationNode.value == "3"){
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(171, 378, 137, 310, 2); // 2 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(372, 118, 440, 202, 0); // 9 to 8
						message.value="RREQ:\n8 -> 4 -> 2 -> 3\n8 -> 4 -> 6 -> 3\n\n8 -> 9 -> 6 -> 3\n\nRREP:\n3 -> 2 -> 4 -> 8\n3 -> 6 -> 4 -> 8\n\n3 -> 6 -> 9 -> 8\n\n*Click on protocol to view RREQ only*"				 
						}
					else if(destinationNode.value == "4"){
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(233, 172, 343, 113, 0); // 6 to 9
						message.value="RREQ:\n8 -> 4\n\n8 -> 5 -> 4\n8 -> 5 -> 1 -> 4\n8 -> 5 -> 1 -> 2 -> 4\n\n8 -> 9 -> 4\n8 -> 9 -> 6 -> 4\n\nRREP:\n4 -> 8\n\n4 -> 5 -> 8\n4 -> 1 -> 5 -> 8\n4 -> 2 -> 1 -> 5 -> 8\n\n4 -> 9 -> 8\n4 -> 6 -> 9 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){
						arrow(472, 237, 570, 339, 2); // 8 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(369, 427, 327, 330, 0); // 1 to 4
						message.value="RREQ:\n8 -> 5\n\n8 -> 4 -> 5\n8 -> 4 -> 1 -> 5\n\n8 -> 7 -> 5\n\nRREP:\n5 -> 8\n\n5 -> 4 -> 8\n5 -> 1 -> 4 -> 8\n\n5 -> 7 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(434, 222, 328, 289, 2); // 8 to 4
						arrow(301, 287, 232, 190, 2); // 4 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(372, 118, 440, 202, 0); // 9 to 8
						message.value="RREQ:\n8 -> 4 -> 6\n8 -> 4 -> 9 -> 6\n8 -> 4 -> 2 -> 3 -> 6\n\n8 -> 9 -> 6\n\nRREP:\n6 -> 4 -> 8\n6 -> 9 -> 4 -> 8\n6 -> 3 -> 2 -> 4 -> 8\n\n6 -> 9 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n8 -> 7\n\n8 -> 5 -> 7\n\nRREP:\n7 -> 8\n\n7 -> 5 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "9"){	
						arrow(452, 194, 382, 110, 2); // 8 to 9
						arrow(345, 118, 306, 284, 0); // 9 to 4
						arrow(336, 99, 228, 157, 0); // 9 to 6
						arrow(372, 118, 440, 202, 0); // 9 to 8
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(219, 198, 290, 297, 0); // 6 to 4
						message.value="RREQ:\n8 -> 9\n\n8 -> 4 -> 9\n8 -> 4 -> 6 -> 9\n\nRREP:\n9 -> 8\n\n9 -> 4 -> 8\n9 -> 6 -> 4 -> 8\n\n*Click on protocol to view RREQ only*"
						}
					}
				else if(sourceNode.value == "9"){
					x = 330; y = 70; z = 0;
					if(destinationNode.value == "1"){
						arrow(345, 118, 306, 284, 2); // 9 to 4
						arrow(311, 336, 353, 429, 2); // 4 to 1
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(397, 448, 568, 369, 0); // 1 to 5
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						message.value="RREQ:\n9 -> 4 -> 1\n9 -> 4 -> 2 -> 1\n9 -> 4 -> 5 -> 1\n9 -> 4 -> 8 -> 5 -> 1\n\n9 -> 8 -> 5 -> 1\n\nRREP:\n1 -> 4 -> 9\n1 -> 2 -> 4 -> 9\n1 -> 5 -> 4 -> 9\n1 -> 5 -> 8 -> 4 -> 9\n\n1 -> 5 -> 8 -> 9\n\n*Click on protocol to view RREQ only*"
					}
					else if(destinationNode.value == "2"){
						arrow(345, 118, 306, 284, 2); // 9 to 4
						arrow(281, 319, 188, 380, 2); // 4 to 2
						arrow(195, 413, 345, 453, 0); // 2 to 1
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(369, 427, 327, 330, 0); // 1 to 4
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						message.value="RREQ:\n9 -> 4 -> 2\n9 -> 4 -> 1 -> 2\n9 -> 4 -> 6 -> 3 -> 2\n\n9 -> 6 -> 3 -> 2\n\nRREP:\n2 -> 4 -> 9\n2 -> 1 -> 4 -> 9\n2 -> 3 -> 6 -> 4 -> 9\n\n2 -> 3 -> 6 -> 9\n\n*Click on protocol to view RREQ only*"	 
						}
					else if(destinationNode.value == "3"){	
						arrow(336, 99, 228, 157, 2); // 9 to 6
						arrow(188, 192, 127, 268, 2); // 6 to 3
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(202, 391, 292, 333, 0); // 2 to 4
						arrow(219, 198, 290, 297, 0); // 6 to 4
						message.value="RREQ:\n9 -> 6 -> 3\n\n9 -> 4 -> 6 -> 3\n9 -> 4 -> 2 -> 3\n\nRREP:\n3 -> 6 -> 9\n\n3 -> 6 -> 4 -> 9\n3 -> 2 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"					 
						}
					else if(destinationNode.value == "4"){
						arrow(345, 118, 306, 284, 2); // 9 to 4
						arrow(311, 336, 353, 429, 0); // 4 to 1
						arrow(281, 319, 188, 380, 0); // 4 to 2
						arrow(336, 322, 546, 353, 0); // 4 to 5
						arrow(301, 287, 232, 190, 0); // 4 to 6
						arrow(338, 303, 444, 236, 0); // 4 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(171, 378, 137, 310, 0); // 2 to 3
						arrow(140, 277, 199, 201, 0); // 3 to 6
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(346, 434, 208, 397, 0); // 1 to 2
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(397, 448, 568, 369, 0); // 1 to 5
						message.value="RREQ:\n9 -> 4\n\n9 -> 6 -> 4\n9 -> 6 -> 3 -> 2 -> 4\n9 -> 6 -> 3 -> 2 -> 1 -> 4\n\n9 -> 8 -> 4\n9 -> 8 -> 5 -> 4\n9 -> 8 -> 5 -> 1 -> 4\n\nRREP:\n4 -> 9\n\n4 -> 6 -> 9\n4 -> 2 -> 3 -> 6 -> 9\n4 -> 1 -> 2 -> 3 -> 6 -> 9\n\n4 -> 8 -> 9\n4 -> 5 -> 8 -> 9\n4 -> 1 -> 5 -> 8 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "5"){	
						arrow(372, 118, 440, 202, 2); // 9 to 8
						arrow(472, 237, 570, 339, 2); // 8 to 5
						arrow(548, 360, 391, 427, 0); // 5 to 1
						arrow(553, 340, 339, 306, 0); // 5 to 4
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(606, 331, 653, 202, 0); // 5 to 7	
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(369, 427, 327, 330, 0); // 1 to 4
						message.value="RREQ:\n9 -> 8 -> 5\n9 -> 8 -> 7 -> 5\n\n9 -> 4 -> 5\n9 -> 4 -> 8 -> 5\n9 -> 4 -> 1 -> 5\n\nRREP:\n5 -> 8 -> 9\n5 -> 7 -> 8 -> 9\n\n5 -> 4 -> 9\n5 -> 8 -> 4 -> 9\n5 -> 1 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "6"){
						arrow(336, 99, 228, 157, 2); // 9 to 6
						arrow(188, 192, 127, 268, 0); // 6 to 3
						arrow(219, 198, 290, 297, 0); // 6 to 4
						arrow(233, 172, 343, 113, 0); // 6 to 9
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(124, 313, 158, 384, 0); // 3 to 2
						arrow(202, 391, 292, 333, 0); // 2 to 4
						message.value="RREQ:\n9 -> 6\n\n9 -> 4 -> 6\n9 -> 4 -> 2 -> 3 -> 6\n\nRREP:\n6 -> 9\n\n6 -> 4 -> 9\n6 -> 3 -> 2 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "7"){
						arrow(372, 118, 440, 202, 2); // 9 to 8
						arrow(486, 218, 625, 188, 2); // 8 to 7
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(620, 173, 482, 201, 0); // 7 to 8
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(580, 329, 482, 226, 0); // 5 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n9 -> 8 -> 7\n9 -> 8 -> 5 -> 7\n\n9 -> 4 -> 8 -> 7\n9 -> 4 -> 5 -> 7 \n9 -> 4 -> 8 -> 5 -> 7\n\nRREP:\n7 -> 8 -> 9\n7 -> 5 -> 8 -> 9\n\n7 -> 8 -> 4 -> 9\n7 -> 5 -> 4 -> 9\n7 -> 5 -> 8 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "8"){
						arrow(372, 118, 440, 202, 2); // 9 to 8
						arrow(434, 222, 328, 289, 0); // 8 to 4
						arrow(472, 237, 570, 339, 0); // 8 to 5
						arrow(486, 218, 625, 188, 0); // 8 to 7
						arrow(452, 194, 382, 110, 0); // 8 to 9
						arrow(322, 287, 361, 122, 0); // 4 to 9
						arrow(635, 197, 590, 320, 0); // 7 to 5
						arrow(553, 340, 339, 306, 0); // 5 to 4
						message.value="RREQ:\n9 -> 8\n\n9 -> 4 -> 8\n9 -> 4 -> 5 -> 8\n9 -> 4 -> 5 -> 7 -> 8\n\nRREP:\n8 -> 9\n\n8 -> 4 -> 9\n8 -> 5 -> 4 -> 9\n8 -> 7 -> 5 -> 4 -> 9\n\n*Click on protocol to view RREQ only*"
						}
					else if(destinationNode.value == "9"){				
						 message.value = "Packet is at destination node!";
						}
					}
		}
	}