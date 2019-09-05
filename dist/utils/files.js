"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadModulesDynamically = loadModulesDynamically;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var glob = require('glob');

var path = require("path");

var fs = require('fs');

function loadModulesDynamically(_x, _x2) {
  return _loadModulesDynamically.apply(this, arguments);
}

function _loadModulesDynamically() {
  _loadModulesDynamically = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, pattern) {
    var importedFiles;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            importedFiles = [];
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              glob(path.resolve("".concat(__dirname, "/").concat(dir)), function (err, files) {
                if (err) return reject(err);
                files.forEach(function (file) {
                  if (new RegExp(".".concat(pattern, ".[js]")).test(file)) {
                    if (fs.lstatSync(file).isFile()) {
                      var importedFile = require("".concat(file));

                      importedFiles.push(importedFile);
                    }
                  }
                });
                resolve(importedFiles);
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadModulesDynamically.apply(this, arguments);
}