import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'

import { getStore } from '../share/store'
import App from '../share/router'

export default (ctx) => {
  const { filter } = ctx.query
  const preloadedState = { filter }
  const store = getStore(preloadedState)

  const html = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ ctx.request.url }>
        <App />
      </StaticRouter>
    </Provider>
  )
  const finalState = store.getState()
  ctx.body = renderFullPage(html, finalState)
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link rel="icon" href="/logo.ico" />
      <link rel="stylesheet" href="/static/main.css" />
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        var width = document.documentElement.clientWidth
        // fontSize = 当前设备的css布局宽度 / 物理分辨率(设计稿的宽度) * 基准fontSize
        document.documentElement.style.fontSize = (width > 750 ? 750 : width) / 750 * 100 + 'px';
        
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/usage/server-rendering#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="/static/client.js"></script>
    </body>
  </html>
  `
}