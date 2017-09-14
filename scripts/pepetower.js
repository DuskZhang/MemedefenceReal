class Tower [
    constructor(x,y) {
    this.x = x;
    this.y = y;

    this.damage = 1;
    this.shootcharge = 0; // once it hits primeshoot it fires
    this.chargebuild = 5
    this.primeshoot = 100;
    this.range = 60;
    this.image;
    }
    
    show() {
      image(this.image, this.x, this.y);
  }
    
]

class Pepe extends Tower {
  constructor(x,y) {
    //todo get x y from mouse location
    super(x,y);

    this.damage = 1;
    this.chargebuild = 5
    this.primeshoot = 100;
    this.range = 60;
    this.image = pepe;

  }
  //called every frame
  getTarget() {
      if(firerate <= primeshoot) {
          this.shootcharge += this.chargebuild;
          
      }
      
      shootAt(); 
      
      
      
    muscles.forEach()
    
            var dist = Mathf.Infinity;

            foreach(NormieMuscle enemy in muscles) {
                
                closestPos = createVector(enemy.x,enemy.y);
                if(nearestEnemy == null || targetPos < dist ) {
                    nearestEnemy = enemy;
                    dist = targetPos;
                }
            }


  }
    
  

  shootAt(x,y) {
      enemyX = x;
      enemyY = y;
      if(dist(this.x,this.y,enemyX, enemyY) <= this.range && this.shootcharge >= this.primeshoot) {
          this.shootcharge = 0;
          var pepebullet = array.push(new TearBullet(this.x,this.y)) {
        }
      }
        
  }

}


