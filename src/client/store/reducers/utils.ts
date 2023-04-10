import constants from "@/constants"

const loading = (state=false, action) => {
  switch (action.type) {
    case constants.TODO_GET_START:
    case constants.TODO_DETAIL_START:
    case constants.TODO_FILTER_START:
    case constants.TODO_ADD_START:
    case constants.TODO_UPDATE_START:
    case constants.TODO_TOGGLE_START:
    case constants.TODO_DELETE_START:
      return true
    case constants.TODO_GET_SUCCESS:
    case constants.TODO_DETAIL_SUCCESS:
    case constants.TODO_FILTER_SUCCESS:
    case constants.TODO_ADD_SUCCESS:
    case constants.TODO_UPDATE_SUCCESS:
    case constants.TODO_TOGGLE_SUCCESS:
    case constants.TODO_DELETE_SUCCESS:
      return false
    default:
      return state
  }
}

export {
  loading
}