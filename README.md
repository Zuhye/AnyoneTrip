# 무장애 관광 여행계획 플래너

<div align="center">
    <img width="330" height="60%" alt="image" src="https://github.com/Zuhye/AnyoneTrip/assets/90972641/4abbe71e-2476-441b-a9fc-07db438c2937">
</div>

# AnyoneTrip
> 금오공과대학교 컴퓨터 공학과
> </br>
> 2023.05 ~ 

## ✅ 프로젝트 소개

#### 휠체어를 사용하거나 기타 장애로 인해서 평범한 관광 시설을 사용하는 데 어려움을 겪는 사람들이 많다. 
이런 사람들이 불편 없이 산책하는 장소를 찾고, 여행 일정을 관리하기 위해 개발되었다.

## ✅ 개발 환경 세팅
1. nodejs lts 설치
    - windows : <httsp://nodejs.org>
    - mac: brew install node
   
2. 실행 방법
    - client
    
    ```
    cd frontend
    npm i
    npm start
    ```
    
    - server
    
    src/main/java/Barrierfree.TravelPlanner/TraevlPlannerApplication
    에 있는 main에서 Run

<br/>
<Br/>

## ✅ git 사용법(local: 본인 컴퓨터 / remote: 연결되어 있는 git 주소)
#### 작업 업로드 및 다운로드
1. git pull origin 브랜치명 // 원격 저장소에 있는 데이터를 로컬 저장소로 가져옴
2. git add . // 본인이 작업한 파일 모두 워크트리에 추가
3. git commit -m "설명" // 커밋해서 로컬 저장소에 저장
4. git push origin 브랜치명 // 원격 저장소에 변경된 부분 적용

#### 브랜치 설정
master: main 브랜치로 마지막 배포할 때만 사용
<br/>
dev: 모든 개발물은 해당 브랜치에 업데이트되며 마지막 배고할 때 master 브랜치와 merge
<br/>
dev/각자사용할 브랜치: 개인 사용할 브랜치로 각자 해당 브랜치에서 작업하며 구현된 내용은 dev 브랜치로 merge 



## ✅ 기술스택
---

### Devlopment
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white)
![mariadb](https://img.shields.io/badge/mariadb-003545?style=flat&logo=mariadb&logoColor=white)

### Enviroment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white)
![IntelliJ](https://img.shields.io/badge/intellijidea-000000?style=flat&logo=intellijidea&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white)

<br/>
<Br/>

---
## ✅ 페이지별 화면
|  |  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------|
| ![mainPage](https://github.com/Zuhye/AnyoneTrip/assets/90972641/ed81fbb6-37ba-43b0-9b59-b412302f750d)| ![plan_page](https://github.com/Zuhye/AnyoneTrip/assets/90972641/bb58203c-4933-4f3a-b9d4-b30dfd4452a2)
| 메인 페이지 | 지역 & 날짜 지정 |
| ![locationPlan_page1](https://github.com/Zuhye/AnyoneTrip/assets/90972641/8af96a06-6dd8-4231-ac22-45beb7205ff4)| ![locationPlan_page2](https://github.com/Zuhye/AnyoneTrip/assets/90972641/187d95b4-dc77-4f74-80d3-a25d0559dda4)
| 지역별 관광지 리스트 출력 | 원하는 장소 위치 및 정보 출력 |
| ![locationPlan_page3](https://github.com/Zuhye/AnyoneTrip/assets/90972641/3f13717e-6783-4142-a94e-7c245e33038a)| ![locationPlan_page4](https://github.com/Zuhye/AnyoneTrip/assets/90972641/aeb3f6cb-6187-410e-b200-ce8c19e1d65c)
| 원하는 일정에 추가를 위한 모달 | 일자 별 관광지 추가 |
| ![placeList_page1](https://github.com/Zuhye/AnyoneTrip/assets/90972641/6bd456d1-4a6d-4538-b397-7b0138172c0c)| ![placeList_page2](https://github.com/Zuhye/AnyoneTrip/assets/90972641/7fc3a604-8caf-46b0-9e3a-e48a1dafd81d)
| 전체 무장애 관광지 리스트 출력 | 검색 기능 |

<br/>
<Br/>

---
## ✅ 서비스 주요 기능

### 1. 관광 일정 생성하기
 - 관광 일정을 생성하기 시작하면, 맨 처음 일정과 지역을 선택할 수 있다.
 - 해당하는 지역의 관광지 리스트를 간단하게 표시해준다.
 - 그 중 특정 관광지를 추가하면, 위치와 함께 상세 정보를 확인할 수 있다.
 - 원하는 관광지를 원하는 일정에 추가할 수 있고, 일자별로 추가가 완료되면 일정 생성이 확정된다.

### 2. 관광지 목록 보기
 - 관광지 목록 보기를 시작하면 전체 리스특 출력된다.
 - 지역별, 카테고리별로 필터링이 가능하며 장소 이름으로 검색도 할 수 있다.
 - 상세보기를 통해 해당 관광지의 자세한 정보를 확인할 수 있다.

### 3. 카카오 지도 API
 - 카카오 지도 API를 사용하여 입력받은 주소를 위도, 경도로 변경하고 지도에 마커로 표시한다.

### 4. 한국관광공사 API 
 - 한국관광공사에서 제공된 무장애 관광 Open API를 사용하여 필요한 정보를 제공 받는다.

<br/>
<Br/>

---
## ✅ 기획
1. [와이어 프레임](https://www.figma.com/file/AqUM3Tjji8JpsoCvfVe2TO/%EB%AC%B4%EC%9E%A5%EC%95%A0-%EC%97%AC%ED%96%89-%EC%9D%BC%EC%A0%95-%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C?type=design&node-id=0-1&mode=design&t=kqbWVXs042qZi7Yu-0)
2. [E-R Diagram] 
<img width="330" height="60%" alt="image" src="https://github.com/Zuhye/AnyoneTrip/assets/90972641/c06dbfe5-c748-4359-9bf1-35446345862b">

<br/>
<Br/>

---
## ✅ 제작
| 이름   | 담당 업무 |
| ------ | --------- |
| 송주혜 | 예약 API, 메인페이지, 일정별 예약 등록 페이지, 전체 관광지 페이지, 상세보기 페이지 |
| 조우성 | 일정별 예약 등록 페이지 |
| 박소현 | 지역&날짜 선택 페이지 |
| 신상희 | 문헌 조사 및 연구 |



