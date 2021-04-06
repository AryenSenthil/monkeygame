var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, backGround
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}




function setup() {
  
  createCanvas(600,600);
  
 
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,500,900,10);
  ground.velocityX = -4
  console.log(ground.x)
  
  
  
  var survivaltime = 0;
  
   
}


function draw() {
 background("white");
  ground.x = ground.width/2;
  drawSprites();
  spawnObstacles();
  spawnBanana();
  
  monkey.collide(ground);
  
  
  
 
  
  stroke("white");
  textSize (20);
  fill ("white");
  text("Score: "+ score, 500, 50 );
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival time: "+ survivaltime, 100, 50);
  
  if(keyDown("space")&& monkey.y >= 430) {
        monkey.velocityY = -13;
    }
  
   monkey.velocityY = monkey.velocityY + 0.4
  
}

 
function spawnObstacles(){
  var obstacle = createSprite(600,455,10,40);

 if (frameCount % 300 === 0){
   obstacle.collide(monkey);
   obstacle.velocityX = -4
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.lifeTime = 600;
  }
 }
  


function spawnBanana() {
 
  if (frameCount % 80 === 0) {
    var banana = createSprite (600,200,40,10);
    banana.y = Math.round(random(180,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
    
   
   
  }
}
   



