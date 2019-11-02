var positionX;
var xSpeed;
var positionY;
var ySpeed;
var h = window.innerHeight;
var w = window.innerWidth;
var score = 0;
function setup() { 
  createCanvas(w, h);
  positionX = random(w);
	positionY = random(h);
  xSpeed = 2;
	ySpeed = 3;
} 

function draw() { 
  background(0);
  
  // When the ball passes either side of the canvas, TURNAROUND
  if(positionX > width || positionX < 0) { 
    xSpeed = xSpeed * -1; 
		//positionX = positionX - xSpeed; 
  }
    
  if(positionY < 0) { 
    ySpeed = ySpeed * -1;
		//positionY = positionY - ySpeed;
		// positionX = positionX + xSpeed; 
  }

  if((positionY>(h-35)&&positionY<h-25)&&(positionX>mouseX&&positionX<mouseX+60)){
    ySpeed = ySpeed * -1.15;
    xSpeed = xSpeed*1.15;
    score = score+1;

  }

  if((positionY<h&&positionY>h-32)&&((positionX>mouseX&&positionX<mouseX+2)||positionX>mouseX+58&&positionX<mouseX+60)){
    xSpeed = xSpeed * -1; 

  }

  if(ySpeed>0&&(positionY<h-15&&positionY>h-100)){
    background('green');
  }

  if(positionY>h){
    background('red');
  }
  // We always need to be moving
 positionX = positionX + xSpeed;  
 positionY = positionY - ySpeed;
  ellipse(positionX, positionY, 10, 10);
  rect(mouseX,h-32,60,30);
  text(score.toString(10),mouseX+27,h-25,60,30);
}