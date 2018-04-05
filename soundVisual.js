var song;
var sliderVol;
var sliderRate;
var sliderPan;
var amp;

//this function is for things that need to happen BEFORE setup
//loading files, images, etc.
// function preload() {
//   song = loadSound("stonersNight.mp3");
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("LucidTruth.mp3", songLoaded);
  amp = new p5.Amplitude();
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
  background(0);
  fill(color(255,0,0));
  text("Volume", sliderVol.x * 2 + sliderVol.width + 10, 25);
  song.setVolume(sliderVol.value());
  //song.pan(sliderPan.value());
  text("Rate", sliderRate.x * 2 + sliderRate.width + 10, 45);
  song.rate(sliderRate.value());

  var tempVol = amp.getLevel();
  var diam = map(tempVol, 0, 1, 10, 200);
  ellipse(width/2, height/2, diam , diam);

}
