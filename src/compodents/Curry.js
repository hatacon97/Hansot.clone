import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sb from "./Sb";
import 'holderjs';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Mayo(props){

    const [menuList, setMenuList] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3001/api4/get').then((response)=>{
          setMenuList(response.data)
        })
      }, []);

    return(<>
    <Sb />
        <h1 style={{margin:"20px"}}>카레</h1>
    {menuList.map((val)=>{
      return (
        <Card style={{ width: '18rem', float:"left", margin:"10px" }}>
          <Card.Img variant="top" src={val.menu_img} />
          <Card.Body>
            <Card.Title>{val.menu_name}</Card.Title>
              <Card.Text>{val.menu_price}원</Card.Text>
            <Button variant="primary" href={`/MenuDetail/${val.id}`}>자세히 보기</Button>
          </Card.Body>
        </Card>
      
      );
    })}
    </>)
}

export default Mayo;