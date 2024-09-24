import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'

const App = () => {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App