- 브라우저가 하는 일 3) DOM 트리 만들기

- DOM: HTML 태그 각각을 자바스크립트로 컨트롤 할 수 있도록 만든 객체 체계, 계층적 구조

- HTML 태그를 자바스크립트로 넣는 법 1) 새로운 태그 만들기
                                2) 태그에 데이터 넣기
                                3) 새로운 태그 HTML에 추가하기
                                4) HTML을 화면에 업데이트하기(렌더링)

- 자바스크립트 코드의 양이 너무 많아... JSX(자바스크립트 확장팩), BABEL(원래 자바스크립트 코드로 만들어주는 컴파일러) 등장!
- SPA, 한 페이지에 하나의 정보 담겨있지X, 하나의 앱처럼 기능. 

- React 사용, 컴포넌트는 함수명, 파일명은 대문자로 시작!
사용 예시: import' ./APP.css';
          import Dog from './family/Dog';
          import Father from './family/Father';  
          import Me from './family/Me';

          function App(){
            return(
                <div className="App">
                <Me />
                <Father />
                <Dog />
                </div>
            );
          }
          export default App;