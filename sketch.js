const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var ground;
var particals = [];
var plingo = [];
var division = [];
var divisionHeight = 300;
var abc = 0;
function preload() {}

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, width, 20);
  for (var k = 0; k <= width; k = k + 60) {
    division.push(new Division(k, 645, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plingo.push(new Plingo(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plingo.push(new Plingo(j, 175));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  if (frameCount % 90 === 0) {
    particals.push(new Particle(240.5, 0));
    abc++;
  }
  for (var k = 0; k < division.length; k++) {
    division[k].display();
  }
  for (var j = 0; j < plingo.length; j++) {
    plingo[j].display();
  }
  for (var b = 0; b < particals.length; b++) {
    particals[b].display();
  }
}
