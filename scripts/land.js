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
                        tiles[this.arraySlot] = new Road(this.x, this.y);
                        nodes.push(tiles[this.arraySlot]);
                        roadsBuilt++
                    }
                } else if (tiles[this.arraySlot - 12].connectionOpen || tiles[this.arraySlot + 12].connectionOpen || tiles[this.arraySlot - 1].connectionOpen || tiles[this.arraySlot + 1].connectionOpen) {
                    tiles[this.arraySlot] = new Road(this.x, this.y);
                    nodes.push(tiles[this.arraySlot]);
                    roadsBuilt++
                } //towers


            } else if (pepeTowerDesired) {
                if (gold >= 150) {
                    gold -= 150;
                    towers.push(new Pepe(this.x, this.y));
                    pepeTowerDesired = false;
                }
            }  else if (dogeTowerDesired) {
                if (gold >= 350) {
                    gold -= 350;
                    towers.push(new Doge(this.x, this.y));
                    dogeTowerDesired = false;
                }// add more towers here
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
            if (noSpammerino >= 18) {
                pepeTowerDesired = !pepeTowerDesired;
                noSpammerino = 0;
            }
            


        }
    }
}

class BuyDoge extends Tile {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
        this.connectionOpen = false;
        this.image = buyDoge;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (noSpammerino >= 18) {
                dogeTowerDesired = !dogeTowerDesired;
                noSpammerino = 0;
            }
        }
    }

}

