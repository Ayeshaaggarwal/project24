
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1, paperObj,log;
var log1img, dustbinImg;


function preload() {
   dustbinImg = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);
	log1=createSprite(680,height-275,150,15);
	log1.addImage(dustbinImg);
	log1.scale=0.4;
	log1.shapeColor=color("yellow");
	
	
	


	engine = Engine.create();
	world = engine.world;
	paper1= new Paper(100,300,40,5);
	ground1 = new Ground(600,height-200,1200,20)
	//Create the Bodies Here.


	Engine.run(engine);
	log = Bodies.rectangle(400,height-48,140,15, {isStatic:true} );
	World.add(world,log);
	
}



function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
 
  paper1.display();
  ground1.display();
  log1.display();
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}
