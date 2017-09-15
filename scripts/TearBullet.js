class TearBullet {
    constructor(x, y) {
        this.x = x;
        thix.y = y;

        this.damage = 1;
        this.speed = 10;
        this.reachedGoal = false; // might not even need
        this.iam;
    }

    getIndexAndDie(i) {
        this.index = i;
        if (this.hit()) {
            tearBullets.splice(this.index);
        }
    }

    //    hit(x,y) {
    //        enemyX = x;
    //        enemyY = y;
    //        
    //        if(this.dist(this.x,this.y,enemyX,enemyY) < 0) {
    //            
    //            getIndexAndDie(); // call this in the loop in sketch;
    //            return true;
    //        }
    //    }

    //    move() {
    //        this.diffX = enemy.x - this.x;
    //        this.diffY = enemy.y - this.y;
    //        closestPos = createVector(enemy.x,enemy.y);
    //        
    //        velocity.x = diffX;
    //        velocity.y = diffY;
    //        
    //        this.x += velocity.x * 0.02 * speed;
    //        this.y += velocity.y * 0.02 * speed;
    //    }

    show(i) {
        image(tear, this.x, this.y, 10, 10);
        this.iam = i;
    }

    //also have the hit function built in or make it separate
    move(object) {
        this.target = object.pector
        if (this.target == null || this.hit(object)) {
            bullets.splice(this.iam, 1);
        }
        //movement

        this.distFrame = this.speed * (1 / 60);
        //todo improve this checking dist
        if (dist(object.pector.x, object.pector.y, this.x, this.y) <= this.distFrame) {
            this.targetVec = null; //reached node
        } else {
            this.pector.x += this.movementVector.x * this.distFrame;
            this.pector.y += this.movementVector.y * this.distFrame;
        }

    }
}

//called once


checkExits(i) {
    this.iam = i;
    if (this.hp <= 0) {
        gold += 1;

    } else if (this.reachedGoal) {
        lives--;
        console.log("sh")
        bullets.splice(this.iam, 1);

    }
}


}
