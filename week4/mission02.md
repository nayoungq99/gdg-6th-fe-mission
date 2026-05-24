# ESLint

- Lint는 **'보풀'** 의 의미
- 코드에서 보풀: 실행은 되지만 오류를 일으킬 확률이 높은 코드, 코드 품질을 떨어뜨리는 습관
- JavaScript는 컴파일 단계가 없는 인터프리터 언어로 실행 전에 오타나 문법 에러를 잡아내기 어려워 ESLint가 코드 실행 전에 **정적 분석**을 통해 문제를 찾아냄.
- 코드 작성하는 방식을 일관성 있는 방식으로 구성하도록 도와줌.  
  --> **코드 퀄리티 보장**

## ESLint가 찾아내는 문제

### 잠재적 버그 발견

선언만 하고 한 번도 사용하지 않은 변수, 존재하지 않는 함수 호출,  
`return`문 뒤에 코드 작성해 절대 실행되지 않는 코드 찾아냄.

### 코드 에러 방지

`undefined` 관련 에러나 변수 스코프 꼬임 문제를 미리 경고함.

### 강제적인 규칙 적용

특정 함수나 최신 문법의 사용을 제한하거나 권장하고 싶을 때 규칙 커스텀함.

## ESLint 사용하는 법

1. 프로젝트 내에서 ESLint 의존 추가하기

```Bash
npm install -D eslint # npm
yarn add -D eslint # yarn
```

2. ESLint Extention 설치
3. 프로젝트 루트 경로의 .eslintrc.js 파일 설정해 프로젝트 규칙 명시하기

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  // 각 코드 검사할 parser
  parserOptions: {
    // parser 추가 정보 등록
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    // 내가 작성한 prettier 적용
    // 외부 file extends 하는 부분
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // lint rule 적용
    // 자동 설정된 rules 끄거나 error를 warning으로 변경하기 등
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
```

### plugins 종류

- eslint-config-airbnb-base: 에어비엔비 린트 플러그인
- eslint-config-next: Next.js 전용 린트 플러그인
- eslint-plugin-react: 리액트 전용 플러그인
- eslint-plugin-prettier: 린트 위에 사용할 프리티어 플러그인
- eslint-config-prettier: 요건 린트 설정과 중복되는 부분이 있으면 프리티어 룰에서 제외하는 플러그인
- @typescript-eslint/eslint-plugin: : 타입스크립트 전용 린트

# Prettier

프로젝트 내에서 일관된 텍스트 형식 가질 수 있게 하는 도구  
탭의 줄 간격, 줄바꿈...

## Prettier 설치하는 법

- **플러그인 없이 Extention 설치**: VSCode 에디터 자체에 prettier rule 세팅
- **플러그인 설치**: 해당 프로젝트와 다른 환경에서 해도 동일한 prettier rule 적용 가능

```Bash
npm install -D prettier
```

```js
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "proseWrap": "never",
  "endOfLine": "auto"
}
```

# ESLint, Prettier 동시 사용

--> 충돌 발생.  
`eslint-config-prettier`: elint와 중복되는 규칙을 **prettier** 쪽에서 알아서 끄도록 함.  
`eslint-plugin-pretter`: prettier에 걸린 부분을 **eslint error**로 걸리도록 함.

위 두 가지 실행 후 아래 내용으로 .eslintrc 파일 수정 필요

```js
{
  ...
  "extends": ["plugin:prettier/recommended"]
  ...
}
```
