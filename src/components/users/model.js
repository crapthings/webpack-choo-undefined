const faker = require('faker')

const _ = require('lodash')

app.model({

  namespace: 'users',

  state: {
    item: {},
    list: []
  },

  // subscriptions: [
  //   (send, done) => send('fetch', done)
  // ],

  effects: {
    subscribe: (data, state, send, done) => {
      let users = _.times(10, n => {
        return new User({
          avatar: faker.internet.avatar(),
          lorem: faker.lorem.sentence()
        })
      })

      send('users:init', { payload: users }, done)
    }
  },

  reducers: {
    init: (data, state) => {
      return {
        list: data.payload
      }
    },

    create: (data, state) => {
      return {
        list: state.list.concat(data.payload)
      }
    },

    remove: (data, state) => {
      return {
        list: _.without(state.list, data.payload)
      }
    },

    updateUserState: (data, state) => {
      return {
        item: data.payload
      }
    },
  }

})

const User = function(opts) {
  return _.extend(faker.helpers.userCard(), opts || {})
}

module.exports = User
