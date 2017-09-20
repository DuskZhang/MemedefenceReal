class TearBullet {
    constructor(x, y, target) {
        this.position = createVector(x, y);
        this.target = target;
        this.damage = 1;
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
        
        if(this.target == null) {
            bullets.splice(this.iam, 1);
        }
        this.dir = p5.Vector.sub(this.target.pector,this.position);
        this.dir = this.dir.mult(this.speed / this.dir.mag());

        if(this.target == null) {
             bullets.splice(this.iam, 1);
        }
        if ((this.position.dist(this.target.pector)) <= 15 ) {
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
    constructor(x, y, target) {
        this.position = createVector(x, y);
        this.target = target;
        this.damage = 1;
        this.speed = 8;
        this.image = wonkabar;
        this.iam;
        this.dir;
        this.reachedTarget = false;

    }

    show() {
        if(this.target != null) {
        image(this.image, this.position.x, this.position.y, 30, 30);
        }
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move(i) {
        this.iam = i;
        //movement
        this.dir = p5.Vector.sub(this.target.pector,this.position);
        this.dir = this.dir.mult(this.speed / this.dir.mag());

        if(this.target == null) {
             bullets.splice(this.iam, 1);
        }
        if ((this.position.dist(this.target.pector)) <= 15 ) {
            //hit
            this.target.speed -= 1
            this.target.hp -= this.damage;
            bullets.splice(this.iam, 1);
        } else {
            this.position.add(this.dir);
            if(this.target.pector == null) {
                bullets.splice(this.iam, 1);
            }
        }

    }
}
