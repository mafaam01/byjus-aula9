var qudrado;



function setup() {
  createCanvas(1920,968);
  quadrado = createSprite(960,420 ,20 ,20)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("UP")){
    quadrado.y = quadrado.y -1
  }
  if (keyDown("LEFT")){
    quadrado.x = quadrado.x -1
  }
  if (keyDown("RIGHT")){
    quadrado.x = quadrado.x +1
  }
  if (keyDown("DOWN")){
    quadrado.y = quadrado.y +1
  }
  

  /* if (keyIsDown(DOWN_ARROW)){
    quadrado.y = quadrado.y +1
  }*/



}




