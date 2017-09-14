class NormieMuscle {
    constructor(x, y) {
        this.pector = createVector(x, y);
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
        this.iam;
        this.image = muscleImg
    }

    show() {
        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
    }
    
    
     getPathNode() {
         if(this.nodeIndex < nodes.length) {
             this.nodeIndex++;
             this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);   
             
         }
         else {
             targetVec = null;
             this.reachedGoal = true;
         }
    
        
    }
    
    //called 60fps
    move() {
        if (this.targetVec == null) {
            this.getPathNode();
        }
        //getting the x and y values of the target 
        this.movementVector = this.targetVec - this.pector;

        this.distFrame = this.speed * (1 / 60);

        if (dist(this.x,this.y, this.targetVec.x, this.targetVec.y) <= 0.1 ) {
            this.targetVec = null; //reached node
        } else {
            this.pector.add((this.targetVec * this.distFrame));
            
        }

    }

    //called once
   
    
    checkExits(i) {
        this.iam = i;
        if (this.hp <= 0) {
            gold += 1;
            enemies[this.iam].splice;
        } else if (this.reachedGoal) {
            lives--;
            enemies[this.iam].splice;
        }
    }
}
