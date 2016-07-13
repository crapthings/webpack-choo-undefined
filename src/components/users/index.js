require('./model')

module.exports = (state, prev, send) => render`
  <div>
    <h3>user list</h3>
    ${userForm(state, prev, send)}
    ${userList(state, prev, send)}
  </div>
`

function userList(state, prev, send) {
  return render`
    <table>
      <thead>
        <tr>
          <th width='60'>avatar</th>
          <th width='200'>name</th>
          <th width='200'>username</th>
          <th width='300'>email</th>
          <th width='200'>website</th>
          <th>phone</th>
          <th>lorem</th>
        </tr>
      </thead>
      <tbody>
        ${state.users.map((user) => render`
          <tr>
            <td>
              <img src='${user.avatar}' alt='${user.name}' class='img-avatar' />
            </td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
            <td>${user.phone}</td>
            <td>${user.lorem}</td>
          </tr>
        `)}
      </tbody>
    </table>
  `
}

function userForm(state, prev, send) {
  return render`
    <form onsubmit=${submit}>
      <input type='text' id='username' placeholder='enter an username' required autofocus />
      <input type='submit' value='submit' />
      <input type='button' value='refetch' onclick=${refetch} />
    </form>
  `

  function submit (e) {
    e.preventDefault()
    let $username = document.getElementById('username')
    send('add', { payload: { username: username.value } })
    $username.value = ''
  }

  function refetch() {
    send('fetch')
  }
}
