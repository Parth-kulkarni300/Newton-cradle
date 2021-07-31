class bob{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'friction':1.0,
            'density':1.0

        }
       this.x=x;
        this.y=y;
        this.r=100;
        
    this.body=Bodies.circle(x,y,100,options);
    World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push()
        rectMode(CENTER)
        fill("purple");
        ellipse(0,0,this.r,this.r)
        pop()
      

    }
}