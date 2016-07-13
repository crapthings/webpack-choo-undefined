module.exports = (view) => (state, prev, send) => render`
  <div>
    ${header()}
    ${view(state, prev, send)}
    ${footer()}
  </div>
`

const header = () => render`
  <nav>
    <a href="/">home</a>
  	<a href="/users">users</a>
  	<a href="/about">about</a>
  </nav>
`

const footer = () => render`
  <div>footer</div>
`
