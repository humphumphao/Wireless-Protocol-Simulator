function olsrRoutingAnimation()
{
var c=document.getElementById("myCanvas");
var context=c.getContext("2d");
var sourceNode = document.getElementById("source");
var destinationNode = document.getElementById("destination");
var message = document.getElementById("message");
var x = 285;
var y = 283;
var z = 0;
var a = 0;
var b = 0;
message.value=""


move4to2(x,y,z,a,b);
move4to6(x,y,z,a,b);	
move4to8(x,y,z,a,b);	
setTimeout('move2to1(153, 375,0,0,0)',5500);	
setTimeout('move2to3(153, 375,0,0,0)',5500);
setTimeout('move6to3(186, 148,0,0,0)',4200);
setTimeout('move6to9(186, 148,0,0,0)',4200);
setTimeout('move8to9(433, 190,0,0,0)',6700);
setTimeout('move8to5(433, 190,0,0,0)',6700);
setTimeout('move8to7(433, 190,0,0,0)',6700);

}
