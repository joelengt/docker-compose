'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noop = require('./noop');

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _noop.noop;
  }
});

var _notificationSocketIo = require('./notification-socket-io');

Object.defineProperty(exports, 'NotificationTrigger', {
  enumerable: true,
  get: function get() {
    return _notificationSocketIo.NotificationTrigger;
  }
});