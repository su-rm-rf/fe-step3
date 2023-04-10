import { connect } from "react-redux"

import { todo_filter } from "@/store/actions/old-todo"
import Filter from '@/components/old-todo/Filter'

const mapStateToProps = state => ({
  filter: state.old_filter
})

const mapDispatchToProps = dispatch => ({
  do_filter: (filter) => dispatch(todo_filter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)