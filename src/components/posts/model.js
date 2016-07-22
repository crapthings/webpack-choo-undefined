const faker = require('faker')

const _ = require('lodash')

window.Posts = horizon('posts')

app.model({

  namespace: 'posts',

  state: {
    item: {},
    list: []
  },

  // subscriptions: [
  //   (send, done) => send('posts:subscribe', done)
  // ],

  effects: {
    subscribe: (data, state, send, done) => {
      Posts.watch().subscribe(posts => {
        send('posts:init', { payload: posts }, done)
      })
    },

    insert: (data, state, send, done) => {
      Posts.insert(data.payload)
    },

    remove: (data, state) => {
      Posts.remove(data.payload.id)
    }
  },

  reducers: {
    init: (data, state) => {
      return {
        list: data.payload
      }
    },

    updatePostState: (data, state) => {
      return {
        item: data.payload
      }
    }
  }

})
