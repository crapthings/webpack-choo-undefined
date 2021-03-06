const faker = require('faker')

require('./model')

module.exports = (state, prev, send, done) => render`
  <div>
    <h3>${state.posts.list.length} posts</h3>
    ${form(state, prev, send)}
    ${list(state, prev, send)}
  </div>
`

function list(state, prev, send) {
  return render`
    <table onload=${test}>
      <thead>
        <tr>
          <th width='60'>No.</th>
          <th>title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${state.posts.list.map((post, i) => render`
          <tr>
            <td>${i + 1}</td>
            <td>${post.title}</td>
            <td>
              <button onclick=${(e) => send('posts:remove', { payload: post })}>remove</button>
            </td>
          </tr>
        `)}
      </tbody>
    </table>
  `

  function test () {
    console.log('posts loaded')
    send('posts:subscribe')
  }
}

function form(state, prev, send) {
  return render`
    <form onsubmit=${submit}>
      <input type='text' id='username' onkeyup=${handleKeyup} placeholder='enter a title' required autofocus />
      <input type='submit' value='submit' />
      <input type='button' value='refetch' onclick=${refetch} />
    </form>
  `

  function submit (e) {
    send('posts:insert', { payload: state.posts.item })
    e.target.reset()
    e.preventDefault()
  }

  function handleKeyup (e) {
    send('posts:updatePostState', { payload: {
      title: e.target.value
    }})
  }

  function refetch() {
    send('posts:subscribe')
  }
}
