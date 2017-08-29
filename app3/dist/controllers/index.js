'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiMicrosoftCognitive = require('./api-microsoft-cognitive');

var _apiMicrosoftCognitive2 = _interopRequireDefault(_apiMicrosoftCognitive);

var _faceIndetifyAppication = require('./face-indetify-appication');

var _faceIndetifyAppication2 = _interopRequireDefault(_faceIndetifyAppication);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _assistanceApplication = require('./assistance-application');

var _assistanceApplication2 = _interopRequireDefault(_assistanceApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var microsoftCognitive = new _apiMicrosoftCognitive2.default();
var faceIndetifyAppication = new _faceIndetifyAppication2.default();
var user = new _users2.default();
var assistanceOverview = new _assistanceApplication2.default();

exports.default = {
  microsoftCognitive: microsoftCognitive,
  faceIndetifyAppication: faceIndetifyAppication,
  user: user,
  assistanceOverview: assistanceOverview
};
module.exports = exports['default'];