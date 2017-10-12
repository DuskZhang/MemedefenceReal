class TearBullet {
    constructor(x, y, target, damage) {
        this.position = createVector(x, y);
        this.target = target;
        this.damage = damage;
        this.speed = 5;
        this.image = tear;
        this.iam;
        this.dir;
        this.reachedTarget = false;

    }

    show() {
        image(this.image, this.position.x, this.position.y, 30, 30);
    }



    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        //movement

        if (this.target == null) {
            bullets.splice(this.iam, 1);
        }
        this.dir = p5.Vector.sub(this.target.pector, this.position);
        this.dir = this.dir.mult(this.speed / this.dir.mag());
        if (this.target.hp <= 0) {
            bullets.splice(this.iam, 1);
        }

        if ((this.position.dist(this.target.pector)) <= 15) {
            //hit
            this.iam = i;
            this.target.hp -= this.damage;
            bullets.splice(this.iam, 1);
        } else {
            this.position.add(this.dir);
        }

    }
}

class WonkaBar {
    constructor(x, y, target, poison) {
        this.position = createVector(x, y);
        this.target = target;
        this.damage = 1;
        this.speed = 8;
        this.image = wonkabar;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        this.poison = poison;

    }

    show() {
        if (this.target != null) {
            image(this.image, this.position.x, this.position.y, 30, 30);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        this.iam = i;
        //movement
        this.dir = p5.Vector.sub(this.target.pector, this.position);
        this.dir = this.dir.mult(this.speed / this.dir.mag());
        if (this.target.hp <= 0) {
            bullets.splice(this.iam, 1);
        }
        if (this.target == null) {
            bullets.splice(this.iam, 1);
        }
        if ((this.position.dist(this.target.pector)) <= 15) {
            //hit
            if (this.target.speed > 0.4) {
                this.target.speed = this.target.speed * 0.5;
            }
            this.target.poisoned += this.poison;
            this.target.hp -= this.damage;
            bullets.splice(this.iam, 1);
        } else {
            this.position.add(this.dir);
            if (this.target.pector == null) {
                bullets.splice(this.iam, 1);
            }
        }

    }
}

class Brushy {
    constructor(target, poison, damage) {
        this.target = target;
        this.damage = damage;
        this.speed = 8;
        this.image = paintattack;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        this.poison = poison;
        this.duration = 10;
    }

    show() {
        if (this.target != null) {
            image(this.image, this.target.pector.x, this.target.pector.y, 30, 30);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        this.iam = i;
        //hit slow
        if (this.target.speed > 1.2) {
            this.target.speed -= this.poison;
        }
        this.target.poisoned += this.poison;
        this.target.hp -= this.damage;
        console.log("kibasdjkbasjkdb")
        bullets.splice(this.iam, 1);
    }
}

//exploding bitcoin technology damage  btc will be high volatile damage, might heal the enemy actually. -1 - 30 damage

class SpongebobMeme {
    constructor(x, y, target, what) {
        this.x = x;
        this.y = y;
        this.position = createVector(this.x, this.y);
        this.target = target;
        this.what = what;
        this.speed = 4;
        this.image = bobross;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        this.damage;
    }

    //cange based on what

    show() {
        if (this.target != null) {
            image(this.image, this.position.x, this.position.y, 130, 130);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        this.image = memes[this.what - 1];
        this.damage = this.what;

        this.dir = p5.Vector.sub(this.target.pector, this.position);
        this.dir = this.dir.mult(this.speed / this.dir.mag());

        if ((this.position.dist(this.target.pector)) <= 15) {
            //hit
            this.target.hp -= this.damage;
            bullets.splice(this.iam, 1);
        } else {
            this.position.add(this.dir);
            if (this.target.pector == null) {
                bullets.splice(this.iam, 1);
            }
        }


        this.iam = i;

    }
}

class BitcoinFire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.position = createVector(this.x, this.y);
        this.target = null;
        this.speed = 5;
        this.image = bitcoins;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        this.damage = 18;
    }

    //cange based on what

    show() {
        if (this.target != null) {
            image(this.image, this.position.x, this.position.y, 130, 130);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        if (muscles[0] != null && frameCount % 20 == 0) {
            this.target = muscles[floor(random(0, muscles.length))];
            }
            else if (frameCount % 20 == 0){
                this.target = null;
                bullets.splice(this.iam, 1);
            }

            if(this.target != null) {
                this.dir = p5.Vector.sub(this.target.pector, this.position);
            this.dir = this.dir.mult(this.speed / this.dir.mag());

            if ((this.position.dist(this.target.pector)) <= 15) {
                //hit
                this.target.hp -= this.damage;
                bullets.splice(this.iam, 1);
            } else {
                this.position.add(this.dir);
                if (this.target.pector == null) {
                    bullets.splice(this.iam, 1);
                }
            }
            }
            


            this.iam = i;

        }
    }


//exploding bitcoin technology damage  btc will be high volatile damage, might heal the enemy actually. -1 - 30 damage
