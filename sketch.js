var ship,ship_moving;
var sea,seaImg;

function preload(){ 
  seaImg = loadImage("sea.png");
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,180,400,20);
  sea.addImage(seaImg);
  sea.velocityX = -4;

  ship = createSprite(150,310,160,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.15;
  
}

function draw() {
  background("blue");

  if(sea.x <0){
    sea.x = sea.width/2;
  }
  drawSprites();
}