const { Module } = require('sken-server-class')

class TestModule extends Module {
  constructor () {
    super(__dirname)

    this._name = 'Sample'
    this._routing = true
  }

  init (app) {
    super.init(app)
  }
}

module.exports = TestModule
