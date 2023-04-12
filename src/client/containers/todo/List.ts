import { connect } from "react-redux"

import { todo_clear, todo_get, todo_toggle, todo_delete } from '@/store/actions/todo'

import List from '@/components/todo/List'

const mapStateToProps = state => ({
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