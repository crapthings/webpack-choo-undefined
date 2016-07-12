module.exports = (view) => (params, state, send) => render `
  <div>
    ${header()}
    ${view(params, state, send)}
    ${footer()}
  </div>
`

const header = () => render `
  <nav>
  	<a href="/">home</a>
  	<a href="/about">about</a>
  </nav>
`

const footer = () => render `
  <div>footer</div>
`
