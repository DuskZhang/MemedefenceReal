//start with 269 gold
//30 lives

function decideWave() {
    if (wave == 0) {
        waveOn = true;
        waveMuscle = 6; // norm 5
        waveWorkers = 0;
        waveBoom = 3;
        waveTeacher = 0;
        wave++;
    } else if (wave == 1) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 2;
        waveBoom = 11;
        waveTeacher = 1;
        spawnrate = 54;
        wave++;
    } else if (wave == 2) {
        waveOn = true;
        waveMuscle = 10;
        waveWorkers = 0;
        waveBoom = 9;
        waveImprovedmus = 0;
        waveTeacher = 3;
        spawnrate = 50;
        wave++;
    } else if (wave == 3) { //john
        waveOn = true;
        waveMuscle = 30;
        waveWorkers = 5;
        waveBoom = 10;
        spawnrate = 45;
        enemyQueue.push(new JohnCena(0,0));
        wave++
    } else if (wave == 4) {
        
        waveOn = true;
        waveMuscle = 55;
        waveWorkers = 3;
        waveBoom = 5;
        waveImprovedmus = 3;
        spawnrate = 41;
         waveTeacher = 4;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++;
    } else if (wave == 5) {
        waveOn = true;
        waveMuscle = 65;
        waveBoom = 40;
        waveTeacher = 30;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 35;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++;
    } else if (wave == 6) {
        waveOn = true;
         waveMuscle = 85;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 33;
        enemyQueue.push(new JohnCena(0,0));
        wave++;
        //21 waves
    } else if (wave == 7) {
        waveOn = true;
         waveMuscle = 85;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 30;
        enemyQueue.push(new JohnCena(0,0));
        wave++;
    } else if (wave == 8) {
        waveOn = true;
        waveMuscle = 65;
        waveBoom = 30;
        waveTeacher = 40;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 27;
         
        wave++;
    } else if (wave == 9) {
        waveOn = true;
        waveMuscle = 55;
        waveBoom = 40;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 25;
         
        wave++
    } else if (wave == 10) {
        waveOn = true;
        waveMuscle = 45;
        waveBoom = 40;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 15;
         
        wave++;
    } else if (wave == 11) {
        waveOn = true;
        waveMuscle = 25;
        waveBoom = 30;
        waveTeacher = 30;
        waveImprovedmus = 10;
        waveWorkers = 10
        spawnrate = 24;
        wave++;
    } else if (wave == 12) {
        waveOn = true;
        waveMuscle = 45;
        waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 24;
        wave++;
        enemyQueue.push(new JohnCena(0,0));
        //21 waves
    } else if (wave == 13) {
        waveOn = true;
        waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 24;
        wave++
    } else if (wave == 14) {
        waveOn = true;
         waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 22;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++
    } else if (wave == 15) {
        waveOn = true;
        waveMuscle = 35;
        waveBoom = 200;
        waveTeacher = 20;
        spawnrate = 18;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++;
    } else if (wave == 16) {
        waveOn = true;
        waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 16;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        //21 waves
    } else if (wave == 17) {
        waveOn = true;
        waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 13;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++;
    } else if (wave == 18) {
        waveOn = true;
         waveMuscle = 35;
        waveBoom = 40;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 10;
        wave++;
    } else if (wave == 19) {
        waveOn = true;
         waveMuscle = 25;
        waveBoom = 50;
        waveTeacher = 70;
        waveImprovedmus = 50;
        waveWorkers = 40
        spawnrate = 8;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        wave++
    } else if (wave == 20) {
        waveOn = true;
        waveMuscle = 25;
        waveBoom = 90;
        waveTeacher = 100;
        waveImprovedmus = 70;
        waveWorkers = 90
        spawnrate = 7;
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new JohnCena(0,0));
        enemyQueue.push(new Trump(0,0));
        wave++;
    }

    buildWave();
}

function isWaveFinished() {

    if (lives <= 0) {
        gamemode = 2;
    } else if (waveOn && lastSpawn && enemyQueue.length == 0 && muscles.length == 0) {
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

function buildWave() {
    let keepgoing = true;
    while (lastSpawn == false && keepgoing) {
        if (numMuscle < waveMuscle) {
            enemyQueue.push(new NormieMuscle(0, 0));
            numMuscle++;
        } else if (numWorkers < waveWorkers) {
            enemyQueue.push(new Workers(0, 0));
            numWorkers++;
        } else if (numBoom < waveBoom) {
            enemyQueue.push(new BabyBoomer(0, 0));
            numBoom++;
        } else if (numTeacher < waveTeacher) {
            enemyQueue.push(new Teacher(0, 0));
            numTeacher++;
        } else if (numImprovedmus < waveImprovedmus) {
            enemyQueue.push(new ImprovedMuscle(0, 0));
            numImprovedmus++;
        } else {
            keepgoing = false;
        }
    }
}
