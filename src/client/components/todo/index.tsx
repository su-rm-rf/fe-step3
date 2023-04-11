import React from 'react'

import Add from '@/containers/todo/Add'
import Filter from '@/containers/todo/Filter'
import List from '@/containers/todo/List'

const Todo = () => {
  return (
    <div className="todo_layout">
      <Add />
      <Filter />
      <List />
    </div>
  )
}

export default Todo