function RREPmove1to2(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
		var loopTimer = setTimeout('RREPmove1to2('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 2";
		}
	}

function RREPmove1to5(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=1; y-=0.46;
	if(x!="565"){
		var loopTimer = setTimeout('RREPmove1to5('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 323);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 5";
		}
	}

function RREPmove1to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
	context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=0.25; y-=0.6;
	if(x!="285"){
		var loopTimer = setTimeout('RREPmove1to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
	}

function RREPmove2to1(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y+=0.25;
	if(x!="346"){
		var loopTimer = setTimeout('RREPmove2to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 1";
		}
	}

function RREPmove2to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y-=0.7;
	if(x!="284"){
		x+=1; y-=0.7;
		var loopTimer = setTimeout('RREPmove2to4('+x+','+y+','+z+','+a+','+b+')', 35);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
	}

function RREPmove2to3(x,y,z,a,b){

	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y-=1.8;
	if(x!="93"){
		var loopTimer = setTimeout('RREPmove2to3('+x+','+y+','+z+','+a+','+b+')', 30);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 93, 267);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 3";
		}
	}

function RREPmove3to2(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=1; y+=1.8;
	if(x!="153"){
		var loopTimer = setTimeout('RREPmove3to2('+x+','+y+','+z+','+a+','+b+')', 30);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 2";
		}
	}

function RREPmove3to6(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y-=1.3;
	if(x!="186"){
		var loopTimer = setTimeout('RREPmove3to6('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 6";
		}
	}

function RREPmove6to3(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y+=1.3;
	if(x!="93"){
		var loopTimer = setTimeout('RREPmove6to3('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 93, 267);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 3";
		}
}

function RREPmove6to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y+=1.35;
	if(x!="285"){
		var loopTimer = setTimeout('RREPmove6to4('+x+','+y+','+z+','+a+','+b+')', 25);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
}

function RREPmove6to9(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y-=0.55;
	if(x!="330"){
		var loopTimer = setTimeout('RREPmove6to9('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 9";
		}
}

function RREPmove9to6(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y+=0.55;
	if(x!="186"){
		var loopTimer = setTimeout('RREPmove9to6('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 6";
		}
}

function RREPmove9to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=0.21; y+=1;
	if(y!="283"){
		var loopTimer = setTimeout('RREPmove9to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
}

function RREPmove9to8(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y+=1.15;
	if(x!="433"){
		var loopTimer = setTimeout('RREPmove9to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 8";
		}
}

function RREPmove8to9(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y-=1.15;
	if(x!="330"){
		var loopTimer = setTimeout('RREPmove8to9('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 9";
		}
}

function RREPmove8to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y+=0.635;
	if(x!="285"){
		var loopTimer = setTimeout('RREPmove8to4('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
}

function RREPmove8to5(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y+=1;
	if(x!="565"){
		var loopTimer = setTimeout('RREPmove8to5('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 323);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 5";
		}
}

function RREPmove8to7(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x+=1; y-=0.2;
	if(x!="623"){
		var loopTimer = setTimeout('RREPmove8to7('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 623, 150);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 7";
		}
}

function RREPmove7to8(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y+=0.2;
	if(x!="433"){
		var loopTimer = setTimeout('RREPmove7to8('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,433,190);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 8";
		}
}

function RREPmove7to5(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y+=3;
	if(x!="565"){
		var loopTimer = setTimeout('RREPmove7to5('+x+','+y+','+z+','+a+','+b+')', 40);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,565,323);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 5";
		}
}

function RREPmove5to7(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=1; y-=3;
	if(x!="623"){
		var loopTimer = setTimeout('RREPmove5to7('+x+','+y+','+z+','+a+','+b+')', 40);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,623,150);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 7";
		}
}

function RREPmove5to8(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	x-=1; y-=1;
	if(x!="433"){
		var loopTimer = setTimeout('RREPmove5to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 8";
		}
}

function RREPmove5to1(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y+=0.46;
	if(x!="346"){
		var loopTimer = setTimeout('RREPmove5to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 1";
		}
}

function RREPmove5to4(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y-=0.14;
	if(x!="285"){
		var loopTimer = setTimeout('RREPmove5to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 4";
		}
}

function RREPmove4to1(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=0.25; y+=0.6;
	if(x!="346"){
		var loopTimer = setTimeout('RREPmove4to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 1";
		}
	}

function RREPmove4to2(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y+=0.7;
	if(x!="153"){
		var loopTimer = setTimeout('RREPmove4to2('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 2";
		}
}

function RREPmove4to5(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=1; y+=0.14;
	if(x!="565"){
		var loopTimer = setTimeout('RREPmove4to5('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565,323);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 5";
		}
}

function RREPmove4to6(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x-=1; y-=1.35;
	if(x!="186"){
		var loopTimer = setTimeout('RREPmove4to6('+x+','+y+','+z+','+a+','+b+')', 25);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 6";
		}
}

function RREPmove4to8(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=1; y-=0.635;
	if(x!="433"){
		var loopTimer = setTimeout('RREPmove4to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 8";
		}
}

function RREPmove4to9(x,y,z,a,b){
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet sent out!"
	var img = new Image(); 
	img.onload = function(){
		context.drawImage(img, x, y);
	};
	img.src = 'img/letter2.png';
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
	redNode(b);x+=0.21; y-=1;
	if(y!="70"){
		var loopTimer = setTimeout('RREPmove4to9('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter2.png';
	message.value="Packet arrived at Node 9";
		}
}

