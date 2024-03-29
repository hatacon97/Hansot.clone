import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import './css/style.css'

function Sb() {
  return (<div className='sb_wrap'>
    <Accordion className='SbCss'>
        <h1>한솥메뉴</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>전체메뉴</Accordion.Header>
        <Accordion.Body>
        <Link to='/All_Menu' style={{textDecoration:"none"}}>
          <div className="d-grid gap-2">
            <Button variant="outline-warning" style={{color:"black"}}>전체메뉴</Button>
          </div>
        </Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>사각도시락</Accordion.Header>
        <Accordion.Body>
        <Link to='/Gogi'  style={{textDecoration:"none"}}>
          <div className="d-grid gap-2">
            <Button variant="outline-warning" style={{color:"black"}}>고기고기시리즈</Button>
          </div>
        </Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>보울도시락</Accordion.Header>
        <Accordion.Body>
        <Link to="/Mayo" style={{textDecoration:"none"}}>
          <div className="d-grid gap-2">
            <Button variant="outline-warning" style={{color:"black"}}>마요</Button>
          </div>
        </Link>
        </Accordion.Body>
        <Accordion.Body>
        <Link to="/Curry" style={{textDecoration:"none"}}>
          <div className="d-grid gap-2">
            <Button variant="outline-warning" style={{color:"black"}}>카레</Button>
          </div>
        </Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Sb;