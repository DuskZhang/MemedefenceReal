function objectFunctions() {


    //tile functions
    for (i = 0; i < tiles.length; i++) {
        tiles[i].show();

        if (tiles[i].clicked(i)) {
            tiles[i] = new Road(tiles[i].x,tiles[i].y, i);
        }

    }

    

    
    
    drawHud();

    //tower functions
    for (t = towers.length - 1; t >= 0; t--) {

        if (towers[t] != null) {
            towers[t].onClick(t);
            towers[t].show(t);
            towers[t].lockon();

        }

        if (towers[t] != null) {
            if (towers[t].selected) {
                towers[t].hudInfo();
            }
        }

    }
    
    //bullet functions
    for (var bindex = 0; bindex < bullets.length; bindex++) {


        bullets[bindex].show();
        bullets[bindex].move(bindex);


    }

    //enemy functions
    for (let m = 0; m < muscles.length; m++) {
        if (muscles[m] != null) {
            muscles[m].checkGameBreakingBug1();
            muscles[m].move(m);
            muscles[m].checkGameBreakingBug2();
        }

        if (muscles[m] != null) {
            muscles[m].show();
        }


    }




}
