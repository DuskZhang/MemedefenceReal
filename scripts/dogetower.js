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
        this.speed = 20;
        this.dir;
        this.upgradeA0Image = snoopdoge;
        this.upgradeA0Description = "High: \n15%speed,triple rof";
        this.upgradeB0Image = icedoge;
        this.upgradeB0Description = "Wolf: \n300%speed";

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

    }

    //called every frame by obj
    shootAt(object) {
        //charge at enemy instead of pushing a new bullet
        if (this.shootcharge >= this.primeshoot) {
            this.dir = p5.Vector.sub(object.pector, this.position);
            this.dir = this.dir.mult(this.speed / this.dir.mag());


            if ((this.position.dist(object.pector)) <= 10) {
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
