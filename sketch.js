const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
rope = new Rope(10,{x:250,y:50})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  var options={
  density:0.001
  }
  fruit=Bodies.circle(250,250,20,options)
  Matter.Composite.add(rope.body,fruit)
  fruitlink=new Link(rope,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,20,20)

 
   
}
