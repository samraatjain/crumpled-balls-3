class Log
 {
    constructor(x,y,width,height)
     {
     var options = {
          isStatic: true
      }
      this.image=loadImage("sprites/dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     /// translate(pos.x, pos.y);
     // rotate(angle);
      
     
     imageMode(CENTER);
			image(this.image,  this.body.position.x,this.body.position.y,this.width,this.height);
    //  image(this.image, 500, 600);
     // rect(0,0, this.width, this.height);
    pop();
    }
}