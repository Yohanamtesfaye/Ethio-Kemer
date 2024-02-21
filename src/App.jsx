import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
