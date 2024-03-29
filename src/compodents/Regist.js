import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Regist(props){

    const [userId, setUserId] = useState("")
    const [userPass, setUserPass] = useState('')
    const [userName, setUserName] = useState("")

    const userIdHandler = (e)=>{
        setUserId(e.target.value)
    }

    const userPassHandler = (e)=>{
        setUserPass(e.target.value)
    }

    const userNameHandler = (e)=>{
        setUserName(e.target.value)
    }


    const subUserData = () => {
        axios.post('http://localhost:3001/api/insert', {
            userId: userId, 
            userPass: userPass, 
            userName: userName
        }).then((res)=>{
            console.log(res);
        })
        document.location.href = '/Login'
    };

    return(<>
        <div className="bg-light py-5">
            <div class="container bg-light px-5">
                <h1>회원가입</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control name="userId" onChange={userIdHandler} placeholder="아이디를 입력해주세요." required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" name="userPass" onChange={userPassHandler} placeholder="비밀번호를 입력해주세요." required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>이 름</Form.Label>
                        <Form.Control name="userName" onChange={userNameHandler} placeholder="이름을 입력해주세요." required/>
                    </Form.Group>
                    <Button type='button' onClick={subUserData}>회원가입</Button>
                </Form>
            </div>
        </div>
    </>)
}

export default Regist;