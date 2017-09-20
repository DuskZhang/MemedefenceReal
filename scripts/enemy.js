class NormieMuscle {
    constructor(x, y) {
        this.pector = createVector(x, y);
        this.hp = 3
        this.max = 3;
        this.speed = 2; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = muscleImg
    }

    show() {
        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max * 10, 10);
        fill(30, 223, 23);
        rect(this.pector.x, this.pector.y + this.width, this.hp * 10, 10);

        if (this.hp <= 0) {
            gold += 4;
            muscles.splice(this.iam, 1);
        }
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;

        } else {
            this.targetVec = null;
            lives--;
            muscles.splice(this.iam, 1);

        }


    }

    //called 60fps
    move(i) {
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= 0.1) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }

}

class Workers extends NormieMuscle{
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 200;
        this.max = 200;
        this.speed = 1; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = japsover;
    }
    
     show() {
        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max /5, 10);
        fill(30, 223, 23);
        rect(this.pector.x, this.pector.y + this.width, this.hp /5, 10);

         this.hp -= 0.06;
         
        if (this.hp <= 0) {
            gold += 75;
            muscles.splice(this.iam, 1);
        }
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;

        } else {
            this.targetVec = null;
            lives-=3;
            muscles.splice(this.iam, 1);

        }


    }

    //called 60fps
    move(i) {
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= 0.1) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }
    
    //make the guy lose hp over time lol from killing himself
}

class BabyBoomer extends NormieMuscle{
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 200;
        this.max = 200;
        this.speed = 1.8; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = japsover;
    }
    
     show() {
        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max /5, 10);
        fill(30, 223, 23);
        rect(this.pector.x, this.pector.y + this.width, this.hp /5, 10);

         //make this guy get angry when he loses hp
         
        if (this.hp <= 0) {
            gold += 75;
            muscles.splice(this.iam, 1);
        }
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;

        } else {
            this.targetVec = null;
            lives--;
            muscles.splice(this.iam, 1);

        }


    }

    //called 60fps
    move(i) {
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= 0.1) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }
    
    //make the guy lose hp over time lol from killing himself
}

