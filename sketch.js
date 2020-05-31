const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var box,box2; 
var engine,world

function setup() {
  createCanvas(1300,1300)
  engine = Engine.create()
  world = engine.world
  car = new Player(650,650,100,100)
  
}

function draw() {
  background(0);
 car.display();
 Engine.update(engine)

  drawSprites();
  
  

}
