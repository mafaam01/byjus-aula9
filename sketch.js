var qudrado;



function setup() {
  createCanvas(1920,959);
  quadrado = createSprite(960,420 ,20 ,20)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("UP")){
    quadrado.y = quadrado.y -1
  }
  if (keyIsDown(DOWN_ARROW)){
    quadrado.y = quadrado.y +1
  }



}




