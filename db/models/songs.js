const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
  name: String,
  singer: {
    type: String,
    index: true
  },
  album: {
    type: String,
    index: true,
  },
  cover: String,
  create_at: {
    type: Date,
    default: Date.now()
  },
})

const songs = mongoose.model('songs', songsSchema)

module.exports = songs