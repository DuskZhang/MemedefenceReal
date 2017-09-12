class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.image = scarce;
    }

    show {
        image(this.image, this.x, this.y, this.width, this.width);

    }

    clicked {

        if (mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y) {
            if (roadsDesired > 0) {

            }



            //        } else if (pepeTowerDesired) {
            //            plac
            //        } //else if....
            //
            //    }

        }

        class Road extends Tile {
            constructor(x, y) {
                super(x, y)


            }
        }

        //class Land extends Tile{
        //    constructor(x,y) {
        //        this.x = x;
        //        thix.y = y;
        //        }
        //    
        //    show() {
        //        
        //    }
        //    
        //    
        //}

        //class Sea extends Tile{
        //    constructor(x,y) {
        //        this.x = x;
        //        thix.y = y;
        //        }
        //    
        //    show() {
        //        
        //    }
        //    
        //    
        //}
