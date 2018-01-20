
var particles = [];
var numParticles = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numParticles; i++) {
    temp = new particle(width/2, height/2, 10, getRandomVelocity(2), getRandomVelocity(2));
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
    temp = new particle(width/2, height/2, 10, getRandomVelocity(2), getRandomVelocity(2));
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
	// this.twinkles = new Array();
  this.hp = 255;
  //
	// for (var i = 0; i < 30; i++) {
	// 	temp = new twinkle(this.x,this.y,this);
	// 	this.twinkles.push(temp);
	// }

  this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.hp --;

    if (this.hp <= 0) {
      this.isDead = true;
    };
  }


  this.display = function(){
    fill(color(200, this.hp, this.hp,this.hp));
    ellipse(this.x,this.y,this.diameter,this.diameter);
		// for (var i = 0; i < this.twinkles.lenth; i++) {
		// 	this.twinkles[i].move();
		// 	this.twinkles[i].display();
		// }
  }


}//END paricle class

// //twinkle class
// function twinkle(xloc, yloc,paricle) {
//   this.x = xloc;
//   this.y = yloc;
//   this.p = particle;
// 	this.xVelocity = getRandomVelocity(2);
//   this.yVelocity = getRandomVelocity(2);
//   this.isDead = false;
//   //hitpoints
//   this.hp = 100;
//
// 	this.move = function(){
//     this.x += this.xVelocity;
//     this.y += this.yVelocity;
//     this.hp ++;
//   }
//
//
// 	this.display = function(){
//     fill(color(255, 0, 0));
//     ellipse(this.xloc,this.yloc,5,5);
//   }
// }//END twinkle class
//
// //END CLASSES*******************
//
//HELPER FUCNTIONS***************

//returns random number from -num to num
function getRandomVelocity(num) {
	var a = Math.random()*num;
	var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	var result = a*plusOrMinus;
	return result;
}

//END HELPER FUNCTIONS************
