import { connect } from "react-redux"

import { todo_clear, todo_get, todo_toggle, todo_delete } from '@/store/actions/todo'

import constants from "@/constants"
import List from '@/components/todo/List'

const getList = (list, filter) => {
  switch (filter) {
    case constants.SHOW_ALL:
      return list
    case constants.SHOW_COMPLETED:
      return list.filter(todo => todo.completed)
    case constants.SHOW_INCOMPLETE:
      return list.filter(todo => !todo.completed)
    default:
      return new Error(`Unknown filter: ${ filter }`)
  }
}

const mapStateToProps = state => ({
  // todoList: getList(state.todo_list, state.filter)
  todoList: state.todo_list
})

const mapDispatchToProps = dispatch => ({
  do_get: () => dispatch(todo_get()),
  do_toggle: todo => dispatch(todo_toggle(todo)),
  do_clear: () => dispatch(todo_clear()),
  do_delete: todo => dispatch(todo_delete(todo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)