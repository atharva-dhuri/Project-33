const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var fallingsnow;
var fallingsnowImg;

var snowImg;
var snowImg2



function preload() {
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
  snowImg2 = loadImage("snow5.webp");


}

function setup() {  
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);

  

  spawnSnow();
  spawnSnow2();

  drawSprites();
}

function spawnSnow() {
  if(frameCount %5 ===0) {
    var rand = random(1, 1000);
    var snow = createSprite(rand, -15, 10, 10, 10);
    snow.scale= 0.1;
    snow.addImage(snowImg);
 
    snow.velocityY = 3;
    
  } 

}

function spawnSnow2() {
  if(frameCount %10 ===0) {
    var rand = random(1, 1000);
    var snow = createSprite(rand, -15, 10, 10, 10);
    snow.scale= 0.1;
    snow.addImage(snowImg2);
 
    snow.velocityY = 2;

  }
}