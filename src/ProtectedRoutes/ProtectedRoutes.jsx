import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
   let isLogin = JSON.parse(localStorage.getItem("isLogin"))
  return (
    <div>
        {isLogin ? <Outlet /> : <Navigate to="/" />}
    </div>
  )
}

export default ProtectedRoutes