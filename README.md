# Let Towels (팀명: Kingsman)




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
            <img src="https://img.shields.io/badge/react61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>라이브러리</td>
        <td>
            <img src="https://img.shields.io/badge/BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/>
            <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=OpenCV&logoColor=white"/>
            <img src="https://img.shields.io/badge/dlib-008000?style=for-the-badge&logo=Dlib&logoColor=white"/>
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
        </td>
    </tr>
    <tr>
        <td>데이터베이스</td>
        <td>
            <img src="https://img.shields.io/badge/Oracle 11g-F80000?style=for-the-badge&logo=Oracle&logoColor=white"/>
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

## 사전 작업

- 이 링크(http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2 )를 통해 받은 압축파일을 풀어 shape_predictor_68_face_landmarks.dat을 model 폴더에 설치하세요.

- 다음과 같은 프로그램의 설치가 필요합니다.

  - Microsoft Visual C++ Build Tools(https://visualstudio.microsoft.com/ko/downloads/)

  - CMake(https://cmake.org/download/)

<br>

## 시스템 아키텍처(구조) 
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488262/f334cf23-22f0-481e-9894-9811c1af3715)
<br>

## 서비스 흐름도
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488262/a4a7a8d8-7052-47eb-8d43-72e7079cc20a)
<br>

## ER다이어그램
![image](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488262/7a109e35-a5b8-4cb1-b73b-f17f5521b1ed)


## 화면 구성

### 로그인/회원가입/회원수정/회원탈퇴
![제목을 입력해주세요_-001](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488105/1581b26c-2a14-4444-a211-cac71a304e8f)

회원가입
- 항목 중 하나라도 쓰지 않은 항목이 있다면 모든 정보를 입력하라는 문구가 표시된다
- 이메일 입력 시 사용 가능한 이메일인지 아닌지에 대한 문구가 표시된다

로그인/회원정보수정/회원탈퇴
- 아이디 또는 비밀번호가 맞지 않을 경우 아이디나 비밀번호가 잘못되었다는 문구가 표시 된다


<br>

### 게시판
![제목을 입력해주세요_-001 (1)](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488105/c09a3e48-7c8b-46d5-8774-cf5f09bba857)

게시글
- 로그인 되어 있지 않은 경우 : 등록 버튼이 비활성화 되어있고 글 내용 칸에 로그인 시 이용 가능하다는 문구가 표시된다. 
- 로그인 되어 있는 경우 : 등록 버튼이 활성화 되어있고 글 내용 칸에 내용 입력이라는 문구가 표시되며 글 제목 또는 내용이 없으면 모든 항목을 입력하라는 문구가 표시 된다
- 사용자 본인의 글인 경우 목록과 수정 버튼이 있다
- 사용자의 글이 아닌 경우 목록 버튼이 있다
- 수정하는 경우 제목과 내용 수정이 가능하며 하단에 수정, 삭제, 취소 버튼이 있다.

댓글
- 로그인 되어 있지 않은 경우 : 댓글 칸에 로그인 시 이용 가능하다는 문구가 표시되며 등록 버튼이 비활성화 되어 있다 
- 로그인 되어 있는 경우 : 댓글 칸에 댓글 입력이라는 문구가 표시되며 등록 버튼이 활성화되어 있다. 자신의 댓글이 등록된 경우 우측에 삭제 버튼이 생긴다

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
    <td align="center"><img src="https://pbs.twimg.com/media/B-n6uPYUUAAZSUx.png" width="100" height="100"/></td>
    <td align="center"><img src="https://pbs.twimg.com/media/B-n6uPYUUAAZSUx.png" width="100" height="100"/></td>
  </tr>
  <tr>
    <td align="center"><strong>박범석</strong></td>
    <td align="center"><strong>조원제</strong></td>
    <td align="center"><strong>함수연</strong></td>
    <td align="center"><strong>한명훈</strong></td>
    <td align="center"><strong>임혜지</strong></td>
    <td align="center"><strong>하동철</strong></td>
  </tr>
  <tr>
    <td align="center"><b>Project Manager</b></td>
    <td align="center"><b>Backend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Backend</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/bumseokk/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/jaewon07/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/ahhasueyon/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/hanmyeonghun/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/Limmaji/sample" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/hadongcher/sample" target='_blank'>github</a></td>
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

![image](https://github.com/2023-SMHRD-IS-CLOUD-1/StrongRepo/assets/142488262/aee16021-513d-46ad-97db-7c3dcc0f27d1)

