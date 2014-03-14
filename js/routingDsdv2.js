function move1to3(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter.png';
	context.restore();
	{// condition of the drawing	
	if(z == "1"){
	brokenNode1();
	}
	else if(z == "2"){
	brokenNode2();
	}
	else if(z == "3"){
	brokenNode3();
	}
	else if(z == "4"){
	brokenNode4();
	}
	else if(z == "5"){
	brokenNode5();
	}
	else if(z == "6"){
	brokenNode6();
	}
	else if(z == "7"){
	brokenNode7();
	}
	else if(z == "8"){
	brokenNode8();
	}
	else if(z == "9"){
	brokenNode9();
	}
	else if(z == "12"){
	brokenLink12();
	}
	else if(z == "14"){
	brokenLink14();
	}
	else if(z == "15"){
	brokenLink15();
	}
	else if(z == "21"){
	brokenLink12();
	}
	else if(z == "23"){
	brokenLink23();
	}
	else if(z == "24"){
	brokenLink24();
	}
	else if(z == "32"){
	brokenLink23();
	}
	else if(z == "36"){
	brokenLink36();
	}
	else if(z == "41"){
	brokenLink14();
	}
	else if(z == "42"){
	brokenLink24();
	}
	else if(z == "45"){
	brokenLink45();
	}
	else if(z == "46"){
	brokenLink46();
	}
	else if(z == "48"){
	brokenLink48();
	}
	else if(z == "49"){
	brokenLink49();
	}
	else if(z == "51"){
	brokenLink15();
	}
	else if(z == "54"){
	brokenLink45();
	}
	else if(z == "57"){
	brokenLink57();
	}
	else if(z == "58"){
	brokenLink58();
	}
	else if(z == "63"){
	brokenLink36();
	}
	else if(z == "64"){
	brokenLink46();
	}
	else if(z == "69"){
	brokenLink69();
	}
	else if(z == "78"){
	brokenLink78();
	}
	else if(z == "75"){
	brokenLink57();
	}
	else if(z == "84"){
	brokenLink48();
	}
	else if(z == "85"){
	brokenLink58();
	}
	else if(z == "87"){
	brokenLink78();
	}
	else if(z == "89"){
	brokenLink89();
	}
	else if(z == "94"){
	brokenLink49();
	}
	else if(z == "96"){
	brokenLink69();
	}
	else if(z == "98"){
	brokenLink89();
	}
	else{
	drawingNormal();
	}
	}
	greenNode(a);
	redNode(b);
	x-=1; y-=0.25;
	if(x!="153"){
		var loopTimer = setTimeout('move1to3('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		move2to3(153,375,z,a,b);
		}
	}

function move1to6(x,y,z){
}





