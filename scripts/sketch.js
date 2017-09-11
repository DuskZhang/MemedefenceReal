//meme defence is cool

var waveMuscle; // variable for deciding the max muscle per wave
var numMuscle; // how many muscles have spawned in a wave
var muscles = [];
var spawnrate = 60; // once every second new guy 60fps
var wavestart = false;
var tearBullets = [];

var nearestEnemy;

function setup() {
  createCanvas(1080 , 720);
  muscleImg = loadImage("assets/Enemy.jpg");
  pepe = loadImage("assets/pepe.png");
  tear = loadImage("assets/tear.png");
  scarce = loadImage("assets/fat_scarce.jpg");
}

function draw() {
  background(200,30 , 20); //todo replace with scarce
    
  if(!wavestart) {
    decideWave();
  }
    
  for (var muscleSpawn = 0; muscleSpawn <= waveMuscle; muscleSpawn++  ) {

      Muscles[muscleSpawn].show();
      Muscles[muscleSpawn].move();
  }
    
  for (var bulleti = 0; bulleti <= tearBullets.length; bulleti++  ) {

      tearBullets[bulleti].show();
      tearBullets[bulleti].move();
  }

    //spawning muscle
    
  if(frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
    Muscles.push(new NormieMuscle(0,30));
    numMuscle++;
  }
    
    

}
