let button; //센서 허용을 위한 버튼
let permission = false; //허가를 위한 변수 (기본은 허가 안남)
var wave;
var button1;
var slider;
var playing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //윈도우 사이즈로 displayWidth displayHeight가능
wave = new p5.Oscillator();
wave.setType('sine');
wave.freq(440);
wave.amp(0);
  
  button1 = createButton('play/pause');
   button1.mousePressed(toggle);
}
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    // iOS 13 보다 높은 OS인 경우
    background(255, 0, 0); //붉은 배경
    button = createButton("Click to iOS Sensor"); //센서 허용을 위한 버튼
    button.mousePressed(iosAccess); //버튼누르면 iosAccess 함수로
  } else {
    // non iOS 13+ 가 아닌 다른 OS 예: iOS저버전, 안드로이드, 윈도우, 맥
    background(0, 255, 0); //녹색배경
    text("is not a ios", 100, 100); //글자로 100, 100 위치에 is not a ios 라고 씀
  
}

function iosAccess() {  //버튼 누르면 동작하는 함수(그냥 따라하기)
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response === "granted") { //granted를 받으면
        permission = true; //허가가 true (허가남)
      }
    })
    .catch(console.error);
}

function draw() {
  if (!permission) return; //허가 안나면 리턴
  background(255, 255, 255); //흰색배경
  textSize(72); //텍스트 픽셀 크기 72
  text(rotationX, 100, 100); //텍스트 는 X회전값이고, 100 100 위치에 글자로 표기
  
  wave.freq(slider.value());
   if (playing) {
   background(255, 0, 255);
  } else {
    background(51);
}

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

function toggle() {
 if (!playing) {
   wave.start();
   wave.amp(0.5, 1);
   playing = true;}
 else {
   wave.amp(0, 1);
   playing = false;}
 }

function touchStarted() {
 background(255, 255, 255);
 text(touches.length, 200, 200);
 text(touches[0].x, 200, 220);
 text(touches[0].y, 200, 240);
 text(touches[1].x, 200, 260);
 text(touches[1].y, 200, 280);
 text(touches[2].x, 200, 300);
 text(touches[2].y, 200, 320);
 text(touches[3].x, 200, 340);
 text(touches[3].y, 200, 360);
 text(touches[4].x, 200, 380);
 text(touches[4].y, 200, 400);
 text(touches[5].x, 200, 420);
 text(touches[5].y, 200, 440);
 text(touches[6].x, 200, 460);
 text(touches[6].y, 200, 480);
 text(touches[7].x, 200, 500);
 text(touches[7].y, 200, 520);
 text(touches[8].x, 200, 540);
 text(touches[8].y, 200, 580);
 text(touches[9].x, 200, 600);
 text(touches[9].y, 200, 620);
}




