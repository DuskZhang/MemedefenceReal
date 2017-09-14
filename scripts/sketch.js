//meme defence is cool
var roadsBuilt = 1;
var pepeTowerDesired = false;
var waveMuscle = 0; // variable for deciding the max muscle per wave
var numMuscle = 0; // how many muscles have spawned in a wave
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
var wave = 1;
//standard public hud

var lives = 20;
var gold = 150;

var gamemode = 0 //0 for startpage 1 for gameplay 2 for gameover

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
    tiles[0] = new Road(0,0);
    nodes.push(tiles[0]);
}

function draw() {
    background(200); //todo replace with scarce
    //show and functions for the tiles including roads and whatnot
    
    if(roadsBuilt == 45) {
        wavestart = true;
    }
    
    if(boolinitializeTiles) {
        initializeTiles();
        
        boolinitializeTiles = false;
    }
    
    if (frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
        muscles.push(new NormieMuscle(0, 0));
        numMuscle++;
    }
    
    for(i = 0; i < tiles.length; i++) {
        tiles[i].show();
            if(tiles[i].clicked(i)) {
                tiles[i] = new Road;
        }
        
    }
    
    var test = createVector(50,50);
    
    if (wavestart) {
        //decide spawn numbers
        decideWave();
    }

    console.log(test.add((test * 0.6)))
    
    for (var m = 0; m < muscles.length; m++) {
        muscles[m].show();
        muscles[m].move();
        muscles[m].checkExits(m);
    }
//
//    for (var bulleti = 0; bulleti <= tearBullets.length; bulleti++) {
//
//        tearBullets[bulleti].show();
//        tearBullets[bulleti].move();
//    }
//
//    //spawning muscle
//
    

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

