https://github.com/2023-SMHRD-IS-CLOUD-1/springkingsman

# Let Towels (팀명: Kingsman)

![KakaoTalk_20240226_163546547](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/5210b7ff-7b80-4ae3-bddb-da67d9c27c2c)


## 서비스 소개
* 서비스명: YOLOv8 기반 수건 수량 분석 및 재고 관리 서비스
<br>

* 서비스 목표
    - 이미지 AI 분석 기술을 활용하여 쉽고 편리하게 수건 수량 계산을 할 수 있게 함으로써 인력 및 시간, 비용 절약. 
    - 초거대 AI 서비스를 활용하여 수건 홍보 문구 생성 기능 개발을 통해 다양한 홍보 효과 및 매출 상승에 기여.
    - 대시보드로 실시간 재고 현황 및 판매 추이 파악 가능.
    - 관리자 페이지 개발로 관리자의 용이한 시스템 관리 가능.
    - AWS를 활용하여 서비스 배포.
<br>

## 프로젝트 기간
2024.02.01 ~ 2023.02.28 (4주)
<br>

## 주요 기능
* 수건 수량 분석
* 대시보드
* 홍보 문구 생성
* 사용자 관리
* 일정 관리
* 활동 기록 확인
<br>

## 기술스택
<table>
    <tr>
        <th>구분</th>
        <th>내용</th>
    </tr>
    <tr>
        <td>사용언어</td>
        <td>
            <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>라이브러리</td>
        <td>
            <img src="https://img.shields.io/badge/BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/>
            <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
            <img src="https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>
            <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=Flask&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>개발도구</td>
        <td>
            <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=Eclipse&logoColor=white"/>
            <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=Jupyter&logoColor=white"/>
            <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>서버환경</td>
        <td>
            <img src="https://img.shields.io/badge/Apache Tomcat-D22128?style=for-the-badge&logo=Apache Tomcat&logoColor=white"/>
            <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>데이터베이스</td>
        <td>
            <img src="https://img.shields.io/badge/Oracle 11g-F80000?style=for-the-badge&logo=Oracle&logoColor=white"/>
            <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>협업도구</td>
        <td>
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
        </td>
    </tr>
</table>


<br>



## 시스템 아키텍처(구조) 
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/28885b2d-58dd-44fa-9e6c-7e5be456040b)
<br>

## 서비스 흐름도
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/e5cc9dda-b640-48dd-870b-ff68d56bcbbd)
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/2cf7e35b-f025-4b16-b221-6d22aac3509c)
<br>

## ER다이어그램
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/56ac40d2-0482-4491-81e9-4e6651e6e6ad)


## 화면 구성

### 로그인/회원가입
![로그인화면](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/b58e0dd2-b8ca-4728-b520-47b713c742dd)
![회원가입](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/c8a9c204-9cd4-4c97-8c0c-26555e9f46be)


로그인
- 아이디 또는 비밀번호가 맞지 않을 경우 '로그인 실패'라는 문구가 표시된다
- 아래 아이콘을 클릭 시 소셜 로그인이 가능하다.
- 로그인 시 권한에 따라 관리자와 사용자 페이지로 이동한다.

회원가입
- 비밀번호 불일치 시 '비밀번호가 일치하지 않습니다.'라는 문구가 표시된다.



<br>

### 수건수량분석
![사용자수건분석](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/3844b736-314a-429f-83ad-9a6a3d10a33e)
![수건분석이미지업로드](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/17812144-361a-4379-8122-0314ad2992f8)
![수건분석결과](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/6045f6bb-ae53-4650-a8f7-e2117c316a6a)


수건수량분석
- 사용자 계정으로 로그인 시, 수건수량분석 페이지로 이동한다.
- 관리자는 메뉴의 수건수량분석 버튼을 클릭 시, 수건수량분석 페이지로 이동할 수 있다.
- 이미지를 업로드하여, 수건 개수를 확인할 수 있다.
- 결과값에 따라 '50개입니다.', '50개가 아닙니다.'로 결과가 띄워진다.

<br>

### 활동기록(사용자/관리자)

![사용자-활동기록](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/5dc56436-5e2e-4034-bcef-e98afcc0fb77)
![관리자-전체활동기록](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/4bfd7cd7-f8c9-4c7c-8a88-c5ad1fc4309e)

활동기록
- 현재까지의 수건 수량 분석 결과를 확인할 수 있다.
- 관리자는 모든 사용자의 수건 수량 분석 결과를 확인할 수 있다.
- 원하는 날짜를 입력하면 해당하는 날짜에 대한 기록만 조회 가능하다.
- 클릭 시, 수건 이미지 확인 및 해당 기록 수정, 삭제 가능하다.

<br>

### 대시보드(관리자)
![관리자-대시보드 알람](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/59475879-ab25-452f-9c11-ddf416166532)
![관리자대시보드2](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/ec50fadf-0b40-49ed-be14-0bbe8df02e58)

대시보드
- 상단에는 정량 데이터, 아래에는 수건 수량 분석 데이터 기반 차트로 구성되어 있다.
- 입·출고량, 분석 결과 통계, 평균 신뢰도 등의 재고 및 분석 결과 데이터를 시각화하여 보여준다.

<br>

### 홍보문구 생성/기록(관리자)
![홍보문구생성](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/fbc0fa2b-18d9-4030-ab9e-ab5f04341882)
![홍보문구생성결과](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/2fe71241-8cd8-4a6c-a2d9-1bb5a952b2d1)
![홍보문구기록](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/303402a2-a3df-4349-b1a0-ed64916ef8c6)

홍보문구 생성
- ChatGPT OpenAI를 활용한 홍보 문구 생성 기능을 사용할 수 있다.
- 카테고리를 선택 후 적용하고 홍보문구생성 버튼을 클릭하면, 사진과 같이 홍보 문구가 생성된다.

홍보문구 기록
- 지금까지의 프롬프트와 홍보 문구를 채팅 형식으로 볼 수 있습니다.

<br>

### 사용자/일정 관리(관리자)
![관리자-사용자관리](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/a0202e9e-45b3-4c35-b9bc-3e8ee2caa92e)
![개인정보관리디테일](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/35ce71c8-7701-4697-adea-2f40eb939355)
![관리자-일정관리](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/360caf51-d385-4686-9a40-ace90c7e5b6b)
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/fd583a04-f00d-498c-aa4c-25499a5b69e5)

사용자관리
- 사용자 검색 및 정보 수정, 삭제할 수 있다.
- 사용자 정보 데이터를 마스킹하였다.

일정관리
- 재고에 대한 날짜, 수량, 입,출고 , 특이사항을 입력할 수 잇다.
- 입, 출고가 완료가 되었을 때 해당 날짜의 이벤트를 클릭하여, 완료 여부를 표시할 수 있다. 

<br>

##  팀원 역할
<table>
  <tr>
    <td align="center"><img src="https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/d424f16b-f34d-47ec-a07f-8c475bf28766" width="100" height="130"/></td>
    <td align="center"><img src="https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/07e02206-e961-4f5d-8328-62b8654c61c7" width="100" height="130"/></td>
    <td align="center"><img src="https://mblogthumb-phinf.pstatic.net/20160127_177/krazymouse_1453865104404DjQIi_PNG/%C4%AB%C4%AB%BF%C0%C7%C1%B7%BB%C1%EE_%B6%F3%C0%CC%BE%F0.png?type=w2" width="100" height="100"/></td>
    <td align="center"><img src="https://i.pinimg.com/236x/ed/bb/53/edbb53d4f6dd710431c1140551404af9.jpg" width="100" height="100"/></td>
  </tr>
  <tr>
    <td align="center"><strong>박범석</strong></td>
    <td align="center"><strong>한명훈</strong></td>
    <td align="center"><strong>박재욱</strong></td>
    <td align="center"><strong>김동균</strong></td>
  </tr>
  <tr>
    <td align="center"><b>Project Manager</b></td>
    <td align="center"><b>Backend</b></td>
    <td align="center"><b>Backend</b></td>
    <td align="center"><b>Backend</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/bumseokk/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/jaewon07/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/ahhasueyon/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/hanmyeonghun/sample" target='_blank'>github</a></td>
  </tr>
</table>

## 트러블슈팅
* 문제1<br>
  - 문제: jupyter notebook과 jsp를 flask로 연결하려 했으나, 404 오류 메시지만 계속 화면에 나타남.
  - 연구:  jupyter notebook 커널 문제로 오류 메시지가 제대로 뜨지 않아 원인을 flask로 여겼으나, 컴퓨터를 재부팅 해 커널 문제를 해결하고 오류 메시지를 확인한 결과, OpenCV 함수에 전달되는 이미지가 NumPy 배열이 아니었다는 간단한 문제였음.
  - 해결: 이미지를 다음과 같이 Numpy 배열로 고침.
https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/blob/f51b476fa0b838710623dbf5f160b2de8e93e859/Strong1team2/drug_filter/face_distort%20-%20%EC%B5%9C%EC%A2%85%EB%B3%B8.ipynb#L177
* 문제2<br>
  - 문제: 댓글 삭제 버튼 클릭 시 DropComment.do가 실행되어서 댓글 삭제 후 페이지로 돌아와서 자동으로 댓글이 삭제된 상태로 보여야 하는데 댓글이 DB에서는 삭제되었으나 화면에서는 F5로 새로고침 하지 않으면 그대로 보이는 문제가 나타남.
  - 연구: 성공 시든 실패 시든 return ＂redirect:/GoboardView.do?id=＂+ 해당 게시글 번호; 로 되돌아가서 다시 해당 페이지가 새로 고침 되는 줄 알았으나 새로고침 되지 않았고, 비동기 통신인 $.ajax를 활용하여서 따로 redirect 주소를 잡아주는 건 상관이 없었음.
  - 해결: 비동기 통신 정보 전송 성공 시 실행되는 success: 문 안쪽에 window.location.reload(); 해당 실행되어서 창을 새로고침 해주는 코드를 넣어줌으로써 삭제 버튼 클릭 시 삭제 된 후 새로고침 되어 화면에 나오도록 해결함.
## 참고문헌



