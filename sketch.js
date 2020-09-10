
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,log1,log2,log3,ball1

function setup() {
	createCanvas(800,700)
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;
	log1=createSprite(660,620,20,100)
	log1.shapeColor="red"
	log2=createSprite(550,620,20,100)
	log2.shapeColor="red"
	log3=createSprite(610,660,110,20)
	log3.shapeColor="red"
	ground= new Ground(600,670,1600,20)
	 ball1=new ball(200,450,20)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    ground.display();
	log1.display();
	log2.display();
	log3.display();
	ball1.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
}

}