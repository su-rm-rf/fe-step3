import { connect } from "react-redux"

import Detail from '@/components/todo/Detail'
import { todo_detail } from "@/store/actions/todo"

const mapStateToProps = (state) => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  todo_detail: id => dispatch(todo_detail(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail)