'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('rootpath')();

var debug = require('debug')('assistance-service:index');
var app = (0, _express2.default)();
var server = require('http').Server(app);
// const io = require('socket.io')(server)
var port = process.env.PORT;

// Allow Cors Header
function allowCrossTokenHeader(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
}

debug('PATH >><', _path2.default.join(__dirname, '../uploads'));

app.set('view engine', 'jade');
app.set('views', _path2.default.join(__dirname, '../views'));

// Config Server
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../uploads')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _methodOverride2.default)('_method'));
app.use(allowCrossTokenHeader);
app.use((0, _multer2.default)({ dest: _path2.default.join(__dirname, '../uploads/face') }));

require('./initializers/routes')(app);

// Server Listen
server.listen(port, function (err) {
  if (err) return debug('Error: Server not started - ' + err);
  debug('Server listing on port ' + port);
});