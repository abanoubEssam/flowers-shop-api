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
var notificationDocs =
/*#__PURE__*/
function () {
  function notificationDocs() {
    (0, _classCallCheck2.default)(this, notificationDocs);
  }

  (0, _createClass2.default)(notificationDocs, [{
    key: "getSwaggerSchema",
    value: function getSwaggerSchema() {
      var schema = {
        paths: {
          '/push-notifications/unsubscribe?token={token}': {
            delete: {
              tags: ['Push-Notification'],
              summary: ['delete token from user'],
              description: 'This can only be done by the logged in user.',
              operationId: 'delete notification',
              parameters: [{
                name: "token",
                in: "path",
                description: " delete token ",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'user created successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          },
          '/push-notifications/unsubscribe/{token}': {
            post: {
              tags: ['Push-Notification'],
              summary: ['post token from user'],
              description: 'This can only be done by the logged in user.',
              operationId: 'post notification',
              parameters: [{
                name: "token",
                in: "path",
                description: " post token ",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'user created successfully'
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
  return notificationDocs;
}();

exports.default = notificationDocs;