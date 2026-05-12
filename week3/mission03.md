# 자바스크립트의 fetch()함수로 원격 API 호출
요즘 클라이언트 단에서 직접 API 호출하는 경우 빈도 증가.

## 라이브러리
- 브라우저에서 ``fetch()``함수 지원 전: request, axios, jQuery 라이브러리 사용이 합리적.  
- 요즘은 브라우저에 내장된 ``fetch() 함수 이용하면 충분함.

## fetch 사용법
- 첫 번째 인자로 **URL** 두 번째 인자로 **옵션 객체** 받음 --> Promise 타입의 객체 반환.
- 반환된 객체, API 호출 성공시 응답 객체를 resolve, 실패시 예외 객체를 reject.
- 코드 예시
```js
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```
- **옵션 객체**에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 설정.  
-  **응답 객체**로부터 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 읽어올 수 있음.

## Get 호출
### JSON Placeholder 사용한 예제 코드
- fetch() 함수는 디폴트로 GET 방식으로 작동,  
이 방식은 요청 전문 받지 않아서 옵션 인자 필요X
```js
fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response),  
);
```
- 응답 객체 통해 응답 상태 200 OK 확인
```js
Response {status: 200, ok: true, redirected: false, type: "cors", url: "https://jsonplaceholder.typicode.com/posts/1", …}
```
- 응답 객체는 json( ) 메서드 제공
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## POST 호출
: 원격 API에서 관리하고 있는 데이터 생성원하면 요청 전문 포함하는 POST 방식 사용
- 코드 예시
```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",                  // method 옵션: POST 지정
  headers: {                       // headrs 옵션: JSON 포맷 사용한다고 알려줌 
    "Content-Type": "application/json",
  },
  body: JSON.stringify({           // 요청 전문: JSON 포맷 직렬화
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then((response) => console.log(response));
```
- 응답 객체 통해 응답 코드 201 Created 확인.
```js
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 201, ok: true, …}
```

- 위 json( ) 메서드 호출 시 응답 전문을 객체 형태로 받음.
```js
{title: "Test", body: "I am testing!", userId: 1, id: 101}
```

## PUT, DELETE 호출
: 데이터의 수정과 삭제 위해 사용

### PUT
method 옵션 PUT으로 설정한다는 점 외에 POST와 유사.
- 코드 예시
```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```
- 출력 예시
```js
{title: "Test", body: "I am testing!", userId: 1, id: 1}
```

### DELETE
보낼 데이터 없어서 headers와 body옵션 필요X
- 코드 예시
```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```
- 출력 예시
```js
{}
```

# 사용성 개선
fetch() 함수의 사용법 간단한 대신 똑같은 코드 반복됨.  
--> fetch() 함수를 직접 사용하기 보다 별도의 함수나 모듈로 따로 사용 추천.  
--> async/await 키워드 이용해 HTTP 방식별로 비동기 함수 작성, 묘듈화 사용