require('babel-polyfill')

require('./screen.styl')

require('./index')

// dev only

if (process.env.NODE_ENV !== 'production') {

  if (module.hot) {
    module.hot.accept()
  }

  require('./index.hbs')

  const dev = require('./dev')

  window.addEventListener('message', dev.reloadStyle, false)

}
