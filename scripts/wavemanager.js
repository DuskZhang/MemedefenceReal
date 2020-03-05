//start with 269 gold
//30 lives - 50 lives

function decideWave() {
    if (wave == 0) {
        waveOn = true;
        waveMuscle = 6; 
        waveBoom = 4;
        wave++;
    } else if (wave == 1) { //add teachers
        waveOn = true;
        waveMuscle = 10;
        waveBoom = 10;
        waveTeacher = 3;
        spawnrate = 54;
        wave++;
    } else if (wave == 2) { //add workers and philosopher
        waveOn = true; 
        waveWorkers = 4;
        enemyQueue.push(new Philosopher(0, 0));
        spawnrate = 50;
        wave++;
    } else if (wave == 3) { //john cena 
        waveOn = true;
        waveWorkers = 10;
        spawnrate = 45;
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 4) { //muscles
        waveOn = true;
        waveMuscle = 20;
        waveImprovedmus = 10;
        spawnrate = 41;
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 5) { //teachers, boomers, workers
        waveOn = true;
        waveMuscle = 10;
        waveBoom = 15;
        waveTeacher = 20;
        waveWorkers = 30
        spawnrate = 35;
        var i;
        for (i = 0; i < 4; i++) {
          enemyQueue.push(new Philosopher(0, 0));
        }
        wave++;
    } else if (wave == 6) { //basic grind wave
        waveOn = true;
        waveMuscle = 0; //removing basic musclemen
        waveImprovedmus = 30;
        waveWorkers = 40
        spawnrate = 33;
        for (i = 0; i < 2; i++) {
          enemyQueue.push(new Philosopher(0, 0));
          enemyQueue.push(new JohnCena(0, 0));
        }
        wave++;
    } else if (wave == 7) {
        waveOn = true;
        waveBoom = 0; //removing boomers
        waveTeacher = 60;
        waveImprovedmus = 60;
        waveWorkers = 40;
        waveCavalry = 30;
        spawnrate = 30;
        wave++;
    } else if (wave == 8) {
        waveOn = true;
        waveTeacher = 20;
        waveImprovedmus = 40;
        waveWorkers = 20;
        waveCavalry = 60;
        enemyQueue.push(new BehindTheMeme(0, 0));
        spawnrate = 27;
        wave++;
    } else if (wave == 9) {
        waveOn = true;
        waveTeacher = 0; //removing teachers
        waveCavalry = 50;
        for (i = 0; i < 12; i++) {
            enemyQueue.push(new Philosopher(0, 0));
        }
        spawnrate = 25;

        wave++;
    } else if (wave == 10) { //adding emos
        waveOn = true;
        waveImprovedmus = 20;
        spawnrate = 15;
        waveEmo = 25;
        for (i = 0; i < 4; i++) {
            enemyQueue.push(new Philosopher(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
        }
        wave++;
    } else if (wave == 11) {
        waveOn = true;
        for (i = 0; i < 4; i++) {
            enemyQueue.push(new Philosopher(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
        }
        enemyQueue.push(new Jordan(0, 0));
        spawnrate = 17;
        waveEmo = 45;
        wave++;
    } else if (wave == 12) {
        waveOn = true;
        waveImprovedmus = 50;
        waveWorkers = 0; //removing workers
        spawnrate = 20;
        wave++;
        for (i = 0; i < 3; i++) {
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
            enemyQueue.push(new BehindTheMeme(0, 0));
        }
    } else if (wave == 13) {
        waveOn = true;
        for (i = 0; i < 8; i++) {
            enemyQueue.push(new BehindTheMeme(0, 0));
        }
        spawnrate = 15;
        wave++;
    } else if (wave == 14) {
        waveOn = true;
        waveImprovedmus = 0; //ending muscles
        for (i = 0; i < 35; i++) {
            enemyQueue.push(new JohnCena(0, 0));
        }
        spawnrate = 18;
        wave++
    } else if (wave == 15) { //basic grind wave
        waveOn = true;
        spawnrate = 17;
        waveCavalry = 30;
        waveEmo = 30;
        for (i = 0; i < 15; i++) {
            enemyQueue.push(new BehindTheMeme(0, 0));
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
            enemyQueue.push(new Philosopher(0, 0));
        }
        wave++;
    } else if (wave == 16) { //mega grind wave bring back workers
        waveOn = true;
        waveCavalry = 10;
        waveEmo = 10;
        waveWorkers = 10;
        waveTeachers = 30
        spawnrate = 16;
        for (i = 0; i < 40; i++) {
            enemyQueue.push(new BehindTheMeme(0, 0));
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
            enemyQueue.push(new Philosopher(0, 0));
        }
        wave++;
    } else if (wave == 17) { //everyone comes back this wave
        waveOn = true;
        waveCavalry = 20;
        waveEmo = 20;
        waveWorkers = 10;
        waveTeachers = 30
        waveMuscle = 10
        waveBoom = 10
        waveImprovedmus = 10
        spawnrate = 14;
        for (i = 0; i < 60; i++) {
            enemyQueue.push(new BehindTheMeme(0, 0));
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
            enemyQueue.push(new Philosopher(0, 0));
        }
        wave++
    } else if (wave == 18) {
        waveOn = true;
        waveCavalry = 20;
        waveEmo = 20;
        waveWorkers = 10;
        waveTeachers = 30
        waveMuscle = 10
        waveBoom = 10
        waveImprovedmus = 10
        spawnrate = 8;
        for (i = 0; i < 60; i++) {
            enemyQueue.push(new BehindTheMeme(0, 0));
            enemyQueue.push(new Jordan(0, 0));
            enemyQueue.push(new JohnCena(0, 0));
            enemyQueue.push(new Philosopher(0, 0));
        }
        wave++
        enemyQueue.push(new Trump(0, 0));
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
    numCavalry = 0;
    numEmo = 0;
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
        } else if (numCavalry < waveCavalry) {
            enemyQueue.push(new Cavalry(0, 0));
            numCavalry++;
        } else if (numEmo < waveEmo) {
            enemyQueue.push(new Emo(0, 0));
            numEmo++;
        } else {
            keepgoing = false;
        }
    }
}
