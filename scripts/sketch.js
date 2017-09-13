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
var nodes = [];
var roadAmount = 45;
var nearestEnemy;
var boolinitializeTiles = true;
var enemies = []

//standard public hud

var lives = 20;
var gold = 150;

function setup() {
    //18 x 12
    createCanvas(1080, 720);
    muscleImg = loadImage("assets/Enemy.jpg");
    pepe = loadImage("assets/pepe.png");
    tear = loadImage("assets/tear.png");
    scarce = loadImage("assets/fat_scarce.jpg");
    water = loadImage("assets/water.jpg");
    stars = loadImage("assets/stars.jpg")
    
}

function initializeTiles() {
     //creating all the scarce tiles
    for (var tillageX = 0; tillageX <= 18; tillageX++ ) {
        for( var tillageY = 0; tillageY <= 12; tillageY++ ) {
            tiles.push(new Tile(tillageX * 60,tillageY * 60))
        }
        
    }
    tiles[0] = new Road;
    nodes.push(tiles[0]);
}

function draw() {
    background(200); //todo replace with scarce
    //show and functions for the tiles including roads and whatnot
    
    
    
    if(boolinitializeTiles) {
        initializeTiles();
        boolinitializeTiles = false;
    }
    
    for(i = 0; i < tiles.length; i++) {
        tiles[i].show();
            if(tiles[i].clicked(i)) {
                tiles[i] = new Road;
        }
        
    }
    
    
    
//    for (var roadNum = 0; roadNum < roadAmount; roadNum++) {
//         
//    }
    
//    if (!wavestart) {
//        decideWave();
//    }

//    for (var muscleSpawn = 0; muscleSpawn <= waveMuscle; muscleSpawn++) {
//
//        Muscles[muscleSpawn].show();
//        Muscles[muscleSpawn].move();
//    }
//
//    for (var bulleti = 0; bulleti <= tearBullets.length; bulleti++) {
//
//        tearBullets[bulleti].show();
//        tearBullets[bulleti].move();
//    }
//
//    //spawning muscle
//
//    if (frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
//        Muscles.push(new NormieMuscle(0, 30));
//        numMuscle++;
//    }

    drawHud();

}

function drawHud() {
    textSize(30);
    fill("yellow");
    text("G: " + gold,mouseX,mouseY);
    fill(230,150,120);
    text("Lives: " + lives,mouseX,mouseY - 40);
}

function bringInstructions() {
    textSize(30);
    fill("yellow");
    text("G: " + gold,mouseX,mouseY);
    fill(230,150,120);
    text("Lives: " + lives,mouseX,mouseY - 40);
}

