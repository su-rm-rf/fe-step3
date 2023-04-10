import { combineReducers } from 'redux'

import { 
  todo as old_todo,
  todoList as old_todo_list,
  filter as old_filter,
} from './old-todo'

import { 
  todo,
  todoList as todo_list,
  filter,
} from './todo'

import { loading } from './utils'

const reducer = combineReducers({
  old_todo,
  old_todo_list,
  old_filter,

  todo,
  todo_list,
  filter,
  
  loading,
})

export default reducer