var ground,iground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(100,300,15,15)
 monkey.addAnimation('play',monkey_running) 
   monkey.scale=0.2
  ground=createSprite(300,360,900,10)
  ground.velocityX=-3
 ground.x=ground.width/2
 
  
}


function draw() {
   if(ground.x<150){
   ground.x=ground.width/2
 }
   iground=createSprite(300,355,900,1)
  iground.visible=false
background(255)

   monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(iground)   
   if(keyDown('space')&&monkey.y>270 ){
    monkey.velocityY=-17
   }
  
    if(frameCount%150===0){
 obstacle=createSprite(700,330,15,15)
    obstacle.velocityX=-3
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
      banana=createSprite(700,50,15,15)
      banana.velocityX=-3
      banana.addImage(bananaImage)
      banana.scale=0.14
      banana.y=random(30,220)
  }
   drawSprites()
  
}






