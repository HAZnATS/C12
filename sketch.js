var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var trex_2;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  trex_2 = createSprite(80,80,20,50);
  trex_2.addAnimation("runnin_2",trex_running);
  trex_2.scale = 0.5;    
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
   if(keyDown("UP_ARROW")&& trex_2.y >=100){
    trex_2.velocityY = -1;
   }
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  trex_2.velocityY =trex_2. velocityY + 0.1;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  trex_2.collide(invisibleGround);  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 if(frameCount %60 == 0){
  var clouds;
  clouds = createSprite(610,100,30,30);
  clouds . velocityX = -4;
 }
 
   
}



