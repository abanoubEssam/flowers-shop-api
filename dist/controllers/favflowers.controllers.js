"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _favflowers = require("../models/favflowers.models");

var _flower = require("../models/flower/flower.models");

var mongoose = require('mongoose'); // const Loc = mongoose.model('Location');


mongoose.debug = true;
var _default = {
  makeFav: function () {
    var _makeFav = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(req, res, next) {
      var flowerId, userId, flower, favFlower;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              flowerId = String(req.params.flowerId);
              userId = String(req.params.userId);

              if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", res.status(400).send('please enter a valid  id '));

            case 5:
              if (mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(400).send('please enter a valid  id '));

            case 7:
              _context.next = 9;
              return _flower.FlowerModel.findById(flowerId);

            case 9:
              flower = _context.sent;

              if (flower) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", res.status(404).send('flower not found'));

            case 12:
              if (!(String(req.user._id) !== String(userId))) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", res.status(403).send('you are not allowed to access .'));

            case 14:
              _context.next = 16;
              return _favflowers.FavModel.findOneAndUpdate({
                user: userId,
                flower: flowerId
              }, {}, {
                upsert: true,
                new: true
              });

            case 16:
              favFlower = _context.sent;
              res.send(favFlower);
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 20]]);
    }));

    function makeFav(_x, _x2, _x3) {
      return _makeFav.apply(this, arguments);
    }

    return makeFav;
  }(),
  getFav: function () {
    var _getFav = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(req, res, next) {
      var userId, pageNumber, pageSize, pipeline, resultPipeline, countPipeline, FavFlowers, count;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userId = String(req.params.userId);
              pageNumber = Number(req.query.pageNumber) || 1;
              pageSize = Number(req.query.pageSize) || 5;
              _context2.prev = 3;

              if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", res.status(400).send('please enter a valid  id '));

            case 6:
              if (!(String(req.user._id) !== String(userId))) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(403).send('you are not allowed to access .'));

            case 8:
              pipeline = [{
                $match: {
                  "user": mongoose.Types.ObjectId(userId)
                }
              }, {
                $lookup: {
                  from: 'flowers',
                  localField: 'flower',
                  foreignField: '_id',
                  as: 'flowers'
                }
              }, {
                $unwind: '$flowers'
              }, {
                $replaceRoot: {
                  newRoot: '$flowers'
                }
              }];
              resultPipeline = pipeline.concat([{
                $sort: {
                  sponsored: -1
                }
              }, {
                $skip: (pageNumber - 1) * pageSize
              }, {
                $limit: pageSize
              }]);
              countPipeline = pipeline.concat([{
                $group: {
                  _id: null,
                  count: {
                    $sum: 1
                  }
                }
              }]);
              _context2.next = 13;
              return _favflowers.FavModel.aggregate(resultPipeline);

            case 13:
              FavFlowers = _context2.sent;
              _context2.next = 16;
              return _favflowers.FavModel.aggregate(countPipeline);

            case 16:
              _context2.t0 = _context2.sent[0];

              if (_context2.t0) {
                _context2.next = 19;
                break;
              }

              _context2.t0 = {
                count: 0
              };

            case 19:
              count = _context2.t0;
              res.send({
                FavFlowers: FavFlowers,
                count: count
              });
              _context2.next = 26;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t1 = _context2["catch"](3);
              next(_context2.t1);

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 23]]);
    }));

    function getFav(_x4, _x5, _x6) {
      return _getFav.apply(this, arguments);
    }

    return getFav;
  }(),
  deleteFav: function () {
    var _deleteFav = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(req, res, next) {
      var flowerId, userId, flower, deleteFlower;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              flowerId = String(req.params.flowerId);
              userId = String(req.params.userId);

              if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", res.status(400).send('please enter a valid  id '));

            case 5:
              if (mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.status(400).send('please enter a valid  id '));

            case 7:
              if (!(String(req.user._id) !== userId)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", res.status(403).send('you are not allowed to access .'));

            case 9:
              _context3.next = 11;
              return _flower.FlowerModel.findById(flowerId).populate('shop');

            case 11:
              flower = _context3.sent;

              if (flower) {
                _context3.next = 14;
                break;
              }

              return _context3.abrupt("return", res.status(404).send('flower not found'));

            case 14:
              _context3.next = 16;
              return _favflowers.FavModel.findOneAndRemove({
                user: userId,
                flower: flowerId
              });

            case 16:
              deleteFlower = _context3.sent;

              if (deleteFlower) {
                _context3.next = 19;
                break;
              }

              return _context3.abrupt("return", res.status(404).send('The flower with the given ID was not found.'));

            case 19:
              res.status(204).send();
              _context3.next = 25;
              break;

            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](0);
              next(_context3.t0);

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 22]]);
    }));

    function deleteFav(_x7, _x8, _x9) {
      return _deleteFav.apply(this, arguments);
    }

    return deleteFav;
  }()
};
exports.default = _default;