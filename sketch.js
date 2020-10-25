var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxwall1, boxwall2, boxfloor
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxfloorSprite=createSprite(400,655,120,10)
	boxfloorSprite.shapeColor=("red")

	boxwall1Sprite=createSprite(345,625,10,50)
	boxwall1Sprite.shapeColor=("red")

	boxwall2Sprite=createSprite(455,625,10,50)
	boxwall2Sprite.shapeColor=("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxfloor=Bodies.rectangle(400,655,120,10)
	boxfloor.shapeColor=("red")
	Body.setStatic(boxfloor,true)
	World.add(world, boxfloor)
	
	boxwall1=Bodies.rectangle(345,625,10,50)
	boxwall1.shapeColor=("red")
	Body.setStatic(boxwall1,true)
	World.add(world, boxwall1)

	boxwall2=Bodies.rectangle(455,625,10,50)
	boxwall2.shapeColor=("red")
	Body.setStatic(boxwall2,true)
	World.add(world, boxwall2)

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxfloorSprite.x=boxfloor.position.x
  boxfloorSprite.y=boxfloor.position.y
  boxwall1Sprite.x=boxwall1.position.x
  boxwall1Sprite.y=boxwall1.position.y
  boxwall2Sprite.x=boxwall2.position.x
  boxwall2Sprite.y=boxwall2.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Body.setStatic(packageBody, false)
    
  }
}



