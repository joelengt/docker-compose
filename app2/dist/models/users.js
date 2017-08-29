'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  uuid: { type: String, required: true },
  names: { type: String, required: true },
  lastNames: { type: String, required: true },
  fullName: { type: String },
  photo: [{
    type: Schema.Types.ObjectId,
    ref: 'photos'
  }],
  personIDMicrosoftCognitive: { type: String },
  dni: { type: String },
  email: { type: String },
  username: { type: String },
  password: { type: String },
  permiso: { type: String },
  tokenAuth: { type: String },
  refrestToken: { type: String },
  fechaCreada: { type: Date, default: Date.now },
  horaEntrada: { type: Date, default: Date.now },
  statusConnectQR: { type: Boolean, default: false },
  statusConnectFace: { type: Boolean, default: false }
});

var users = _mongoose2.default.model('users', userSchema);

exports.default = users;
module.exports = exports['default'];