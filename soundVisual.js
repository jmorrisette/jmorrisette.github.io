var song;
var sliderVol;
var sliderRate;
var sliderPan;
var amp;
var fft;
var velX;
var velY;
var posX;
var posY;
var num;
var particles = [];
var maxParticles = 1000;

//this function is for things that need to happen BEFORE setup
//loading files, images, etc.
// function preload() {
//   song = loadSound("stonersNight.mp3");
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("LucidTruth.mp3", songLoaded);
  amp = new p5.Amplitude();
  velX = 1;
  velY = 1;
  num = 1;
  posX = windowWidth/2;
  posY = windowHeight/2;

  fft = new p5.FFT(0,256);
  sliderVol = createSlider(0, 1, 0.5, 0.01);
  sliderVol.position(10,10);
  //sliderPan = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1 , 0.01);
  sliderRate.position(10,30);
}

function songLoaded() {
  song.play();
}

function draw() {
  if ((posX >= windowWidth) || (posX <= 0)) {
    velX *=-1;
    posX += 10*velX;
  }
  if ((posY >= windowHeight) || (posY <= 0)) {
    velY*=-1;
    posY += 10*velY;
  }
  posX += velX;
  posY += velY;
  background(color(255, 100, 0));

  fill(color(255,0,0));
  text("Volume", sliderVol.x * 2 + sliderVol.width + 10, 25);
  song.setVolume(sliderVol.value());
  //song.pan(sliderPan.value());
  text("Rate", sliderRate.x * 2 + sliderRate.width + 10, 45);
  song.rate(sliderRate.value());

  var tempVol = amp.getLevel();
  var diam = map(tempVol, 0, 1, 1, 2000);
  var myColor = map(tempVol, 0, 1, 1, 255);
  fill(color(diam,diam,diam));
  ellipse(posX, posY, diam , diam);
  //var specturm = fft.analyze();



  if (particles.length < maxParticles) {
    spawnParticle(random(width), height);
  }
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].hp < 1) {
      particles.splice(i,1);
    }
  }

  if (diam >= 1000) {
    particle(posX, posY, 20, random(-3,3), random(-2,2));
  }
  update();
  updateParticles();
  displayParticles();
}

function update() {
  if ((posX >= windowWidth) || (posX <= 0)) {
    velX *=-1;
    posX += 10*velX;
  }
  if ((posY >= windowHeight) || (posY <= 0)) {
    velY*=-1;
    posY += 10*velY;
  }

  posX += velX;
  posY += velY;
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
