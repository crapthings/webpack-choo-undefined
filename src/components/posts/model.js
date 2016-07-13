const faker = require('faker')

const _ = require('lodash')

app.model({

  namespace: 'posts',

  state: {
    item: {},
    list: []
  },

  subscriptions: [
    (send, done) => send('posts:fetch', done)
  ],

  effects: {
    fetch: (data, state, send, done) => {
      let posts = _.times(10, n => {
        return new Post()
      })

      send('posts:init', { payload: posts }, done)
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

    updatePostState: (data, state) => {
      return {
        item: data.payload
      }
    },
  }

})

const Post = function () {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.sentences()
  }
}

module.exports = Post
