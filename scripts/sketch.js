//meme defence is cool


var roadsBuilt = 1;
var pepeTowerDesired = false;
var dogeTowerDesired = false;
var wonkaTowerDesired = false;
var grumpDesired = false;
var weabooDesired = false;
var hudDesired = false;

var anotherTowerClicked = false;

var waveMuscle = 0; // variable for deciding the max muscle per wave
var numMuscle = 0; // how many muscles have spawned in a wave

var waveWorkers = 0;
var numWorkers = 0;

var muscles = []; //slang for all enemies
var spawnrate = 60; // once every second new guy 60fps
var waveOn = false;
var tearBullets = [];
var tiles = [];
var nodes = [];
var roadAmount = 10;
var nearestEnemy;
var boolinitializeTiles = true;
var enemyQueue = []
var wave = 0;
var noSpammerino = 0;
//standard public hud

var lives = 20;
var gold = 800;
// towers
var towers = [];
var shops = [];
var bullets = [];

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
    tiles[209] = new BuyPepe(tiles[209].x, tiles[209].y);

    tiles[210] = new BuyPepe(tiles[210].x, tiles[210].y);
    tiles[211] = new BuyPepe(tiles[211].x, tiles[211].y);
    tiles[212] = new BuyPepe(tiles[212].x, tiles[212].y);

    tiles[213] = new BuyPepe(tiles[213].x, tiles[213].y);
    tiles[214] = new BuyPepe(tiles[214].x, tiles[214].y);
    tiles[215] = new BuyPepe(tiles[215].x, tiles[215].y);

}

function clearDesire() {
    grumpDesired = false;
    dogeTowerDesired = false;
    pepeTowerDesired = false;
    wonkaTowerDesired = false;
    weabooDesired = false;
    noSpammerino = 0;
}

function draw() {
    if (gamemode == 0) {
        startScreen();

    } else if (gamemode == 1) {
        background(200); //todo replace with scarce
        //show and functions for the tiles including roads and whatnot


        isWaveFinished();

        if (roadAmount == roadsBuilt) {
            nodes[roadAmount - 1].image = weabland;
        }

        if (noSpammerino < 20)[
            noSpammerino++
            ]

        if (boolinitializeTiles) {
            initializeTiles();
            boolinitializeTiles = false;
        }
        //spawning muscle

        if (frameCount % spawnrate == 0) {
            if (numMuscle < waveMuscle) {
                muscles.push(new NormieMuscle(0, 0));
                numMuscle++;
            } else if (numWorkers < waveWorkers) {
                muscles.push(new Workers(0, 0));
                numWorkers++;
            }


        }

        objectFunctions();
        drawHud();

    } else if (gamemode == 2) {
        gameover();
    }


}



function drawHud() {
    if (pepeTowerDesired) {
        image(pepe, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("A midrange rapid-fire killer ", mouseX, mouseY);
        fill(40,130,130,40);
        ellipse(mouseX+30, mouseY+30, 120*2);
    }

    if (dogeTowerDesired) {
        image(doge, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("A ferocious melee fighter ", mouseX, mouseY);
        fill(40,130,130,40);
        ellipse(mouseX+30, mouseY+30, 120*2);
        
    }

    if (grumpDesired) {
        image(attackgrump, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Lies on the road waiting to kill crossers ", mouseX, mouseY);
        fill(40,130,130,40);
        ellipse(mouseX+30, mouseY+30, 60);
    }

    if (wonkaTowerDesired) {
        image(wonka, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Max range sniper slows speed to 10%", mouseX, mouseY);
        fill(40,130,130,40);
        ellipse(mouseX+30, mouseY+30, 9000);
    }

    if (weabooDesired) {
        image(angryweab, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Aggressive phantom follows the invaders", mouseX, mouseY);
        fill(40,130,130,40);
        ellipse(mouseX+30, mouseY+30, 130*2);
    }

    if (hudDesired) {
        fill(0);
        rect(400, 0, 700, height / 4);
        textSize(30);
        fill("yellow");
        text("G: " + gold, 550, 80);
        fill(230, 150, 120);
        text("Lives: " + lives, 550, 120);
        text("Wave: " + wave, 550, 40);
        text("Description", 1000, 120);
        
        
//        if() {
//           towers[t].selected = upgrade 1 
//           }
    }
}

//function bringInstructions() {
//    
//}


function keyPressed() {
    if (keyCode == 27 && noSpammerino >= 18) {
        hudDesired = !hudDesired;
        noSpammerino = 0;
    }

    if (waveOn == false && keyCode == 13 && roadsBuilt == roadAmount) {
        //decide spawn numbers
        decideWave();
    }

}





function startScreen() {
    background(0);
    text("Start", width / 2, height / 2);
}



function gameover() {
    background(0);
    text("Game Over", width / 2, height / 2);
}
