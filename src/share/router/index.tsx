import React from 'react'
import { Routes, Route } from 'react-router-dom'

import App from '@/components/Layout'
import Dashboard from '@/components/Dashboard'
import OldTodo from '@/components/old-todo'
import Todo from '@/components/todo'
import About from '@/components/About'

export default () => (
  <Routes>
    {/* <Route path="/" element={() => import('@/App')}></Route> */}
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard /> }></Route>
      <Route path="old-todo" element={<OldTodo />}></Route>
      <Route path="todo" element={<Todo />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="*" element={<div>404</div> }></Route>
    </Route>
  </Routes>
)