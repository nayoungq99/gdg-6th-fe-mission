# 동기 : 직렬적으로 작동하는 방식  
- 요청 보낸 후 응답 받아야 다음 동작 이루어짐.
- 하나의 태스크 끝날 때까지 기다렸다가 다음 태스크 실행 --> 총 실행시간 느림.
- 요청 작업에 순서 지켜진다는 뜻.

# 비동기 : 병렬적으로 작동하는 방식  
e.x. Web API, Ajax, setTimeout  
비동기 작업 종류: 애니메이션 실행, 네트워크 통신, 마우스 키보드 입력, 타이머
- 요청 보낸 후 응답 수락 여부와 상관 없이 다음 태스크 동작.
- 특정 코드가 끝날 때까지 코드 실행 멈추지 않고 다음 코드 먼저 실행.  
- 요청 작업에 순서 지켜지지 않을 수 있다는 뜻.
- 한 번에 여러 태스크 동시에 실행 --> 자원 효율적 사용
- 비동기 요청시 응답 후 처리할 **'콜백 함수'** 알려주고 호출됨.  
    --> 콜백 패턴 사용하면 처리 순서 보장하기 위해 콜백 함수 중첩되어   
    복잡도 높아지는 **콜백 헬** 발생.  
    (콜백 헬: 가독성 나쁨, 실수 유발의 원인)

# 콜백 함수
- 다른 함수의 파라미터로 전달되는 함수
- 비동기 자바스크립트 코드 작성시 필요, 에러에서부터 보호.

## 콜백 만드는 법
```js
const message = function() {
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000); // 주어진 시간 이후에 함수 호출, 표현식 평가.
                           // message 함수는 3초 후 호출. 따라서 콜백 함수의 예시
```
## 화살표 함수 모양의 콜백
콜백 함수를 ES6 화살표 함수로 사용할 수 있음.
```js
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);
```

## 이벤트 처리
```js
<button id="callback-btn">Click here</button>

// 버튼 클릭시 콘솔 메세지
document.queryselector("#callback-btn")        // 버튼 선택
    .addEventListener("click", function() {    // 이벤트 리스너 추가
                                               // 두 개 파라미터 필요. 
                                               // 두 번째 파라미터가 버튼  
                                               // 클릭 되었을 때 메세지 남기는   
                                               // 콜백 함수.
      console.log("User has clicked on the button!");
});
```

# Promise
- 콜백 헬 현상에 한계 있어 비동기 처리 위한 또 다른 패턴인 프로미스(Promise) 도입.  
- 콜백 패턴이 가진 단점 보완, 비동기 처리 시점 명확 표현 가능.
- Promise 생성자 함수 통해 인스턴스화. 비동기 작업을 수행할 **콜백 함수를 인자로** 전달 받음.  
--> 아래 콜백 함수는 resolve와 result 함수를 인자로 전달 받음.
```js
const promise = new Promise((resolve, reject) => {
  if (/* 비동기 작업 수행 성공 */) {
    resolve('result');
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason');
  }
});
```
- promise의 비동기 처리 성공 여부 나타내는 **상태정보** 가짐.  
-- ``pending`` : 비동기 처리 아직 수행 X  
-- ``fulfilled`` : 비동기 처리 수행됨(성공)  
-- ``rejected`` : 비동기 처리 수행됨(실패)  
-- ``settled`` : 비동기 처리 수행됨(성공 or 실패)

## Promise 호출 과정
비동기 함수 내에서 Promise 객체 생성, 내부 비동기 처리 구현, 처리 성공하면 resolve 메소드 호출.  
**->** resolve 메소드의 인자로 비동기 처리 결과 전달, 결과는 Promise 객체의 후속 처리 메소드로 전달.  
**->** 비동기 처리 실패, reject 메소드 호출. reject 메소드 인자로 에러 메시지 전달.   
에러 메시지는 Promise 객체의 후속 처리 메소드로 전달.
(후속 처리 메소드: ``then``, ``catch``)  
(``then``: 두 개의 콜백 함수 인자로 전달 받음.  
**첫 번째 콜백 함수**, 성공(``fulfilled``, ``resolve``함수 호출된 상태)시 호출,  
**두 번째 함수**, 실패(``rejected``, ``reject`` 함수 호출된 상태)시 호출  
**then 메소드는 Promise를 반환**)
(``catch``: 예외(에러)가 발생하면 호출, **catch 메소드는 Promise를 반환**)

## Promise 체이닝
후속 처리 메소드인 ``then``, ``catch``로 메소드를 체이닝  
--> 여러 개의 프로미스 연결해 사용  
--> 콜백 헬 해결

# Async / Await
- 자바스크립트의 비동기 처리 패턴 중 가장 최근 문법.  
- 기존의 콜백 함수, Promise 단점 보완.
- 아래는 기본 문법 형태 예시
```js
async function 함수명(){
    await 비동기_처리_메서드명();
}
```

## Async
- 항상 function 앞에 사용. 해당 함수는 항상 promise 반환.  
--> 아닌 값 반환해도 resolved promise로 값 감싸 이행된 promise 반환되도록.

## Await
- async 함수 안에서만 동작. **promise가 처리될 때까지 기다림**. 결과는 그 이후에 반환.  
- 아래는 문법 예시
```js
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 함수 실행되는 도중 이 줄에서 실행 잠시 중단  
                              // promise 처리되면 실행 재개.

  alert(result); // promise 객체의 result 값 할당. 1초 뒤에 '완료!' 출력됨.
}

f();
```
- promise 처리 기다리는 동안에는 엔진이 다른 일(다른 스크립트 실행, 이벤트 처리)함.   
따라서 CPU 리소스 낭비 X.
- promise.then 보다 가독성 좋고 쓰기 좋음.

## Async Await 에러 제어
- throw가 던진 에러 잡을 때처럼 ``try..catch`` 사용.
- asyonc/await 사용시 **await가 대기 처리**, .then 거의 필요 X
- 문법 제약 있어 async 함수 바깥의 최상위 레벨 코드에선 awit 사용 불가.  
--> .then/catch 추가해 사용.
  

# 블로킹/논블로킹
**동기/비동기**: 요청 작업에 대해 완료 여부에 따라 작업 순차적으로 수행할지 말지.  
(전체적인 작업에 대한 **순차적인 흐름** 유무)  
**블로킹/논블로킹**: 현재 작업이 block(차단,대기) 되느냐 아니냐에 따라 다른 작업 수행 가능한지.  
(전체적인 **작업의 흐름**을 막는가?의 질문)

--> 자바스크립트 비동기 함수 setTimeout(): 비동기 + 논블로킹 함수  
--> 이들 정확하게 구분하는 것: 컴퓨터 아키텍쳐 이해에 중요.

## 비동기 vs 논블로킹
- 비동기 논블로킹의 예제
```js
console.log("시작");

setTimeout(() => {
  console.log("1초 후에 실행됩니다!");
}, 1000);

console.log("끝");

// <출력 결과>
// 시작
// 끝
// 1초 후에 실행됩니다!
```
--> 출력 순서와 코드 라인 순서 맞지 않음.  
--> 작업 완료 여부 신경쓰지 않고 다음 콘솔 작업 수행, 콜백 함수 통해 값 받아 출력.  
--> 따라서 **비동기**!
--> 타이머 작업 수행 위해 메인 함수 블락하지 않고 백그라운드에서 별도처리,  
메인 함수 블락X, setTimeout 함수 호출 후 콘솔 함수 호출  
--> 따라서 **논블로킹** 
  
시점과 관련된 이론적 개념이라 실제 코드에서 경계 구분이 애매하긴 함.  

## 제어권
: 함수의 코드나 프로세스 실행 흐름 제어할 수 있는 권리.  
- 블로킹과 논블로킹은 callee가 caller에게 제어권 바로 주느냐 안 주느냐로 구분.  

## 동기/비동기 + 블로킹/논블로킹 조합
### Sync Blocking (동기 + 블로킹) 
- 다른 작업 진행 동안 자신의 작업 처리X, 다른 작업의 완료 여부 받아 **순차적으로 처리.**  
- 다른 작업의 결과가 자신의 작업에 영향 주는 경우 사용.
- 코드 예시: 파일 읽어 내용 처리하는 로직.
```js
const fs = require('fs');

const data1 = fs.readFileSync('file1.txt', 'utf8'); // file1을 sync로 read

console.log(data1); // 파일 내용 출력하고 적절한 처리를 진행
```
- 작업 간단, 적은 경우 사용
- C, JAVA

### Async Blocking (비동기 + 블로킹)  
- 다른 작업 진행 동안 자신 작업 멈춤, 다른 작업의 결과 바로 처리X (Async 방식)
- 실무 사용 적음
- Node.js + MySQL의 조합
### Sync Non-Blocking (동기 + 논블로킹) 
- 다른 작업 진행 동안 자신 작업 처리하고 다른 작업 결과 바로 처리, 작업 순차대로 수행.
- 코드 예시
```js
const fs = require('fs'); 
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

async function readFiles() {
  try {
    // Promise.all() 메소드 사용, 여러 개의 비동기 작업 병렬 처리.
    const [data1, data2, data3] = await Promise.all([
      readFileAsync('file.txt', 'utf8'), // file.txt 파일 읽기
    ]);

    // 파일 읽기가 완료되면 data에 파일 내용 들어옴
    console.log(data1); // file.txt 파일 내용 출력


    // 파일 비교 로직 실행..
  } catch (err) {
    throw err;
  }
}

readFiles(); // async 함수 호출
```
- async/await 키워드 해당.
- java, 게임에서 맵 이동할 때 로딩 스크린 뜨는 것.

### Async Non-Blocking (비동기 + 논블로킹)
- 다른 작업 진행 동안 자신 작업 처리하고 다른 작업 결과를 바로 처리X  
- 다른 작업의 결과가 자신 작업에 영향X 경우 사용.
- Sync Blocking과 유사하지만 호출 함수에 **콜백 함수** 넣은 점이 차이!
- 작업의 결과 후처리
- 코드 예시
```js
const fs = require('fs'); 

fs.readFile('file.txt', 'utf8', (err, data) => { // 파일 읽기, 콜백 함수 전달
  if (err) throw err; // 에러 처리
  console.log(data); // 파일 내용 출력
});

console.log('done'); // 작업 완료 메시지 출력
```
- 작업량 많고 오래 걸리는 작업에 사용
- 웹 브라우저의 파일 다운로드