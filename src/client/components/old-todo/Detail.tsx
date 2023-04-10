import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ todo, todo_detail }) => {

  const { id } = useParams()

  useEffect(() => {
    todo_detail(id)
  }, [])

  console.log(todo)

  return (
    <div className="todo_detail">
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
          <span>{todo.text}</span>
        </li>
        <li>
          <label htmlFor="">Completed：</label>
          <span>{todo.completed === 1 ? 'Y' : 'N'}</span>
        </li>
      </ul>
    </div>
  )
}

export default Detail