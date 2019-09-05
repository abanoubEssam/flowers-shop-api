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
var userCartsDocs =
/*#__PURE__*/
function () {
  function userCartsDocs() {
    (0, _classCallCheck2.default)(this, userCartsDocs);
  }

  (0, _createClass2.default)(userCartsDocs, [{
    key: "getSwaggerSchema",
    value: function getSwaggerSchema() {
      var schema = {
        paths: {
          '/users/{userId}/cart': {
            get: {
              tags: ['users carts'],
              summary: ['Get User by id and his/her carts'],
              description: 'This can only be done by the logged in user.',
              operationId: 'get user by id and fav',
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
                  'description': 'user logged in successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          },
          '/users/{userId}/cart/{flowerId}': {
            post: {
              tags: ['users carts'],
              summary: ['Post User by id and his/her carts'],
              description: 'This can only be done by the logged in user.',
              operationId: 'Post user by id and fav',
              parameters: [{
                name: "userId",
                in: "path",
                description: "ID of user to return",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "flowerId",
                in: "path",
                description: "ID of flower to return",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'user logged in successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            delete: {
              tags: ['users carts'],
              summary: ['delete flower of User by id of flower and his/her id'],
              description: 'This can only be done by the logged in user.',
              operationId: 'delete user by id and fav',
              parameters: [{
                name: "userId",
                in: "path",
                description: "ID of user to return",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "flowerId",
                in: "path",
                description: "ID of flower to return",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '201': {
                  'description': 'flower deleted  successfully'
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
  return userCartsDocs;
}();

exports.default = userCartsDocs;