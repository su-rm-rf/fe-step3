import { connect } from "react-redux"

import Layout from '@/components/Layout'

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout)