import React from 'react'
import Layout from './Layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Emp from './component/Emp/Emp'
import AddUser from './component/User/AddUser'
import Login from './component/Login/Login'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'



const App = () => {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route element={<ProtectedRoutes />}>
        <Route path='/emp' element={<Emp/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edituser/:empId' element={<AddUser/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App