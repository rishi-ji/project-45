var hunter,hunterImg,background,backgroundImg,tiger,tigerImg,bullet,bulletIMG

function preload(){
  hunterImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png")
  backgroundImg=loadImage("Background.jpg")
  tigerImg=loadImage("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png","tiger7.png","tiger8.png")
  bulletIMG=loadImage("Bullet(1).png","Bullet(2).png","Bullet(3).png","Bullet(4).png")


}


function setup() {
  createCanvas(1600,720);
  hunter=createSprite(450, 620, 50, 50);
  hunter.addAnimation("shooting",hunterImg)
  tiger=createSprite(550,640,50,50)
  tiger.addAnimation("running",tigerImg)
  edges=createEdgeSprites()
  
}

function draw() {
  background(backgroundImg)
  fill("white")
  textSize(20)
  text(mouseX+ ":" +mouseY,10,15);
  Bullet()
  hunter.velocityX=0
  hunter.velocityY=0

if(keyDown("UP_ARROW")){
  hunter.velocityY=-5
  hunter.velocityX=0
}
if(keyDown("DOWN_ARROW")){
  hunter.velocityY=5
  hunter.velocityX=0

}
if(keyDown("RIGHT_ARROW")){
  hunter.velocityX=5
  hunter.velocityY=0

}
if(keyDown("LEFT_ARROW")){
  hunter.velocityX=-5
  hunter.velocityY=0

}
hunter.collide(edges[3])

tiger.velocityX=5
tiger.velocityY=random(5,-5)
tiger.bounceOff(edges)

  drawSprites();
}
function Bullet(){
  if(keyDown("space")){
    bullet=createSprite(hunter.x+80,hunter.y-80,55,55)
    bullet.addAnimation("missile",bulletIMG)
    bullet.scale=0.5
    bullet.velocityX=5
     
  
  }
 

}
