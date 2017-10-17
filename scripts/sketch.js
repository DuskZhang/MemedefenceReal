//meme defence is cool

var pepePrice = 150;
var grumpPrice = 45;
var dogePrice = 225;
var weabooPrice = 225;
var nedPrice = 300;
var wonkaPrice = 300;
var rossPrice = 250;
var btcPrice = 800;
var squidPrice = 400;
let sanicPrice = 320;

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

var muscles = []; //slang for all enemies
var spawnrate = 60; // once every second new guy 60fps
var waveOn = false;
var tearBullets = [];
var tiles = [];
var nodes = [];
var roadAmount = 35; // standard 40
var nearestEnemy;
var boolinitializeTiles = true;
var enemyQueue = []
var wave = 0;
var noSpammerino = 0;
var lastSpawn = false;
var enemySpawnType = 0;
//standard public hud

var lives = 25;
var gold = 620; // standard 420
// towers
var towers = [];
var shops = [];
var bullets = [];
let memes = [];

//make this not run first hud view and have it be the tower u  know

var gamemode = 1 //0 for startpage 1 for gameplay 2 for gameover // 3 for pause

function preload() {
        soundFormats('mp3', 'ogg');
        mySound = loadSound('assets/Bag Raiders - Shooting Stars.mp3');
}

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
    weabland = loadImage("assets/weabland.jpg");
    doge = loadImage("assets/doge.jpg");
    buyDoge = loadImage("assets/buyDoge.png");
    japsover = loadImage("assets/Workers.jpg");
    grump = loadImage("assets/grump.jpg");
    attackgrump = loadImage("assets/attackgrump.jpg");
    wonka = loadImage("assets/wonka.jpg");
    wonkabar = loadImage("assets/wonkabar.jpg");
    wonkafactory = loadImage("assets/wonkafactory.jpg");
    angryweab = loadImage("assets/anime-memes3.jpg");
    buyweaboo = loadImage("assets/weabooman.jpg");
    katana = loadImage("assets/katana.png");
    damagetears = loadImage("assets/hardertears.png");
    rangepepe = loadImage("assets/sightpepe.jpg");
    snoopdoge = loadImage("assets/snoopdoge.jpg");
    icedoge = loadImage("assets/icecreamdoge.jpg");
    blueberry = loadImage("assets/blueberry.jpg");
    turnwonka = loadImage("assets/turnwonka.jpg");
    ichigo = loadImage("assets/bleach.jpg");
    kirito = loadImage("assets/kirito.jpg");
    bigweab = loadImage("assets/theweaboo.jpg");
    babyboomers = loadImage("assets/babyboomer.jpg");
    teacher = loadImage("assets/teacher.jpg");
    book = loadImage("assets/bookheal.png");
    improvedmuscle = loadImage("assets/improvedmuscle.jpg");
    buyRoss = loadImage("assets/bobross.jpg");
    bobross = loadImage("assets/rosstower.jpg");
    paintattack = loadImage("assets/animateattackross.png");
    ned = loadImage("assets/ned.jpg");
    snow = loadImage("assets/jonsnow.jpg");
    winterfell = loadImage("assets/winterfell.jpg");
    hodl = loadImage("assets/hodl.jpg");
    betterknights = loadImage("assets/betterknights.jpg");
    moreknights = loadImage("assets/moreknights.png");
    squidtower = loadImage("assets/squidwardinactive.jpg");
    squiddab = loadImage("assets/dabbing.jpg");
     morememes = loadImage("assets/morememes.jpg");
    rofdab = loadImage("assets/rofdab.jpg");
    bitcoin = loadImage("assets/bitcoin.jpg");
    buybitcoin = loadImage("assets/buybtc.jpg");
    bitcoins = loadImage("assets/bitcoins.jpg");
    sanic = loadImage("assets/sanic.jpg");
    buySanic = loadImage("assets/buysonic.png")
    rings = loadImage("assets/rings.jpg")
    
    meme1 = loadImage("assets/meme1.jpg");
    meme2 = loadImage("assets/meme2.jpg");
    meme3 = loadImage("assets/meme3.jpg");
    meme4 = loadImage("assets/meme4.jpg");
    meme5 = loadImage("assets/meme5.jpg");
    meme6 = loadImage("assets/meme6.png");
    meme7 = loadImage("assets/meme7.jpg");
    meme8 = loadImage("assets/meme8.png");
    meme9 = loadImage("assets/meme9.jpg");
    meme10 = loadImage("assets/meme10.jpg");
    meme11 = loadImage("assets/meme11.jpg");

    memes.push(meme1);
    memes.push(meme2);
    memes.push(meme3);
    memes.push(meme4);
    memes.push(meme5);
    memes.push(meme6);
    memes.push(meme7);
    memes.push(meme8);
    
    johncena = loadImage("assets/johncena.jpg");




        mySound.setVolume(.3);
        mySound.play();
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
    tiles[214] = new BuyPepe(tiles[214].x, tiles[214].y);
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
    noSpammerino = 0;
}

function hudReset() {
    for (selcheck = towers.length - 1; selcheck >= 0; selcheck--) {
        towers[selcheck].selected = false;
    }
}

function draw() {

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

        //        btcPrice += 0.001;

        if (noSpammerino < 20) {
            noSpammerino++

        }

        if (boolinitializeTiles) {
            initializeTiles();
            boolinitializeTiles = false;
        }
        //spawning muscle

        objectFunctions();

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

    if (waveOn == false && keyCode == 13 && roadsBuilt == roadAmount) {
        decideWave();
    }

}





function startScreen() {
    background(0);
    text("Start", width / 2, height / 2);
}

function winner() {
    background(0);
    text("woo win", width / 2, height / 2);
}


function gameover() {
    background(0);
    text("Game Over", width / 2, height / 2);
}
