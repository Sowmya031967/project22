const World = Matter.World 
const Engine = Matter.Engine
const Bodies = Matter.Bodies




var engine,world,object,ground

function setup() {
 createCanvas(800,400);
engine =Engine.create();
world = engine.world;

object = Bodies.rectangle(100,100,500,50);
World.add(world,object);

var options={
isStatic : true
}

ground = Bodies.rectangle(200,400,10000,50,options)
World.add(world,ground);

}

function draw() {
  background(0);  
 Engine.update(engine);
rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,500,50)
}