class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.image = scarce;
        this.connectionOpen = false;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked(i) {
        this.arraySlot = i;
        //roads
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (roadsBuilt < roadAmount) {
                if (tiles[this.arraySlot - 12] == null) {
                    if (tiles[this.arraySlot + 12].connectionOpen || tiles[this.arraySlot - 1].connectionOpen || tiles[this.arraySlot + 1].connectionOpen) {
                        //less 45
                        console.log("first");
                        tiles[this.arraySlot] = new Road(this.x, this.y);
                        nodes.push(tiles[this.arraySlot]);
                        roadsBuilt++
                    }
                } else if (tiles[this.arraySlot - 12].connectionOpen || tiles[this.arraySlot + 12].connectionOpen || tiles[this.arraySlot - 1].connectionOpen || tiles[this.arraySlot + 1].connectionOpen) {
                    //less 45
                    console.log("ok");
                    tiles[this.arraySlot] = new Road(this.x, this.y);
                    nodes.push(tiles[this.arraySlot]);
                    roadsBuilt++
                }
            }
        }
        //towers

        if (pepeTowerDesired) {
            if (gold >= 150) {
                gold -= 150;
                towers.push(new Pepe(this.x, this.y));
                pepeTowerDesired = false;
            }
        }
    }
}

class Road extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = true;
        this.image = stars;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {}
}


class BuyPepe extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buypepe;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {

            pepeTowerDesired = !pepeTowerDesired;


        }
    }
}
