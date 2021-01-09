var a;
var stand, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  stand= new Ground(400,285,500,100);
//level 1
  block1= new Box(330,235,30,40);
  block2= new Box(360,235,30,40);
  block3= new Box(390,235,30,40);
  block4= new Box(420,235,30,40);
  block5= new Box(450,195,30,40);
//level 2
  block6= new Box(360,195,30,40);
  block7= new Box(390,195,30,40);
  block8= new Box(420,195,30,40);
//TOP level
  block9= new Box(390,155,30,40);
 
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
