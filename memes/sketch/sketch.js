var normies = [];
var level = 1;
var brick;
function setup() {
    createCanvas(1080, 720);
    background(200, 200, 100);
    swordguy = new Swordsman(45,600);
    swordguy.resetStat();
}

function draw() {
    background(255, 235, 255);

    image(brick,300,200);

    swordguy.checkDirection();
    swordguy.show();
//    swordguy.gravity();
    swordguy.move();
    swordguy.roll();
}
