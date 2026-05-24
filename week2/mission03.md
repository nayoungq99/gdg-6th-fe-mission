# # React

서버 비용의 문제 --> data fetch와 DOM 조작으로 데이터 운송비용 절감.

- 전환되는 html 태그 부품 따로 관리 위해!
- 한 페이지에 여러 기능을 담았고 그 기능을 효율적으로 관리할 수 있도록 html 태그 부품화.
- 개발하기 복잡하기에 여러 html 부품을 개발자가 따로 작업할 수 있도록.

기존의 DOM 조작은 브라우저 리소스가 많이 소요됨 --> **Virtual DOM**의 등장

## Virtual DOM

메모리 상에 가벼운 가상의 DOM 만들어서 미리 조작한 후 결과만 모아서 일괄 Real DOM에 반영하는 방식

# # Counter App

코드 작성 후, 콘솔 확인하면 count값은 올라가나 화면에는 업데이트 되지 않음.  
V-DOM 통해 이 컴포넌트의 상태가 변했다고 알려줘야 함.  
--> React Hook 사용

# # 컴포넌트의 생애

Mount(탄생) -> Update(변화) -> UnMount(죽음)

- 컴포넌트는 화면에 추가될 때 마운트
- 컴포넌트는 새로운 props나 state 수신하면 업데이트
- 컴포넌트가 화면에서 제거되면 마운트 해제

## class형 컴포넌트

**장점**: 과거의 컴포넌트, 구조적이고 패턴 만들기 좋음...  
컴포넌트 생애 전반에 디테일한 조절 가능.  
**단점**: 자바스크립트 this 문법, 컴포넌트 내부 사용하는 메소드, 개발 패턴에 대한 이해가 필요함.  
디테일한 조절하려면 컴포넌트 생애 전반에 대한 이해 필요.

## 과거 function형 컴포넌트

state 사용할 수 없었고 props만 사용 가능했음. --> Hook을 사용함.

## React Hook

### 1. useState: 컴포넌트가 기억해야 할 값 관리

```js
import { useState } from "react"; // import useState
function Counter() {
  const [count, setCount] = useState(0); // count는 State Variable
  // setCount는 state value 바꾸는 Function
  // useState() 안의 값은 inital value

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
```

### 2. useEffect: 컴포넌트가 렌더링 될 때마다 실행할 작업 정의

예시) 서버에서 데이터 처음 불러오기, 상태에 따라 페이지 재구성하기

```js
import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링 완료!"); // 실행할 코드
  }, []); // [] : dependency array
  // 비어있으면 처음 렌더링될 때 한 번만 실행
  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
    </div>
  );
}

export default Timer;
```

`useEffect(() => {})` : 렌더링 될 때마다 실행하라.  
`useEffect(() => {}, [])` : 처음 한 번만 실행하라.  
`useEffect(() => {}, [count])` : count 값이 바뀔 때마다 실행하라.

### 3. useNavigate: 페이지 이동시킬 때 사용

```js
import { useNavigate } from "react-router/dom";

function Home() {
  const navigate = useNavigate(); // 페이지 이동 기능 제공

  function movePage() {
    navigate("/users/1"); // 해당 경로로 이동
  }

  return (
    <div>
      <h1>홈 페이지</h1>
      <button onClick={movePage}>User1 페이지 이동</button>
    </div>
  );
}

export default Home;
```

- 자주 사용하는 형태  
  `navigate('/home')` : 홈페이지 이동  
  `navigate(-1)` : 뒤로 가기  
  `navigate(1)` : 앞으로 가기

- 사용 예시

```js
function login() {
  alert("로그인 성공!");
  navigate("/mypage"); // 로그인 성공 후 마이페이지로 이동.
}
```
