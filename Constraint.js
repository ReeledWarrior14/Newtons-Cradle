class CONSTRAINT{
    constructor(a, b){
        var options5 = {
            length : 200,
            stiffness : 0.075,
            bodyA : a,
            pointB : b,
        }   
        this.c = Constraint.create(options5);
        Worlds.add(world, this.c);
    }
    displayConstraint(){
        push();
        line(this.c.bodyA.position.x, this.c.bodyA.position.y, this.c.pointB.x, this.c.pointB.y);
        pop();
    }
}