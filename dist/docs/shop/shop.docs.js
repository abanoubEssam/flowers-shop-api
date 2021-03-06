"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _clone = _interopRequireDefault(require("clone"));

var _shop = require("../../models/shop/shop.schema");

var CreateShopSwaggerSchema = (0, _clone.default)(_shop.CreateShopSchema);
var validateShopOnUpdateSwaggerSchema = (0, _clone.default)(_shop.validateShopOnUpdateSchema);
if (!CreateShopSwaggerSchema.required) CreateShopSwaggerSchema.required = [];
CreateShopSwaggerSchema.required.push('shopImage');
CreateShopSwaggerSchema.properties = (0, _objectSpread2.default)({}, CreateShopSwaggerSchema.properties, {
  shopImage: {
    description: 'file to upload',
    type: 'string',
    format: 'binary'
  }
});

var shopDocs =
/*#__PURE__*/
function () {
  function shopDocs() {
    (0, _classCallCheck2.default)(this, shopDocs);
  }

  (0, _createClass2.default)(shopDocs, [{
    key: "getSwaggerSchema",
    value: function getSwaggerSchema() {
      var schema = {
        paths: {
          '/shops': {
            post: {
              tags: ['shops'],
              summary: ['Create New Shop'],
              description: 'This can only be done by the logged in user.',
              operationId: 'Create Shop',
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: CreateShopSwaggerSchema
                  }
                }
              },
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
          '/shops/?pageNumber={pageNumber}&pageSize={pageSize}': {
            get: {
              tags: ['shops'],
              summary: ['Get All Shops with pagination'],
              description: 'This can only be done by the logged in user.',
              operationId: 'get shop',
              parameters: [{
                name: "pageNumber",
                in: "path",
                description: "Number of Page to return shops",
                schema: {
                  type: "number"
                }
              }, {
                name: "pageSize",
                in: "path",
                description: "Number of shops to return shops",
                schema: {
                  type: "number"
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
          '/shops/near?lng={lng}&lat={lat}&radius={radius}': {
            get: {
              tags: ['shops'],
              summary: ['Get All Shops near me'],
              description: 'This can only be done by the logged in user.',
              operationId: 'get shops near me',
              parameters: [{
                name: "lng",
                in: "path",
                description: "Lng to return shop",
                required: true,
                schema: {
                  type: "number"
                }
              }, {
                name: "lat",
                in: "path",
                description: "Lat to return shop",
                required: true,
                schema: {
                  type: "number"
                }
              }, {
                name: "radius",
                in: "path",
                description: "radius to return shops on radius",
                schema: {
                  type: "number",
                  default: 10
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
          '/shops/{shopId}': {
            put: {
              tags: ['shops'],
              summary: ['Update  Shop'],
              description: 'This can only be done by the logged in user. xxx',
              operationId: 'Update Shop',
              parameters: [{
                name: "shopId",
                in: "path",
                required: true,
                description: "ID of Shop to return",
                schema: {
                  type: "string"
                }
              }],
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: validateShopOnUpdateSwaggerSchema
                  }
                }
              },
              'responses': {
                '200': {
                  'description': 'user created successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            get: {
              tags: ['shops'],
              summary: ['Get Shop by id'],
              description: 'This can only be done by the logged in user.',
              operationId: 'get shop by id',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of shop to return ",
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
              tags: ['shops'],
              summary: ['Delete Shop using id'],
              description: 'This can only be done by the logged in user.',
              operationId: 'delete shop by id',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of Shop to return ",
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
          }
        }
      };
      return schema;
    }
  }]);
  return shopDocs;
}();

exports.default = shopDocs;