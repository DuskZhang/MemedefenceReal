//WONKA

class Wonka extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);

        this.damage = 1; // prob will not need this on tower
        this.shootcharge = 0;
        this.chargebuild = 4
        this.primeshoot = 150;
        this.range = 6969;
        this.image = wonka;
        this.upgradeA0Image = blueberry;
        this.upgradeA0Description = "Blueberries: \n1 damage dot";
        this.upgradeB0Image = turnwonka;
        this.upgradeB0Description = "Suspicious: \ndouble rof";
        this.poison = 0;

    }
    //called every frame
    lockon() {
        if (this.shootcharge < this.primeshoot) {
            this.shootcharge += this.chargebuild;

        }
        //shoots at first enemy in muscles array to meet if statement

        if (muscles[0] != null) { //getting a decimal point
            this.shootAt(muscles[Math.round(random(0, muscles.length - 1))]);
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
            bullets.push(new WonkaBar(this.x, this.y, object, this.poison))

        }

    }

}