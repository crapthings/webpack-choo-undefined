const choo = require('choo')

window.render = require('choo/html')

require('babel-polyfill')

// require('./screen.styl')

// dev only

if (process.env.NODE_ENV !== 'production') {

  if (module.hot) {
    module.hot.accept()
  }

  // require('./index.hbs')

  const dev = require('./dev')

  window.addEventListener('message', dev.reloadStyle, false)

}

window.app = choo()

require('./index')
