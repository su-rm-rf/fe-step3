import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import saga from 'redux-saga'

import reducer from "@/store/reducers"

const store = createStore(reducer, 
  applyMiddleware(thunk, logger)
)

store.subscribe(() => console.log(store.getState()))

export const getStore = (preloadedState) => {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
}