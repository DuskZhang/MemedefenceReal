function decideWave() {
    if (keyCode) {
        if (wave == 1) {
            waveOn = true;
            waveMuscle = 3;
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
