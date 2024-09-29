'use strict'

const Mongodb = require('@pick-star/cli-mongodb')
const { mongodbUrl, mongodbDBName } = require('../../config/db')

function mongo() {
  return new Mongodb(mongodbUrl, mongodbDBName)
}

module.exports = mongo
