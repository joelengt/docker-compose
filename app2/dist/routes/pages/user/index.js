'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();
var debug = require('debug')('assistance-service:pages:users');

router.get('/list', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var users, payload;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            debug('tock');
            _context.next = 4;
            return _users2.default.find();

          case 4:
            users = _context.sent;
            return _context.abrupt('return', res.render('./user/list', {
              users: users
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            payload = { success: false, error: _context.t0 };

            res['500'](payload, 'Error server');

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/:userID', function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
    var userID, user, payload, _payload;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userID = req.params.userID;
            _context2.prev = 1;

            debug('tock');
            _context2.next = 5;
            return _users2.default.findById(userID).populate('photo');

          case 5:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            payload = { success: false, item: null };
            return _context2.abrupt('return', res['404'](payload, 'users not registered on db'));

          case 9:
            debug('Fotos del usuario', user);
            return _context2.abrupt('return', res.render('./user/item', {
              user: user
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2['catch'](1);
            _payload = { success: false, error: _context2.t0 };

            res['500'](_payload, 'Error server');

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

exports.default = router;
module.exports = exports['default'];