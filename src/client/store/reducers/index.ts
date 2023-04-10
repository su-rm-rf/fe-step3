import { combineReducers } from 'redux'

import old_todo from './old-todo'
import old_filter from './old-todo/filter'

import todo from './todo'
import filter from './todo/filter'

const reducer = combineReducers({
  old_todo,
  old_filter,

  todo,
  filter,
})

export default reducer