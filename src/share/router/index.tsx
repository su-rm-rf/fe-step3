import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout'
import Dashboard from '@/components/Dashboard'
import About from '@/components/About'

import OldTodo from '@/components/old-todo'
import OldTodoDetail from '@/containers/old-todo/Detail'
import OldTodoUpdate from '@/containers/old-todo/Update'

import Todo from '@/components/todo'
import TodoDetail from '@/containers/todo/Detail'
import TodoUpdate from '@/containers/todo/Update'

export default () => (
  <Routes>
    {/* <Route path="/" element={() => import('@/Layout')}></Route> */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard /> }></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="old-todo" element={<OldTodo />}></Route>
      <Route path="old-todo/detail/:id" element={<OldTodoDetail />}></Route>
      <Route path="old-todo/update/:id" element={<OldTodoUpdate />}></Route>
      <Route path="todo" element={<Todo />}></Route>
      <Route path="todo/detail/:id" element={<TodoDetail />}></Route>
      <Route path="todo/update/:id" element={<TodoUpdate />}></Route>
      <Route path="*" element={<div>404</div> }></Route>
    </Route>
  </Routes>
)