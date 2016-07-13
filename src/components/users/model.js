const faker = require('faker')

const _ = require('lodash')

app.model({

  state: {
    users: []
  },

  subscriptions: [
    (send, done) => send('fetch', done)
  ],

  effects: {
    fetch: (data, state, send, done) => {
      let users = _.times(10, n => {
        return new User({
          avatar: faker.internet.avatar(),
          lorem: faker.lorem.sentence()
        })
      })

      send('init', { payload: users }, done)
    }
  },

  reducers: {
    init: (data, state) => {
      return {
        users: data.payload
      }
    },

    add: (data, state) => {
      return {
        users: state.users.concat(data.payload)
      }
    }
  }

})

const User = function(opts) {
  return _.extend(faker.helpers.userCard(), opts || {})
}

module.exports = User
