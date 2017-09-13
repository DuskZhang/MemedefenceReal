//meme defence is cool
var roadsBuilt = 0;
var pepeTowerDesired = false;
var waveMuscle; // variable for deciding the max muscle per wave
var numMuscle; // how many muscles have spawned in a wave
var muscles = [];
var spawnrate = 60; // once every second new guy 60fps
var wavestart = false;
var tearBullets = [];
var tiles = [];
var roadTiles = [];
var roadAmount = 45;

var nearestEnemy;

function setup() {
    //27 x 18
    createCanvas(1080, 720);
    muscleImg = loadImage("assets/Enemy.jpg");
    pepe = loadImage("assets/pepe.png");
    tear = loadImage("assets/tear.png");
    scarce = loadImage("assets/fat_scarce.jpg");
    water = loadImage("assets/water.jpg");
    
    //creating all the scarce tiles
    for (var tillageX = 0; tillageX <= 27; tillageX++ ) {
        for( var tillageY = 0; tillageY <= 18; tillageY++ ) {
            tiles.push(new Tile(tillageX * 40,tillageY * 40))
        }
        
    }
}

function draw() {
    background(200); //todo replace with scarce
    //show and functions for the tiles including roads and whatnot
    for(i = 0; i < tiles.length; i++) {
        tiles[i].show();
        
        if(roadAmount > 0 ) {
            if(tiles[i].clicked()) {
                tiles[i] = new Road;
            }
        }
        
    }
    
    
    
    for (var roadNum = 0; roadNum < roadAmount; roadNum++) {
         
    }
    
    if (!wavestart) {
        decideWave();
    }

    for (var muscleSpawn = 0; muscleSpawn <= waveMuscle; muscleSpawn++) {

        Muscles[muscleSpawn].show();
        Muscles[muscleSpawn].move();
    }

    for (var bulleti = 0; bulleti <= tearBullets.length; bulleti++) {

        tearBullets[bulleti].show();
        tearBullets[bulleti].move();
    }

    //spawning muscle

    if (frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
        Muscles.push(new NormieMuscle(0, 30));
        numMuscle++;
    }



}
