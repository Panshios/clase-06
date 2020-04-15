function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,360,100,100)
  background(10,90,30);  
}

function draw() {
  var gam = 20*random(1,4);
  fill(random(170,235),20,100);
  noStroke();
  ellipse(mouseX,mouseY,gam+movedX,gam+movedX);
}
