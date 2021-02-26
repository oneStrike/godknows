const mongoose = require('mongoose')

const modulesSchema = new mongoose.Schema({
  leftModule: [{
    name: String,
    created_at: {
      type: Date,
      default: Date.now()
    },
    update_at: {
      type: Date,
      default: Date.now()
    }
  }],
  leftUes: Number,
  rightModule: [{
    name: String,
    created_at: {
      type: Date,
      default: Date.now()
    },
    update_at: {
      type: Date,
      default: Date.now()
    }
  }],
  rightUes: Number,
  headerModule: [{
    name: String,
    created_at: {
      type: Date,
      default: Date.now()
    },
    update_at: {
      type: Date,
      default: Date.now()
    }
  }],
  headerUse: Number,
  footerModule: [{
    name: String,
    created_at: {
      type: Date,
      default: Date.now()
    },
    update_at: {
      type: Date,
      default: Date.now()
    }
  }],
  footerUse: Number
})

const modules = mongoose.model('modules', modulesSchema)

module.exports = modules