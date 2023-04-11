import { connect } from "react-redux"

import { todo_filter } from "@/store/actions/todo"
import Filter from '@/components/todo/Filter'

const mapStateToProps = state => ({
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  do_filter: (filter) => dispatch(todo_filter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)