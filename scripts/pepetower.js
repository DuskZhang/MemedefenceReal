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
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
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


        for (var i = 0; i < muscles.length; i++) {
            if (this.checkInRange(muscles[i]) && this.shootcharge == this.primeshoot)  {
                this.shootAt(muscles[i]);
                this.shootcharge = 0;
                console.log("ye")
                break;
            }
        }

    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
    }

    checkInRange(object) {
        if(dist(this.x, this.y, object.pector.x, object.pector.y) <= this.range && this.shootcharge == this.primeshoot) {
            console.log(object.pector.x) 
            return true;
        }
        
    }
            //create a new bullet
        shootAt(object) {
            console.log(object.pector);
//            enemyX = x;
//            enemyY = y;
//            if (dist(this.x, this.y, enemyX, enemyY) <= this.range && this.shootcharge == this.primeshoot) {
//                this.shootcharge = 0;
//                var pepebullet = array.push(new TearBullet(this.x, this.y)) {}
//            }
    
        }

}
