# 용어

## - 서버

서빙하는 사람, 고객이 요청하면 서빙하는 일 담당.

## - 클라이언트

고객, 서빙을 받는 고객  
--> 클라이언트가 서버로 요청 보내고 서버는 클라이언트에 응답함.

## - 프론트엔드

사용자가 직접 상호작용하는 웹 페이지 화면 다루는 개발 영역

## - 백엔드

서버에서 동작하는 부분 다루는 개발 영역.  
비즈니스 로직처리, 인증, 보안 다룸.

# API

--### JSON Placeholder
[API를 받아올 수 있는 사이트](https://jsonplaceholder.typicode.com/)

클라이언트와 서버 간의 데이터 주고 받는 **통로** 역할,  
서로 다른 소프트웨어인 두 역할 간 상호작용을 돕는 **인터페이스**

## fetch 함수

네트워크 요청을 서버 데이터를 받아오는 JS 표준 API함수.  
비동기 처리, then처리 함.  
fetch에 들어가는 인자: URL

# JSON

**input**: URL + a(homeURL/ect + a)  
**output**: json 형식의 데이터

JavaScript 객체와 비슷한 모양의 데이터 양식

[참고자료](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting/JSON)

#### - 컴포넌트는 일반적으로 상호작용에 대한 응답으로 새로운 props나 state를 수신하면 업데이트 됩니다.

--> 업데이트가 되면 컴포넌트 로직을 다시 시작함!... 루프에 빠지게 됨.

#### - React 컴포넌트는 순수한 함수.

input이 같다면 output이 같은 함수(외부 영향이 없다.) --> 한계 존재.  
--> 컴포넌트에 영향 줘서 API를 주고 받고 싶음!
--> 외부 영향 알 수 있도록 브라우저에 Hook 주기!
--> 외부 영향 받아서 딱 1번만 동기화 하는 법
--> **useEffect**에 감싸서 외부의 효과를 랜더링과 분리하기

## useEffect Hook

의존성 배열 인자 존재.

### 공식 문서 참조

[Effect로 동기화하기](https://ko.react.dev/learn/synchronizing-with-effects#step-2-specify-the-effect-dependencies)  
[React Effect의 생명 주기](https://ko.react.dev/learn/lifecycle-of-reactive-effects)

# 비동기 처리

```js
console.log("fetch 시작");
fetch("https://jsonplaceholder.typicode.com/users/1/todos")
  .then((response) => response.json()) // JSON 양식을 JavaScript로 볼 수 있는
  // 양식으로 바꿈
  .then((json) => console.log(json));
console.log("fetch 종료");
```

--> 코드가 순서대로 실행되지 않음.  
--> fetch 시작 -> fetch 종료 -> fetch 데이터

브라우저가 코드 맨 위부터 읽으면서 한 줄씩 해결한다면...? >> 매우 오랜 시간 소요... : **동기 처리**  
따라서 브라우저가 fetch를 보면 '무언가'에게 API 처리하고 다 되면(**then**) 보고하라고 하는 것 : **비동기 처리**
