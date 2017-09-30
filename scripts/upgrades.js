function showRange(object) {
    fill(40, 130, 130, 40);
    ellipse(object.position.x + 30, object.position.y + 30, object.range * 2);
}

function showStats(object) {
    fill(50, 150, 120);
    textSize(24);

    hudDesired = true;
    text("damage: " + object.damage, 600, 50);
    text("range: " + object.range, 600, 80);
    if (object instanceof Grump) {
        text("hits used: " + object.hits + "/ " + object.maxHits, 600, 120);
    } else {
        text("rate of fire: " + object.chargebuild, 600, 120);
    }

}

function showUpgrades(object) {
    fill(255);
    textSize(15);

    //add costs later i wanna test it first
    if (object instanceof Pepe) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {;
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
            if (object.upgradeBclicked() && gold >= 100) {;
                object.range *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
    }

    if (object instanceof Doge) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {;
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
    }

    if (object instanceof Wonka) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            text("G : 120", 750, 170);
            if (object.upgradeAclicked() && gold >= 120) {;
                object.poison = 1;
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
            if (object.upgradeBclicked() && gold >= 180) {;
                object.chargebuild *= 2;
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 180;
            }
        }
    }

    if (object instanceof AngryWeaboo) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {;
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
            if (object.upgradeBclicked() && gold >= 100) {;
                object.speed *= 1.5;
                object.chargebuild *= 2;                                          
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
    }
    
    if (object instanceof Ross) {
        if (object.upgradeLevelA == 0) {
            //show increased range upgrade have the upgrade clicked function within this function
            image(object.upgradeA0Image, 750, 50, 130, 100);
            text(object.upgradeA0Description, 750, 15);
            if (object.upgradeAclicked() && gold >= 120) {;
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
            if (object.upgradeBclicked() && gold >= 100) {;
                object.speed *= 1.5;
                object.chargebuild *= 2;                                          
                object.upgradeLevelB++;
                noSpammerino = 0;
                gold -= 100;
            }
        }
    }

}
