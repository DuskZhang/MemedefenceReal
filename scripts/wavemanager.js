function decideWave() {
    if (wave == 0) {
        waveOn = true;
        waveMuscle = 5; // norm 5
        waveWorkers = 0;
        waveBoom = 0;
        waveTeacher = 1;
        wave++;
    } else if (wave == 1) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 0;
        waveBoom = 3;
        wave++;
    } else if (wave == 2) {
        waveOn = true;
        waveMuscle = 15;
        waveWorkers = 0;
        waveBoom = 3;
        waveImprovedmus = 3;
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
    } else if (wave == 7) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 0;
        waveBoom = 1;
        wave++;
    } else if (wave == 8) {
        waveOn = true;
        waveMuscle = 15;
        waveWorkers = 0;
        waveBoom = 3;
        spawnrate = 52;
        wave++;
    } else if (wave == 9) {
        waveOn = true;
        waveMuscle = 35;
        waveWorkers = 2;
        waveBoom = 3;
        spawnrate = 45;
        wave++
    } else if (wave == 10) {
        waveOn = true;
        waveMuscle = 55;
        waveWorkers = 1;
        spawnrate = 15;
        wave++;
    } else if (wave == 11) {
        waveOn = true;
        waveMuscle = 75;
        spawnrate = 10;
        wave++;
    } else if (wave == 12) {
        waveOn = true;
        waveMuscle = 85;
        spawnrate = 8;
        wave++;
        //21 waves
    } else if (wave == 13) {
        waveOn = true;
        waveMuscle = 35;
        waveWorkers = 2;
        waveBoom = 3;
        spawnrate = 45;
        wave++
    } else if (wave == 14) {
        waveOn = true;
        waveMuscle = 55;
        waveWorkers = 1;
        spawnrate = 15;
        wave++;
    } else if (wave == 15) {
        waveOn = true;
        waveMuscle = 75;
        spawnrate = 10;
        wave++;
    } else if (wave == 16) {
        waveOn = true;
        waveMuscle = 85;
        spawnrate = 8;
        wave++;
        //21 waves
    } else if (wave == 17) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 0;
        waveBoom = 1;
        wave++;
    } else if (wave == 18) {
        waveOn = true;
        waveMuscle = 15;
        waveWorkers = 0;
        waveBoom = 3;
        spawnrate = 52;
        wave++;
    } else if (wave == 19) {
        waveOn = true;
        waveMuscle = 35;
        waveWorkers = 2;
        waveBoom = 3;
        spawnrate = 45;
        wave++
    } else if (wave == 20) {
        waveOn = true;
        waveMuscle = 55;
        waveWorkers = 1;
        spawnrate = 15;
        wave++;
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
    numMuscle = 0;
    numWorkers = 0;
    numBoom = 0;
    numTeacher = 0;
    numImprovedmus = 0;
    lastSpawn = false;
}
