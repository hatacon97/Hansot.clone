import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    const [inputUserID, setInputUserID] = useState('');
    const [inputUserPass, setInputUserPass] = useState('');

    const handleInputUserID = (e) =>{
        setInputUserID(e.target.value)
    }

    const handleInputUserPass = (e) =>{
        setInputUserPass(e.target.value)
    }

    const onClickLogin = () => {
        axios.post('http://localhost:3001/user_inform/onLogin', null, {
            params:{
                'userId' : inputUserID,
                'userPass' : inputUserPass
            }
        })
        .then(res => {
            console.log(res)
            console.log('res.data.userId ::', res.data.userId)
            console.log('res.data.msg ::', res.data.msg)
            if(res.data.userId === undefined){
                console.log('===================', res.data.msg)
                alert('입력하신 아이디가 일치하지 않습니다.')
            } else if(res.data.userId === null){
                console.log('===================', '입력하신 비밀번호가 일치하지 않습니다.')
                alert('입력하신 비밀번호가 일치하지 않습니다.')
            } else if(res.data.userId === inputUserID){
                console.log('===================', '로그인 성공')
                sessionStorage.setItem('userId', inputUserID)
            }
            document.location.href = '/'
        })
        .catch()
    }

    useEffect(()=>{
        axios.get('http://localhost:3001/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },[])

  return (
    <div className="bg-light py-5">
        <div class="container bg-light px-5">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" name="inputUserID" value={inputUserID} onChange={handleInputUserID} placeholder="아이디를 입력해주세요." required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="inputUserPass" value={inputUserPass} onChange={handleInputUserPass} placeholder="비밀번호를 입력해주세요." required/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={onClickLogin}>
                로그인
            </Button>
            <Link to='/Regist' style={{paddingLeft:"10px"}}><Button>회원가입</Button></Link>
            </Form>
        </div>
    </div>
  );
}

export default Login;