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
        if(muscles.length > 0) {
        for(var f = 0; f < this.targets.length; f++) {
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
