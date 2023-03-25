import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const HomeRoutes = () => {
    const auth = useSelector((state)=>state.auth)
  return (
    <div>{
        auth.user.loggedin ? <Navigate to="/list"/> :<Outlet/>
        }</div>
  )
}

export default HomeRoutes