import React, { useEffect } from 'react'

import styles from '@/styles/index.scss'

const TodoList = ({ do_get, do_clear, todoList, do_toggle }) => {

  useEffect(() => {
    do_get()
  }, [])

  const clear = () => {
    do_clear()
  }

  console.log(todoList)

  return (
    <div className={styles.todo_list}>
      <ul>
        {
          todoList.map(todo => 
            <li key={ todo.id } 
              className={ !!todo.completed ? styles.completed : '' }
              onClick={ () => do_toggle(todo) }
            >
              { todo.text }
            </li>
          )
        }
      </ul>
      <button onClick={ clear }>One Key Clear</button>
    </div>
  )
}

export default TodoList