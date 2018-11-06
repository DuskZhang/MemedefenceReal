//start with 269 gold
//30 lives - 50 lives

function decideWave() {
    if (wave == 0) {
        waveOn = true;
        waveMuscle = 6; // norm 5
        waveWorkers = 0;
        waveBoom = 3;
        waveTeacher = 1;
     
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
        waveTeacher = 4;
        enemyQueue.push(new Philosopher(0, 0))
        spawnrate = 50;
        wave++;
    } else if (wave == 3) { //john
        waveOn = true;
        waveMuscle = 30;
        waveWorkers = 5;
        waveBoom = 10;
        spawnrate = 45;
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 4) {

        waveOn = true;
        waveMuscle = 44;
        waveWorkers = 8;
        waveBoom = 5;
        waveImprovedmus = 3;
        spawnrate = 41;
        waveTeacher = 8;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 5) {
        waveOn = true;
        waveMuscle = 33;
        waveBoom = 30;
        waveTeacher = 29;
        waveImprovedmus = 30;
        waveWorkers = 30
        spawnrate = 35;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new Philosopher(0, 0))
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 6) {
        waveOn = true;
        waveMuscle = 24;
        waveBoom = 40;
        waveTeacher = 50;
        waveImprovedmus = 30;
        waveWorkers = 40
        spawnrate = 33;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new Philosopher(0, 0))
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
        //21 waves
    } else if (wave == 7) {
        waveOn = true;
        waveMuscle = 0;
        waveBoom = 0;
        waveTeacher = 60;
        waveImprovedmus = 60;
        waveWorkers = 40;
        waveCavalry = 30;
        spawnrate = 30;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new Philosopher(0, 0))
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 8) {
        waveOn = true;
        waveBoom = 5;
        waveTeacher = 40;
        waveImprovedmus = 80;
        waveWorkers = 20
        waveCavalry = 60;
        enemyQueue.push(new BehindTheMeme(0, 0));
        spawnrate = 27;
        wave++;
    } else if (wave == 9) {
        waveOn = true;
        waveBoom = 0;
        waveTeacher = 50;
        waveImprovedmus = 80;
        waveWorkers = 100
        waveCavalry = 50;
        enemyQueue.push(new Philosopher(0, 0))
        spawnrate = 25;

        wave++;
    } else if (wave == 10) {
        waveOn = true;
        waveMuscle = 0;
        waveBoom = 30;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        spawnrate = 15;
        waveEmo = 25;

        wave++;
    } else if (wave == 11) {
        waveOn = true;
        waveBoom = 0;
        waveImprovedmus = 120;
        enemyQueue.push(new Jordan(0, 0));
        spawnrate = 17;
         waveEmo = 45;
        wave++;
    } else if (wave == 12) {
        waveOn = true;
        waveTeacher = 30;
        waveImprovedmus = 50;
        waveWorkers = 20
        spawnrate = 20;
        wave++;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new Jordan(0, 0));
        enemyQueue.push(new Jordan(0, 0));
        //21 waves
    } else if (wave == 13) {
        waveOn = true;
        waveBoom = 10;
        waveTeacher = 50;
        waveImprovedmus = 20;
        waveWorkers = 20
        enemyQueue.push(new Philosopher(0, 0));
        spawnrate = 15;
        wave++;
    } else if (wave == 14) {
        waveOn = true;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 18;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        wave++
    } else if (wave == 15) {
        waveOn = true;
        waveBoom = 12;
        waveTeacher = 40;
        spawnrate = 17;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new Philosopher(0, 0));
        enemyQueue.push(new Philosopher(0, 0));
        wave++;
    } else if (wave == 16) {
        waveOn = true;

        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 16;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        //21 waves
    } else if (wave == 17) {
        waveOn = true;
        waveTeacher = 10;
        waveImprovedmus = 100;
        waveWorkers = 120
        spawnrate = 13;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        wave++;
    } else if (wave == 18) {
        waveOn = true;
         waveEmo = 125;
        waveTeacher = 60;
        waveImprovedmus = 40;
        waveWorkers = 40
        spawnrate = 10;
        wave++;
    } else if (wave == 19) {
        waveOn = true;

        waveBoom = 20;
        waveTeacher = 70;
        waveImprovedmus = 50;
        waveWorkers = 40
        spawnrate = 8;
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        wave++
    } else if (wave == 20) {
        waveOn = true;
        waveTeacher = 100;
        waveImprovedmus = 70;
        waveWorkers = 9;
        spawnrate = 7;
        enemyQueue.push(new Philosopher(0, 0));
        enemyQueue.push(new Philosopher(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new JohnCena(0, 0));
        enemyQueue.push(new BehindTheMeme(0, 0));
        enemyQueue.push(new Trump(0, 0));
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
