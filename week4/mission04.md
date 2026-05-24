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

# 폴더 설계 이유
프로젝트가 커짐에 따라 관심사의 분리를 위해 폴더를 설계해야 한다.
- **apis***: 외부 서버와 통신하는 API 로직 분리  
컴포넌트 내부에 API 호출 코드가 섞여 있으면 네트워크 로직과 UI 로직을 동시에 수정해야 하는 어려움 존재. 이를 apis/ 폴더로 격리하여 비즈니스 로직을 표준화.
- **components**: 반복되는 UI 요소(Button, Input, Item)를 독립적인 컴포넌트로 분리하여 중복 코드를 제거.
- **data**: 목업 데이터와 실제 서버 데이터를 구분하여 프로젝트 환경 설정 시 유연하게 대응.
- **pages**: 각 경로에 대응하는 페이지 컴포넌트 분리
  
    
--> 이렇게 하면 기능 단위로 폴더가 나뉘어져 있어 유지보수에 용이하고 폴더의 위치만 봐도 어떤 역할을 하는지 파악하기 쉬워 협업에 좋다.