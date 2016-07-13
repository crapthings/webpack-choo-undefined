const components = require('./components')

app.router((route) => [
  route('/', components.layout(components.home)),
  route('/users', components.layout(components.users)),
  route('/about', components.layout(components.about))
])

const view = app.start()

const container = document.getElementById('app')

// container.innerHTML = ''

// container.appendChild(view)
document.body.appendChild(view)
