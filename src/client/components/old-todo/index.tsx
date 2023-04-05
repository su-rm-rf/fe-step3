import React from 'react'

import Add from '@/containers/old-todo/Add'
import Filter from '@/containers/old-todo/Filter'
import List from '@/containers/old-todo/List'

import styles from '@/styles/index.scss'

const Todo = () => {
  return (
    <div className={styles.todo_layout}>
      <Add />
      <Filter />
      <List />
    </div>
  )
}

export default Todo