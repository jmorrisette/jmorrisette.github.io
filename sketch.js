
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




//CLASSES***********************
//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.isDead = false;
	this.twinkles = new Array();
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
		for (var i = 0; i < twinkles.lenth; i++) {
			twinkles[i].display();
		}
  }

	//helper function used to initialize twinkles
	function initTwinkles() {
		for (var i = 0; i < 3; i++) {
			temp = new twinkle(this.x,this.y,this);
			twinkles.push(temp);
		}
	}

}//END paricle class

//twinkle class
function twinkle(xloc, yloc,paricle) {
  this.xloc = xloc;
  this.yloc = yloc;
  this.p = particle;
	this.xVelocity = this.p.xVelocity;
  this.yVelocity = this.p.yVelocity;
  this.isDead = false;
  //hitpoints
  this.hp = 100;

	this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.hp ++;

    if (this.hp <= 0) {
      this.isDead = true;
    };
  }


	this.display = function(){
    fill(color(this.hp, this.hp, this.hp));
    ellipse(this.xloc,this.yloc,5,5);
  }
}//END twinkle class

//END CLASSES*******************

//HELPER FUCNTIONS***************

//helper function used when initializing a new particle
function getRandomVelocity() {
	var a = Math.random()*2;
	var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	var result = a*plusOrMinus;
	return result;
}

//END HELPER FUNCTIONS************
