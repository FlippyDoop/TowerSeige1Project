class RopeMaker {

    constructor(bodyA, pointB) {
        var ConstrainedOptions = {
            bodyA: bodyA,
            pointB: pointB,
            length: 1,
            stiffness: 0.05
        }
        
        
        this.rope = Constrained.create(ConstrainedOptions);
        World.add(world, this.rope);
    }

    
     
    fly(){
        this.rope.bodyA = null;
    }
    display() {

        
        if (this.rope.bodyA){

        push()       
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        pop()
    }

}





}
