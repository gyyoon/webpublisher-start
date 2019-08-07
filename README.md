# 웹 퍼블리셔용 개발환경

## 개요
- 주 사용자: 웹 디자이너, 웹 퍼블리
- 필요기능
  - sass 컴파일: autoprefixer `browsers: ['last 2 version', 'ie 11']`
  - html layout 템플릿: ejs사용
  - 로컬 개발환경 & 리로딩: browsersync사용
  - assets 파일은 그대로 dist에 복사: font, 라이브러리css, 라이브러리js등(jquery, slider등)

## 개발 환경
- node: 10.16.1 LTS

## Command
```
// 기본 패키지 인스톨: 처음 1회만
npm i
// 로컬 개발환경 브라우저 열기: 작업시 로컬환경기동
npm run dev
```

## 디렉토리 설명
`npm run dev`로 로컬환경 열은후 `src`이하 디렉토리에서 작업 → 작업결과물이 `dist`에 컴파일 & 이동

```
/
└ src 
  └ assets          // assets이하 디렉토리 내용은 dist에 자동이동
    └ css           // dist/css 로 파일이동
    └ fonts         // dist/fonts 로 파일이동
    └ images        // dist/images 로 파일이동
    └ js            // dist/js 로 파일이동
  └ css             // sass파일들 컴파일후 dist/css에 이동
  └ html            // ejs파일들 컴파일후 dist/html에 이동
└ dist              // 작업후 파일, 로컬환경에서 루트디렉토리, 버전관리안함
```

## 기본 사용법
### ejs
파일이름 앞에 언더바(`_`)가 있으면 dist에 출력안함, 주로 인클루드하는 공용컴포넌트에 이용

예) header, footer, nav

```
<%- include('/_header.ejs')%>

<div class="wrap">
    contents
</div>

<%- include('/_footer.ejs')%>

```

### sass
파일이름 앞에 언더바(`_`)가 있으면 dist에 출력안함

예)_variables.scss를 common.scss에서 임포트, _variables.scss는 dist에 출력할 필요없을경우

```
// commomn.scss
@import '_variables.csss';

... do somethings
```

### js
es6 문법컴파일 안함, 만약 es6관련 문법을 사용할시 컴파일 필요

ex) es6란?
```
// var 대상 let, const
let a;
const b;

// arrow function
const exampleFunction = () => {
}

```


## 템플릿 언어 공식사이트
- ejs: [https://ejs.co/](https://ejs.co/)
- sass: [https://sass-lang.com/](https://sass-lang.com/)
