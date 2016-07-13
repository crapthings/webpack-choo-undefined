require('./model')

module.exports = (params, state, send) => render `
  <div>
    <h3>user list</h3>
    <table>
      <thead>
        <tr>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        ${state.users && state.users.map((user) => render `
            <tr>
              <td>${user.username}</td>
            </tr>
          `
        )}
      </tbody>
    </table>
  </div>
`
