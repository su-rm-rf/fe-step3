import React from 'react'

import constants from '@/constants'

const FilterItem = ({ item, filter, children, do_filter }) => {
  return (
    <li className={ filter === item ? 'active' : '' }
        onClick={ () => do_filter(item) }
      >{ children }</li>
  )
}

const TodoFilter = (props) => {
  return (
    <ul className="todo_filter">
      <FilterItem item={constants.SHOW_ALL} { ...props } >All</FilterItem>
      <FilterItem item={constants.SHOW_COMPLETED} { ...props } >Completed</FilterItem>
      <FilterItem item={constants.SHOW_INCOMPLETE} { ...props } >InComplete</FilterItem>
    </ul>
  )
}

export default TodoFilter