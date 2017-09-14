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
var roadAmount = 5;
var nearestEnemy;
var boolinitializeTiles = true;
var enemies = []
var wave = 1;
//standard public hud

var lives = 20;
var gold = 150;

var gamemode = 1 //0 for startpage 1 for gameplay 2 for gameover // 3 for pause

function setup() {
    //18 x 12
    createCanvas(1080, 720);
    muscleImg = loadImage("assets/Enemy.jpg");
    pepe = loadImage("assets/pepe.png");
    tear = loadImage("assets/tear.png");
    scarce = loadImage("assets/fat_scarce.jpg");
    water = loadImage("assets/water.jpg");
    stars = loadImage("assets/stars.jpg");
    buypepe = loadImage("assets/buypepe.jpg");
}

function initializeTiles() {
    //creating all the scarce tiles
    for (var tillageX = 0; tillageX <= 17; tillageX++) {
        for (var tillageY = 0; tillageY <= 11; tillageY++) {
            tiles.push(new Tile(tillageX * 60, tillageY * 60))
        }

    }
    tiles[0] = new Road(0, 0);
    nodes.push(tiles[0]);
}

function draw() {
    if (gamemode == 0) {
        startScreen();

    } else if (gamemode == 1) {
        background(200); //todo replace with scarce
        //show and functions for the tiles including roads and whatnot

        
       
        if (roadsBuilt == roadAmount) {
            wavestart = true;
        }

        if (boolinitializeTiles) {
            initializeTiles();

            boolinitializeTiles = false;
        }

        if (frameCount % spawnrate == 0 && numMuscle < waveMuscle) {
            muscles.push(new NormieMuscle(0, 0));
            numMuscle++;
            
        }

        for (i = 0; i < tiles.length; i++) {
            tiles[i].show();
            if (tiles[i].clicked(i)) {
                tiles[i] = new Road;
            }

        }



        if (wavestart) {
            //decide spawn numbers
            decideWave();
        }


        for (var m = 0; m < muscles.length; m++) {
            muscles[m].show();
            muscles[m].move(m);
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

}

function drawHud() {
    textSize(30);
    fill("yellow");
    text("G: " + gold, mouseX, mouseY);
    fill(230, 150, 120);
    text("Lives: " + lives, mouseX, mouseY - 40);
}

function bringInstructions() {
    textSize(30);
    fill("yellow");
    text("G: " + gold, mouseX, mouseY);
    fill(230, 150, 120);
    text("Lives: " + lives, mouseX, mouseY - 40);
}

//instructions, towers etc
//
function keyPressed() {
    if (keyCode == 27) {

    }
}

function startScreen() {
    
}