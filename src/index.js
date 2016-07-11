const choo = require('choo')
const app = choo()

const html = require('choo/html')

const myCoolView = () => html`
  <div>hello pink world!</div>
`

app.router((route) => [
  route('/', myCoolView)
])

const tree = app.start()
document.body.appendChild(tree)
