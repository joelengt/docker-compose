'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microsoftCognitive = require('./microsoft-cognitive');

var _microsoftCognitive2 = _interopRequireDefault(_microsoftCognitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var microsoftCognitiveService = new _microsoftCognitive2.default();

exports.default = {
  microsoftCognitiveService: microsoftCognitiveService
};
module.exports = exports['default'];