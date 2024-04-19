//configuracao de funcao 
  function setup() {
  createCanvas(900, 800);
  background("pink");
}

//funcao desenho
function draw (){
  stroke ("purple")
  fill("blue")
  
  if (mouseIsPressed){
    rect ( mouseX, mouseY, 20, 20);
  }
}
