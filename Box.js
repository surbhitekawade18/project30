class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.0,
        //  "isStatic":false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=225
      this.image=loadImage("images/mango.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){

      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      stroke("yellow");
      strokeWeight(3);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility-5
        pop()
      }
    }
  };
  