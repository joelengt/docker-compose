'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/check-qr').post(_controllers.assistanceOverview.checkQR);

router.route('/reset').put(_controllers.assistanceOverview.reset);

exports.default = router;
module.exports = exports['default'];