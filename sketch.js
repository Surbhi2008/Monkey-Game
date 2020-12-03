var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running); 
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);   
ground.velocityX = -4;
ground.x=ground.width/2;
console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
 
  
}


function draw() {
  background(255);
  
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ survivalTime,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  
  if(keyWentDown("space")) {
    monkey.velocityY = -4;
}
  
  monkey.velocityY = monkey.velocityY + 0.15;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  

  
 drawSprites();
  
}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;

     
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;

     
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}






