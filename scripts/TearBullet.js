class TearBullet {
    constructor(x, y, target,damage) {
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
    constructor(x, y, target,poison) {
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
            if(this.target.speed > 0.4) { 
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
    constructor(target,poison,damage) {
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
            if(this.target.speed > 1.2) { 
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
    constructor(target,poison,damage, what) {
        this.target = target;
        this.damage = damage;
        this.speed = 8;
        this.image = paintattack;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        this.poison = poison;
        this.duration = 10;
        this.what = what;
    }

    //cange based on what
    
    show() {
        if (this.target != null) {
            image(this.image, this.target.pector.x, this.target.pector.y, 30, 30);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        this.iam = i;
            //hit slow
            if(this.target.speed > 1.2) { 
                this.target.speed -= this.poison;
            }
                this.target.poisoned += this.poison;
            this.target.hp -= this.damage;
        console.log("kibasdjkbasjkdb")
            bullets.splice(this.iam, 1);
        } 
        }

    //exploding bitcoin technology damage  btc will be high volatile damage, might heal the enemy actually. -1 - 30 damage
