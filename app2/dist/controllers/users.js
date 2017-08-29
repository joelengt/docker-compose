'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _photos = require('../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _qrImage = require('qr-image');

var _qrImage2 = _interopRequireDefault(_qrImage);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _services = require('../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('assistance-service:controllers:users');

function file(name) {
  return _fs2.default.createWriteStream('./uploads/qrs/' + name);
}

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: 'list',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var users, _payload, payload, _payload2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                debug('users');
                _context.next = 4;
                return _users2.default.find();

              case 4:
                users = _context.sent;

                if (users.length) {
                  _context.next = 8;
                  break;
                }

                _payload = { success: false, items: [] };
                return _context.abrupt('return', res['404'](_payload, 'users not registered on db'));

              case 8:
                payload = { items: users };

                res.ok(payload, 'users found');
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);
                _payload2 = { success: false, error: _context.t0 };

                res['500'](_payload2, 'Error server');

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function list(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: 'getById',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        var userID, user, _payload3, payload, _payload4;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userID = req.params.userID;
                _context2.prev = 1;
                _context2.next = 4;
                return _users2.default.findById(userID);

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 8;
                  break;
                }

                _payload3 = { success: false };
                return _context2.abrupt('return', res['404'](_payload3, 'user not found'));

              case 8:
                payload = { items: user };

                res.ok(payload, 'user found');
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);
                _payload4 = { success: false, error: _context2.t0 };

                res['500'](_payload4, 'Error server');

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      function getById(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: 'create',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
        var user, workerNew, userSaved, ecLevel, personGroupID, body, person, userSaver2, payload, _payload5;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                // Body data
                user = {
                  uuid: _uuid2.default.v1(),
                  names: req.body.names,
                  lastNames: req.body.lastNames,
                  dni: req.body.dni,
                  email: req.body.email,
                  permiso: 'worker',
                  tokenAuth: '',
                  refrestToken: ''
                };


                user.fullName = user.names + ' ' + user.lastNames;

                workerNew = new _users2.default(user);

                debug('work!', workerNew);

                _context3.next = 7;
                return workerNew.save();

              case 7:
                userSaved = _context3.sent;

                debug('user created!', userSaved);

                if (userSaved) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt('return', res['404']({ success: false }, 'Error server'));

              case 11:

                userSaved.tokenAuth = _jsonwebtoken2.default.sign(userSaved, process.env.JWT_SECRET);

                // Generate code QR
                ecLevel = 'Q';

                _qrImage2.default.image('' + userSaved._id, { type: 'png', ec_level: ecLevel, parse_url: false, margin: 1 }).pipe(file(userSaved._id + '.png'));

                // Create a Person on Microsoft cognitive Service Microsoft cognitive - Person
                personGroupID = 'workersteam';
                body = {
                  name: userSaved.fullName,
                  userData: 'user created on microsoft Cognitive Service'
                };
                _context3.next = 18;
                return _services.microsoftCognitiveService.personCreate(personGroupID, body);

              case 18:
                person = _context3.sent;

                debug('Service person created?', person);

                if (person.success) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt('return', res['500']({ success: false }, 'Microsoft Cognitive, Person not created'));

              case 22:

                // save personID on user
                userSaved.personIDMicrosoftCognitive = person.data.personId;

                _context3.next = 25;
                return userSaved.save();

              case 25:
                userSaver2 = _context3.sent;

                if (userSaver2) {
                  _context3.next = 28;
                  break;
                }

                return _context3.abrupt('return', res['404']({ success: false }, 'Error server'));

              case 28:
                payload = { success: true, user: userSaver2 };

                res['201'](payload, 'user created');
                _context3.next = 36;
                break;

              case 32:
                _context3.prev = 32;
                _context3.t0 = _context3['catch'](0);
                _payload5 = { success: false, error: _context3.t0 };

                res['500'](_payload5, 'Error server');

              case 36:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 32]]);
      }));

      function create(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'addPhoto',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
        var userID, user, photoOrigin, photoURL, attributesPhoto, photo, photoSaved, userSaved, personGroupID, personID, fullUrl, photoPublicURL, data, personAddFace, photoUpdated, payload;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userID = req.params.userID;
                _context4.prev = 1;
                _context4.next = 4;
                return _users2.default.findById(userID);

              case 4:
                user = _context4.sent;

                if (user) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt('return', res['404']({ success: false }, 'User not found'));

              case 7:
                if (req.files.hasOwnProperty('photo')) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt('return', res['400']({ success: false }, 'Bad Request'));

              case 9:
                photoOrigin = req.files.photo;
                photoURL = '/face/' + photoOrigin.name;

                // create a new photo

                attributesPhoto = {
                  path: photoURL,
                  user: userID,
                  name: photoOrigin.name
                };
                photo = new _photos2.default(attributesPhoto);

                // add photo on database

                _context4.next = 15;
                return photo.save();

              case 15:
                photoSaved = _context4.sent;

                if (photoSaved) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt('return', res['400']({ success: false }, 'photo not saved'));

              case 18:

                // add photo on user
                user.photo.push(photo);
                _context4.next = 21;
                return user.save();

              case 21:
                userSaved = _context4.sent;

                if (userSaved) {
                  _context4.next = 24;
                  break;
                }

                return _context4.abrupt('return', res['400']({ success: false }, 'user updated'));

              case 24:

                // add face to Person Microsoft Cognitive
                personGroupID = 'workersteam';
                personID = userSaved.personIDMicrosoftCognitive;
                fullUrl = req.protocol + '://' + req.get('host');
                photoPublicURL = '' + fullUrl + photo.path;
                data = {
                  url: photoPublicURL
                };
                _context4.next = 31;
                return _services.microsoftCognitiveService.personAddFace(personGroupID, personID, data);

              case 31:
                personAddFace = _context4.sent;

                if (personAddFace.success) {
                  _context4.next = 34;
                  break;
                }

                return _context4.abrupt('return', res['' + personAddFace.statusCode](personAddFace.data, 'Photo not add to Person, Microsoft Cognitive'));

              case 34:
                debug('Add face to person', personAddFace);

                // updated faceID on photo
                photoSaved.faceIDMicrosoftCognitive = personAddFace.data.persistedFaceId;
                _context4.next = 38;
                return photoSaved.save();

              case 38:
                photoUpdated = _context4.sent;

                if (photoUpdated) {
                  _context4.next = 41;
                  break;
                }

                return _context4.abrupt('return', res['400']({ success: false }, 'photo not updated'));

              case 41:

                res.ok({ success: true, user: userSaved }, 'add photo to user success');
                _context4.next = 48;
                break;

              case 44:
                _context4.prev = 44;
                _context4.t0 = _context4['catch'](1);
                payload = { success: false, error: _context4.t0 };

                res['500'](payload, 'Error server');

              case 48:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 44]]);
      }));

      function addPhoto(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return addPhoto;
    }()
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      var userID = req.params.userID;
      res.status(200).json({
        status: 'user delete - ' + userID
      });
    }
  }]);

  return User;
}();

exports.default = User;
module.exports = exports['default'];