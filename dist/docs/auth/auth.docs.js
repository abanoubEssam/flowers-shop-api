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
var authDocs =
/*#__PURE__*/
function () {
  function authDocs() {
    (0, _classCallCheck2.default)(this, authDocs);
  }

  (0, _createClass2.default)(authDocs, [{
    key: "getSwaggerSchema",
    value: function getSwaggerSchema() {
      var schema = {
        paths: {
          '/auth': {
            post: {
              tags: ['Auth'],
              summary: ['Login'],
              description: 'This can only be done by the logged in user.',
              operationId: 'Login',
              requestBody: {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        email: {
                          type: 'string',
                          require: true
                        },
                        password: {
                          type: 'string',
                          require: true
                        }
                      }
                    }
                  }
                }
              },
              'responses': {
                '200': {
                  'description': 'user logged in successfully'
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
  return authDocs;
}();

exports.default = authDocs;