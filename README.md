# Interactive Sound App (p5.js)

브라우저에서 실행되는 **p5.js + p5.sound** 기반 인터랙티브 사운드 실험 앱입니다.  
멀티터치와 기기 센서(iOS 13+)를 활용해 **터치/기울기에 따라 사운드를 생성·조작**합니다.

## ✨ 기능
- **Play/Pause 버튼**: 오실레이터 사운드 시작/정지
- **iOS 센서 허용 버튼**: iOS 13+에서 모션/오리엔테이션 권한 요청
- **기울기 표시**: `rotationX` 값을 화면에 실시간 출력
- **멀티터치**: 최대 10개 손가락 좌표 확인
- **사운드 합성기**: `p5.Oscillator`(sine) 이용, 주파수 조절(슬라이더)

## 📂 파일 구성
- `index.html` : 진입점(브라우저로 열면 실행)
- `sketch.js`  : 인터랙션/오디오 로직
- `p5.js`, `p5.sound.min.js` : 라이브러리
- `style.css` : 스타일

## 🚀 실행 방법
1. 저장소 클론 또는 다운로드
   ```bash
   git clone https://github.com/yujinjo1/add-create.git
2. index.html을 브라우저(Chrome 권장)에서 열기

3. iOS 기기: 화면의 “센서 허용” 버튼을 눌러 권한 부여

🧩 주의/알려진 이슈

iOS 13+는 사용자 제스처 이후에만 센서 접근 허용 가능

브라우저 보안 정책에 따라 로컬 파일 접근이 제한될 수 있음(필요 시 간단한 http 서버 사용 권장)





📜 라이선스 / 참고

p5.js

p5.sound


