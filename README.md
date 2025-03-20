<img src="https://github.com/user-attachments/assets/9ea6650a-182a-4442-b35c-a3f1fb3be19f" width="1000px"/>


## ✨ 소개
yeonFLIX는 사용자가 영화 및 TV프로그램에 대한 정보를 확인할 수 있는 서비스입니다.<br>
themoviedb API를 활용하여 개발되었습니다.

## 🔗 배포 URL
https://movie-02semiproject.vercel.app

## 📑 요약

### 1. 주제

* 영화 및 TV프로그램 정보 전달을 위한 yeonFLIX

### 2. 목표

* 사용자 편리성을 고려하여 직관적인 기능 제공 

### 3. 핵심 기능

* 영화 박스오피스 노출
* 미디어 상세 정보 확인

### 4. 주요 기술 스택

React, Sass, JavaScript, Zustand, Axios, Swiper


## 📆 기간 및 인원

  * 총 작업 기간 : 5일
    * 개발 기간 : 3일
    * 테스트 및 수정 기간 : 2일
   
  * 개인 작업 100%


## ⚙️ 주요 기능

### 1. 영화 박스오피스 노출
* 객

### 2. 미디어 상세 정보 확인
* 용


## 🗂️ 폴더 구조

```
📂movie
┣ 📂src
┃  ┣ 📂component
┃  ┃  ┣ 📜Card.jsx
┃  ┣ 📂page
┃  ┃  ┣ 📜Footer.jsx
┃  ┃  ┣ 📜Header.jsx
┃  ┃  ┣ 📜Home.jsx
┃  ┃  ┣ 📜List.jsx
┃  ┃  ┣ 📜Movies.jsx
┃  ┃  ┣ 📜TVSeries.jsx
┃  ┣ 📜App.js
┃  ┣ 📜style.scss
┃  ┣ 📜style-res.scss
┃  ┣ 📜tvdbState.js
```


## 💻 개발 환경

### 1. 시스템 환경 (System Environment)

| Badge | 항목 | 설명 |
| :---:| :---: | :---: |
|![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=windows&logoColor=white)| **OS** | Windows |
|![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat-square&logo=visual-studio-code&logoColor=white)| **개발 도구** | Visual Studio Code (VS Code) |
|![GoogleChrome](https://img.shields.io/badge/GoogleChrome-000000?style=flat-square&logo=GoogleChrome&logoColor=white)| **웹 브라우저** | Google Chrome (개발자 도구 활용) |

### 2. 개발 언어 (Development Languages)

| Badge | 언어 | 설명 |
| :---:| :---: | :---: |
|![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)| **HTML5** | 웹 페이지의 **구조 정의** |
|![CSS](https://img.shields.io/badge/CSS-663399?style=flat-square&logo=CSS&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)| **CSS3 / Sass** | **스타일링** 및 **디자인 적용** |
|![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat-square&logo=JavaScript&logoColor=%23F7DF1E)| **JavaScript (Vanilla JS)** | **동적 기능** 및 **사용자 인터랙션 처리** | 

### 3. 라이브러리 (Libraries & Plugins)

| Badge | 라이브러리 | 설명 |
| :---:| :---: | :---: |
|![FullCalendar](https://img.shields.io/badge/FullCalendar-ffb500?style=flat-square&logo=FullCalendar&logoColor=white)| **FullCalendar** | **캘린더 기능 구현** |
|![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white)| **Swiper.js** | **이미지 슬라이드 및 캐러셀 효과** |

### 4. 데이터 처리 (Data Handling & Storage)

| Badge | 기술 | 설명 |
| :---:| :---: | :---: |
|![LocalStorage](https://img.shields.io/badge/LocalStorage-006866?style=flat-square&logo=LocalStorage&logoColor=white)| **LocalStorage** | **브라우저 내 데이터 저장 및 관리** |

### 5. 개발 및 빌드 도구 (Development & Build Tools)

| Badge | 항목 | 설명 |
| :---:| :---: | :---: |
|![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| **버전 관리** | GitHub |
|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) | **디자인 & UI/UX** | Figma (화면 설계 및 프로토타이핑) |

## 💥 트러블 슈팅

### 📌 header.html

 1. 버거 메뉴 클릭 후 스크롤시 하단에 여백이 생기는 이슈 발생

    *헤더가 아래로 스크롤시 숨겨지는 방식인데, 버거 메뉴 클릭한 상태에서도 적용되는 상황
    
    ⇒ **해결방법**: 버거 버튼에 active 클래스 여부를 확인하여, true일 경우 스크롤을 숨기게 하여 버거 메뉴가 보일 시 스크롤이 불가하게 작업함

### 📌 index.html

 1. [메인 슬라이드 섹션] 첫 페이지 로드 시 메인 슬라이드의 텍스트 효과가 한번에 적용되어 슬라이드가 넘어가도 애니메이션 효과가 없는 이슈 발생
  
    *메인 슬라이드 위 각 슬라이드마다 텍스트 애니메이션 효과를 적용한 상황
       
    ⇒ **해결방법**: swiper.on을 사용하여 슬라이드가 움직일 때마다 텍스트 효과가 나타나게 적용
<br>
