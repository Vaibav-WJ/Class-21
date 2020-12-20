var fixedRect, movingRect,go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  go1=createSprite(300,700,50,80);
  go1.shapeColor="cyan";
  go2=createSprite(400,700,70,80);
  go2.shapeColor="pink"; 
  go3=createSprite(600,100,90,50);
  go3.shapeColor="grey";
  go3.velocityY=3;
  go4=createSprite(600,800,50,80);
  go4.shapeColor="purple";
  go4.velocityY=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go2)){
  movingRect.shapeColor = "blue";
  go2.shapeColor = "blue";
  }else{
  movingRect.shapeColor = "green";
  go2.shapeColor = "green";
  }


  bounceOff(go3,go4);

  

  drawSprites();
  
}





















































































































































































