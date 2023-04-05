import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import styles from '@/styles/index.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav_header}>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/old-todo">OldTodo</NavLink> */}
        <NavLink to="/old-todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className={styles.content_body}>
        <Outlet />
      </div>
    </div>
  )
}
export default Layout