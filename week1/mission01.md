- Mdn 사이트 이용해 속성 설명 확인
  -> https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements

- src : 외부 스크립트의 URI 지정, 문서 내 스크립트를 직접 포함하는 대신 사용 가능.
  사용 예시 --> <script src="./app.js"></script>
  --> script 태그 위치는 아래쪽.
  브라우저는 HTML 문서를 한줄씩 순차적으로 파싱함. 중간에 Script 발견하면 파싱을 중단하고 script 파일을 다운로드한 후 실행한 뒤에 HTML을 이어서 파싱함. 이러면 화면 늦게 로딩되거나 순서 꼬일 수 있음.

- document: script로 연결된 HTML 문서 의미
  사용 예시 --> const number = document.getElementById("counting-num")
  --> document 요소아이디가 counting-num인 어떤 것을 number 변수에 정의하겠다.

- addEventListener: 기다리다가 이벤트 발생하면 어떤 것 실행하는 것.
  사용 예시 --> incButton.addEventListener("click", increaseCount);

- Chrome과 v8 엔진, 개발자 관점에서 편의성, 속도 좋음
  효과: 1. 웹 앱 : 웹페이지에서 웹 앱으로, 문서의 개념을 초월한 것으로 진화. 2. NodeJS : 브라우저 바깥에서 엔진 사용. 자바스크립트를 실행할 수 있는 환경, 즉 '런타임 환경' -> 노드로 만든 서버, 블록체인, 머신러닝 등의 라이브러리 공유(NPM)

- 브라우저가 하는 일: 1) HTML 파일 열기 2) HTML 문서 한줄씩 파싱하기 3) DOM 트리 만들기 4) 화면에 표시하기
