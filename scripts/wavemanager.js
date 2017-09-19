function decideWave() {
    if (keyCode) {
        if (wave == 1) {
            waveOn = true;
            waveMuscle = 5;
            waveWorkers = 0;
            wave++
        } else if (wave == 2) {
            waveOn = true;
            waveMuscle = 15;
            waveWorkers = 1;
            spawnrate = 45;
            wave++
        } else if (wave == 3) {
            waveOn = true;
            waveMuscle = 35;
            waveWorkers = 2;
            spawnrate = 25;
            wave++
        } else if (wave == 4) {
            waveOn = true;
            waveMuscle = 55;
            waveWorkers = 1;
            spawnrate = 25;
            wave++
        } else if (wave == 5) {
            waveOn = true;
            waveMuscle = 75;
            spawnrate = 25;
            wave++
        } else if (wave == 6) {
            waveOn = true;
            waveMuscle = 85;
            spawnrate = 25;
            wave++
        }

    }
}

//function fillQueue() {
//    for (var enemyMuscle = 0; enemyMuscle < waveMuscle; enemyMuscle++) {
//        enemyQueue.push(new NormieMuscle(0, 0));
//        numMuscle++;
//    }
//    for (var enemyWorkers = 0; enemyWorkers < waveWorkers; enemyWorkers++) {
//        enemyQueue.push(new Workers(0, 0));
//        numWorkers++;
//    }
//}

function isWaveFinished() {
    //if all enemies dead
    //  if(muscle)
    if (lives <= 0) {
        gamemode = 2;
    } else if (muscles == null && waveOn) {
        waveOn = false;
    }
}
