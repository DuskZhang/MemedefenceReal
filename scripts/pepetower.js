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
        for (var i = 0; i < muscles.length; i++) {
            if(dist(this.x, this.y, muscles[i].pector.x, muscles[i].pector.y) <= this.range)  {
                this.shootAt(muscles[i]);
                break;
            }
        }

    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
    }

    //called every frame by obj
    shootAt(object) {
        if(this.shootcharge == this.primeshoot) {
            this.shootcharge = 0;
            bullets.push(new TearBullet(this.x, this.y,object))
            
        }
        
    }
         
}

class Doge extends Tower{
    
}
