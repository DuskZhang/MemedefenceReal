class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.position = createVector(this.x,this.y);
        this.damage = 1;
        this.shootcharge = 0; // once it hits primeshoot it fires
        this.chargebuild = 5
        this.primeshoot = 100;
        this.range;
        this.image;
        this.width = 60;
        this.iam;
        this.showInfo = false;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);
    }

    lockon() {

    }

    shootAt() {

    }

    //on click show range and upgrades + stats

        onClick(i) {
            this.iam = i;
            if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
//                if(anotherTowerClicked == false && showThisInfo == false) {
//                    showThisInfo = !showThisInfo
//                    anotherTowerClicked = true;
//                    
//                    
//                }
            showStats(towers[this.iam]);
            showRange(towers[this.iam]);
        }
        }
}