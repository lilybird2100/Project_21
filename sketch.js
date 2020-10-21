var bullet, wRect, speed, weight, deformation, thickness; 

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(20, 200, 40, 20);
  bullet.shapeColor = "white"; 
  thickness = random(22, 83);
  wR = createSprite(1200, 200, thickness, height/2); 
  wR.shapeColor = (rgb(80,80,80)); 
  speed = random(223,321); 
  weight = random(30,52);
  bullet.velocityX = speed; 
}

function draw() {
  background(0);  
  if(collison(bullet, wR) || bullet.x > 1300){
    bullet.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/(thickness*thickness*thickness) ; 
    if(deformation < 10){
      wR.shapeColor = "green"; 
      bullet.x = (1200-(thickness/2));
    }
    if(deformation > 10){
      wR.shapeColor = "red"; 
      bullet.x = (1200+(thickness/2));
    }
  }
  drawSprites();
  console.log(bullet.x);
}

function collison(object1, object2){
  //creating algorithm for isTouching() using the sprites mR and fr
  if (object1.x - object2.x <= object1.width/2 + object2.width/2
    && object2.x - object1.x <= object1.width/2 + object2.width/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2 
    && object2.y - object1.y <= object1.height/2 + object2.height/2){
       
     return true;

   }
   else{

    return false;
    
   }
}