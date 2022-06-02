function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	noFill();
	background(255);
	
	for (var x=0;x<width;x=x+100){//每進一次迴圈，X的值會比上一次多100，直至超過螢幕寬度
	for (var y=0;y<height;y=y+100){//每進一次迴圈，Y的值會比上一次多100，直至超過螢幕高度
	var a = map(mouseY,0,height,0,50);//宣告a為會隨著滑鼠上下移動改變的數值
	
	stroke("#cb997e");
	ellipse(x+50,y+50,100+a)//大圓
		
	stroke("#f2cc8f");	
	rect(x+50,y+50,100+a);//大矩靠中
		
	stroke("#6b705c");
	rect(x+75,y+75,50+a);//小矩
		
	stroke("#b392ac");
	rect(x+15,y+15,70+a)//中矩
		
	stroke("#669bbc");
	ellipse(x+50,y+50,70+a)//小圓
		
	stroke("#ffb5a7");
	rect(x,y,100+a)//靠左大矩
		
	stroke("#6b705c");
	triangle(x, y+50+a, x+50, y+a, x+100, y+50+a)//三角形會隨滑鼠上下移動(不會放大)
	}
	}
}