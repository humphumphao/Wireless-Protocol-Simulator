function aodvRoutingAnimation()
{
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
var message = document.getElementById("message");
var brokenLink1=document.getElementById("brokenLink1");
var brokenLink2=document.getElementById("brokenLink2");
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
