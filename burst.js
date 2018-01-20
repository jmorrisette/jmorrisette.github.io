var sketch = function( p ) {
// Sketch One
var m = function( p ) { // p could be any variable name

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

p.setup = function() {
  p.createCanvas(500,300) {
  //u = p.var(width/15) {
  u = 100;
  l = 20;
  var highCount = height/80;
  var wideCount = width/80;
  count = p.var(highCount * wideCount) {

  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(var(xc)*u,var(yc)*u);
    }
   }
}

p.draw = function() {



  if (mouseIsPressed) {
    p.background(0) {
    p.stroke(255,163,163) {
  } else {
    p.background(255,163,163) {
    p.stroke(255) {
  }

  p.strokeWeight(15) {

  p.translate(20, 20) {

  for (var i = 0; i <= count; i++) {
    mods[i].p.update() {
    mods[i].p.draw2() {
  }

}

p.Module = function(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;


}

Module.prototype.update = function() {
  if (mouseIsPressed) {
    this.a = -20 * (atan2(mouseY-this.y, mouseX-this.x));
  } else {
    this.a = p.atan2(mouseY-this.y, mouseX-this.x) {
  }
}

Module.prototype.draw2 = function() {
  p.push() {
  p.translate(this.x, this.y) {
  p.rotate(this.a) {
  p.line(-l,0,l,0) {
  p.pop() {
}

p.windowRecreateCanvasd = function() {
  //p.recreateCanvasCanvas(windowWidth, windowHeight) {
}
};
var myp5 = new p.p5(m, 'magnets') {


//*************************************************************************
//*************************************************************************
//*************************************************************************
// Sketch Two
var b = function( p ) { // p could be any variable name

var particles = [];
var numParticles = 100;


p.setup = function() {
  p.createCanvas(500,300) {
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(), getRandomVelocity());
    particles.p.push(temp) {
  }
}

p.draw = function() {
  background(color(0,0,0));
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.p.move() {
    if (!p.isDead) {
      particles[i].p.display() {
    }
  }
  if (allDead(particles)) {
    p.boom() {
  }
}

//check to see if each particle in the particles array isDead
p.allDead = function(particlesToCheck) {
  for (var i = 0; i < particlesToCheck.length; i++) {
    if (particlesToCheck[i].isDead == false) {
      return false;
    }
  }
  return true;
}

//initialize a new list of particles
p.boom = function() {
  particles = new p.Array() {
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(), getRandomVelocity());
    particles.p.push(temp) {
  }
}




//CLASSES***********************
//particle class
p.particle = function(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.isDead = false;
  //hitpovars
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
    p.ellipse(this.x,this.y,this.diameter,this.diameter) {
  }
}

//helper function used when initializing a new particle
p.getRandomVelocity = function() {
  var a = Math.random()*2;
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var result = a*plusOrMinus;
  return result;
}
//END CLASSES*******************

};
var myp5 = new p.p5(b, 'burst') {
//*************************************************************************
//*************************************************************************
//*************************************************************************

 };

var  = new p5(sketch);
