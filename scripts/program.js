//meme defence is cool
var roadsBuilt = 1;
var pepeTowerDesired = false;
var waveMuscle; // variable for deciding the max muscle per wave
var numMuscle; // how many muscles have spawned in a wave
var muscles = [];
var spawnrate = 60; // once every second new guy 60fps
var wavestart = false;
var tearBullets = [];
var tiles = [];
var roads = [];
var roadAmount = 45;

var nearestEnemy;
var initializeTiles = true;

function setup() {
    //27 x 18
    createCanvas(1080, 720);
    muscleImg = loadImage("assets/Enemy.jpg");
    pepe = loadImage("assets/pepe.png");
    tear = loadImage("assets/tear.png");
    scarce = loadImage("assets/fat_scarce.jpg");
    water = loadImage("assets/water.jpg");
    stars = loadImage("assets/stars.jpg");


}

function draw() {
    background(200); 
    if(initializeTiles) {
        InitializeTiles();
        initializeTiles = false;
    }
    
    
    for(i = 0; i < tiles.length; i++ ) {
        tiles[i].show();
        tiles[i].clicked(i);
    }

}

function InitializeTiles() {
        for (var tillageX = 0; tillageX <= 18; tillageX++) {
            for (var tillageY = 0; tillageY <= 12; tillageY++) {
                tiles.push(new Tile(tillageX * 60, tillageY * 60));
            }
        }
    
        tiles[2] = new Road;
        
    }

