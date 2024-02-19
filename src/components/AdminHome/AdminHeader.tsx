import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../image/logo.png'
import './AdminHeader.css';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgb(167, 221, 167);;', 
}));


export default function AdminHeader() {
  React.useEffect(() => {
    const fetchData = async () => {
        try {
            const url = "http://localhost:8085/kingsman/Notilist";
            const res = await axios.get(url);
            console.log('알림', res.data[0].b_NOTIFICATION); 
            setCountNoti(res.data[0].b_NOTIFICATION)
          } catch (error) {
            console.error(error);
        }
    };
  
    fetchData(); 
}, []);
// React.useEffect(() => {
//   const fetchData2 = async () => {
//       try {
//           const url = "http://localhost:8085/kingsman/Notiresult";
//           const res = await axios.get(url);
//           console.log('알림2222',res.data); 
//         } catch (error) {
//           console.error(error);
//       }
//   };

//   fetchData2(); 
// }, []);
const [topFourData, setTopFourData] = React.useState([]); // topFourData 상태 선언
React.useEffect(() => {
  const fetchData3 = async () => {
    try {
      const url = "http://localhost:8085/kingsman/Notiresultfinal";
      const res = await axios.get(url);
      const sortedData = res.data.sort((a, b) => b.t_INDEX - a.t_INDEX);
      const topFourData = sortedData.slice(0, 4);
      setTopFourData(topFourData); // topFourData 상태 업데이트
    } catch (error) {
      console.error(error);
    }
  };

  fetchData3();
}, []);
  const[countnoti,setCountNoti]=React.useState(0);
  const resetgo=()=>{
    setCountNoti(0)
    Resetnoti();
    console.log(countnoti)
  }
  
  const data2 = {
    b_NOTIFICATION: 0
  };
 
  const Resetnoti=()=>{
      axios
    .post('http://localhost:8085/kingsman/Resetnoti', data2, { withCredentials: true })
    .then((response) => {
      console.log("말")
      console.log('데이터 전송 성공:', response.data);
      
    })
    .catch((error) => {
      console.error('데이터 전송 중 오류:', error);
    });
  
    }


    const toggleInbox = () => {
      setShowInbox((prevShowInbox) => !prevShowInbox);
    };
  
    const [showInbox, setShowInbox] = React.useState(false); // 인박스의 가시성을 관리합니다.

    const handleNotificationClick = () => {
      // 알림 아이콘이 클릭되면 인박스를 토글합니다.
      resetgo();
      toggleInbox();
    };

    const handleCloseInbox = () => {
      // 인박스를 닫습니다.
      setShowInbox(false);
    };






  const nav = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => { nav('/AdminModifyProfile') }}>회원 정보 수정</MenuItem>
      <MenuItem onClick={() => { nav('/Login') }}>로그아웃</MenuItem>
    </Menu>
  );
      
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <MenuItem onClick={() => { nav('/Dashboard') }}>
        <p>대시보드</p>
      </MenuItem>
      <MenuItem onClick={() => { nav('/PromotionalText') }}>
        <p>홍보문구</p>
      </MenuItem>
      <MenuItem onClick={() => { nav('/UserManagement') }}>
        <p>사용자관리</p>
      </MenuItem>
      <MenuItem onClick={() => { nav('/ScheduleManagement') }}>
        <p>일정관리</p>
      </MenuItem>
      <MenuItem onClick={() => { nav('/AllActivitiLog') }}>
        <p>활동기록</p>
      </MenuItem>
      <MenuItem onClick={() => { nav('/UserCountTowel') }}>
        <p>수건수량확인</p>
      </MenuItem>
    </Menu>
  );
  const formatDate = (dateString) => {
    // dateString에서 'T00:00:00.000+09:00' 부분을 잘라냅니다.
    const formattedDate = dateString.slice(0, 10); // 'T00:00:00.000+09:00'의 길이가 10이므로 10까지 잘라냅니다.
    return formattedDate;
  };


const handleAllLogs =()=>{

}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="open drawer"
             sx={{ mr: 2 }}
             onClick={handleMobileMenuOpen} 
           >
             <MenuIcon />
          </IconButton>
          <Toolbar sx={{ justifyContent: 'center', paddingLeft: '65px' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
               <img src={logo} alt="Towel King Logo" style={{ width: '110px', height: '40px', marginTop:'5px'}} />
            </Typography>
          </Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleNotificationClick}
          >
            <Badge badgeContent={countnoti} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          
        </Toolbar>
      </StyledAppBar>
      {showInbox && (
  <div className="inbox-container">
    <div className="inbox-content">
      <table className="bordered-table">
        <thead></thead>
        <tbody>
        {topFourData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user.b_NAME}</td>
                    <td>{item.user.b_POSITION}</td>
                    <td>{formatDate(item.t_DATE)}</td> {/* formatDate 함수를 사용하여 시간 형식 변환 */}
                  </tr>
                ))}
         
        </tbody>
      </table>
      <div style={{textAlign:"center"}}>
        <button className="all-logs-button" onClick={() => { nav('/AllActivitiLog') }} >
          전체로그
        </button>
        </div>
    </div>
    {/* 닫기 버튼 */}
    <Box sx={{ flexGrow: 1 }} />
    <IconButton onClick={handleCloseInbox} className="close-button">
    </IconButton>
  </div>
)}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}