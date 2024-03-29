import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import './css/MenuDetail.css'


function MenuDetail(porps){

    const {id} = useParams();

    const [menuList, setMenuList] = useState([])

    useEffect(()=>{
      axios.get(`http://localhost:3001/read/${id}`).then((response)=>{
        setMenuList(response.data)
      })
    }, []);

    return(<>
    <Link to="/All_Menu" style={{textDecoration:"none"}}>
      <div className="d-grid gap-2">
        <Button variant="outline-secondary">전체 메뉴</Button>
      </div>
    </Link>
    {menuList.map((val)=>{
      return (<>
              <div className="bg-light py-5">
                <div class="container bg-white px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={val.menu_img} alt="..." /></div>
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-dark mb-2">{val.menu_name}</h1>
                                <p class="lead fw-normal text-dark-50 mb-4">{val.menu_info}</p>
                            </div>
                            <p class="lead fw-bold text-yellow-50 mb-4">{val.menu_price}원</p>
                        </div>
                    </div>
                </div>
              </div>
    </>);
    })}
    </>)
}

export default MenuDetail;