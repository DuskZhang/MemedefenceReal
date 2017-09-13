class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.image = scarce;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked(i) {
        this.arraySlot = i;
        //todo
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y && mouseIsPressed) {
            if (roadsBuilt < roadAmount && ) {
                //less 45
                console.log("ok");
                tiles[this.arraySlot] = new Road;
                
                roadsBuilt++
            }

        
        //keep track of location of all roads x and y in an array, make sure that at least 1 road is 60 dist away

        }
    }
}

class Road extends Tile {
    constructor(x, y) {
        super(x, y)
        this.image = stars;
        this.x = x;
        this.y = y;
        this.connectionOpen = true;
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.width);

    }
    
    clicked() {
        return true;
    }
}
