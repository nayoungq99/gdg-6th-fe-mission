# 리팩토링

결과의 변경 없이 코드의 구조를 재조정하는 작업  
계속해서 코드 수정하는 것!

## 리액트 코드

### Extenstions에 react snippets

--> rfce, rafce, usss(useState), uef(useEffect)

### props

a 태그의 href, button 태그의 onClick 같은 **태그의 속성을 부여**하는 것!

코드 예시

```js
<div>
  {todos.map((todo) => (
    <Todo id={todo.id} title={todo.title} />
  ))}
</div>
```

# 커스텀 훅

리팩토링으로 User1Page, User2Page 만들기  
--> 두 페이지에 공통된 부분 존재 --> 합치고 싶다...

User 페이지에서는 ID에 맞는 Todos 데이터만 필요함  
--> effect, state, fetch 등의 함수는 안 궁금함

```js
import { useEffect, useState } from "react";

export function useFetchUser(useId) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholer.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  return todos;
}
```

```js
import { useFetchUser } from "../hooks/useFetchUser";

function User1Page() {
  const todos = useFetchUser(1);
}
```

--> 이런 느낌으로 사용

# 리액트 라이브러리

터미널에 npm i react-router 명령어 실행.  
package.json 안의 dependencies에 추가됨.  
--> 공식문서 대로 활용.
