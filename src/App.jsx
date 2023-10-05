import { useState } from 'react'
import Context from './Context';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProducts from './pages/AddProducts';
import ToManage from './pages/ToManage';


function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Context.Provider value={{ token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegisterPage />}/>
          <Route path="/home-page" element={<HomePage/>}/>
          <Route path="/to-manage" element={<ToManage/>}/>
          <Route path="/add-products" element={<AddProducts/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
