import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Cart from './pages/Cart'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
    <Router basename='/Shopy'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
