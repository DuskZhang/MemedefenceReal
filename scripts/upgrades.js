function showRange(object) {
    fill(40, 130, 130, 40);
    stroke(0);
    if (object instanceof Sanic && object != null) {
        if (object.vertical == false) { // range is 360
            rect(object.position.x - object.range / 2, object.position.y - 60, object.range + 60, 180);
        } else {
            rect(object.position.x - 60, object.position.y - object.range / 2,  180, object.range + 60);
        }
    } else {
        ellipse(object.position.x + 30, object.position.y + 30, object.range * 2);
    }

}

function showStats(object) {
    fill(50, 150, 120);
    textSize(21);

    hudDesired = true;
    if (object != null) {
        if (object instanceof Grump) {
            text("hits used: " + object.hits + "/ " + object.maxHits, 600, 120);
        } else if (object instanceof Ned) {
            text("Knight HP: " + object.knightHealth, 600, 50);
            text("Knight DMG: " + object.knightDamage, 600, 80);
            text("Knights: " + object.knights + "/ " + object.maxKnights, 600, 110);
            text("Spawn.. " + floor(object.shootcharge / 60) + "/ " + floor(object.primeshoot / 60), 600, 140);
        } else {
            text("Damage: " + floor(object.damage), 600, 50);
            text("Range: " + object.range, 600, 80);
            text("rate of fire: " + floor(object.chargebuild), 600, 110);
        }
    }


}

function showPrice(price) {
    textSize(15);
    text(price, mouseX, mouseY);
}

//upgrades + sell
function showUpgrades(object) {
    fill(255);
    textSize(15);

    //add costs later i wanna test it first
    if (keyIsDown(16) && noSpammerino > 19) {
        image(hodl, 480, 180, 400, 400);
        text("press s to sell for: " + object.sellPrice, 300, 480);
        if (keyIsDown(83)) {
            gold += object.sellPrice;
            noSpammerino = 0;
            towers.splice(object.iam);
            tiles[object.originalTile].tileTaken = false;
        }

    }

    if (object instanceof Pepe) {

        if (object.upgradeLevelA == 0 && object.damage * 1.3 <= 30) {
            let price = 120;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.damage *= 1.3;
                noSpammerino = 0;
                gold -= price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 100;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.range *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
            }
        }

    }

    if (object instanceof Doge) {
        if (object.upgradeLevelA == 0) {
            let price = 120;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 0.15;
                object.chargebuild *= 3;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        } else if (object.upgradeLevelA == 1) {
            let price = 150;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA1Image, 750, 50, 130, 100);
            text(object.upgradeA1Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 0.70;
                object.damage *= 2.1
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        } else if (object.upgradeLevelA == 2) {
            let price = 250;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA2Image, 750, 50, 130, 100);
            text(object.upgradeA2Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 0.10;
                object.damage *= 4.20
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 80;

            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        } else if (object.upgradeLevelB == 1) {
            let price = 150;

            image(object.upgradeB1Image, 900, 50, 130, 100);
            text(object.upgradeB1Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 4;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        } else if (object.upgradeLevelB == 2) {
            let price = 270;

            image(object.upgradeB2Image, 900, 50, 130, 100);
            text(object.upgradeB2Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.cerberusHeads.push(new Doge(object.neutralPositionx, object.neutralPositiony, 0));
                object.cerberusHeads.push(new Doge(object.neutralPositionx, object.neutralPositiony, 0));
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }

    }

    if (object instanceof Wonka) {
        if (object.upgradeLevelA == 0) {
            let price = 120;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.poison = 2;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 180;
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }


    }

    if (object instanceof AngryWeaboo) {
        if (object.upgradeLevelA == 0) {
            let price = 120;
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.damage *= 2;
                object.chargebuild *= 0.8
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 100;
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 1.5;
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }

    }

    if (object instanceof Ross) {
        if (object.upgradeLevelA == 0) {
            let price = 120;
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.damage *= 2;
                object.chargebuild *= 0.8
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 100;
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.speed *= 1.5;
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }

    }



    if (object instanceof Ned) {

        if (object.upgradeLevelA == 0) {
            let price = 120;
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price && noSpammerino > 16) {
                object.knightDamage = 3;
                object.knightHealth = 9;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        } else if (object.upgradeLevelA == 1) {
            let price = 150;
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA1Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                object.knightDamage = 5;
                object.knightHealth = 11;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 100;

            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.maxKnights = 4;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }

    }

    if (object instanceof DabbingSquidward) {

        if (object.upgradeLevelA == 0) {
            let price = 120;
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAhover(price) && mouseIsPressed && gold >= price) {
                memes.push(meme9);
                memes.push(meme10);
                memes.push(meme11);
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }
        if (object.upgradeLevelB == 0) {
            let price = 100;
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBhover(price) && mouseIsPressed && gold >= price) {
                object.chargebuild +=2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= price;
                object.sellPrice += price;
            }
        }


    }

    if (object instanceof Sanic) {

                if(keyIsDown(82) && noSpammerino > 19) {
                    object.vertical = !object.vertical;
                    noSpammerino = 0;
                }


    }
}
