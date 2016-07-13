require('babel-polyfill')

require('./styles/desktop.styl')

// dev only

if (process.env.NODE_ENV !== 'production') {

  if (module.hot) {
    module.hot.accept()
  }

  require('./index.hbs')

  const dev = require('./dev')

  window.addEventListener('message', dev.reloadStyle, false)

}

window.app = choo()

window.horizon = Horizon({
	host: 'localhost:8181'
})

require('./index')
