class Link{
    constructor(bodya,bodyb){
        var lastLink=bodya.body.bodies.length-2
        this.link=Constraint.create({

            bodyA:bodya.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:bodyb,
            length:-8

        })
            
        World.add(world,this.link)
    }
}