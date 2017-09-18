class TearBullet {
    constructor(x, y, target) {
        this.position = createVector(x, y);
        this.target = target;
        this.damage = 1;
        this.speed = 1;
        this.image = tear;
        this.iam;
        this.dir;
        this.reachedTarget = false;
        
    }

    getIndexAndDie(i) {
        this.iam = i;
        if (this.reachedTarget) {
            bullets.splice(this.iam,1);
        }
    }


    show() {
        image(this.image, this.position.x, this.position.y, 30, 30);
    }

    //also have the hit function built in or make it separate ,,,, called at 60fps
    move() {
        //movement
        this.dir = this.target.pector.sub(this.position);
        this.distFrame = this.dir.mult(this.speed * (1 / 60));
        if ((this.position.dist(this.target.pector)) <= 0.5) {
            
            this.target.hp -= this.damage;
            this.reachedTarget = true; //reached node
        } else {
            this.position.add(this.distFrame);
    }

}
}
