class NormieMuscle {
  constructor(x,y) {
    this.x = x;
    this.y = y;

    this.hp = 3
    this.speed = 5;

    this.width = 50;
    this.height = 50;

     // once every 1/2 second if running at 60fps
  }

  show() {
    image(muscleImg, this.x, this.y , this.width, this.height);
  }

  move() {
    this.x++;
  }

  checkDead() {
    if(this.hp <= 0) {
      this.delete;
    }
  }
}
