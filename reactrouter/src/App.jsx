import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import mainlayout from './component/mainlayout'
import { Routes } from 'react-router-dom'

import login from './Reactwork/reactrouterform/login.jsx'
import registration from './Reactwork/reactrouterform/registration.jsx'
import dashboard from './Reactwork/reactrouterform/dashboard.jsx'



function App() {
  const [count, setCount] = useState();

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<mainlayout/>}>
      <Route path='login' element={<login/>} />
      <Route path='/registration' element={<registration/>} />
      <Route path='/dashboard' element={<dashboard/>} />
    </Route>
   </Routes>
   
   
   
   </BrowserRouter>
  )
}

export default App