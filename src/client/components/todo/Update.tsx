import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ todo_detail, todo_update }) => {

  const { id } = useParams()
  let [todo, setTodo]:any = useState({})

  useEffect(() => {
    todo_detail(id).then(res => {
      setTodo(res)
    })
  }, [])

  const text = useRef()
  const save = () => {
    todo_update({
      ...todo,
      text: text.current.value
    }).then(() => {
      history.back()
    })
  }

  return (
    <div className="todo_update">
      <ul>
        <li>
          <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out">
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        </li>
        <li>
          <label htmlFor="">ID：</label>
          <span>{todo.id}</span>
        </li>
        <li>
          <label htmlFor="">Text：</label>
          <textarea ref={ text } defaultValue={todo.text}></textarea>
        </li>
        <li>
          <label htmlFor="">Completed：</label>
          <span>{todo.completed === 1 ? 'Y' : 'N'}</span>
        </li>
        <button onClick={ save }>保存</button>
      </ul>
    </div>
  )
}

export default Detail