var song;

function preload() {
  song = loadSound("myFile.mp3");
}

function setup() {
  createCanvas(200,200);
  song.play();
}

function draw() {
  background(0);
}
