const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var box;
var box1;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box=new Box(400,200,40,80);
  ground=new Ground(600,height,1800,20);
  box1=new Box(430,100,40,40);
}

function draw() {
  background("black");
  Engine.update(engine);
  box.display();
  ground.display();
  box1.display();
}