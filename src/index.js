const components = require('./components')

app.model({
  state: {
    title: 'Not quite set yet'
  },
  reducers: {
    update: (data, state) => ({
      title: data
    })
  }
})

app.router((route) => [
  route('/', components.layout(components.home)),
  route('/about', components.layout(components.about))
])

const view = app.start()

const container = document.getElementById('app')

container.innerHTML = ''

container.appendChild(view)
