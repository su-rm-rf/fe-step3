import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { getStore } from '../share/store'
import App from '../share/router'

const store = getStore((window as any).__PRELOADED_STATE__)
delete (window as any).__PRELOADED_STATE__

hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>
, document.querySelector('#root'))