"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import clone from 'clone';
// import { ordersSchema } from '../../models/order/order.schema'
// const SwaggerOrderSchema = clone(ordersSchema);
var orderDocs =
/*#__PURE__*/
function () {
  function orderDocs() {
    (0, _classCallCheck2.default)(this, orderDocs);
  }

  (0, _createClass2.default)(orderDocs, [{
    key: "getSwaggerSchema",
    value: function getSwaggerSchema() {
      var schema = {
        paths: {}
      };
      return schema;
    }
  }]);
  return orderDocs;
}();

exports.default = orderDocs;