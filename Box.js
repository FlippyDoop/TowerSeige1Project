class BoxMaker{
  constructor(x, y){

      
      var boxOptions={
          'restitution':0.8,
      }

      this.box = Bodies.rectangle(x, y,50,50, boxOptions)
      World.add(world, this.box)
  }


  display(){

      var pos = this.box.position;
      var angle = this.box.angle;

      push()
      translate(pos.x, pos.y)
      imageMode(CENTER)
      strokeWeight(3)
      stroke("black")
      fill("brown")
      rect(0, 0, 50, 50);    
      pop()


  }
}