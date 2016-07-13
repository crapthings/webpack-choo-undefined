module.exports = (view) => (state, prev, send) => render`
  <div>
    ${header()}
    <div id='layout-main'>
      ${view(state, prev, send)}
    </div>
    ${footer()}
  </div>
`

const header = () => render`
  <div id='layout-header'>
    <a href="/">home</a>
  	<a href="/users">users</a>
  	<a href="/about">about</a>
  </div>
`

const footer = () => render`
  <div id='layout-footer'> choo is supa dupa fly </div>
`
