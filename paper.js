class Paper
{
    constructor(x,y,r)
{
   
   
    var options={
        isStatic:false,
        restitution:0.000,
        friction:2,
        density:1.6

    };
    this.image = loadImage("sprites/paper.png");
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
   
    World.add(world,this.body);
};
display()
{
    var paperpos=this.body.position;

    push();
    translate(paperpos.x,paperpos.y);
    fill(255,0,255);
    imageMode(CENTER)
   
   image(this.image,0,0,this.r,this.r);
    pop();
};
};