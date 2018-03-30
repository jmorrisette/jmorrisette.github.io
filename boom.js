
var particles = [];
var maxParticles = 1000;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(color(255));
  if (particles.length < maxParticles) {
    spawnParticle(random(width), height);
  }
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].hp < 1) {
      particles.splice(i,1);
    }
  }

  while (mousePressed()) {
    spawnParticle(mouseX, mouseY);
  }

  updateParticles();
  displayParticles();
  //print the current number of particles to the console
  console.log(particles.length)
}


function mousePressed() {
  spawnParticle(mouseX, mouseY);
}



function spawnParticle(x_, y_) {
  var temp = new particle(x_, y_, random(10), getRandomVelocity(2), getRandomVelocity(2));
  particles.push(temp);
}


//CLASSES*************************************************
//particle class
function particle(tempX, tempY, tempDiameter, tempXVelocity, tempYVelocity){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.xVelocity = tempXVelocity;
  this.yVelocity = tempYVelocity;
  this.hp = 255;

  this.move = function(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.hp --;
  }


  this.display = function(){
    fill(color(this.hp,this.hp/2,0, this.hp));
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }


}//END paricle class
//******************************************************


//HELPER FUCNTIONS********************************
//returns random number from -num to num
function getRandomVelocity(num) {
	var a = Math.random()*num;
	var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	var result = a*plusOrMinus;
	return result;
}


function updateParticles() {
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
  }
}

function displayParticles() {
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}
//******************************************************
