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
        paths: {
          '/users/{userId}/orders': {
            get: {
              tags: ['orders'],
              summary: ['Get Orders of user'],
              description: 'this can only be done by the logged in user',
              operationId: 'get Order',
              parameters: [{
                name: "userId",
                in: "path",
                description: "ID of user to return cart",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'order find successfuly'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            post: {
              tags: ['orders'],
              summary: ['Post Orders of user'],
              description: 'this can only be done by the logged in user',
              operationId: 'Post Order',
              parameters: [{
                name: "userId",
                in: "path",
                description: "ID of user to return cart",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'order find and posted successfuly'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          },
          '/users/{userId}/orders/{orderId}': {
            delete: {
              tags: ['orders'],
              summary: ['delete an Order of user using id'],
              description: 'this can only be done by the logged in user',
              operationId: 'delete Order',
              parameters: [{
                name: "userId",
                in: "path",
                description: "ID of user to return cart",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "orderId",
                in: "path",
                description: "ID of order to delete order",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'order deleted successfuly'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          }
        }
      };
      return schema;
    }
  }]);
  return orderDocs;
}();

exports.default = orderDocs;