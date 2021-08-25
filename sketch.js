const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxsnow=100;
var arrsnow=[];
var rand;




function preload(){
  bg=loadImage("snow3.jpg")
}





function setup() {


  engine=Engine.create();
  world=engine.world;
  

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  

  background(bg); 
  rand=Math.round(random(1,4));
  if (frameCount%5===0){
    arrsnow.push(new Snow(random(0,700),30,30 ))
  } 
  for (var j=0; j<arrsnow.length; j++){
    arrsnow[j].display();
  }
  drawSprites();
}