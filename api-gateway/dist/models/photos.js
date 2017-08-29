'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var photoSchema = new Schema({
  path: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: { type: String },
  faceIDMicrosoftCognitive: { type: String },
  fechaCreada: { type: Date, default: Date.now }
});

var photos = _mongoose2.default.model('photos', photoSchema);

exports.default = photos;
module.exports = exports['default'];