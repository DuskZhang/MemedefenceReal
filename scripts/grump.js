class Grump extends Tower {
    constructor(x, y,original) {
        //todo get x y from mouse location
        super(x, y,original);
        this.position = createVector(this.x, this.y);
        this.damage = 1; // Will need this because doge wont be producing any bullets for damage
        this.range = 30;
        this.image = attackgrump;
        this.hits = 0;
        this.maxHits = 30;
        this.chargebuild = 30;
        this.selected = false;
        this.originalTile = original;
        this.sellPrice = grumpPrice * 0.9;
        //amke it so that u can palce again on same tile
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
        console.log(this.originalTile)
        //charge at enemy instead of pushing a new bullet
        if ((this.position.dist(object.pector)) <= this.range) {
            //hit
            object.hp -= this.damage;
            this.hits++
                if (this.maxHits == this.hits) {
                    this.selected = false;
                    tiles[this.originalTile].tileTaken = false;
                    towers.splice(this.iam, 1);
                     
                }


        }

    }

}
