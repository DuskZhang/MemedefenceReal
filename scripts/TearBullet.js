class TearBullet {
    constructor(x,y) {
        this.x = x;
        thix.y = y;
        
        this.damage = 3;
        this.speed = 10;
        this.diffX;
        this.diffY;
    }
    
    getIndexAndDie(i) {
        this.index = i;
        if(this.hit()) {
            tearBullets.splice(this.index);
        }
    }
    
    hit(x,y) {
        enemyX = x;
        enemyY = y;
        
        if(this.dist(this.x,this.y,enemyX,enemyY) < 0) {
            
            getIndexAndDie(); // call this in the loop in sketch;
            return true;
        }
    }
    
    move() {
        this.diffX = enemy.x - this.x;
        this.diffY = enemy.y - this.y;
        closestPos = createVector(enemy.x,enemy.y);
        
        velocity.x = diffX;
        velocity.y = diffY;
        
        this.x += velocity.x * 0.02 * speed;
        this.y += velocity.y * 0.02 * speed;
    }
    
    show() {
        image(tear, this.x, this.y);
    }
    
}