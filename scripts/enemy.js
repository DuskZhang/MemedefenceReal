class Enemy {
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
        this.poisoned = 0;
        this.poisontick = 30;
        this.lifedamage = 1;
        this.takenByKnight = false;
        this.regularSpeed = 1.5;
        this.takenByBitcoin = false;
    }

    show() {

        if(this.takenByKnight && this.speed > 0) {
            this.takenByKnight = false;
        }
        
        if (this.hp <= 0) {
            gold += 4;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max * 10, 10);
        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp * 10, 10);
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;

        } else {
            this.targetVec = null;
            lives-=this.lifedamage;
            muscles.splice(this.iam, 1);

        }


    }

    //called 60fps
    move(i) {

        //poisoned
        this.hp -= this.poisoned / this.poisontick;
        this.poisoned -= this.poisoned / this.poisontick;


        this.iam = i;
        if (this.hp <= 0) {
            gold += 4;
            muscles.splice(this.iam, 1);
        }

        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 60) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }
}

class NormieMuscle extends Enemy {
    constructor(x, y) {
        super();
        this.pector = createVector(x, y);
        this.hp = 5;
        this.max = 5;
        this.speed = 1.8; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = muscleImg
        this.poisoned = 0;
        this.poisontick = 30;
    }

    

    //called 60fps
    move(i) {

        //poisoned
        this.hp -= this.poisoned / this.poisontick;
        this.poisoned -= this.poisoned / this.poisontick;


        this.iam = i;
        if (this.hp <= 0) {
            gold += 4;
            muscles.splice(this.iam, 1);
        }

        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }

}

class Workers extends Enemy {
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
        this.lifedamage = 3;
    }

    show() {
    if(this.takenByKnight && this.speed > 0) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            gold += 55;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max / 5, 10);
        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp / 5, 10);

        this.hp -= 0.06;
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
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }

    //make the guy lose hp over time lol from killing himself
}

class BabyBoomer extends Enemy {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 24;
        this.max = 35;
        this.speed = 1; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = babyboomers;
        this.lifedamage = 2;
    }

    show() {
   if(this.takenByKnight && this.speed > 0) {
            this.takenByKnight = false;
        }
        if (this.hp <= 0) {
            gold += 35;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max, 10);
        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp, 10);

        if (this.hp <= this.max) {
            this.hp += 0.03;
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
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }

    //make the guy lose hp over time lol from killing himself
}

class Teacher extends Enemy {
    constructor(x, y) {
        //buffs normies hp / speed 
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 35;
        this.max = 35;
        this.speed = 1; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = teacher;
        this.supportTimer = 0;
        this.supportImage = book;
        this.lifedamage = 3;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            gold += 65;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max, 10);

        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }

        rect(this.pector.x, this.pector.y + this.width, this.hp, 10);
    }



    //called 60fps
    move(i) {
        this.supportTimer++;
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }

        if (muscles.length > 1 && this.supportTimer % 120 == 0) {
            this.support(muscles[Math.round(random(0, muscles.length - 1))]);
        }



    }

    support(randomAlly) {
        randomAlly.hp += 3;
        randomAlly.speed += 0.5;
        image(this.supportImage, randomAlly.pector.x, randomAlly.pector.y, 30, 30);
    }



    //make the guy lose hp over time lol from killing himself
}

class ImprovedMuscle extends Enemy {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 100;
        this.max = 100;
        this.speed = 0.4; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = improvedmuscle;
        this.lifedamage = 5;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            gold += 35;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max, 10);
        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp, 10);

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
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }
    }

}

class JohnCena extends Enemy {
    constructor(x, y) {
        //buffs normies hp / speed 
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 790;
        this.max = 790;
        this.speed = 0.2; // dont go over 4 or it gets all buggy
        this.regularSpeed = 0.2;
        this.width = 110;
        this.height = 110;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = johncena;
        this.supportTimer = 0;
        this.supportImage = book;
        this.lifedamage = 8;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            gold += 200;
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max/2, 50);

        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }

        rect(this.pector.x, this.pector.y + this.width, this.hp/2, 50);
    }



    //called 60fps
    move(i) {
        this.supportTimer++;
        this.iam = i;
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 120) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }

        if (muscles.length > 1 && this.supportTimer % 120 == 0) {
            this.support(muscles[Math.round(random(0, muscles.length - 1))]);
        }



    }

    support(randomAlly) {
        randomAlly.hp += 3;
        randomAlly.speed += 0.5;
        image(this.supportImage, randomAlly.pector.x, randomAlly.pector.y, 30, 30);
    }



    
}
