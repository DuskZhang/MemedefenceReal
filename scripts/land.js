class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.image = scarce;
        this.connectionOpen = false;
        this.tileTaken = false;
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

                //todo make it so u cant stack towers
            } else {
                this.towerPlace();
            }

        }
    }

    towerPlace() {
        if (pepeTowerDesired && this.tileTaken == false) {
            if (gold >= 150) {
                gold -= 150;
                towers.push(new Pepe(this.x, this.y));
                pepeTowerDesired = false;
                this.tileTaken = true;
            }
        } else if (dogeTowerDesired && this.tileTaken == false) {
            if (gold >= 220) {
                gold -= 220;
                towers.push(new Doge(this.x, this.y));
                dogeTowerDesired = false;
                this.tileTaken = true;
            }
        } else if (wonkaTowerDesired) {
            if (gold >= 320) {
                gold -= 320;
                towers.push(new Wonka(this.x, this.y));
                wonkaTowerDesired = false;
                this.tileTaken = true;
            }
        } else if (weabooDesired) {
            if (gold >= 240) {
                gold -= 240;
                towers.push(new AngryWeaboo(this.x, this.y));
                weabooDesired = false;
                this.tileTaken = true;
            } // add more towers here
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

    clicked() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (grumpDesired && this.tileTaken == false) {
                if (gold >= 45) {
                    gold -= 45;
                    towers.push(new Grump(this.x, this.y));
                    grumpDesired = false;
                    this.tileTaken = true;
                }
            }
        }
    }
}





//temporary road augmentation that does damage to close enemies for a certain amount of damage pts
