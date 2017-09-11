//var swordArray = [];

class NormieMuscle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.rollUp = true;
        this.lastDirection = "right"
    }

    resetStat() {
//        GRAVITY = 0.6;
        this.rollUp = true;
    }
    //adds x amount to 2nd sphere
    checkDirection() {
      if(this.lastDirection == "left") {
        return 20;
      } else {
        return -20;
      }
    }

    show() {
        fill(200);
        rect(this.x + this.checkDirection(),this.y,100,200);
        fill(0);
        rect(this.x,this.y,100,200);

    }



    move() {
        if(keyIsDown(68)) {
          this.x+=this.speed;
          this.lastDirection = "left";
      } else if(keyIsDown(65)) {
          this.x-=this.speed;
          this.lastDirection = "right";
      }
    }

    roll() {
        if(keyIsDown(32) && this.rollUp) {
          this.rollUp = false;
          this.x+=33;
          this.y-=3;
      }
    }


    isGroundHit(x,y) {

      this.rollUp = true;
    }

}
