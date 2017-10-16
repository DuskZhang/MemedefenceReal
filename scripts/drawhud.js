function drawHud() {
    if (pepeTowerDesired) {
        image(pepe, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("A midrange rapid-fire killer ", mouseX, mouseY);
        text(pepePrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 120 * 2);
    }

    if (dogeTowerDesired) {
        image(doge, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("A ferocious melee fighter ", mouseX, mouseY);
        text(dogePrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 120 * 2);

    }

    if (grumpDesired) {
        image(attackgrump, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Lies on the road waiting to kill crossers ", mouseX, mouseY);
        text(grumpPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 60);
    }

    if (wonkaTowerDesired) {
        image(wonka, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Max range sniper slows speed to 10%", mouseX, mouseY);
        text(wonkaPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 9000);
    }

    if (weabooDesired) {
        image(angryweab, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Aggressive phantom follows the invaders", mouseX, mouseY);
        text(weabooPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 130 * 2);
    }

    if (rossTowerDesired) {
        image(bobross, mouseX, mouseY, 60, 60);
        fill(230, 150, 220);
        textSize(24);
        text("Aoe damage in a circle", mouseX, mouseY);
        text(rossPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 130 * 2);
    }

    if (hudDesired) {
        fill(0);
        rect(400, 0, 700, height / 4);
        textSize(30);
        fill("yellow");
        text("G: " + gold, 450, 80);
        fill(230, 150, 120);
        text("Lives: " + lives, 450, 120);
        text("Wave: " + wave, 450, 40);

    }

    if (nedTowerDesired) {
        image(ned, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("Protect the south ", mouseX, mouseY);
        text(nedPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 120 * 2);
    }

    if (squidTowerDesired) {
        image(squiddab, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("What ", mouseX, mouseY);
        text(squidPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 200 * 2);
    }
    
    if (bitcoinTowerDesired) {
        image(bitcoin, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("What ", mouseX, mouseY);
        text(btcPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 200 * 2);
    }
    
    if (sanicTowerDesired) {
        image(sanic, mouseX, mouseY, 60, 60);
        fill(230, 150, 120);
        textSize(24);
        text("What ", mouseX, mouseY);
        text(sanicPrice, mouseX, mouseY - 25);
        fill(40, 130, 130, 40);
        ellipse(mouseX + 30, mouseY + 30, 200 * 2);
    }
}