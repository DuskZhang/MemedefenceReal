class Doge extends Tower {
    constructor(x, y, original) {
        super(x, y, original);
        this.position = createVector(this.x, this.y);
        this.neutralPositionx = this.x;
        this.neutralPositiony = this.y;
        this.damage = 5; // Will need this because doge wont be producing any bullets for damage
        this.shootcharge = 0;
        this.chargebuild = 3
        this.primeshoot = 160;
        this.range = 100;
        this.image = doge;
        this.speed = 16;
        this.dir;
        this.upgradeA0Image = snoopdoge;
        this.upgradeA0Description = "High: \n15%speed,triple rof";
        this.upgradeA1Image = dogea1;
        this.upgradeA1Description = "Wo: \ndmg 210%, speed 70%";
        this.upgradeA2Image = dogea2;
        this.upgradeA2Description = "Stoned: \ndmg 420%, speed 10%";
        this.upgradeB0Image = icedoge;
        this.upgradeB0Description = "Wolf: \n200%speed";
        this.upgradeB1Image = dogeb1;
        this.upgradeB1Description = "Revenge: \n400%speed";
        this.upgradeB2Image = dogeb2;
        this.upgradeB2Description = "Three pronged: \ntriple hit";
        this.sellPrice = dogePrice * 0.9;
        this.cerberusHeads = [];

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
        this.iam = t;
        image(this.image, this.position.x, this.position.y, this.width, this.width);
        if(this.cerberusHeads.length == 2) {
            this.cerberusHeads[0].width = 26;
            this.cerberusHeads[1].width = 35;
            this.cerberusHeads[1].chargebuild = 4;
            for( let u = 0; u<this.cerberusHeads.length; u++) {
                this.cerberusHeads[u].show(u);
                this.cerberusHeads[u].lockon();
            }
        }
    }

    //called every frame by obj
    shootAt(object) {
        //charge at enemy instead of pushing a new bullet
        if (this.shootcharge >= this.primeshoot) {
            this.dir = p5.Vector.sub(object.pector, this.position);
            this.dir = this.dir.mult(this.speed / this.dir.mag());


            if ((this.position.dist(object.pector)) <= this.speed) {
                //hit
                this.position.x = this.neutralPositionx;
                this.position.y = this.neutralPositiony;
                object.hp -= this.damage;
                this.shootcharge = 0;
            } else {
                this.position.add(this.dir);
            }

        }

    }


}
