class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.position = createVector(this.x, this.y);
        this.damage = 1;
        this.shootcharge = 0; // once it hits primeshoot it fires
        this.chargebuild = 5
        this.primeshoot = 100;
        this.range;
        this.image;
        this.width = 60;
        this.iam;
        this.selected = false;
        this.upgradeLevelA = 0;
        this.upgradeLevelB = 0;
        this.sell = false;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
    }

    lockon() {

    }

    shootAt() {

    }

    upgradeAclicked() {
        if (mouseX > 750 && mouseX < 900 && mouseY < 150 && mouseY > 50 && mouseIsPressed && noSpammerino >= 18) {
            return true;

        }
    }

    upgradeBclicked() {
        if (mouseX > 900 && mouseX < 1050 && mouseY < 150 && mouseY > 50 && mouseIsPressed && noSpammerino >= 18) {
            return true;

        }
    }


    onClick(i) {
        this.iam = i;
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed && noSpammerino >= 18) {
            hudReset();
            this.selected = true;

        }
    }

    hudInfo() {
        showStats(towers[this.iam]);
        showRange(towers[this.iam]);
        showUpgrades(towers[this.iam]);
    }
}

class Pepe extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);

        this.damage = 1; // prob will not need this on tower
        this.shootcharge = 0;
        this.chargebuild = 5
        this.primeshoot = 100;
        this.range = 120;
        this.image = pepe;
        this.selected = false;
        this.upgradeA0Image = damagetears;
        this.upgradeA0Description = "Hard Tears: \nDouble damage";
        this.upgradeB0Image = rangepepe;
        this.upgradeB0Description = "Grim Sights: \nDouble range";

    }
    //called every frame
    lockon() {
        if (this.shootcharge < this.primeshoot) {
            this.shootcharge += this.chargebuild;

        }
        //shoots at first enemy in muscles array to meet if statement
        if (muscles[0] != null) {
            for (var i = 0; i < muscles.length; i++) {
                if (dist(this.x, this.y, muscles[i].pector.x, muscles[i].pector.y) <= this.range) {
                    this.shootAt(muscles[i]);
                    break;
                }
            }
        }

    }

    show(t) {
        image(this.image, this.x, this.y, this.width, this.width);
        this.iam = t;
    }

    //called every frame by obj
    shootAt(object) {
        if (this.shootcharge >= this.primeshoot) {
            this.shootcharge = 0;
            bullets.push(new TearBullet(this.x, this.y, object, this.damage))

        }

    }

    hudInfo() {
        showStats(towers[this.iam]);
        showRange(towers[this.iam]);
        showUpgrades(towers[this.iam]);
    }

    onClick(i) {
        this.iam = i;
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed && noSpammerino >= 18) {
            hudReset();
            this.selected = true;

        }
    }

}

class Ross extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);
        //cost 300
        this.damage = 0.75; // prob will not need this on tower
        this.shootcharge = 0;
        this.chargebuild = 5;
        this.primeshoot = 100;
        this.range = 120;
        this.image = bobross;
        this.selected = false;
        this.upgradeA0Image = damagetears;
        this.upgradeA0Description = "BeatTheDevil: \ntriple rof";
        this.upgradeB0Image = rangepepe;
        this.upgradeB0Description = "RelaxingTheme: \nChangeTheMusic";
        this.targets = [];
        this.poison = 0;

    }
    //called every frame
    lockon() {
        if (this.shootcharge < this.primeshoot) {
            this.shootcharge += this.chargebuild;

        }


        if (muscles[0] != null && this.shootcharge >= this.primeshoot) {
            this.shootcharge = 0;
            for (var i = 0; i < muscles.length; i++) {
                if (dist(this.x, this.y, muscles[i].pector.x, muscles[i].pector.y) <= this.range) {
                    this.targets.push(muscles[i]);

                }
            }
            this.shootAt(this.targets);
            this.targets = [];
        }




    }

    show(t) {
        image(this.image, this.x, this.y, this.width, this.width);
        this.iam = t;
    }

    //called every frame by obj
    shootAt(objects) {
        if (muscles.length > 0) {
            for (var f = 0; f < this.targets.length; f++) {
                bullets.push(new Brushy(this.targets[f], this.poison, this.damage))
            }
        }

    }

    hudInfo() {
        showStats(towers[this.iam]);
        showRange(towers[this.iam]);
        showUpgrades(towers[this.iam]);
    }

    onClick(i) {
        this.iam = i;
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed && noSpammerino >= 18) {
            hudReset();
            this.selected = true;

        }
    }

}


class Ned extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);
        //cost 300
        this.shootcharge = 0;
        this.chargebuild = 5;
        this.primeshoot = 100;
        this.range = 550;
        this.image = ned;
        this.selected = false;
        this.upgradeA0Image = damagetears;
        this.upgradeA0Description = "Better knights: \ntriple rof";
        this.upgradeB0Image = rangepepe;
        this.upgradeB0Description = "Die: \nKnights are 1.5x better";
        this.knightsActive = [];
        this.knightImage = snow;
        this.knightDamage = 1;
        this.knightHealth = 5;
        this.knights = 0;
        this.maxKnights = 3;
    }
    //called every frame
    lockon() {
        if (this.shootcharge <= this.primeshoot) {
            this.shootcharge += this.chargebuild;
        }

        if (this.knights < this.maxKnights && this.shootcharge >= this.primeshoot) {
            this.shootcharge = 0;
            this.knights++ //replace towers.pushb with jknights.push towers[i] made you 
                towers.push(new Knight(this.x, this.y, this.knightDamage, this.knightHealth, this.range, this.knightImage));
        }
    }

    show(t) {
        image(this.image, this.x, this.y, this.width, this.width);
        this.iam = t;
    }

    hudInfo() {
        showStats(towers[this.iam]);
        showRange(towers[this.iam]);
        showUpgrades(towers[this.iam]);
    }

    //function heal(knight) 
    
    onClick(i) {
        this.iam = i;
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed && noSpammerino >= 18) {
            hudReset();
            this.selected = true;

        }
    }
}

class Knight extends Ned {
    constructor(x, y, damage, health, range, image) {
        super(x, y);
        this.neutralX = x;
        this.neutralY = y;
        this.hp = health;
        this.max = health;
        this.damage = damage;
        this.width = 80;
        this.position = createVector(x, y);
        this.selected = false;
        this.image = snow;
        this.radius = range;
        this.target;
        this.image = image;
        this.dir;
        this.speed = 10;
    }
    //called every frame
    lockon() {

        //chjeck if alive
        //challenge
        if (muscles[0] != null && this.target == null) {
            for (var i = 0; i < muscles.length; i++) {
                if (dist(this.neutralX, this.neutralY, muscles[i].pector.x, muscles[i].pector.y) <= this.range && muscles[i].takenByKnight == false) {
                    this.target = muscles[i];
                }
            }
        }

        if (this.target != null) {
            this.target.speed = 0;
            if (frameCount % 80 == 0) {

                this.hp -= this.target.lifedamage;
                this.target.hp -= this.damage;
                if (this.target.hp <= 0) {
                    this.target = null;
                }

                if (this.hp <= 0) {
                    towers.splice(this.iam);
                }
            } else {
                
                fill("red");
                rect(this.position.x, this.position.y + 110, this.max * 9, 30);
                fill("green");
                rect(this.position.x, this.position.y + 110, this.hp * 9, 30);
                if ((this.position.dist(this.target.pector)) >= 10) {
            //stop moving forward if its not greater
            this.dir = p5.Vector.sub(this.target.pector, this.position);
            this.dir = this.dir.mult(this.speed / this.dir.mag());
            this.position.add(this.dir);
        }
            }
        }




        


    }

    show(t) {
        image(this.image, this.position.x, this.position.y, this.width, this.width);
        this.iam = t;
        if(this.hp< this.max) {
            this.hp += 0.005;
        }


    }

    hudInfo() {
        showStats(towers[this.iam]);
        showRange(towers[this.iam]);
        showUpgrades(towers[this.iam]);
    }

    onClick(i) {
        this.iam = i;
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed && noSpammerino >= 18) {
            hudReset();
            this.selected = true;

        }
    }
}

// 7 more
//might not even need a class
//
//class BobBuilder
//long range sniper that does decent wrench damage 


//class WinterIsComing
//tower that creates swordsmen to defend nearby road tile until they die
//it will 

//class animeGrill
//tower that hunts down enemies moving around the map until the wave is finished doesnt really do much damage though

//class LazyRedEyeDude 
//toewr that does super slow medium damage

//class DabbingSquidward
//aoe damage to all enemies in a square

//smoking meme dude 
//incineration damage

//furious stickman

//Donald Trump super expensive builds a wall that makes all the enemies go back to where they came for one time per wave

//spell card thing chosen based on meme class
