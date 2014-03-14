window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
	  




function move1to2(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 2";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 2.5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 154) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move1to2(x,y,z,a,b,startTime);
        });
 }
 
function move1to5(x,y,z,a,b,startTime) {
 	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 5";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 4.5;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 565) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move1to5(x,y,z,a,b,startTime);
        });
 
}

function move1to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 4.5;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move1to4(x,y,z,a,b,startTime);
        });
 
}

function move2to1(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 1";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 2.5;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 347) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move2to1(x,y,z,a,b,startTime);
        });
 
}

function move2to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 6;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move2to4(x,y,z,a,b,startTime);
        });
 
 
}

function move2to3(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 3";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 6.5;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 93) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move2to3(x,y,z,a,b,startTime);
        });
 
 
 
}

function move3to2(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 2";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 6.7;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 153) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move3to2(x,y,z,a,b,startTime);
        });
 
  
 
}

function move3to6(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 6";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 9;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 186) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move3to6(x,y,z,a,b,startTime);
        });
 
}

function move6to3(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 3";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 8.5;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 93) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move6to3(x,y,z,a,b,startTime);
        });
 
 
}

function move6to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 7;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move6to4(x,y,z,a,b,startTime);
        });
 
}

function move6to9(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 9";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 6;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 330) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move6to9(x,y,z,a,b,startTime);
        });
 
}

function move9to6(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 6";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 6.5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 186) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move9to6(x,y,z,a,b,startTime);
        });
 
}

function move9to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 2;
	var linearSpeedY = 10.5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move9to4(x,y,z,a,b,startTime);
        });
 
}

function move9to8(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 8";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 7.2;
	var linearSpeedY = 10.5;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 433) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move9to8(x,y,z,a,b,startTime);
        });
 
}

function move8to9(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 9";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 7.5;
	var linearSpeedY = 10.5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 330) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move8to9(x,y,z,a,b,startTime);
        }); 
 
}

function move8to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 7;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move8to4(x,y,z,a,b,startTime);
        }); 
 
}

function move8to5(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 5";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 8.2;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 565) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move8to5(x,y,z,a,b,startTime);
        });  
 
}

function move8to7(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 7";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 2.5;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 623) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move8to7(x,y,z,a,b,startTime);
        }); 
 
}

function move7to8(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 8";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 3;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 433) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move7to8(x,y,z,a,b,startTime);
        }); 
 
}

function move7to5(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 5";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 2.6;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 565) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move7to5(x,y,z,a,b,startTime);
        }); 
 
}

function move5to7(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 7";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 2.5;
	var linearSpeedY = 9.3;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 623) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move5to7(x,y,z,a,b,startTime);
        }); 
 
 
}

function move5to8(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 8";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 8.2;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 433) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move5to8(x,y,z,a,b,startTime);
        }); 
 
}

function move5to1(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 1";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 346) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move5to1(x,y,z,a,b,startTime);
        }); 
 
}

function move5to4(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 4";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 1.6;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 285) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move5to4(x,y,z,a,b,startTime);
        }); 
 
}

function move4to1(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 1";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 4.4;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 346) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to1(x,y,z,a,b,startTime);
        }); 
 
}

function move4to2(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 2";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 6.5;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x > 153) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to2(x,y,z,a,b,startTime);
        }); 
 
}

function move4to5(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 5";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 1.6;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * timeY / 10000;
	

    if(x < 565) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to5(x,y,z,a,b,startTime);
        }); 
 
}

function move4to6(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 6";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 7.5;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * -timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x > 186) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to6(x,y,z,a,b,startTime);
        }); 
 
}

function move4to8(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 8";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 10;
	var linearSpeedY = 7;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 433) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to8(x,y,z,a,b,startTime);
        }); 
 
}

function move4to9(x,y,z,a,b,startTime) {
	context.save();
	context.clearRect (0, 0, 745, 490)
	message.value="Packet arrived at Node 9";
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
    // update
    var timeX = (new Date()).getTime() - startTime + x;
	var timeY = (new Date()).getTime() - startTime + y;

    var linearSpeedX = 2;
	var linearSpeedY = 10;
    // pixels / second
    var newX = linearSpeedX * timeX / 10000;
	var newY = linearSpeedY * -timeY / 10000;
	

    if(x < 330) {
	  x = x + newX;
	  y = y + newY;
	  
	  message.value="Packet sent out!"
	  
    }

    // clear
	context.beginPath();
	context.setLineDash([0]); 
    context.rect(x, y, 50, 50);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
	context.restore();

    // request new frame
    requestAnimFrame(function() {
    move4to9(x,y,z,a,b,startTime);
        }); 
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
