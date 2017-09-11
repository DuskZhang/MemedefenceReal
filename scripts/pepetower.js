class Pepe {
  constructor(x,y) {
    //todo get x y from mouse location
    this.x = x;
    this.y = y;

    this.damage = 1;
    this.firerate = 5; // wouldve used cooldown but js doesnt have delta time cause it sucks


  }
  //called every frame
  getTarget() {
    muscles.forEach()

            float dist = Mathf.Infinity;

            foreach(Enemy e in enemies) {
                float d = Vector3.Distance(this.transform.position, e.transform.position);
                if(nearestEnemy == null || d < dist) {
                    nearestEnemy = e;
                    dist = d;
                }
            }


  }

  shootAt(x,y) {

  }

}
