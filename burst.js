
var particles = [];
var numParticles = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(), getRandomVelocity());
    particles.add(temp);
  }
}

function draw() {
  background(color(0,0,0));
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }

}

//CLASSES***********************
//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;

  this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  };
  this.display = function(){
    ellipse(this.x,this.y,this.diameter,this.diameter);
  };
}

//helper function used when initializing a new particle
function getRandomVelocity() {
  var a = Math.random()*2;
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var result = a*plusOrMinus;
  return result;
}
//END CLASSES*******************
