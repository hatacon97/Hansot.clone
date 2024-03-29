import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header(props) {
   const isLogin = props.isLogin;

   const onLogout = () => {
    sessionStorage.removeItem('userId')
    document.location.href = '/'
   }

  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="../img/mTovtnli_400x400.jpg" style={{width:"50px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="BRAND" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">브랜드 스토리</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                브랜드 철학
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">브랜드 유산</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ESG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ESG 경연이란?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                환경보호
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">사회공헌</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">윤리경영</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">세계 40대 브랜드 선정</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="MENU" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/All_Menu">전체 메뉴</NavDropdown.Item>
            {/* <NavDropdown.Item href="/MenuUpload">메뉴 등록</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.2">
                식재료 이야기
              </NavDropdown.Item>  
              <NavDropdown.Item href="#action/3.3">페루찬차마요커피</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">단체주문</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="STORE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">주변점포찾기</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EVENT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">이달의 이벤트</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                신규점 오픈이벤트
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FRANCHISE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Why 한솥 가맹점</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                성공수기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">창업설계절차</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">예상 창업 비용</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">창업문의</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">창업설명회 일정, 신청</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="HANSOT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">한솥의 약속</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                    한솥의 비전
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">연혁&수상</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">한솥 NEWS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">오시는 길</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">고객센터</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">인재채용</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {
              isLogin === true
              ? <Link to='/Logout' onClick={onLogout}>로그아웃</Link>
              : <Link to="/Login">로그인</Link>
            }
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;