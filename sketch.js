let button;
let permission = false;

function setup() {
 createCanvas(windowWidth, windowHeight);
  
  
 
 if(typeof DeviceMotionEvent.requsetPermission === 'function'){
   background(255, 0, 0);
   button = createButton("Click to iOS Sensor");
   button.mousePressed(iosAccess);
 } else {
   background(0, 255, 0);
   text("is not a ios", 100, 100)
 }
}

function iosAccess() {
 DeviceOrientationEvent.requestPermission().then((response) => {
   if (response === "granted") {
     permission = true;
   }
 })
 .catch(console.error);
}

function draw() {
 //아이폰
 if (!permission) return;
 background(255, 255, 255);
 text(72);
 text(rotationX, 100, 100);
}