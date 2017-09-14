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
        //todo
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (tiles[this.arraySlot - 13] == null) {
                if (roadsBuilt < roadAmount && (tiles[this.arraySlot + 13].connectionOpen || tiles[this.arraySlot - 1].connectionOpen || tiles[this.arraySlot + 1].connectionOpen)) {
                    //less 45
                    console.log("ok");
                    tiles[this.arraySlot] = new Road(this.x,this.y);
                    nodes.push(tiles[this.arraySlot]);
                    roadsBuilt++
                }
            } else if (roadsBuilt < roadAmount && (tiles[this.arraySlot - 13].connectionOpen || tiles[this.arraySlot + 12].connectionOpen || tiles[this.arraySlot - 1].connectionOpen || tiles[this.arraySlot + 1].connectionOpen)) {
                //less 45
                console.log("ok");
                tiles[this.arraySlot] = new Road(this.x,this.y);
                nodes.push(tiles[this.arraySlot]);
                roadsBuilt++
            }


            //keep track of location of all roads x and y in an array, make sure that at least 1 road is 60 dist away

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
    }
}
