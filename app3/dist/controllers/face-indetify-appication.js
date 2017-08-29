'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _services = require('../services');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var io = require('socket.io')(4444);

// Ejecutar funcion de enviar notificacion
var notificatePush = new _utils.NotificationTrigger(io);
notificatePush.connect();

var debug = require('debug')('assistance-service:controllers:application-face');

var FaceIndetifyAppication = function () {
  function FaceIndetifyAppication() {
    _classCallCheck(this, FaceIndetifyAppication);
  }

  _createClass(FaceIndetifyAppication, [{
    key: 'identify',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var _payload, photo, fullUrl, photoURL, fieldsDetect, serviceDetect, _payload2, fieldsIdentify, serviceIdentify, _payload3, _payload4, user, _payload5, payload, _payload6;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (req.files.hasOwnProperty('photo')) {
                  _context.next = 4;
                  break;
                }

                _payload = { success: false };
                return _context.abrupt('return', res['400'](_payload, 'Bad Request!'));

              case 4:

                // Get photo
                photo = req.files.photo;

                debug('file data >>>', photo);

                // get photo url
                fullUrl = req.protocol + '://' + req.get('host');
                photoURL = fullUrl + '/face/' + photo.name;

                // // Face API - Detect Service

                fieldsDetect = {
                  url: photoURL
                };
                _context.next = 11;
                return _services.microsoftCognitiveService.faceDetect(fieldsDetect);

              case 11:
                serviceDetect = _context.sent;

                debug('DETECT RESPONSE ->>', serviceDetect);

                if (serviceDetect.success) {
                  _context.next = 16;
                  break;
                }

                _payload2 = serviceDetect;
                return _context.abrupt('return', res['' + _payload2.statusCode](_payload2.data, 'Face Detec failt!'));

              case 16:

                // Face API - Identify Service
                fieldsIdentify = {
                  personGroupId: 'workersteam',
                  faceIds: ['' + serviceDetect.data[0].faceId]
                };
                _context.next = 19;
                return _services.microsoftCognitiveService.faceIdentify(fieldsIdentify);

              case 19:
                serviceIdentify = _context.sent;

                debug('Identify RESPONSE ->>', serviceIdentify);

                if (serviceIdentify.success) {
                  _context.next = 24;
                  break;
                }

                _payload3 = serviceDetect;
                return _context.abrupt('return', res['' + _payload3.statusCode](_payload3.data, 'Service Identify fail!'));

              case 24:
                if (serviceIdentify.data[0].candidates.length) {
                  _context.next = 27;
                  break;
                }

                _payload4 = serviceDetect;
                return _context.abrupt('return', res['' + _payload4.statusCode](_payload4.data, 'Face Not Registered'));

              case 27:
                debug('Termino servicios ->>', serviceIdentify.data[0].candidates);
                debug('personId', serviceIdentify.data[0].candidates[0].personId);

                // TODO: Find user on db where candidates[0].personId
                _context.next = 31;
                return _users2.default.findOne({ 'personIDMicrosoftCognitive': serviceIdentify.data[0].candidates[0].personId });

              case 31:
                user = _context.sent;

                debug('USER', user);

                if (user) {
                  _context.next = 36;
                  break;
                }

                _payload5 = { success: false };
                return _context.abrupt('return', res['404'](_payload5, 'User Not Found!'));

              case 36:

                // update user statusConnectFace
                user.statusConnectFace = true;
                _context.next = 39;
                return user.save();

              case 39:

                // Evento socket.io
                if (user.statusConnectQR === true && user.statusConnectFace === true) {
                  notificatePush.notificar(user);
                }

                payload = {
                  success: true,
                  user: user,
                  candidates: serviceIdentify.data[0]
                };
                return _context.abrupt('return', res['200'](payload, 'Face Identify success!'));

              case 44:
                _context.prev = 44;
                _context.t0 = _context['catch'](0);
                _payload6 = _context.t0;
                return _context.abrupt('return', res['500'](_payload6, 'Face upload error!'));

              case 48:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 44]]);
      }));

      function identify(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return identify;
    }()
  }]);

  return FaceIndetifyAppication;
}();

exports.default = FaceIndetifyAppication;
module.exports = exports['default'];