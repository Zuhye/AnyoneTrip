# 창의설계프로젝트 - 무장애 관광 여행계획 플래너

휠체어를 사용하거나 기타 장애로 인해서 평범한 관광 시설을 사용하는 데 어려움을 겪는 사람들이 많다. 
<br />
이런 사람들이 불편 없이 산책하는 장소를 찾고, 여행 일정을 관리하기 위해 개발되었다.

## 개발 환경 세팅
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

## git 사용법(local: 본인 컴퓨터 / remote: 연결되어 있는 git 주소)
#### 작업 업로드 및 다운로드
1. git pull origin 브랜치명 // 원격 저장소에 있는 데이터를 로컬 저장소로 가져옴
2. git add . // 본인이 작업한 파일 모두 워크트리에 추가
3. git commit -m "설명" // 커밋해서 로컬 저장소에 저장
4. git push origin 브랜치명 // 원격 저장소에 변경된 부분 적용

---------------

#### 브랜치 설정
master: main 브랜치로 마지막 배포할 때만 사용
<br/>
dev: 모든 개발물은 해당 브랜치에 업데이트되며 마지막 배고할 때 master 브랜치와 merge
<br/>
dev/각자사용할 브랜치: 개인 사용할 브랜치로 각자 해당 브랜치에서 작업하며 구현된 내용은 dev 브랜치로 merge 

