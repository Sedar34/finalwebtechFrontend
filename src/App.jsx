// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Index from './pages'
import AdminDashboard from './pages/AdminDashboard'
import TennisLogin from './pages/login'
import TennisRegister from './pages/register'
import ReservationManagement from './pages/reserve'
 import { Reset } from './pages/Reset'
 import AddUser from './pages/Add-user'
import './App.css'
// import SearchUser from './pages/search-user'


function App() {
  

  return (
    <>
 <Router>
  <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/login' element={<TennisLogin/>} />
    <Route path='/register' element={<TennisRegister/>} />
    <Route path='/resetpassword' element={<Reset/>} />
    <Route path='/reserve' element={<ReservationManagement/>} />
    <Route path='/add-user' element={<AddUser/>} />

    <Route path='*' element={<Navigate to ="/login"/>}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
  </Routes>
 </Router>
    </>
  )
}

export default App
