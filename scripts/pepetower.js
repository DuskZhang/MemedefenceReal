class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.damage = 1;
        this.shootcharge = 0; // once it hits primeshoot it fires
        this.chargebuild = 5
        this.primeshoot = 100;
        this.range;
        this.image;
        this.width = 60;
        this.iam;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
    }

    lockon() {

    }

    shootAt() {

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
        if (this.shootcharge == this.primeshoot) {
            this.shootcharge = 0;
            bullets.push(new TearBullet(this.x, this.y, object))

        }

    }

}

class Doge extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);
        this.position = createVector(this.x, this.y);
        this.neutralPositionx = this.x;
        this.neutralPositiony = this.y;
        this.damage = 5; // Will need this because doge wont be producing any bullets for damage
        this.shootcharge = 0;
        this.chargebuild = 5
        this.primeshoot = 280;
        this.range = 100;
        this.image = doge;
        this.speed = 20;
        this.dir;

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
        if (this.shootcharge == this.primeshoot) {
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

class Grump extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);
        this.position = createVector(this.x, this.y);
        this.damage = 1; // Will need this because doge wont be producing any bullets for damage
        this.range = 30;
        this.image = attackgrump;
        this.hits = 0;
        this.maxHits = 20;
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
        if ((this.position.dist(object.pector)) <= this.range) {
            //hit
            object.hp -= this.damage;
            this.hits++
                if (this.maxHits == this.hits) {
                    towers.splice(this.iam, 1);
                }


        }

    }

}

class Wonka extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);

        this.damage = 1; // prob will not need this on tower
        this.shootcharge = 0;
        this.chargebuild = 5
        this.primeshoot = 200;
        this.range = 6969;
        this.image = wonka;


    }
    //called every frame
    lockon() {
        if (this.shootcharge < this.primeshoot) {
            this.shootcharge += this.chargebuild;

        }
        //shoots at first enemy in muscles array to meet if statement

        if (muscles[0] != null) { //getting a decimal point
            this.shootAt(muscles[random(0, muscles.length - 1)]);
        }
    }




show(t) {
    image(this.image, this.x, this.y, this.width, this.width);
    this.iam = t;
}

//called every frame by obj
shootAt(object) {
    if (this.shootcharge == this.primeshoot) {
        this.shootcharge = 0;
        bullets.push(new WonkaBar(this.x, this.y, object))

    }

}

}

//might not even need a class
//
//class BobBuilder
//long range sniper that does decent wrench damage 

//class WillyWonka
//tower that purely slows nearby enemies up to 75% doesnt stack

//class WinterIsComing
//tower that creates swordsmen to defend nearby road tile until they die
//it will 

//class animeGrill
//tower that hunts down enemies moving around the map until the wave is finished doesnt really do much damage though

//class LazyRedEyeDude 
//toewr that does super slow medium damage

//class DabbingSquidward
//aoe damage
