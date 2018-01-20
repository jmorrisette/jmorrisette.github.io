


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(0,0,0));

  p = new particle(width/2, height/2, 20, Math.random()*2, Math.random()*2);
}

function draw() {
  p.move();
  p.display();

}


//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.move = function(){
    this.x += xVelocity;
    this.y += yVelocity;
  };
  this.display = function(){
    ellipse(this.x,this.y,this.diameter,this.diameter);
  };
}
