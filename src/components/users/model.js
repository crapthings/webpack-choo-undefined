const faker = require('faker')

const times = require('lodash').times

app.model({

  state: {
    users: []
  },

  subscriptions: [init],

  // effects: {
  //   init: (data, state) => {
  //     console.log(state)
  //     state.users = data.payload
  //   }
  // },

  reducers: {
    init: (data, state) => {
      return {
        users: data.payload
      }
    }
  }

})

function init(send, done) {
  let data = times(10, n => {
    return {
      username: faker.internet.userName()
    }
  })

  send('init', { payload: data }, done)
}
