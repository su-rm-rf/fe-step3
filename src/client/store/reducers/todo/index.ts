import constants from "@/constants"

const todo = (state=[], action) => {
  switch (action.type) {
    case constants.TODO_GET_SUCCESS:
    case constants.TODO_FILTER_SUCCESS:
      return action.data
    default:
      return state
  }
}

export default todo