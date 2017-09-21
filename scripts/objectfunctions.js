function objectFunctions() {
    if (muscles.length == 0 && numMuscle == waveMuscle) {
        waveOn = false;
        numMuscle = 0;
        numWorkers = 0;
    }
    //tile functions
    for (i = 0; i < tiles.length; i++) {
        tiles[i].show();
        
        if (tiles[i].clicked(i)) {
            tiles[i] = new Road;
        }

    }
    
    //tower functions
    for (t = towers.length - 1; t >= 0; t--) {
        towers[t].show(t);
        towers[t].lockon();
        if(towers[t] != null) {
        towers[t].onClick(t);
        }
    }

    if (waveOn) {
        //enemy functions
        for (var m = 0; m < muscles.length; m++) {
            if (muscles[m] != null) {
                muscles[m].move(m);
            }

            if (muscles[m] != null) {
                muscles[m].show();
            }


        }

    }

    //bullet functions
    for (var bindex = 0; bindex < bullets.length; bindex++) {


        bullets[bindex].show();
        bullets[bindex].move(bindex);


    }


}