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
  <details>
    
  </details>
* 대시보드
* 홍보 문구 생성
  <details>
    
  </details>
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

회원가입
- 비밀번호 불일치 시 '비밀번호가 일치하지 않습니다.'라는 문구가 표시된다.



<br>

### 수건수량분석/활동기록
![사용자수건분석](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/3844b736-314a-429f-83ad-9a6a3d10a33e)
![수건분석이미지업로드](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/17812144-361a-4379-8122-0314ad2992f8)
![수건분석결과](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/6045f6bb-ae53-4650-a8f7-e2117c316a6a)
![사용자-활동기록](https://github.com/2023-SMHRD-IS-CLOUD-1/Kingsman/assets/142488262/5dc56436-5e2e-4034-bcef-e98afcc0fb77)


수건수량분석
- 이미지를 업로드하여, 수건 개수를 확인할 수 있다.
- 결과값에 따라 '50개입니다.', '50개가 아닙니다.'로 결과가 띄워진다.

활동기록
- 현재까지의 수건 수량 분석 결과를 확인할 수 있다.
- 원하는 날짜를 입력하면 해당하는 날짜에 대한 기록만 조회 가능하다.
- 클릭 시 수건 이미지 확인 및 해당 기록 수정, 삭제 가능하다.

<br>

### 지식채널/사례퀴즈
![제목을 입력해주세요_-001 (2)](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488105/096627c4-6073-4d9c-8ad4-e2a3ed11839a)

<br>

### 메인화면(마약필터/대시보드)/현상체험
![제목을 입력해주세요_-001 (4)](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488105/e89fd4cd-8a62-47fc-adc6-4723b57787f0)

대시보드
- 그래프에 마우스를 올리면 수치를 확인할 수 있다

마약필터
- 파일 선택 버튼으로 필터를 적용하고 싶은 사진을 선택하면 왼쪽 칸에 업로드 된다. 
- Filter버튼을 통해 필터가 적용된 사진이 오른쪽 칸에 출력된다.

현상체험
- 페이지 상단 우측에 체험 버튼을 누르면 체험 페이지로 이동한다.



<br>

##  팀원 역할
<table>
  <tr>
    <td align="center"><img src="https://item.kakaocdn.net/do/fd49574de6581aa2a91d82ff6adb6c0115b3f4e3c2033bfd702a321ec6eda72c" width="100" height="100"/></td>
    <td align="center"><img src="https://mb.ntdtv.kr/assets/uploads/2019/01/Screen-Shot-2019-01-08-at-4.31.55-PM-e1546932545978.png" width="100" height="100"/></td>
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



