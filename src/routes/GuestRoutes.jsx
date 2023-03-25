import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const GuestRoutes = () => {
    const auth = useSelector((state)=>state.auth)
  return (
    <div>{auth.user.loggedin=== false ? <Navigate to="/"/> :<Outlet/>}</div>
  )
}

export default GuestRoutes