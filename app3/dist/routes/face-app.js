'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Face application - upload image and indentify face - service microsoftCognitive
router.route('/check-face').post(_controllers.faceIndetifyAppication.identify);

exports.default = router;
module.exports = exports['default'];