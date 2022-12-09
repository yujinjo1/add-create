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




var wave;

var playing = false;
function setup() {
createCanvas(720, 256);
wave = new p5.Oscillator();
wave.setType('sine');
wave.start();
wave.freq(440);
wave.amp(0);
button = createButton('play/pause');
button.mousePressed(toggle);
}
function draw(){
}


function toggle() {
if (!playing) {
  wave.start();
wave.amp(0.5, 1);
playing = true;
} else {
wave.amp(0, 1);
playing = false;
}
}
//가속도색상
let r, g, b;
function setup() {
createCanvas(displayWidth, displayHeight);
r = random(50, 255);
g = random(0, 200);
b = random(50, 255);
}
function draw() {
background(r, g, b);
console.Log('draw’);
}
function deviceMoved() {
r = map(accelerationX, -90, 90, 100, 175);
g = map(accelerationY, -90, 90, 100, 200);
b = map(accelerationZ, -90, 90, 100, 200);
}
  //가속도상자
  
  function setup() {
createCanvas(displayWidth, displayHeight, WEBGL);
}
function draw() {
background(250);
normalMaterial();
rotateX(accelerationX * 0.01);
rotateY(accelerationY * 0.01);
box(100, 100, 100);
}
  
  //흔들기
  
  let balls = [];
let threshold = 30;
let accChangeX = 0;
let accChangeY = 0;
let accChangeT = 0;
function setup() {
createCanvas(displayWidth, displayHeight);
for (let i = 0; i < 20; i++) {
balls.push(new Ball());
}
}
  function draw() {
background(0);
for (let i = 0; i < balls.length; i++) {
balls[i].move(); balls[i].display();
}
checkForShake();
}
  
  
  //아이폰
  
let button;
let permission=false;
  
function setup(){
  createCanvas(windowWidth,windowHeight);
  
  
 if (typeof DeviceMotionEvent. requestPermission === "function") {
//최신 10s인 경우
background(255, 0, 0); //붉은 배경
button e createButton(rclick to ios Sensor"): 1/센서 허용을 위한 버튼
but ton. mousePressed(iosAccess); //버튼누르면 10SAccess 함수로
} else {
//최신 10S가 아닌 다른 oS 예: 10s저버전, 안드로이드, 윈도우, 맥
background(0,255, 0); //녹색배경
text("is not a ios", 100, 100); //글자로 100, 100 위치에 is not a ios 라고 씀
}}
}