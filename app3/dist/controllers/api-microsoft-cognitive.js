'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = require('../services');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('assistance-service:controllers:microsoft-cognitive');

var MicrosoftCognitive = function () {
  function MicrosoftCognitive() {
    _classCallCheck(this, MicrosoftCognitive);
  }

  _createClass(MicrosoftCognitive, [{
    key: 'faceDetect',

    // Face
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var body, service, payload, _payload;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = req.body;
                _context.prev = 1;
                _context.next = 4;
                return _services.microsoftCognitiveService.faceDetect(body);

              case 4:
                service = _context.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                debug('ERROR', _context.t0);
                _payload = _context.t0;
                return _context.abrupt('return', res['' + _payload.statusCode](_payload.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function faceDetect(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return faceDetect;
    }()
  }, {
    key: 'faceVerify',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        var body, service, payload, _payload2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                body = req.body;
                _context2.prev = 1;
                _context2.next = 4;
                return _services.microsoftCognitiveService.faceVerify(body);

              case 4:
                service = _context2.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context2.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](1);

                debug('ERROR', _context2.t0);
                _payload2 = _context2.t0;
                return _context2.abrupt('return', res['' + _payload2.statusCode](_payload2.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 10]]);
      }));

      function faceVerify(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return faceVerify;
    }()
  }, {
    key: 'faceIdentify',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
        var body, service, payload, _payload3;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                body = req.body;
                _context3.prev = 1;
                _context3.next = 4;
                return _services.microsoftCognitiveService.faceIdentify(body);

              case 4:
                service = _context3.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context3.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                debug('ERROR', _context3.t0);
                _payload3 = _context3.t0;
                return _context3.abrupt('return', res['' + _payload3.statusCode](_payload3.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10]]);
      }));

      function faceIdentify(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return faceIdentify;
    }()

    // FaceList

  }, {
    key: 'faceListByID',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
        var faceListID, service, payload, _payload4;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                faceListID = req.params.faceListID;
                _context4.prev = 1;
                _context4.next = 4;
                return _services.microsoftCognitiveService.faceListByID(faceListID);

              case 4:
                service = _context4.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context4.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4['catch'](1);

                debug('ERROR', _context4.t0);
                _payload4 = _context4.t0;
                return _context4.abrupt('return', res['' + _payload4.statusCode](_payload4.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 10]]);
      }));

      function faceListByID(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return faceListByID;
    }()
  }, {
    key: 'faceListCreate',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(req, res) {
        var faceListID, body, service, payload, _payload5;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                faceListID = req.params.faceListID;
                body = req.body;
                _context5.prev = 2;
                _context5.next = 5;
                return _services.microsoftCognitiveService.faceListCreate(faceListID, body);

              case 5:
                service = _context5.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context5.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5['catch'](2);

                debug('ERROR', _context5.t0);
                _payload5 = _context5.t0;
                return _context5.abrupt('return', res['' + _payload5.statusCode](_payload5.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 11]]);
      }));

      function faceListCreate(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return faceListCreate;
    }()
  }, {
    key: 'faceListAddFace',
    value: function () {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(req, res) {
        var faceListID, body, service, payload, _payload6;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                faceListID = req.params.faceListID;
                body = req.body;
                _context6.prev = 2;
                _context6.next = 5;
                return _services.microsoftCognitiveService.faceListAddFace(faceListID, body);

              case 5:
                service = _context6.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context6.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6['catch'](2);

                debug('ERROR', _context6.t0);
                _payload6 = _context6.t0;
                return _context6.abrupt('return', res['' + _payload6.statusCode](_payload6.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 11]]);
      }));

      function faceListAddFace(_x11, _x12) {
        return _ref6.apply(this, arguments);
      }

      return faceListAddFace;
    }()
  }, {
    key: 'personGroupList',
    value: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(req, res) {
        var service, payload, _payload7;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _services.microsoftCognitiveService.personGroupList();

              case 3:
                service = _context7.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context7.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7['catch'](0);

                debug('ERROR', _context7.t0);
                _payload7 = _context7.t0;
                return _context7.abrupt('return', res['' + _payload7.statusCode](_payload7.data, 'Face Detec error!'));

              case 14:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 9]]);
      }));

      function personGroupList(_x13, _x14) {
        return _ref7.apply(this, arguments);
      }

      return personGroupList;
    }()
  }, {
    key: 'personGroupByID',
    value: function () {
      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(req, res) {
        var personGroupID, service, payload, _payload8;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                _context8.prev = 1;
                _context8.next = 4;
                return _services.microsoftCognitiveService.personGroupByID(personGroupID);

              case 4:
                service = _context8.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context8.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8['catch'](1);

                debug('ERROR', _context8.t0);
                _payload8 = _context8.t0;
                return _context8.abrupt('return', res['' + _payload8.statusCode](_payload8.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 10]]);
      }));

      function personGroupByID(_x15, _x16) {
        return _ref8.apply(this, arguments);
      }

      return personGroupByID;
    }()
  }, {
    key: 'personGroupCreate',
    value: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(req, res) {
        var personGroupID, body, service, payload, _payload9;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                body = req.body;
                _context9.prev = 2;
                _context9.next = 5;
                return _services.microsoftCognitiveService.personGroupCreate(personGroupID, body);

              case 5:
                service = _context9.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context9.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9['catch'](2);

                debug('ERROR', _context9.t0);
                _payload9 = _context9.t0;
                return _context9.abrupt('return', res['' + _payload9.statusCode](_payload9.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 11]]);
      }));

      function personGroupCreate(_x17, _x18) {
        return _ref9.apply(this, arguments);
      }

      return personGroupCreate;
    }()
  }, {
    key: 'personGroupTrainingStatus',
    value: function () {
      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(req, res) {
        var personGroupID, service, payload, _payload10;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                _context10.prev = 1;
                _context10.next = 4;
                return _services.microsoftCognitiveService.personGroupTrainingStatus(personGroupID);

              case 4:
                service = _context10.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context10.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 10:
                _context10.prev = 10;
                _context10.t0 = _context10['catch'](1);

                debug('ERROR', _context10.t0);
                _payload10 = _context10.t0;
                return _context10.abrupt('return', res['' + _payload10.statusCode](_payload10.data, 'Face Detec error!'));

              case 15:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 10]]);
      }));

      function personGroupTrainingStatus(_x19, _x20) {
        return _ref10.apply(this, arguments);
      }

      return personGroupTrainingStatus;
    }()
  }, {
    key: 'personGroupTrain',
    value: function () {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(req, res) {
        var personGroupID, body, service, payload, _payload11;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                body = req.body;
                _context11.prev = 2;
                _context11.next = 5;
                return _services.microsoftCognitiveService.personGroupTrain(personGroupID, body);

              case 5:
                service = _context11.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context11.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11['catch'](2);

                debug('ERROR', _context11.t0);
                _payload11 = _context11.t0;
                return _context11.abrupt('return', res['' + _payload11.statusCode](_payload11.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this, [[2, 11]]);
      }));

      function personGroupTrain(_x21, _x22) {
        return _ref11.apply(this, arguments);
      }

      return personGroupTrain;
    }()
  }, {
    key: 'personCreate',
    value: function () {
      var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(req, res) {
        var personGroupID, body, service, payload, _payload12;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                body = req.body;
                _context12.prev = 2;
                _context12.next = 5;
                return _services.microsoftCognitiveService.personCreate(personGroupID, body);

              case 5:
                service = _context12.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context12.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12['catch'](2);

                debug('ERROR', _context12.t0);
                _payload12 = _context12.t0;
                return _context12.abrupt('return', res['' + _payload12.statusCode](_payload12.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[2, 11]]);
      }));

      function personCreate(_x23, _x24) {
        return _ref12.apply(this, arguments);
      }

      return personCreate;
    }()
  }, {
    key: 'personAddFace',
    value: function () {
      var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(req, res) {
        var personGroupID, personID, body, service, payload, _payload13;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                personID = req.params.personID;
                body = req.body;
                _context13.prev = 3;
                _context13.next = 6;
                return _services.microsoftCognitiveService.personAddFace(personGroupID, personID, body);

              case 6:
                service = _context13.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context13.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 12:
                _context13.prev = 12;
                _context13.t0 = _context13['catch'](3);

                debug('ERROR', _context13.t0);
                _payload13 = _context13.t0;
                return _context13.abrupt('return', res['' + _payload13.statusCode](_payload13.data, 'Face Detec error!'));

              case 17:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this, [[3, 12]]);
      }));

      function personAddFace(_x25, _x26) {
        return _ref13.apply(this, arguments);
      }

      return personAddFace;
    }()
  }, {
    key: 'personByID',
    value: function () {
      var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(req, res) {
        var personGroupID, personID, service, payload, _payload14;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                personID = req.params.personID;
                _context14.prev = 2;
                _context14.next = 5;
                return _services.microsoftCognitiveService.personByID(personGroupID, personID);

              case 5:
                service = _context14.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context14.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 11:
                _context14.prev = 11;
                _context14.t0 = _context14['catch'](2);

                debug('ERROR', _context14.t0);
                _payload14 = _context14.t0;
                return _context14.abrupt('return', res['' + _payload14.statusCode](_payload14.data, 'Face Detec error!'));

              case 16:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this, [[2, 11]]);
      }));

      function personByID(_x27, _x28) {
        return _ref14.apply(this, arguments);
      }

      return personByID;
    }()
  }, {
    key: 'personList',
    value: function () {
      var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(req, res) {
        var personGroupID, service, payload, _payload15;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                _context15.prev = 1;
                _context15.next = 4;
                return _services.microsoftCognitiveService.personList(personGroupID);

              case 4:
                service = _context15.sent;
                payload = service;
                return _context15.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 9:
                _context15.prev = 9;
                _context15.t0 = _context15['catch'](1);
                _payload15 = _context15.t0;
                return _context15.abrupt('return', res['' + _payload15.statusCode](_payload15.data, 'Face Detec error!'));

              case 13:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this, [[1, 9]]);
      }));

      function personList(_x29, _x30) {
        return _ref15.apply(this, arguments);
      }

      return personList;
    }()
  }, {
    key: 'personGetFace',
    value: function () {
      var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(req, res) {
        var personGroupID, personID, faceID, service, payload, _payload16;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                personGroupID = req.params.personGroupID;
                personID = req.params.personID;
                faceID = req.params.faceID;
                _context16.prev = 3;
                _context16.next = 6;
                return _services.microsoftCognitiveService.personGetFace(personGroupID, personID, faceID);

              case 6:
                service = _context16.sent;
                payload = service;

                debug('RESULT!!! >>>', payload);
                return _context16.abrupt('return', res['' + payload.statusCode](payload.data, 'Face Detec success!'));

              case 12:
                _context16.prev = 12;
                _context16.t0 = _context16['catch'](3);

                debug('ERROR', _context16.t0);
                _payload16 = _context16.t0;
                return _context16.abrupt('return', res['' + _payload16.statusCode](_payload16.data, 'Face Detec error!'));

              case 17:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this, [[3, 12]]);
      }));

      function personGetFace(_x31, _x32) {
        return _ref16.apply(this, arguments);
      }

      return personGetFace;
    }()
  }]);

  return MicrosoftCognitive;
}();

exports.default = MicrosoftCognitive;
module.exports = exports['default'];