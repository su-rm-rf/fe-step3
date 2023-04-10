import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = ({ loading }) => {
  return (
    <div className="layout">
      <div className="content_body">
        <Outlet />
      </div>
      <nav className="nav_header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/old-todo">OldTodo</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      {
        loading && 
        <div className="loading">处理中</div>
      }
    </div>
  )
}
export default Layout