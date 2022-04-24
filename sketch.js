
var trex ,trex_running;
var ground,groundimage
var invisibleGround
var cloud ,cloud_image
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
cloud_image=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,50,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.7

 ground=createSprite(300,190,600,10)
 ground.addImage("play",groundimage)
 invisableGround=createSprite(300,195,600,5)

invisableGround.visible=false
}

function draw(){
  background("yellow")
  console.error("this is draw")
  if(keyDown("space")&&trex.y>150){
trex.velocityY=-10

  }
  console.log(trex.y)
trex.velocityY=trex.velocityY+0.5
if(ground.x<0){
  ground.x=ground.width/2
}


trex.collide(invisableGround)
ground.velocityX=-10

spawnClouds()


drawSprites()
}
function spawnClouds(){
  if (frameCount % 60==0){
cloud=createSprite(600,50,50,50)
cloud.addImage(cloud_image)
cloud.velocityX=-3
cloud.y=Math.round(random(10,60))
}
}
