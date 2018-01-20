


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(0,0,0));

  p = new particle(width/2,height/2,20);
}

function draw() {
  p.move();
  p.display();

}


//particle class
function particle(tempX,tempY,tempDiameter){

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = 2.5;
  this.yVelocity = 1;


  this.move = function(){
    this.x += xVelocity;
    this.y += yVelocity;
  };

  this.display = function(){
    ellipse(this.x,this.y,this.diameter,this.diameter);
  };
}
