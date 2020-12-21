
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
  engine=Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(700,200,10,40)
	box2 = new Box(750,200,10,40)
  box3 = new Box(700,200,40,10)
  ball = new Ball(100,200,20);
  ground=new Ground(400,350,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x : 10 , y : -40})
  }
}





