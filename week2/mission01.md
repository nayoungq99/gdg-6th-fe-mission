# css 기본 문법

HTML의 각 요소 style 정의해 화면에 어떻게 렌더링 하는지 브라우저에게 설명하기 위한 언어.

## 1. 셀렉터

스타일 적용하고자 하는 html 요소를 선택할 수 있음.

## 2. 프로퍼티(속성)

셀렉터로 html 요소 선택한 후 {} 내에 속성과 값을 지정하는 것으로 style 정의

## 3. 값

키워드, 크기 단위, 색상 표현 단위 등의 특정 단위로 지정

## 4. html과 css연동

link style, embedding style, inline style

## 5. reset css 사용

html요소의 css를 초기화 하는 용도로 사용, 브라우저 별로 제각각인 디폴트 스타일을 하나의 스타일로 통일시켜줌.

# 셀렉터

- `클래스 셀렉터`: .class 어트리뷰트 값 지정해 일치하는 요소 선택 ex) .container { color: red; }
- `어트리뷰트 셀렉터`: 지정된 어트리뷰트 갖는 모든 요소 선택
  아래는 코드 예시

```CSS
 a[href] { color: red; }, a[target="_blank"] { color: red; }, h1[title~="first"] { color: red; },  p[lang|="en"] { color: red; },  a[href^="https://"] { color: red; }, a[href$=".html"] { color: red; }, div[class*="test"] { color: red; }
```

- `복합 셀렉터`: 후손 셀렉터(셀렉터a = 셀렉터b), 자식 셀렉터(셀렉터a > 셀렉터b), 형제 셀렉터
- `기상 클래스 셀렉터`: 요소 특정 상태에 따라 스타일 정의할 때 사용 (마우스 올라와 있을 때 등등...), 콜론(:) 사용

* input 요소가 focus 상태일 때 사용 예시

```css
input:focus {
  background-color: yellow;
}
```

- 링크 셀렉터, 동적 셀렉터, UI 요소 상태 셀렉터, 구조 가상 클래스 셀렉터, 부정 셀렉터, 정합성 체크 셀렉터

* `가상 요소 셀렉터`: 요소 특정 부분에 스타일 적용(글자 첫글자 또는 첫줄, 앞 뒤...), 두 개의 콜론(::)사용

# CSS 프로퍼티 값의 단위

## 1. 키워드

각 프로퍼티에 따라 사용할 수 있는 키워드 존재.  
display 프로퍼티 값으로 사용 가능한 키워드: `block`, `inline`, `inline-block`, `none`

## 2. 크기단위

em: 배수 단위, 상대적인 설정 시 사용

## 3. 색상 표현 단위

HEX, RGB, RGBA, HSL, HSLA

# 박스 모델

**Content**(width, height), **Padding**(테두리 안쪽, 이미지), **Border**(테두리 두께), **Margin**(테두리 바깥)으로 구성.

## 1. width / height

## 2. margin / padding

## 3. border 프로퍼티

- border-style: 테두리 선 스타일
  [MDN:border-style](https://developer.mozilla.org/ko/docs/Web/CSS/Reference/Properties/border-style)
- border-width: 테두리 두께 (주의: border-style과 함께 사용하지 않으면 적용 안됨.)  
  [MDN:border-width](https://developer.mozilla.org/ko/docs/Web/CSS/Reference/Properties/border-width)
- border-color: 테두리 색상 (주의: border-style과 함께 사용하지 않으면 적용 안됨.)
- border-radius: 모서리 둥글게 표현
- border: border-width, border-style, border-color 한 번에 설정.

## 4. box-sizing 프로퍼티

width, height 프로퍼티 대상 영역 변경 가능. content, padding, border 포함

# display, visibility, opacity 프로퍼티

## 1. display 프로퍼티

layout 정의에 자주 사용, block, inline, inline-block, none

`block` : 항상 새로운 라인 시작, 화면 크기 전체의 가로폭 (div, h1, p, il...)  
`inline` : 문장의 중간에 들어갈 수 있음, content 너비만큼 가로폭, width, height, margin-top, margin-bottom 프로퍼티 지정 불가 (span, a, input...)

`inline-block` : block과 inline 요소 특징 모두 가짐.

## 2. visibility 프로퍼티

요소 보이게 할 것인지 아닌지 정의. 요소의 렌더링 여부, visible(기본값), hidden(해당 요소 안 보이게), collapse(table 요소, 행이나 열에 사용), none(table 요소, row나 colum에 사용)

## 3. opacity 프로퍼티

요소의 투명도 정의, 0.0 ~ 1.0 값

# 백그라운드

해당 요소의 배경으로 이미지 또는 색상 정의

## 1. background-image 프로퍼티

요소에 배경이미지 지정

## 2. background-repeat 프로퍼티

배경이미지 반복 지정, 수직과 수평 반복 지정.  
`repeat-x`: x축으로만 배경이미지 반복  
`repaat-y`: y축으로만 배경이미지 반복  
`no-repeat`: 반복 출력 멈추고 싶을 때

## 3. background-size 프로퍼티

사이즈 지정, 이미지의 고유 비율 유지함.  
px값, %값, cover지정, contain 지정

## 4. backgrount-attachment 프로퍼티

화면이 스크롤되더라도 배경이미지는 고정되도록 backgrount-attachment 프로퍼티에 `fixed`사용.

## 5. background-position 프로퍼티

이미지의 좌표 지정.(xpos,ypos) 기본값은 우측 상단.

## 6. background-color 프로퍼티

배경 색상 지정. 색상값 또는 transparent 키워드 사용

## 7. background Shorthand

background-color, background-image, background-repeat, background-position 한번에 지정.

# 폰트와 텍스트

## line-height 프로퍼티

텍스트 높이 지정, 텍스트 수직 정렬에 응용 사용

## text-align 프로퍼티

텍스트의 수평 정렬 정의

## text-decoraton 프로퍼티

링크의 underline 제거, 텍스트에 underline, overline 등 추가 가능

## word-break 프로퍼티

단어 길이 길어서 부모 영역 벗어난 텍스트 처리 방법  
`word-wrap`: 단어 어느정도 고려해 개행  
`word-break: break-all`: 단어 고려하지 않고 부모 영역에 맞추어 강제 개행.

# 요소의 위치 정의

## 1. position 프로퍼티

`static`: 기본값, 좌표 프로퍼티와 사용 불가.  
``relative`: 기본 기준으로 좌표 프로퍼티 사용.
``absolute``: 조상 요소 기준으로 좌표 프로퍼티만큼 이동. 부모 요소 영역 벗어나 자유로움.

# 요소 정렬

flexbox 레이아웃 지원하지 않을 때 float 프로퍼티 사용. 블록 레벨 요소 가로 정렬 위해 사용됨.  
이미지와 텍스트 있을 때 이미지 주위 텍스트로 감싸기 위해 사용.  
요소가 기본 레이아웃 흐름에서 벗어나 요소의 모서리가 페이지 왼쪽 오른쪽으로 이동함.

## 정렬

`float:left;`: 왼쪽부터 가로 정렬  
`float:right;`: 오른쪽부터 가로 정렬 -> 출력 순서 역순

## float 프로퍼티 문제 해결 방법

- float 프로퍼티 선언된 요소와 선언되지 않은 요소간 margin 사라짐.  
  --> float 선언하지 않은 요소에 `overflow: hidden` 프로퍼티 선언.

# .css와 .module.css 파일을 사용하는 방식의 차이점

**스타일의 범위**와 **이름 충돌 방지**를 위해.
| 구분 | `.css` | `.module.css` |
| --- | --- | --- |
| 스코프 | 전역, 어디서 import 하든 프로젝트에 영향. | 지역, import한 컴포넌트 내부에서만 유효. |
| 클래스명 변환 | 유지 | 고유한 해시값 붙음 |
| 사용 방식 | `import './style.css'` 붙인 후 문자열로 클래스명 입력 | `import styles from './style.module.css'` 붙인 후 객체 형태로 사용 |
| 이름 충돌 | 다른 파일에서 같은 이름 쓰면 스타일 꼬임 | 파일이 다르면 이름 같아도 충돌X |

# `.module.css` 사용하는 이유

## 1. 클래스 네임

흔한 이름을 여러명이 동시에 사용할 시에 .css 사용하면 이름 안 겹치도록 복잡하게 지어야함.  
.module.css는 자동으로 이름 겹치지 않게 바꿔주기 때문임.

## 2. 예기치 못한 스타일 오염 방지

컴포넌트1 위해 만든 스타일이 전혀 상관없는 컴포넌트2에 적용되어 레이아웃 깨지는 현상을 차단하기 위해

## 3. 유지보수

특정 컴포넌트 삭제시 그 컴포넌트와 연결된 .module.css 파일만 지우면 다른 곳에서 줄 걱정 없이 깔끔하게 코드 정리할 수 있음.
