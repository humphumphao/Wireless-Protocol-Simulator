function dsrRoutingAnimation(){

var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
var message = document.getElementById("message");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
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
						move1to2(x,y,z,a,b);							
						}
					else if(destinationNode.value == "3"){
						 move1to2(x,y,z,a,b);	
						 setTimeout('move2to3(153,375,0,1,3)',2700); 
						}
					else if(destinationNode.value == "4"){				
						 move1to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move1to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,0,1,6)',3400);
						}
					else if(destinationNode.value == "7"){						 
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to7(565,323,0,1,7)',3100);
						}
					else if(destinationNode.value == "8"){				
						 move1to5(x,y,z,a,b);
						 setTimeout('move5to8(565,323,0,1,8)',3300);
						}
					else if(destinationNode.value == "9"){				
						 move1to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,0,1,9)',3500);
						}
					}
				else if(sourceNode.value == "2"){
					x = 153; y = 375; z = 0;
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
						 setTimeout('move1to5(346,424,0,2,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						  move2to3(x,y,z,a,b);
						  setTimeout('move3to6(93, 267,0,2,6)',2000);
						}
					else if(destinationNode.value == "7"){								 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,0,2,7)',2900);
						 setTimeout('move8to7(433, 190,0,2,7)',6200);
						}
					else if(destinationNode.value == "8"){							 
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,0,2,8)',2900);
						}
					else if(destinationNode.value == "9"){				
						 move2to4(x,y,z,a,b);
						 setTimeout('move4to9(285,283,0,2,9)',2900);
						}
					}
				else if(sourceNode.value == "3"){
					x = 93; y = 267; z = 0;
					if(destinationNode.value == "1"){
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,0,3,1)',2300);
					}
					else if(destinationNode.value == "2"){						 
						 move3to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 message.value = "Packet is at destination node!";			 				 
						}
					else if(destinationNode.value == "4"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to4(186, 148,0,3,4)',2100);
						}
					else if(destinationNode.value == "5"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to1(153,375,0,3,5)',2300);
						 setTimeout('move1to5(346,424,0,3,5)',4900);
						}
					else if(destinationNode.value == "6"){				
						  move3to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,0,3,7)',2300);
						 setTimeout('move4to8(285,283,0,3,7)',5200);
						 setTimeout('move8to7(433,190,0,3,7)',8500);
						}
					else if(destinationNode.value == "8"){							 
						 move3to2(x,y,z,a,b);
						 setTimeout('move2to4(153,375,0,3,8)',2300);
						 setTimeout('move4to8(285,283,0,3,8)',5200);
						}
					else if(destinationNode.value == "9"){				
						 move3to6(x,y,z,a,b);
						 setTimeout('move6to9(186, 148,0,3,9)',2100);
						}
					}
				else if(sourceNode.value == "4"){
					x = 285; y = 283; z = 0;
					if(destinationNode.value == "1"){
						 move4to1(x,y,z,a,b);
					}
					else if(destinationNode.value == "2"){						 
						 move4to2(x,y,z,a,b);
						}
					else if(destinationNode.value == "3"){								 
						 move4to2(x,y,z,a,b);
						 setTimeout('move2to3(153,375,0,4,3)',3000); 				 
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
						 setTimeout('move1to2(346,424,0,5,2)',2900); 		
						}
					else if(destinationNode.value == "3"){								 
						 move5to1(x,y,z,a,b);
						 setTimeout('move1to2(346,424,0,5,3)',2900); 
						 setTimeout('move2to3(153,375,0,5,3)',5900); 					 
						}
					else if(destinationNode.value == "4"){				
						 move5to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "6"){				
						 move5to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,0,5,6)',3600); 	
						}
					else if(destinationNode.value == "7"){								 
						 move5to7(x,y,z,a,b);
						}
					else if(destinationNode.value == "8"){							 
						 move5to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move5to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,0,5,9)',3000);
						}
					}
				else if(sourceNode.value == "6"){
					x = 186; y = 148; z = 0;
					if(destinationNode.value == "1"){
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to1(285, 283,0,6,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to2(285, 283,0,6,2)',3000);	
						}
					else if(destinationNode.value == "3"){								 
						 move6to3(x,y,z,a,b);			 
						}
					else if(destinationNode.value == "4"){				
						 move6to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to5(285, 283,0,6,5)',3000);	
						}
					else if(destinationNode.value == "6"){				
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "7"){								 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285,283,0,6,7)',3000);	
						 setTimeout('move8to7(433,190,0,6,7)',6600);
						}
					else if(destinationNode.value == "8"){							 
						 move6to4(x,y,z,a,b);
						 setTimeout('move4to8(285, 283,0,6,8)',3000);	
						}
					else if(destinationNode.value == "9"){				
						 move6to9(x,y,z,a,b);
						}
					}
				else if(sourceNode.value == "7"){
					x = 623; y = 150; z = 0;
					if(destinationNode.value == "1"){
						 move7to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,0,7,1)',2500);
					}
					else if(destinationNode.value == "2"){						 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,0,7,2)',2700);
						 setTimeout('move4to2(285,283,0,7,2)',6000);			 
						}
					else if(destinationNode.value == "3"){								 
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,0,7,3)',2700);
						 setTimeout('move4to2(285,283,0,7,3)',6000);
						 setTimeout('move2to3(153,375,0,7,3)',8900); 				 
						}
					else if(destinationNode.value == "4"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,0,7,4)',2700);
						}
					else if(destinationNode.value == "5"){							 
						 move7to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to4(433,190,0,7,6)',2700);
						 setTimeout('move4to6(285,283,0,7,6)',6000);
						}
					else if(destinationNode.value == "7"){								 
						 message.value = "Packet is at destination node!";
						}
					else if(destinationNode.value == "8"){							 
						 move7to8(x,y,z,a,b);
						}
					else if(destinationNode.value == "9"){				
						 move7to8(x,y,z,a,b);
						 setTimeout('move8to9(433,190,0,7,9)',2700);
						}
					}
				else if(sourceNode.value == "8"){
					x = 433; y = 190; z = 0;
					if(destinationNode.value == "1"){
						 move8to5(x,y,z,a,b);
						 setTimeout('move5to1(565, 323,0,8,1)',2900);
					}
					else if(destinationNode.value == "2"){						 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,0,8,2)',3300);			 
						}
					else if(destinationNode.value == "3"){								 
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,0,8,3)',3300);
						 setTimeout('move2to3(153,375,0,8,3)',6300);					 
						}
					else if(destinationNode.value == "4"){				
						 move8to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move8to5(x,y,z,a,b);
						}
					else if(destinationNode.value == "6"){				
						 move8to4(x,y,z,a,b);
						 setTimeout('move4to6(285,283,0,8,6)',3300);
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
					x = 330; y = 70; z = 0;
					if(destinationNode.value == "1"){
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to1(285,283,0,9,1)',3000);
					}
					else if(destinationNode.value == "2"){						 
						 move9to4(x,y,z,a,b);
						 setTimeout('move4to2(285,283,0,9,2)',3000);		 
						}
					else if(destinationNode.value == "3"){								 
						 move9to6(x,y,z,a,b);
						 setTimeout('move6to3(186,148,0,9,3)',2300);						 
						}
					else if(destinationNode.value == "4"){				
						 move9to4(x,y,z,a,b);
						}
					else if(destinationNode.value == "5"){							 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to5(433,190,0,9,5)',2600);
						}
					else if(destinationNode.value == "6"){				
						 move9to6(x,y,z,a,b);
						}
					else if(destinationNode.value == "7"){								 
						 move9to8(x,y,z,a,b);
						 setTimeout('move8to7(433,190,0,9,7)',2600);
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