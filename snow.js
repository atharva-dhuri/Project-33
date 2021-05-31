class Snow{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.body = Bodies.circle(x, y, 1, options);
          this.radius = 3;
          this.image = loadImage("snow4.webp");
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      imageMode(RADIUS);
      image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }