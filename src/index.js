const components = require('./components')

app.router((route) => [
  route('/', components.layout(components.home)),
  route('/posts', components.layout(components.posts)),
  route('/users', components.layout(components.users)),
  route('/about', components.layout(components.about))
])

const view = app.start()

const container = document.getElementById('app')

container.innerHTML = ''

container.appendChild(view)
