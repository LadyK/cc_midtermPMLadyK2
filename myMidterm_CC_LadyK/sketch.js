let f;
let interval;
let lastTime;
let currentTime;
let scene1;
let scene2;
let scene3;

function setup() {
  createCanvas(1000, 1000);
  background(0);

  interval = 5000; // note this is in milliseconds
  currentTime = 0;
  lastTime = 0;
  scene1 = true;
  scene2 = false;
  scene3 = false;
}

function draw() {

  //print(frameCount);
 
 // this is all a one trick pony, as the user needs to refresh the sketch to repeat
 // it's also dependent on frameRate()

 if(frameCount < 500){
   background(255, 0, 0); // <--- can be different scenes; red

 }
 if(frameCount >500 && frameCount < 1000){
   background(0, 255, 0); // green
 } 
 else if(currentTime - lastTime > interval){
   background(0);
   print("done");
   currentTime - lastTime // better
 }
 /*
 else if (currentTime - lastTime < interval){
  background(0, 0, 255);
 }
 */

 if(frameCount % 5 == 0){
  //then I'll add to my variable
 }


 
 
 print("time difference is ");
 print(currentTime - lastTime)


 if( scene1 == true){
   runScene1();
 }
 if( scene2 == true){
   runScene2();
 }
if( scene3 == true){
   //runScene3();
 }



}

function mousePressed(){
  //think of millis as taking a time stamp
  //lastTime = currentTime; // store the previous currentTime in lastTime
  currentTime = millis();
  print(currentTime);

  //print(getRectArea(3, 4));

  //print(getRectArea(-3, 4));
  

}

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}


function runScene1(){


  scene1 = false;
  scene2 = true;
}

function runScene2(){

  scene2 = false;
  scene3 = true;
}



