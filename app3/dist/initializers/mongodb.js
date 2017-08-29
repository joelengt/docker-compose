'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('assistance-service:initializers:mongodb');
_mongoose2.default.Promise = global.Promise;

var mongoDB = {
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  database: process.env.MONGODB_DATABASE

  // connection mongodb
};_mongoose2.default.connect('mongodb://' + mongoDB.host + ':' + mongoDB.port + '/' + mongoDB.database, function (err) {
  if (err) return debug('Error to connecto to mongodb', err);
  debug('MongoDB connection success');
});