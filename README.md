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
`npm run dev`로 로컬환경 열은후 `src`이하 디렉토리에서 작업 → 작업결과물이 `dist`폴더에 컴파일 & 이동

```
/
└ src 
  └ assets          // assets이하 디렉토리 내용은 dist폴더에 자동이동
    └ css           // dist/css
    └ fonts         // dist/fonts
    └ images        // dist/images
    └ js            // dist/js
  └ css             // sass파일들 컴파일후 dist/css에 이동
  └ html            // ejs파일들 컴파일후 dist/html에 이동
└ dist              // 작업후 파일, 로컬환경에서 루트디렉토리, 버전관리안함
```
