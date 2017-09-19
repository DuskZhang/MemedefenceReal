function decideWave() {
    if (keyCode) {
        if (wave == 1) {
            waveOn = true;
            waveMuscle = 3;
            wave++
        } else if (wave == 2) {
            waveOn = true;
            waveMuscle = 15;
            spawnrate = 45;
            wave++
        } else if (wave == 3) {
            waveOn = true;
            waveMuscle = 35;
            spawnrate = 25;
            wave++
        } else if (wave == 4) {
            waveOn = true;
            waveMuscle = 55;
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

function isWaveFinished() {
    //if all enemies dead
    //  if(muscle)
    if (lives <= 0) {
        gamemode = 2;
    } else if (muscles == null && waveOn) {
            waveOn = false;
    }
}
