import constants from "@/constants"

const todo = (state={}, action) => {
  switch (action.type) {
    case constants.TODO_DETAIL_START:
      return {}
    case constants.TODO_DETAIL_SUCCESS:
      return action.data
    default:
      return state
  }
}

const todoList = (state=[], action) => {
  switch (action.type) {
    case constants.TODO_GET_SUCCESS:
    case constants.TODO_FILTER_SUCCESS:
      return action.data
    default:
      return state
  }
}

const filter = (state=constants.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.TODO_FILTER_START:
      return action.filter
    default:
      return state
  }
}

export {
  todo, 
  todoList,
  filter,
}