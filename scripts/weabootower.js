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
        this.damage = 0.6;
        this.shootcharge = 0;
        this.chargebuild = 5
        this.primeshoot = 80;
        this.range = 130;
        this.image = angryweab;
        this.dir;
        this.speed = 10;


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
        if(this.dir != null) {
            image(katana,this.position.x,this.position.y,this.width * 2, this.width);
        }
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
                object.hp -= this.damage;
                this.shootcharge = 0;
            } else {
                this.position.add(this.dir);
            }

        }

    }

}