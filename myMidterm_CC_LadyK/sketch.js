function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
 

}

function mousePressed(){
 

  print(getRectArea(3, 4));

  print(getRectArea(-3, 4));
  

}

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}


function mousePressed(){
  print("hi");

}
}




