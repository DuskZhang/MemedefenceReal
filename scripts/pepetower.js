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

    //on click show range and upgrades + stats

    //    onClick() {
    //        showStats([towers[this.iam]]);
    //        showRange([towers[this.iam]]);
    //    }

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



//Weaboo
//upgrades into animegrills yandere runs around killing people
//damage increases closer to japan
class AngryWeaboo extends Tower {
    constructor(x, y) {
        //todo get x y from mouse location
        super(x, y);
        this.position = createVector(this.x, this.y);
        this.neutralPositionx = this.x;
        this.neutralPositiony = this.y;
        this.damage = 0.3;
        this.shootcharge = 0;
        this.chargebuild = 5
        this.primeshoot = 50;
        this.range = 100;
        this.image = angryweab;


    }
    //called every frame
    lockon() {
        if (this.shootcharge < this.primeshoot) {
            this.shootcharge += this.chargebuild;

        }
        //shoots at first enemy in muscles array to meet if statement

        if (muscles[0] != null) {
            for (var i = 0; i < muscles.length; i++) {
                if (dist(this.position.x, this.position.y, muscles[i].pector.x, muscles[i].pector.y) <= this.range) {
                    this.shootAt(muscles[i]);
                    break;
                }
            }
        }
    }




    show(t) {
        image(this.image, this.position.x, this.position.y, this.width, this.width);
        this.iam = t;
        
        if(waveOn == false) {
            this.position.x = this.neutralPositionx;
            this.position.y = this.neutralPositiony;
        }
    }

    //called every frame by obj
    shootAt(object) {
        if (this.shootcharge == this.primeshoot) {
            this.dir = p5.Vector.sub(object.pector, this.position);
            this.dir = this.dir.mult(this.speed / this.dir.mag());
            //meleeswordbullet

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
