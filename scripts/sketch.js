//meme defence is cool

var pepePrice = 150;
var grumpPrice = 40;
var dogePrice = 225;
var weabooPrice = 225;
var nedPrice = 300;
var wonkaPrice = 300;
var rossPrice = 250;
var btcPrice = 800;
var squidPrice = 400;
let sanicPrice = 320;
let lazerPrice = 666;
let logicalPrice = 500;

var roadsBuilt = 1;
var pepeTowerDesired = false;
var dogeTowerDesired = false;
var wonkaTowerDesired = false;
var grumpDesired = false;
var weabooDesired = false;
var rossTowerDesired = false;
var nedTowerDesired = false;
var btcDesired = false;
var hudDesired = false;
var squidTowerDesired = false;
var bitcoinTowerDesired = false;
var sanicTowerDesired = false;
let helpDesired = false;
let logicTowerDesired = false;


let bitcoinWaveDamage = 1;
//if hud desired stop people from buying towers
//var hudReset = false;

var waveMuscle = 0; // variable for deciding the max muscle per wave
var numMuscle = 0; // how many muscles have spawned in a wave

var waveWorkers = 0;
var numWorkers = 0;

var numBoom = 0;
var waveBoom = 0;
var numTeacher = 0;
var waveTeacher = 0;
var numImprovedmus = 0;
var waveImprovedmus = 0;
var numCavalry = 0;
var waveCavalry = 0;
var numEmo = 0;
var waveEmo = 0;

var muscles = []; //slang for all enemies
var spawnrate = 60; // once every second new guy 60fps
var waveOn = false;
var tearBullets = [];
var tiles = [];
var nodes = [];

var roadAmount = 50; // standard 50

var nearestEnemy;
var enemyQueue = []
var wave = 0;
var noSpammerino = 0;
var lastSpawn = false;
var enemySpawnType = 0;
//standard public hud

var lives = 50;
var gold = 820; // standard 840
// towers
var towers = [];
var shops = [];
var bullets = [];
let memes = [];
let volume = 0.3;

//make this not run first hud view and have it be the tower u  know

var gamemode = 0 //0 for startpage 1 for gameplay 2 for gameover // 3 for pause

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('scripts/assets/Bag Raiders - Shooting Stars.mp3');
}

function setup() {
    //18 x 12
    createCanvas(1080, 720);
    muscleImg = loadImage("scripts/assets/Enemy.jpg");
    pepe = loadImage("scripts/assets/pepe.png");
    tear = loadImage("scripts/assets/tear.png");
    scarce = loadImage("scripts/assets/fat_scarce.jpg");
    water = loadImage("scripts/assets/water.jpg");
    stars = loadImage("scripts/assets/stars.jpg");
    buypepe = loadImage("scripts/assets/buypepe.jpg");
    weabland = loadImage("scripts/assets/weabland.jpg");
    doge = loadImage("scripts/assets/doge.jpg");
    buyDoge = loadImage("scripts/assets/buyDoge.png");
    japsover = loadImage("scripts/assets/Workers.jpg");
    grump = loadImage("scripts/assets/grump.jpg");
    attackgrump = loadImage("scripts/assets/attackgrump.jpg");
    wonka = loadImage("scripts/assets/wonka.jpg");
    wonkabar = loadImage("scripts/assets/wonkabar.jpg");
    wonkafactory = loadImage("scripts/assets/wonkafactory.jpg");
    angryweab = loadImage("scripts/assets/anime-memes3.jpg");
    buyweaboo = loadImage("scripts/assets/weabooman.jpg");
    katana = loadImage("scripts/assets/katana.png");
    damagetears = loadImage("scripts/assets/hardertears.png");
    rangepepe = loadImage("scripts/assets/sightpepe.jpg");
    snoopdoge = loadImage("scripts/assets/snoopdoge.jpg");
    icedoge = loadImage("scripts/assets/icecreamdoge.jpg");
    blueberry = loadImage("scripts/assets/blueberry.jpg");
    turnwonka = loadImage("scripts/assets/turnwonka.jpg");
    ichigo = loadImage("scripts/assets/bleach.jpg");
    kirito = loadImage("scripts/assets/kirito.jpg");
    bigweab = loadImage("scripts/assets/theweaboo.jpg");
    babyboomers = loadImage("scripts/assets/babyboomer.jpg");
    teacher = loadImage("scripts/assets/teacher.jpg");
    book = loadImage("scripts/assets/bookheal.png");
    improvedmuscle = loadImage("scripts/assets/improvedmuscle.jpg");
    buyRoss = loadImage("scripts/assets/bobross.jpg");
    bobross = loadImage("scripts/assets/rosstower.jpg");
    paintattack = loadImage("scripts/assets/animateattackross.png");
    ned = loadImage("scripts/assets/ned.jpg");
    snow = loadImage("scripts/assets/jonsnow.jpg");
    winterfell = loadImage("scripts/assets/winterfell.jpg");
    hodl = loadImage("scripts/assets/hodl.jpg");
    betterknights = loadImage("scripts/assets/betterknights.jpg");
    moreknights = loadImage("scripts/assets/moreknights.png");
    squidtower = loadImage("scripts/assets/squidwardinactive.jpg");
    squiddab = loadImage("scripts/assets/dabbing.jpg");
    morememes = loadImage("scripts/assets/morememes.jpg");
    rofdab = loadImage("scripts/assets/rofdab.jpg");
    bitcoin = loadImage("scripts/assets/bitcoin.jpg");
    buybitcoin = loadImage("scripts/assets/buybtc.jpg");
    bitcoins = loadImage("scripts/assets/bitcoins.jpg");
    sanic = loadImage("scripts/assets/sanic.jpg");
    buySanic = loadImage("scripts/assets/buysonic.png");
    rings = loadImage("scripts/assets/rings.jpg");
    donald = loadImage("scripts/assets/donald.jpg");
    aristotles = loadImage("scripts/assets/aristotles.jpg");
    cavalry = loadImage("scripts/assets/cavalry.jpg");
    jordan = loadImage("scripts/assets/jordan.jpg");
    emo = loadImage("scripts/assets/emo.jpg");
    dogea1 = loadImage("scripts/assets/smokingdoge.png");
    dogeb1 = loadImage("scripts/assets/toughdoge.jpg");
    dogea2 = loadImage("scripts/assets/stoned.jpg");
    dogeb2 = loadImage("scripts/assets/cerberus.jpg");
    dogeb2 = loadImage("scripts/assets/cerberus.jpg");
    buyLogic = loadImage("scripts/assets/buyLogic.jpg");
    logical = loadImage("scripts/assets/logical.jpg");
    mindblown = loadImage("scripts/assets/mindblown.jpg");
    explosion = loadImage("scripts/assets/explosion.jpg");
    behind = loadImage("scripts/assets/behind.jpg");

    meme1 = loadImage("scripts/assets/meme1.jpg");
    meme2 = loadImage("scripts/assets/meme2.jpg");
    meme3 = loadImage("scripts/assets/meme3.jpg");
    meme4 = loadImage("scripts/assets/meme4.jpg");
    meme5 = loadImage("scripts/assets/meme5.jpg");
    meme6 = loadImage("scripts/assets/meme6.png");
    meme7 = loadImage("scripts/assets/meme7.jpg");
    meme8 = loadImage("scripts/assets/meme8.png");
    meme9 = loadImage("scripts/assets/meme9.jpg");
    meme10 = loadImage("scripts/assets/meme10.jpg");
    meme11 = loadImage("scripts/assets/meme11.jpg");
    
    memes.push(meme1);
    memes.push(meme2);
    memes.push(meme3);
    memes.push(meme4);
    memes.push(meme5);
    memes.push(meme6);
    memes.push(meme7);
    memes.push(meme8);

    johncena = loadImage("scripts/assets/johncena.jpg");




    mySound.setVolume(volume);
    mySound.loop();
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


    // shop tiles
    tiles[204] = new BuyPepe(tiles[204].x, tiles[204].y);
    tiles[205] = new BuyDoge(tiles[205].x, tiles[205].y);
    tiles[206] = new BuyGrump(tiles[206].x, tiles[206].y);

    tiles[207] = new BuyWonka(tiles[207].x, tiles[207].y);
    tiles[208] = new BuyWeaboo(tiles[208].x, tiles[208].y);
    tiles[209] = new BuyRoss(tiles[209].x, tiles[209].y);

    tiles[210] = new BuyNed(tiles[210].x, tiles[210].y);
    tiles[211] = new BuySquidward(tiles[211].x, tiles[211].y);
    tiles[212] = new BuyBitcoin(tiles[212].x, tiles[212].y);

    tiles[213] = new BuySanic(tiles[213].x, tiles[213].y);
    tiles[214] = new BuyLogic(tiles[214].x, tiles[214].y);
    tiles[215] = new BuyPepe(tiles[215].x, tiles[215].y);

}

function clearDesire() {
    grumpDesired = false;
    dogeTowerDesired = false;
    pepeTowerDesired = false;
    wonkaTowerDesired = false;
    weabooDesired = false;
    rossTowerDesired = false;
    nedTowerDesired = false;
    squidTowerDesired = false;
    bitcoinTowerDesired = false;
    sanicTowerDesired = false;
    logicTowerDesired = false;
    noSpammerino = 0;
}

function hudReset() {
    for (selcheck = towers.length - 1; selcheck >= 0; selcheck--) {
        towers[selcheck].selected = false;
    }
}

function draw() {
if (noSpammerino < 20) {
            noSpammerino++

        }
    if (gamemode == 0) {
        startScreen();
        

    } else if (gamemode == 1) {
        background(200); //todo replace with scarce
        //show and functions for the tiles including roads and whatnot
        
        if (muscles.length == 0 && wave == 21 && enemyQueue.length == 0) {
            gamemode = 3;
        }


        if (roadAmount == roadsBuilt) {
            nodes[roadAmount - 1].image = weabland;
        }
        objectFunctions();
        help();
        //get the numMuscles etc then push all into an array then 

        if (frameCount % spawnrate == 0 && waveOn) {
            isWaveFinished();
            let index = Math.floor(Math.random() * enemyQueue.length);
            isWaveFinished();

            if (enemyQueue[index] != null) {
                muscles.push(enemyQueue[index]);
                isWaveFinished();
                enemyQueue.splice([index], 1);
                isWaveFinished();
                if (enemyQueue.length == 0) {
                    lastSpawn = true;
                }
                isWaveFinished();
            }
        }


    } else if (gamemode == 2) {
        gameover();
    } else if (gamemode == 3) {
        winner();
    }
}





function keyPressed() {
    if (keyCode == 27 && noSpammerino >= 18) {
        hudReset();
        hudDesired = !hudDesired;
        clearDesire();
        noSpammerino = 0;
    }
    
    if (keyCode == 77 && noSpammerino >= 18) {
        if(volume == 0.3) {
            volume = 0;
           mySound.setVolume(0); 
        } else {
            volume = 0.3;
            mySound.setVolume(0.3); 
        }
    }

    if (waveOn == false && keyCode == 13 && roadsBuilt == roadAmount) {
        decideWave();
    }

}





function startScreen() {
    background(0);
    textSize(40);
    stroke(255);
    text("MemeDefence", width / 2 + 200, height / 2);
    text("Press s to start", width / 2 + 200, height / 2 + 300);
    text("Press o for help", width / 2 + 200, height / 2 + 200);
    help();
    if (keyIsDown(83)) {
        gamemode = 1;
        initializeTiles();
    }

}

function winner() {
    background(0);
    text("woo win", width / 2, height / 2);
}


function gameover() {
    background(0);
    text("Game Over", width / 2, height / 2);
}

function help() {
    if (keyIsDown(79) && noSpammerino > 18) {
        helpDesired = !helpDesired;
        noSpammerino = 0;
    }

    if (helpDesired) {
        fill(40, 40, 40, 40);
        rect(0, 0, width, height);
        textSize(30);
        stroke(255);
        text("Key Commands: \n esc for hud \n shift + s while selecting a tower to sell it \n r to rotate a tower's range\n Enter to start a new wave\n m to toggle music\n Building path: The game starts with one black-star tile in the top-left corner, click on tiles surrounding the path( to the left or down the first tile) in order to build another tile of black-star, which is the path of the game.\n After building a path of 50 tiles, press enter to start the first wave. Mobs follow the path\n Placing towers:\n One can buy towers by clicking on them on the right and clicking on any tile that is not a path tile. Keep in mind towers can only be placed after one builds the path of 50 tiles. Wave control:\n After the last enemy dies, pressing enter starts the next wave. There are 20 waves in total.", 50, 50);
        //todo more help            

    }
}
