const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var fallingsnow;
var fallingsnowImg;

var snowImg;



function preload() {
  backgroundImg = loadImage("snow3.jpg");


}

function setup() {  
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);

  

  spawnSnow();

  drawSprites();
}

function spawnSnow() {
  if(frameCount %5 ===0) {
    var rand = random(1, 1000);
    var snow = createSprite(rand, -2, 10, 10, 10);
 
    snow.velocityY = 3;
    
  } 

}