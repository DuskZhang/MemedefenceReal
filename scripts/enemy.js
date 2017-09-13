class NormieMuscle {
    constructor(x, y) {
        //    this.x = x;
        //    this.y = y;
        this.vector = (x, y);
        this.hp = 3
        this.speed = 5;

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        this.reachedGoal = false;
        // once every 1/2 second if running at 60fps
    }

    show() {
        image(muscleImg, this.x, this.y, this.width, this.height);
    }
    //called once
    getPathNode() {
        this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
        this.nodeIndex++

    }
    //called 60fps
    move(x, y) {
        if (this.targetVec == null) {
            this.getPathNode();
            if (this.targetVec == null) {
                this.reachedGoal = true;
            }
        }

        this.movementVector = this.targetVec - this.vector;

        this.distFrame = this.speed * (1 / 60);

        if (this.movementVector <= this.distFrame) {
            this.targetVec = null; //reached node
        } else {
            this.vector.add(this.targetVec * this.distFrame);
        }

    }

    checkExits(i) {
        if (this.hp <= 0) {
            gold += 1;
            enemies[iam].splice;
        } else if (this.reachedGoal) {
            lives--;
            enemies[iam].splice;
        }
    }
}
