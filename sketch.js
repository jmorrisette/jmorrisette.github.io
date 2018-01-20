// Sketch One
var m = function( p ) { // p could be any variable name

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

function setup() {
  createCanvas(500,300);
  //u = int(width/15);
  u = 100;
  l = 20;
  var highCount = height/80;
  var wideCount = width/80;
  count = int(highCount * wideCount);

  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {



  if (mouseIsPressed) {
    background(0);
    stroke(255,163,163);
  } else {
    background(255,163,163);
    stroke(255);
  }

  strokeWeight(15);

  translate(20, 20);

  for (var i = 0; i <= count; i++) {
    mods[i].update();
    mods[i].draw2();
  }

}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;


}

Module.prototype.update = function() {
  if (mouseIsPressed) {
    this.a = -20 * (atan2(mouseY-this.y, mouseX-this.x));
  } else {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
  }
}

Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);
  line(-l,0,l,0);
  pop();
}

function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
}
};
var myp5_0 = new p5(m, 'magnets');


//*************************************************************************
//*************************************************************************
//*************************************************************************
// Sketch Two
var b = function( p ) { // p could be any variable name

var particles = [];
var numParticles = 100;


function setup() {
  createCanvas(500,300);
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




//CLASSES***********************
//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.isDead = false;
  //hitpoints
  this.hp = 255;

  this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.hp --;

    if (this.hp <= 0) {
      this.isDead = true;
    };
  }


  this.display = function(){
    fill(color(this.hp, this.hp, this.hp));
    ellipse(this.x,this.y,this.diameter,this.diameter);
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

};
var myp5_1 = new p5(b, 'burst');
//*************************************************************************
//*************************************************************************
//*************************************************************************
