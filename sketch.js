
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;

function preload()
{
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 10);
	side1 = new Dustbin(600, 640, 200, 10);
	side2 = new Dustbin(510, 600, 10, 60);
	side3 = new Dustbin(690, 600, 10, 60);
	paper = new Paper(50, 200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  side1.display();
  ground.display();
  side2.display();
  side3.display();
 paper.display();
  drawSprites();
  imageMode(CENTER);
  image(dustbinIMG, 600, 580, 230, 130);
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
	}
}



