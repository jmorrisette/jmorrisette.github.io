
var particles = [];
var numParticles = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(), getRandomVelocity());
    particles.push(temp);
  }
}

function draw() {
  background(color(0,0,0));
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.move();
    if (!p.isDead) {
      particles[i].display();
    }
  }
  if (allDead(particles)) {
    boom();
  }
}

//check to see if each particle in the particles array isDead
function allDead(particlesToCheck) {
  for (var i = 0; i < particlesToCheck.length; i++) {
    if (particlesToCheck[i].isDead == false) {
      return false;
    }
  }
  return true;
}

//initialize a new list of particles
function boom() {
  particles = new Array();
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(), getRandomVelocity());
    particles.push(temp);
  }
}

function bang() {

}




//CLASSES***********************
//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.isDead = false;

  this.myParticles = [];

  //hitpoints
  this.hp = 255;

  this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.hp --;

    if (this.hp == 100) {
      temp = new particle(this.x, this.y, 10, getRandomVelocity(), getRandomVelocity());
      particles.push(temp);
    }
    if (this.hp <= 0) {
      this.isDead = true;
    };
  }


  this.display = function(){
    fill(color(this.hp, this.hp, this.hp));
    ellipse(this.x,this.y,this.diameter,this.diameter);
    for (var i = 0; i < 10; i++) {

    }
  }
}

//helper function used when initializing a new particle
function getRandomVelocity() {
  var a = Math.random()*2;
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var result = a*plusOrMinus;
  return result;
}
//END CLASSES*******************
