import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/book/Books'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/books" element={<Books/>}/>
      </Routes>



    </Router>
  )
}

export default App
