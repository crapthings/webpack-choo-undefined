const faker = require('faker')

const User = require('./model')

module.exports = (state, prev, send) => render`
  <div>
    <h3>${state.users.length} users</h3>
    ${userForm(state, prev, send)}
    ${userList(state, prev, send)}
  </div>
`

function userList(state, prev, send) {
  return render`
    <table>
      <thead>
        <tr>
          <th width='60'>No.</th>
          <th width='60'>avatar</th>
          <th width='200'>name</th>
          <th width='200'>username</th>
          <th width='300'>email</th>
          <th width='200'>website</th>
          <th>phone</th>
          <th>lorem</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${state.users.map((user, i) => render`
          <tr>
            <td>${i + 1}</td>
            <td>
              <img src='${user.avatar}' alt='${user.name}' class='img-avatar' />
            </td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
            <td>${user.phone}</td>
            <td>${user.lorem}</td>
            <td>
              <button onclick=${(e) => send('remove', { payload: user })}>remove</button>
            </td>
          </tr>
        `)}
      </tbody>
    </table>
  `

  function remove (user) {
    console.log(user)
  }
}

function userForm(state, prev, send) {
  return render`
    <form onsubmit=${submit}>
      <input type='text' id='username' onkeyup=${handleKeyup} placeholder='enter an username' required autofocus />
      <input type='submit' value='submit' />
      <input type='button' value='refetch' onclick=${refetch} />
    </form>
  `

  function submit (e) {
    send('create', { payload: state.user })
    e.target.reset()
    e.preventDefault()
  }

  function handleKeyup (e) {
    let user = new User({
      username: e.currentTarget.value,
      avatar: faker.internet.avatar(),
      lorem: faker.lorem.sentence()
    })
    send('updateUserState', { payload: user })
  }

  function refetch() {
    send('fetch')
  }
}
