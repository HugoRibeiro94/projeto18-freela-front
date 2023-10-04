import { useState } from 'react'
import Context from './Context';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  const [token, setToken] = useState('');
  return (
    <Context.Provider value={{ token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
