
function move1to2(x,y,z,a,b){
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
		var loopTimer = setTimeout('move1to2('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 2";
		}
	}

function move1to5(x,y,z,a,b){
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
	redNode(b);x+=1; y-=0.46;
	if(x!="565"){
		var loopTimer = setTimeout('move1to5('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 323);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 5";
		}
	}

function move1to4(x,y,z,a,b){
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
	redNode(b);x-=0.25; y-=0.6;
	if(x!="285"){
		var loopTimer = setTimeout('move1to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
	}

function move2to1(x,y,z,a,b){
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
	x+=1; y+=0.25;
	if(x!="346"){
		var loopTimer = setTimeout('move2to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 1";
		}
	}

function move2to4(x,y,z,a,b){
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
	x+=1; y-=0.7;
	if(x<"284"){
		x+=1; y-=0.7;
		var loopTimer = setTimeout('move2to4('+x+','+y+','+z+','+a+','+b+')', 35);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
	}

function move2to3(x,y,z,a,b){

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
	x-=1; y-=1.8;
	if(x!="93"){
		var loopTimer = setTimeout('move2to3('+x+','+y+','+z+','+a+','+b+')', 30);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 93, 267);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 3";
		}
	}

function move3to2(x,y,z,a,b){
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
	redNode(b);x+=1; y+=1.8;
	if(x!="153"){
		var loopTimer = setTimeout('move3to2('+x+','+y+','+z+','+a+','+b+')', 30);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 2";
		}
	}

function move3to6(x,y,z,a,b){
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
	x+=1; y-=1.3;
	if(x!="186"){
		var loopTimer = setTimeout('move3to6('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 6";
		}
	}

function move6to3(x,y,z,a,b){
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
	x-=1; y+=1.3;
	if(x!="93"){
		var loopTimer = setTimeout('move6to3('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 93, 267);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 3";
		}
}

function move6to4(x,y,z,a,b){
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
	x+=1; y+=1.35;
	if(x!="285"){
		var loopTimer = setTimeout('move6to4('+x+','+y+','+z+','+a+','+b+')', 25);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
}

function move6to9(x,y,z,a,b){
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
	x+=1; y-=0.55;
	if(x!="330"){
		var loopTimer = setTimeout('move6to9('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 9";
		}
}

function move9to6(x,y,z,a,b){
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
	x-=1; y+=0.55;
	if(x!="186"){
		var loopTimer = setTimeout('move9to6('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 6";
		}
}

function move9to4(x,y,z,a,b){
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
	x-=0.21; y+=1;
	if(y!="283"){
		var loopTimer = setTimeout('move9to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
}

function move9to8(x,y,z,a,b){
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
	x+=1; y+=1.15;
	if(x!="433"){
		var loopTimer = setTimeout('move9to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 8";
		}
}

function move8to9(x,y,z,a,b){
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
	x-=1; y-=1.15;
	if(x!="330"){
		var loopTimer = setTimeout('move8to9('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 9";
		}
}

function move8to4(x,y,z,a,b){
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
	x-=1; y+=0.635;
	if(x!="285"){
		var loopTimer = setTimeout('move8to4('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
}

function move8to5(x,y,z,a,b){
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
	x+=1; y+=1;
	if(x!="565"){
		var loopTimer = setTimeout('move8to5('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565, 323);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 5";
		}
}

function move8to7(x,y,z,a,b){
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
	x+=1; y-=0.2;
	if(x!="623"){
		var loopTimer = setTimeout('move8to7('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 623, 150);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 7";
		}
}

function move7to8(x,y,z,a,b){
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
	redNode(b);x-=1; y+=0.2;
	if(x!="433"){
		var loopTimer = setTimeout('move7to8('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,433,190);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 8";
		}
}

function move7to5(x,y,z,a,b){
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
	redNode(b);x-=1; y+=3;
	if(x!="565"){
		var loopTimer = setTimeout('move7to5('+x+','+y+','+z+','+a+','+b+')', 40);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,565,323);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 5";
		}
}

function move5to7(x,y,z,a,b){
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
	redNode(b);x+=1; y-=3;
	if(x!="623"){
		var loopTimer = setTimeout('move5to7('+x+','+y+','+z+','+a+','+b+')', 40);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img,623,150);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 7";
		}
}

function move5to8(x,y,z,a,b){
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
	x-=1; y-=1;
	if(x!="433"){
		var loopTimer = setTimeout('move5to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 8";
		}
}

function move5to1(x,y,z,a,b){
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
	redNode(b);x-=1; y+=0.46;
	if(x!="346"){
		var loopTimer = setTimeout('move5to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 1";
		}
}

function move5to4(x,y,z,a,b){
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
	redNode(b);x-=1; y-=0.14;
	if(x!="285"){
		var loopTimer = setTimeout('move5to4('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 285, 283);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 4";
		}
}

function move4to1(x,y,z,a,b){
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
	redNode(b);x+=0.25; y+=0.6;
	if(x!="346"){
		var loopTimer = setTimeout('move4to1('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 346, 424);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 1";
		}
	}

function move4to2(x,y,z,a,b){
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
	redNode(b);x-=1; y+=0.7;
	if(x!="153"){
		var loopTimer = setTimeout('move4to2('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 153, 375);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 2";
		}
}

function move4to5(x,y,z,a,b){
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
	redNode(b);x+=1; y+=0.14;
	if(x!="565"){
		var loopTimer = setTimeout('move4to5('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 565,323);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 5";
		}
}

function move4to6(x,y,z,a,b){
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
	redNode(b);x-=1; y-=1.35;
	if(x!="186"){
		var loopTimer = setTimeout('move4to6('+x+','+y+','+z+','+a+','+b+')', 25);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 186, 148);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 6";
		}
}

function move4to8(x,y,z,a,b){
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
	redNode(b);x+=1; y-=0.635;
	if(x!="433"){
		var loopTimer = setTimeout('move4to8('+x+','+y+','+z+','+a+','+b+')', 20);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 433, 190);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 8";
		}
}

function move4to9(x,y,z,a,b){
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
	redNode(b);x+=0.21; y-=1;
	if(y!="70"){
		var loopTimer = setTimeout('move4to9('+x+','+y+','+z+','+a+','+b+')', 10);
		}
	else{ 
		img.onload = function(){
			context.drawImage(img, 330, 70);
			};
	img.src = 'img/letter.png';
	message.value="Packet arrived at Node 9";
		}
}

