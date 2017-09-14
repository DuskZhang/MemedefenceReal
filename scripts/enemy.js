class NormieMuscle {
    constructor(x, y) {
        this.pector = createVector(x, y);
        this.hp = 3
        this.speed = 4; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        this.reachedGoal = false;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = muscleImg
    }

    show() {
        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;

        } else {
            this.targetVec = null;
            this.reachedGoal = true;
        }


    }

    //called 60fps
    move(i) {
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();

            if (this.targetVec == null) {
                this.checkExits(this.iam);
            }
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

    //called once


    checkExits(i) {
        this.iam = i;
        if (this.hp <= 0) {
            gold += 1;

        } else if (this.reachedGoal) {
            lives--;
            console.log("sh")
            muscles.splice(this.iam,1);

        }
    }
}
