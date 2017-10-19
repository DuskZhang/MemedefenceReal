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
        this.distanceFromNode1;
        this.distanceFromNode2;
        this.justNoded = false;
        this.gold
        this.goldWave5
        this.factor = 1;
    }

    checkGameBreakingBug1() {
        if (this.targetVec != null) {
            this.distanceFromNode1 = dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y);
        }

        this.justNoded = false;
    }
    //after move
    checkGameBreakingBug2() {
        if (this.targetVec != null) {
            this.distanceFromNode2 = dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y);
        }
        if (this.distanceFromNode2 > this.distanceFromNode1 && this.justNoded == false) {
            this.getPathNode();
            console.log("avoided game breaking bug")
        }
    }

    show() {

        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            if (wave < 5) {
                gold += this.gold;
            } else {
                gold += this.goldWave5;
            }
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max * this.factor, 10);
        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp * this.factor, 10);
    }


    getPathNode() {
        if (this.nodeIndex < nodes.length) {

            this.targetVec = createVector(nodes[this.nodeIndex].x, nodes[this.nodeIndex].y);
            this.movementVector = createVector(this.targetVec.x - this.pector.x, this.targetVec.y - this.pector.y)
            this.nodeIndex++;
            this.justNoded = true;

        } else {
            this.targetVec = null;
            lives -= this.lifedamage;
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
            gold += 5;
            muscles.splice(this.iam, 1);
        }


        if (this.targetVec !== null) {
            //getting the x and y values of the target 
            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 10) {
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
        this.gold = 3;
        this.goldWave5 = 1;
        this.factor = 6;
    }



    //called 60fps
    move(i) {

        //poisoned
        this.hp -= this.poisoned / this.poisontick;
        this.poisoned -= this.poisoned / this.poisontick;


        this.iam = i;

        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 100) {
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
        this.gold = 32;
        this.goldWave5 = 16;
    }


    //called 60fps
    move(i) {
        this.hp -= 0.06;
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
        this.gold = 22;
        this.goldWave5 = 11;
    }




    //called 60fps
    move(i) {
        if (this.hp <= this.max) {
            this.hp += 0.03;
        }
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
        this.lifedamage = 2;
        this.gold = 30;
        this.goldWave5 = 15;
    }

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
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 100) {
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
        this.lifedamage = 3;
        this.gold = 25;
        this.goldWave5 = 15;
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
        this.hp = 690;
        this.max = 690;
        this.speed = 0.2; // dont go over 4 or it gets all buggy
        this.regularSpeed = 0.25;
        this.width = 110;
        this.height = 110;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = johncena;
        this.lifedamage = 6;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            if (wave < 5) {
                gold += 80;
            } else {
                gold += 40;
            }
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max / 2, 50);

        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }

        rect(this.pector.x, this.pector.y + this.width, this.hp / 2, 50);
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
class Trump extends Enemy {
    constructor(x, y) {
        //buffs normies hp / speed 
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 2016;
        this.max = 2024;
        this.speed = 0.2; // dont go over 4 or it gets all buggy
        this.regularSpeed = 0.3;
        this.width = 90;
        this.height = 90;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = donald;
        this.lifedamage = 6;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            if (wave < 5) {
                gold += 80;
            } else {
                gold += 40;
            }
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max / 2, 50);

        if (this.hp > this.max) {
            fill("blue");
        } else {
            fill(30, 223, 23);
        }

        rect(this.pector.x, this.pector.y + this.width, this.hp / 2, 50);
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
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 180) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }



    }



}

class Philosopher extends Enemy {
    constructor(x, y) {
        //buffs normies hp / speed 
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 300;
        this.max = 350;
        this.speed = 0.75; // dont go over 4 or it gets all buggy

        this.width = 80;
        this.height = 80;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = aristotles;
        this.supportTimer = 0;
        this.supportImage = book;
        this.lifedamage = 2;
        this.supportAnimation = 0
        this.randomAlly;
    }

    show() {
        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            if (wave < 5) {
                gold += 30;
            } else {
                gold += 15;
            }
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
        console.log(this.supportAnimation)
        
        this.iam = i;
        if (this.randomAlly != null && (this.randomAlly != muscles[this.iam])) {
            this.support(this.randomAlly);
        }

        
        if (this.targetVec == null) {
            this.getPathNode();
        }

        if (this.targetVec !== null) {
            //getting the x and y values of the target 


            this.distFrame = this.speed * (1 / 60);
            //todo improve this checking dist
            if (dist(this.pector.x, this.pector.y, this.targetVec.x, this.targetVec.y) <= this.distFrame * 100) {
                this.targetVec = null; //reached node
            } else {
                this.pector.x += this.movementVector.x * this.distFrame;
                this.pector.y += this.movementVector.y * this.distFrame;
            }

        }

        if (muscles.length > 1 && this.supportAnimation <= 0) {
            if (this.randomAlly != muscles[this.iam]) {
                this.supportAnimation = 120;
            }
            this.randomAlly = (muscles[Math.round(random(0, muscles.length - 1))]);


        }



    }

    support(randomAlly) {
        if(this.supportAnimation > 0) {
            randomAlly.hp += 0.1;
            randomAlly.speed += 0.01;
            image(this.supportImage, randomAlly.pector.x, randomAlly.pector.y, 70, 70);
            this.supportAnimation--
        }

    }



    //make the guy lose hp over time lol from killing himself
}

class Cavalry extends Enemy {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 100;
        this.max = 100;
        this.speed = 3.4; // dont go over 4 or it gets all buggy

        this.width = 50;
        this.height = 50;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = cavalry;
        this.lifedamage = 2;
        this.gold = 25;
        this.goldWave5 = 10;
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

class Emo extends Enemy {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 300;
        this.max = 150;
        this.speed = 2.65; 

        this.width = 60;
        this.height = 60;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = emo;
        this.lifedamage = 2;
        this.gold = 11;
        this.goldWave5 = 8;
    }

    show() {

        if (this.takenByKnight && this.speed == this.regularSpeed) {
            this.takenByKnight = false;
        }

        if (this.hp <= 0) {
            if (wave < 5) {
                gold += this.gold;
            } else {
                gold += this.goldWave5;
            }
            muscles.splice(this.iam, 1);
        }

        image(this.image, this.pector.x, this.pector.y, this.width, this.height);
        //hp bars

        fill("red");
        rect(this.pector.x, this.pector.y + this.width, this.max * this.factor, 10);
        if (this.hp > this.max) {
            fill("black");
        } else {
            fill("purple");
        }
        rect(this.pector.x, this.pector.y + this.width, this.hp * this.factor, 10);
        this.hp -= 0.04;
    }

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

class Jordan extends Enemy {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.pector = createVector(this.x, this.y);
        this.hp = 1000;
        this.max = 1000;
        this.speed = 1.3; // dont go over 4 or it gets all buggy

        this.width = 70;
        this.height = 70;

        this.nodeIndex = 0;
        this.targetVec;
        this.movementVector;
        this.distFrame;
        // once every 1/2 second if running at 60fps
        this.iam;
        this.image = jordan;
        this.lifedamage = 2;
        this.gold = 11;
        this.goldWave5 = 8;
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
