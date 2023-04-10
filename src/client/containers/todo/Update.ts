import { connect } from "react-redux"

import Update from '@/components/old-todo/Update'
import { todo_detail, todo_update } from "@/store/actions/old-todo"

const mapStateToProps = (state) => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  todo_detail: id => dispatch(todo_detail(id)),
  todo_update: todo => dispatch(todo_update(todo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Update)