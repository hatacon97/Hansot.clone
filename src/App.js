import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compodents/Header';
import Main from './compodents/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All_Menu from './compodents/All_Menu';
import Gogi from './compodents/Gogi';
import Mayo from './compodents/Mayo';
import Curry from './compodents/Curry';
import MenuUpload from './compodents/MenuUpload';
import MenuDetail from './compodents/MenuDetail';
import Login from './compodents/Login';
import { useEffect, useState } from 'react';
import Regist from './compodents/Regist';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem('userId') === null) {
      console.log('isLogin ?? ::', isLogin)
    } else {
      setIsLogin(true)
      console.log('isLogin ?? ::', isLogin)
    }
  })
  return (
    <div className='App'>
      <BrowserRouter>
        <Header isLogin={isLogin}/>
        <Routes>
          <Route path="/" element={<Main isLogin={isLogin}/>}></Route>
          <Route path="/All_Menu" element={<All_Menu />}></Route>
          <Route path='/Gogi' element={<Gogi />}></Route>
          <Route path='/Mayo' element={<Mayo />}></Route>
          <Route path='/Curry' element={<Curry />}></Route>
          <Route path='/MenuUpload' element={<MenuUpload />}></Route>
          <Route path='/MenuDetail/:id' element={<MenuDetail />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Regist' element={<Regist />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


