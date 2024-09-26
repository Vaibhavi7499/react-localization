import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Emp from './component/Emp/Emp'
import AddUser from './component/User/AddUser'

const App = () => {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/emp' element={<Emp/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edituser/:empId' element={<AddUser/>}/>
      </Routes>
    </div>
  )
}

export default App