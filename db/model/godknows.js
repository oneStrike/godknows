const mongoose = require('mongoose');

const godknowsSchema = new mongoose.Schema({
  name: String,
  notice: Array,
  email: {
    type: String,
    default: '759994689@qq.com'
  },
  friends: [{
    friend: String,
    link: String,
    date: {
      type: Date, default: Date.now()
    }
  }],
  articles: [{
    id: String,
    author: String,
    title: String,
    word_count: Number,
    created_at: {type: Date, default: Date.now()},
    change_at: {type: Date, default: Date.now()},
    tag: Array,
    browse: {
      type: Number,
      index: true
    },
    favorites: {
      type: Number,
      index: true,
    },
    comment: {
      type: Number,
      index: true,
    },
    change: {
      type: Number,
      index: true,
    }
  }]
})

const godknows = mongoose.model('godknows', godknowsSchema)

module.exports = godknows