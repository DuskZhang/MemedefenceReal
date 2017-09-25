function decideWave() {
    if (wave == 0) {
        waveOn = true;
        waveMuscle = 5; // norm 5
        waveWorkers = 0;
        waveBoom = 0;
        waveTeacher = 3;
        wave++;
    } else if (wave == 1) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 0;
        waveBoom = 1;
        wave++;
    } else if (wave == 2) {
        waveOn = true;
        waveMuscle = 15;
        waveWorkers = 0;
        waveBoom = 3;
        spawnrate = 52;
        wave++;
    } else if (wave == 3) {
        waveOn = true;
        waveMuscle = 35;
        waveWorkers = 2;
        waveBoom = 3;
        spawnrate = 45;
        wave++
    } else if (wave == 4) {
        waveOn = true;
        waveMuscle = 55;
        waveWorkers = 1;
        spawnrate = 15;
        wave++;
    } else if (wave == 5) {
        waveOn = true;
        waveMuscle = 75;
        spawnrate = 10;
        wave++;
    } else if (wave == 6) {
        waveOn = true;
        waveMuscle = 85;
        spawnrate = 8;
        wave++;
        //21 waves
    }
}

function isWaveFinished() {

    if (lives <= 0) {
        gamemode = 2;
    } else if (muscles.length == 0 && waveOn && lastSpawn) {

        wavespawnReset();
        waveOn = false;




    }
}

function wavespawnReset() {
    console.log("wavereset")
    numMuscle = 0;
    numWorkers = 0;
    numBoom = 0;
    numTeacher = 0;
    lastSpawn = false;
}
