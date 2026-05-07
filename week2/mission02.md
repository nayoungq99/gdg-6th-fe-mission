# React Router
TERMINAL 명령어: npm i react-router  
--> **package.json**의  ``"dependencies"``에 ``"react-router": "^7.14.2"`` 추가된 것 확인할 수 있음.

main.jsx에 React Router의 공식문서 확인해 코드 수정.  
[React Router 공식문서](http://reactrouter.com/start/data/installation)

## 코드 예시
```js
const router = createBrowserRouter([  
    {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/1",
    element: <User1Page />,
  },
   {
    path: "/users/2",
    element: <User2Page />,
  },
]);
```
# React 프로젝트 생성하는 법
## 1. Vite React 프로젝트 생성
```bash
npm create vite@latest
```
## 2. 프로젝트 실행
```bash
cd 파일명
npm istall
npm run dev
```  
--> 실행되면 링크 제공

## 3. React Router 설치
``` bash
npm i react-router
```

## 4. Router 수정
공식문서 확인해 수정.

## 5. pages 파일 생성!
예시: 
```jsx
export default function User1Page() {
  return <h1>User1 페이지</h1>;
}
```

# TailwindCSS 설치
## 1. vite.config.js 수정
```js
import tailwindcss from '@tailwindcss/vite'
``` 
위 코드를 추가하고  
```js
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
``` 
이렇게 수정하면 됨.

## 2. index.css 설정
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. test
```js
export default function User1Page() {
  return (
    <h1 className="text-3xl text-blue-500">
      Tailwind 적용 완료
    </h1>
  );
}
``` 
실행한 후 bash에 아래 코드 입력해 확인
```bash
npm run dev
```
