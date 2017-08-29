'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {NotificationTrigger} from '../utils'
// var io = require('socket.io')(4444)

// Ejecutar funcion de enviar notificacion
// var notificatePush = new NotificationTrigger(io)
// notificatePush.connect()

var debug = require('debug')('assistance-service:controllers:Assistance');

var AssistanceOverview = function () {
  function AssistanceOverview() {
    _classCallCheck(this, AssistanceOverview);
  }

  _createClass(AssistanceOverview, [{
    key: 'checkQR',
    value: function checkQR(req, res) {
      var codeQR = req.body.codeQR;

      _users2.default.findOne({ '_id': codeQR }, function (err, user) {
        if (err) {
          return res.status(404).json({
            status: 'not_found',
            message: 'Código QR no válido'
          });
        }

        if (user !== null) {
          // si el usuario fue encontrado
          if (user.statusConnectQR === false) {
            // cambiar su estado a true
            user.statusConnectQR = true;
            user.horaEntrada = new Date();

            user.save(function (err, userSaved) {
              if (err) {
                return debug(err);
              }

              // Evento socket.io
              // if (user.statusConnectQR === true && user.statusConnectFace === true) {
              //   notificatePush.notificar(userSaved)
              // }

              res.status(200).json({
                status: 'new_check',
                message: 'QR OK - ¡Usuario Check!'
              });
            });
          } else {
            res.status(200).json({
              status: 'user_checked',
              message: 'El usuario ya esta marcado'
            });
          }
        } else {
          res.status(404).json({
            status: 'not_found',
            message: 'Código QR no válido'
          });
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset(req, res) {
      _users2.default.find(function (err, users) {
        if (err) {
          return debug(err);
        }

        for (var i = 0; i <= users.length - 1; i++) {
          users[i].statusConnectQR = false;
          users[i].statusConnectFace = false;
          users[i].save(function (err, result) {
            if (err) {
              return debug(err);
            }
          });
        }

        res.status(200).json({
          status: 'users - code QR - reset'
        });
      });
    }
  }]);

  return AssistanceOverview;
}();

exports.default = AssistanceOverview;
module.exports = exports['default'];