
var test = [ {id:1, posX: 10, posY: 50, radius: 10},
            {id:2, posX: 20 posY: 100, radius: 20},
            {id:2, posX: 30 posY: 200, radius: 30} ];
var particles = [];
var numParticles = 10;


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
    if (p.isDead) {
      //source: http://stackoverflow.com/questions/16491758/remove-objects-from-array-by-object-property
      //
      // we have an array of objects called test,
      // we want to remove one object using only the id property
      // get index of object with id:2
        //var removeIndex = test.map(function(item) { return item.id; }).indexOf(2);
        // remove object
        //test.splice(removeIndex, 1);
        console.log("paticle #" + i + "died.");
        
    }
    else {
      particles[i].display();
    }
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
    lifespan --;

    if (lifespan <= 0) {
      this.isDead = true;
    };


  this.display = function(){
    fill(color(lifespan, lifespan, lifespan));
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
