//meme defence is cool

var waveMuscle; // variable for deciding the max muscle per wave
var numMuscle; // how many muscles have spawned in a wave
var muscles = [];
var spawnrate = 30; // once every 1/2 second new guy 60fps
var wavestart = false;

var nearestEnemy;

function setup() {
  createCanvas(1080 , 720);
  muscleImg = loadImage("assets/Enemy.jpg");

}

function draw() {
  background(200,30 , 20);
  if(!wavestart) {
    decideWave();
  }
  for (var muscleSpawn = 0; muscleSpawn <= waveMuscle; muscleSpawn++  ) {

      Muscles[muscleSpawn].show();
      Muscles[muscleSpawn].move();
  }

  if(frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
    Muscles.push(new NormieMuscle(0,30));
    numMuscle++;
  }

}
