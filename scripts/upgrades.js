function showRange(object) {
    fill(40, 130, 130, 40);
    ellipse(object.position.x + 30, object.position.y + 30, object.range * 2);
}

function showStats(object) {
    fill(50, 150, 120);
    textSize(21);

    hudDesired = true;
    if (object instanceof Grump) {
        text("hits used: " + object.hits + "/ " + object.maxHits, 600, 120);
    } else if (object instanceof Ned) {
        text("Knight HP: " + object.knightHealth, 600, 50);
        text("Knight DMG: " + object.knightDamage, 600, 80);
        text("Knights: " + object.knights + "/ " + object.maxKnights, 600, 110);
        text("Spawn.. " + floor(object.shootcharge / 60) + "/ " + floor(object.primeshoot / 60), 600, 140);
    } else {
        text("Damage: " + object.damage, 600, 50);
        text("Range: " + object.range, 600, 80);
        text("rate of fire: " + object.chargebuild, 600, 110);
    }

}


//upgrades + sell
function showUpgrades(object) {
    fill(255);
    textSize(15);

    //add costs later i wanna test it first
    if (object instanceof Pepe) {

        if (mouseIsPressed) {
            console.log("dontloganything")
        }
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {
                object.damage *= 2;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBclicked() && gold >= 100) {
                object.range *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }

        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            gold += pepePrice / 2;
            tiles[object.originalTile].tileTaken = false;
            towers.splice(object.iam);
        }
    }

    if (object instanceof Doge) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {
                object.speed *= 0.15;
                object.chargebuild *= 3;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBclicked() && gold >= 100) {;
                object.speed *= 3;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            gold += dogePrice / 2;
            tiles[object.originalTile].tileTaken = false;
            towers.splice(object.iam);
        }
    }

    if (object instanceof Wonka) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            text("G : 120", 750, 170);
            if (object.upgradeAclicked() && gold >= 120) {
                object.poison = 2;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            text("G : 180", 900, 170);
            if (object.upgradeBclicked() && gold >= 180) {
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 180;
            }
        }

        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            towers.splice(object.iam);
            gold += wonkaPrice / 2;
            tiles[object.originalTile].tileTaken = false;

        }
    }

    if (object instanceof AngryWeaboo) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {
                object.damage *= 2;
                object.chargebuild *= 0.8
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBclicked() && gold >= 100) {
                object.speed *= 1.5;
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            gold += weabooPrice / 2;
            towers.splice(object.iam);
            tiles[object.originalTile].tileTaken = false;

        }
    }

    if (object instanceof Ross) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {
                object.damage *= 2;
                object.chargebuild *= 0.8
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBclicked() && gold >= 100) {
                object.speed *= 1.5;
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            gold += rossPrice / 2;
            tiles[object.originalTile].tileTaken = false;
            towers.splice(object.iam);
        }
    }



    if (object instanceof Ned) {

        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {
                object.knightDamage = 4;
                object.knightHealth = 8;
                object.upgradeLevelA++;
                noSpammerino = 0;
                gold -= 120;
            }
        }
        if (object.upgradeLevelB == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeB0Image, 900, 50, 130, 100);
            text(object.upgradeB0Description, 900, 15);
            if (object.upgradeBclicked() && gold >= 100) {
                object.maxKnights = 6;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
        text(nedPrice / 2, 480, 180);
        image(hodl, 480, 180, 50, 50);
        if (mouseX >= 480 && mouseX <= 480 + 50 && mouseY >= 180 && mouseY <= 230 && mouseIsPressed) {
            gold += nedPrice / 2;
            tiles[object.originalTile].tileTaken = false;
            towers.splice(object.iam);
        }
    }

}
