function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
    
    stroke("purple")
    fill("orange");
    
    // console.log (mouseIsPressed)
    
    if(mouseIsPressed) {
      rect ( mouseX, mouseY, 20, 35);
    }