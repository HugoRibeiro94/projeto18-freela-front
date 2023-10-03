import { useState } from 'react'

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
