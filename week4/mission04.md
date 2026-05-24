# 리액트 폴더
## ``pages``
라우터(react-router)가 가리키는 독립적인 하나의 화면 단위 컴포넌트  
--> AdminPage.jsx, PricePage.jsx 

## ``components``
여러 화면에서 재사용되거나 화면을 구성하는 조각 컴포넌트  
--> Button.jsx, Input.jsx, Item.jsx

## ``apis``
백엔드 서버와 통신하는 Axios / Fetch 함수들을 모아둔 폴더  
--> adminApi.js, priceApi.js

## ``store``
Zustand, Redux 등 전역 상태(Global State) 스토어 관리 폴더  
--> useCartStore.js

## ``hooks``
반복되는 리액트 로직(상태+이펙트)을 추출한 커스텀 훅 폴더  
--> useAuth.js, useDebounce.js

## ``utils``
리액트와 상관없는 순수 자바스크립트 공통 유틸리티 함수 모음  
--> formatter.js (날짜, 금액 변환)

## ``styles``
글로벌 CSS, Tailwind 설정, 테마 컬러 정의 등 스타일 관련 파일  
--> global.css, theme.js