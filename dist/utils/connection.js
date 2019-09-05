"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = connectDB;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("config"));

var mongoose = require('mongoose');

var autoIncrement = require('mongoose-auto-increment');

var db = _config.default.get('db'); // const Nexmo = require('nexmo');


autoIncrement.initialize(mongoose.connection);

function connectDB() {
  return _connectDB.apply(this, arguments);
}

function _connectDB() {
  _connectDB = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mongoose.connect(db, {
              useNewUrlParser: true
            }).then(function () {
              return console.log("Connected to ".concat(db, "..."));
            }).catch(function (err) {
              return console.error("Could not connect to ".concat(db, "..."));
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _connectDB.apply(this, arguments);
}

module.exports.mongoose = mongoose;