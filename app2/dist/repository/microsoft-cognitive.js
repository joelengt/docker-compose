'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var debug = require('debug')('assistance-service:repository:microsoft-cognitive');
var URI = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0';
var token = '956aa8b2859d4c2ab1c7cb92d8d7a967';

var service = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': token
  }
});

var MicrosoftCognitiveRepository = function () {
  function MicrosoftCognitiveRepository() {
    _classCallCheck(this, MicrosoftCognitiveRepository);
  }

  _createClass(MicrosoftCognitiveRepository, [{
    key: 'faceDetect',

    // Face
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(data) {
        var body, result, payload, _payload;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                body = data;
                _context.next = 4;
                return service.post(URI + '/detect', body);

              case 4:
                result = _context.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context.abrupt('return', payload);

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);
                _payload = {
                  success: false,
                  statusCode: _context.t0.response.status,
                  data: _context.t0.response.data
                };
                return _context.abrupt('return', _payload);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function faceDetect(_x) {
        return _ref.apply(this, arguments);
      }

      return faceDetect;
    }()
  }, {
    key: 'faceVerify',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(data) {
        var body, result, payload, _payload2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                body = data;
                _context2.next = 4;
                return service.post(URI + '/verify', body);

              case 4:
                result = _context2.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context2.abrupt('return', payload);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](0);
                _payload2 = {
                  success: false,
                  statusCode: _context2.t0.response.status,
                  data: _context2.t0.response.data
                };
                return _context2.abrupt('return', _payload2);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function faceVerify(_x2) {
        return _ref2.apply(this, arguments);
      }

      return faceVerify;
    }()
  }, {
    key: 'faceIdentify',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(data) {
        var body, result, payload, _payload3;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                body = data;
                _context3.next = 4;
                return service.post(URI + '/identify', body);

              case 4:
                result = _context3.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context3.abrupt('return', payload);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](0);
                _payload3 = {
                  success: false,
                  statusCode: _context3.t0.response.status,
                  data: _context3.t0.response.data
                };
                return _context3.abrupt('return', _payload3);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function faceIdentify(_x3) {
        return _ref3.apply(this, arguments);
      }

      return faceIdentify;
    }()

    // Face List

  }, {
    key: 'faceListByID',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(faceListID) {
        var result, payload, _payload4;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return service.get(URI + '/facelists/' + faceListID);

              case 3:
                result = _context4.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context4.abrupt('return', payload);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4['catch'](0);
                _payload4 = {
                  success: false,
                  statusCode: _context4.t0.response.status,
                  data: _context4.t0.response.data
                };
                return _context4.abrupt('return', _payload4);

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function faceListByID(_x4) {
        return _ref4.apply(this, arguments);
      }

      return faceListByID;
    }()
  }, {
    key: 'faceListCreate',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(faceListID, data) {
        var body, result, payload, _payload5;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                body = data;
                _context5.prev = 1;
                _context5.next = 4;
                return service.put(URI + '/facelists/' + faceListID, body);

              case 4:
                result = _context5.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context5.abrupt('return', payload);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](1);
                _payload5 = {
                  success: false,
                  statusCode: _context5.t0.response.status,
                  data: _context5.t0.response.data
                };
                return _context5.abrupt('return', _payload5);

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 9]]);
      }));

      function faceListCreate(_x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return faceListCreate;
    }()
  }, {
    key: 'faceListAddFace',
    value: function () {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(faceListID, data) {
        var body, result, payload, _payload6;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                body = data;
                _context6.prev = 1;
                _context6.next = 4;
                return service.post(URI + '/facelists/' + faceListID + '/persistedFaces', body);

              case 4:
                result = _context6.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context6.abrupt('return', payload);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](1);
                _payload6 = {
                  success: false,
                  statusCode: _context6.t0.response.status,
                  data: _context6.t0.response.data
                };
                return _context6.abrupt('return', _payload6);

              case 13:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 9]]);
      }));

      function faceListAddFace(_x7, _x8) {
        return _ref6.apply(this, arguments);
      }

      return faceListAddFace;
    }()
  }, {
    key: 'personGroupList',
    value: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(faceListID, data) {
        var result, payload, _payload7;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return service.get(URI + '/persongroups');

              case 3:
                result = _context7.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context7.abrupt('return', payload);

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7['catch'](0);
                _payload7 = {
                  success: false,
                  statusCode: _context7.t0.response.status,
                  data: _context7.t0.response.data
                };
                return _context7.abrupt('return', _payload7);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      function personGroupList(_x9, _x10) {
        return _ref7.apply(this, arguments);
      }

      return personGroupList;
    }()
  }, {
    key: 'personGroupByID',
    value: function () {
      var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(personGroupID) {
        var result, payload, _payload8;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return service.get(URI + '/persongroups/' + personGroupID);

              case 3:
                result = _context8.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context8.abrupt('return', payload);

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8['catch'](0);
                _payload8 = {
                  success: false,
                  statusCode: _context8.t0.response.status,
                  data: _context8.t0.response.data
                };
                return _context8.abrupt('return', _payload8);

              case 12:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 8]]);
      }));

      function personGroupByID(_x11) {
        return _ref8.apply(this, arguments);
      }

      return personGroupByID;
    }()
  }, {
    key: 'personGroupCreate',
    value: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(personGroupID, data) {
        var body, result, payload, _payload9;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                body = data;
                _context9.prev = 1;
                _context9.next = 4;
                return service.put(URI + '/persongroups/' + personGroupID, body);

              case 4:
                result = _context9.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context9.abrupt('return', payload);

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9['catch'](1);
                _payload9 = {
                  success: false,
                  statusCode: _context9.t0.response.status,
                  data: _context9.t0.response.data
                };
                return _context9.abrupt('return', _payload9);

              case 13:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 9]]);
      }));

      function personGroupCreate(_x12, _x13) {
        return _ref9.apply(this, arguments);
      }

      return personGroupCreate;
    }()
  }, {
    key: 'personGroupTrainingStatus',
    value: function () {
      var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(personGroupID, data) {
        var body, result, payload, _payload10;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                body = data;
                _context10.prev = 1;
                _context10.next = 4;
                return service.get(URI + '/persongroups/' + personGroupID + '/training', body);

              case 4:
                result = _context10.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context10.abrupt('return', payload);

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10['catch'](1);
                _payload10 = {
                  success: false,
                  statusCode: _context10.t0.response.status,
                  data: _context10.t0.response.data
                };
                return _context10.abrupt('return', _payload10);

              case 13:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 9]]);
      }));

      function personGroupTrainingStatus(_x14, _x15) {
        return _ref10.apply(this, arguments);
      }

      return personGroupTrainingStatus;
    }()
  }, {
    key: 'personGroupTrain',
    value: function () {
      var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(personGroupID, data) {
        var body, result, payload, _payload11;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                body = data;
                _context11.prev = 1;
                _context11.next = 4;
                return service.post(URI + '/persongroups/' + personGroupID + '/train', body);

              case 4:
                result = _context11.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context11.abrupt('return', payload);

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11['catch'](1);
                _payload11 = {
                  success: false,
                  statusCode: _context11.t0.response.status,
                  data: _context11.t0.response.data
                };
                return _context11.abrupt('return', _payload11);

              case 13:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 9]]);
      }));

      function personGroupTrain(_x16, _x17) {
        return _ref11.apply(this, arguments);
      }

      return personGroupTrain;
    }()
  }, {
    key: 'personCreate',
    value: function () {
      var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(personGroupID, data) {
        var body, result, payload, _payload12;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                body = data;
                _context12.prev = 1;
                _context12.next = 4;
                return service.post(URI + '/persongroups/' + personGroupID + '/persons', body);

              case 4:
                result = _context12.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context12.abrupt('return', payload);

              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12['catch'](1);
                _payload12 = {
                  success: false,
                  statusCode: _context12.t0.response.status,
                  data: _context12.t0.response.data
                };
                return _context12.abrupt('return', _payload12);

              case 13:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 9]]);
      }));

      function personCreate(_x18, _x19) {
        return _ref12.apply(this, arguments);
      }

      return personCreate;
    }()
  }, {
    key: 'personAddFace',
    value: function () {
      var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(personGroupID, personID, data) {
        var body, result, payload, _payload13;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                body = data;
                _context13.prev = 1;
                _context13.next = 4;
                return service.post(URI + '/persongroups/' + personGroupID + '/persons/' + personID + '/persistedFaces', body);

              case 4:
                result = _context13.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context13.abrupt('return', payload);

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13['catch'](1);
                _payload13 = {
                  success: false,
                  statusCode: _context13.t0.response.status,
                  data: _context13.t0.response.data
                };
                return _context13.abrupt('return', _payload13);

              case 13:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this, [[1, 9]]);
      }));

      function personAddFace(_x20, _x21, _x22) {
        return _ref13.apply(this, arguments);
      }

      return personAddFace;
    }()
  }, {
    key: 'personByID',
    value: function () {
      var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(personGroupID, personID) {
        var result, payload, _payload14;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return service.get(URI + '/persongroups/' + personGroupID + '/persons/' + personID);

              case 3:
                result = _context14.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context14.abrupt('return', payload);

              case 8:
                _context14.prev = 8;
                _context14.t0 = _context14['catch'](0);
                _payload14 = {
                  success: false,
                  statusCode: _context14.t0.response.status,
                  data: _context14.t0.response.data
                };
                return _context14.abrupt('return', _payload14);

              case 12:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 8]]);
      }));

      function personByID(_x23, _x24) {
        return _ref14.apply(this, arguments);
      }

      return personByID;
    }()
  }, {
    key: 'personList',
    value: function () {
      var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(personGroupID) {
        var result, payload, _payload15;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return service.get(URI + '/persongroups/' + personGroupID + '/persons');

              case 3:
                result = _context15.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context15.abrupt('return', payload);

              case 8:
                _context15.prev = 8;
                _context15.t0 = _context15['catch'](0);
                _payload15 = {
                  success: false,
                  statusCode: _context15.t0.response.status,
                  data: _context15.t0.response.data
                };
                return _context15.abrupt('return', _payload15);

              case 12:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 8]]);
      }));

      function personList(_x25) {
        return _ref15.apply(this, arguments);
      }

      return personList;
    }()
  }, {
    key: 'personGetFace',
    value: function () {
      var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(personGroupID, personID, faceID) {
        var result, payload, _payload16;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return service.get(URI + '/persongroups/' + personGroupID + '/persons/' + personID + '/persistedFaces/' + faceID);

              case 3:
                result = _context16.sent;
                payload = {
                  success: true,
                  statusCode: result.status,
                  data: result.data
                };
                return _context16.abrupt('return', payload);

              case 8:
                _context16.prev = 8;
                _context16.t0 = _context16['catch'](0);
                _payload16 = {
                  success: false,
                  statusCode: _context16.t0.response.status,
                  data: _context16.t0.response.data
                };
                return _context16.abrupt('return', _payload16);

              case 12:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 8]]);
      }));

      function personGetFace(_x26, _x27, _x28) {
        return _ref16.apply(this, arguments);
      }

      return personGetFace;
    }()
  }]);

  return MicrosoftCognitiveRepository;
}();

exports.default = MicrosoftCognitiveRepository;
module.exports = exports['default'];