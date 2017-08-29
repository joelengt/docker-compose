'use strict';

var _cognitiveMicrosoft = require('../routes/cognitive-microsoft');

var _cognitiveMicrosoft2 = _interopRequireDefault(_cognitiveMicrosoft);

var _assistance = require('../routes/assistance');

var _assistance2 = _interopRequireDefault(_assistance);

var _faceApp = require('../routes/face-app');

var _faceApp2 = _interopRequireDefault(_faceApp);

var _home = require('../routes/pages/home');

var _home2 = _interopRequireDefault(_home);

var _users = require('../routes/users');

var _users2 = _interopRequireDefault(_users);

var _user = require('../routes/pages/user');

var _user2 = _interopRequireDefault(_user);

var _assistance3 = require('../routes/pages/assistance');

var _assistance4 = _interopRequireDefault(_assistance3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('assistance-service:routes');

module.exports = function (app) {
  // api
  app.use('/api/cognitive-microsoft', _cognitiveMicrosoft2.default);
  app.use('/api/verify-face', _faceApp2.default);
  app.use('/api/users', _users2.default);
  app.use('/api/assistance', _assistance2.default);

  // viewers
  app.use('/test', _home2.default);
  app.use('/users', _user2.default);
  app.use('/assistance', _assistance4.default);

  // Middleware express 401
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...');
    }
  });

  // Middleware express 404
  app.use(function (req, res, next) {
    res.status(404).send('404 : Not Found');
  });

  // Middleware express 500
  app.use(function (err, req, res, next) {
    res.status(500).send('500 : Server Error');
  });
};