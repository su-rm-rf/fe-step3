import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

const TodoList = ({ do_get, do_clear, todoList, do_toggle, do_delete }) => {

  useEffect(() => {
    do_get()
  }, [])

  const del = ({ id }) => {
    do_delete(id)
  }

  const clear = () => {
    if (window.confirm('Sure ?')) {
      do_clear()
    }
  }

  return (
    <div className="todo_list">
      <ul>
        {
          todoList.map(todo => 
            <li key={ todo.id } 
              className={ !!todo.completed ? 'completed' : '' }
            >
              <div className="text" onClick={ () => do_toggle(todo) }>{ todo.text }</div>
              <div className="handler">
                {
                  todo.completed === 0 &&
                  <Link to={`update/${ todo.id }`}>编辑</Link>
                }
                <Link to={`detail/${ todo.id }`}>详情</Link>
                <button onClick={ () => del(todo) }>删除</button>
              </div>
            </li>
          )
        }
      </ul>
      <button onClick={ clear }>One Key Clear</button>
    </div>
  )
}

export default TodoList