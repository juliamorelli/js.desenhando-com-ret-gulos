function setup() {
  createCanvas(600, 600);
  background("orange");
}

function draw() {
  
  stroke("orange")
  fill("purple");
  
  // console.log (mouseIsPressed)
  
  if(mouseIsPressed) {
    rect ( mouseX, mouseY, 20, 35);
  }


  
  
}
