import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MenuUpload() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">메뉴 이름</InputGroup.Text>
        <Form.Control
          placeholder="메뉴이름"
          aria-label="MenuName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">메뉴 가격</InputGroup.Text>
        <Form.Control
          placeholder="메뉴가격"
          aria-label="MenuPrice"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label style={{fontWeight:"bold"}}>메뉴 사진</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>메뉴 소개</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
  );
}

export default MenuUpload;