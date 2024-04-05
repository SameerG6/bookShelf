import React from 'react'
import "../App.css"
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
const DashboardLayout = () => {
  return (
    <div className='dblay'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout