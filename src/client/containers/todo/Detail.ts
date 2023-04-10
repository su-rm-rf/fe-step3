import { connect } from "react-redux"

import Detail from '@/components/old-todo/Detail'
import { todo_detail } from "@/store/actions/old-todo"

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