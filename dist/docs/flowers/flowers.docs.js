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

var _flower = require("../../models/flower/flower.schema");

var CreateFlowerSwaggerSchema = (0, _clone.default)(_flower.insertFlowerSchema);
if (!CreateFlowerSwaggerSchema.required) CreateFlowerSwaggerSchema.required = [];
CreateFlowerSwaggerSchema.required.push('flowerImage', 'price');
CreateFlowerSwaggerSchema.properties = (0, _objectSpread2.default)({}, CreateFlowerSwaggerSchema.properties, {
  flowerImage: {
    description: 'file to upload',
    type: 'string',
    format: 'binary'
  }
});
var validateUpdateFlowerSwaggerSchema = (0, _clone.default)(_flower.validateOnUpdateFlowerSchema);
validateUpdateFlowerSwaggerSchema.properties = (0, _objectSpread2.default)({}, validateUpdateFlowerSwaggerSchema.properties, {
  flowerImage: {
    description: 'file to upload',
    type: 'string',
    format: 'binary'
  }
});

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
          '/flowers/?pageNumber={pageNumber}&pageSize={pageSize}': {
            get: {
              tags: ['Flowers'],
              summary: ['Get All Flowers'],
              description: 'This can only be done by the logged in user with shop id.',
              operationId: 'Get All Flowers',
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
                  'description': 'flowers finde successfuly'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          },
          '/shops/{shopId}/flowers': {
            post: {
              tags: ['Flowers'],
              summary: ['Create Flowers'],
              description: 'This can only be done by the logged in user with shop id.',
              operationId: 'Create Flowers',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of shop to add flower in it",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: CreateFlowerSwaggerSchema
                  }
                }
              },
              'responses': {
                '200': {
                  'description': 'Flower created successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            get: {
              tags: ['Flowers'],
              summary: ['Get All Flowers On A shop'],
              description: 'This can only be done by the logged in user.',
              operationId: 'Get All Flowers on one shop',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of shop to Get flower in it",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'Flower created successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            }
          },
          '/shops/{shopId}/flowers/{flowerId}': {
            get: {
              tags: ['Flowers'],
              summary: ['Get one of all Flowers On A shop'],
              description: 'This can only be done by the logged in user.',
              operationId: 'Get one of Flowers on one shop',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of shop to Get flower in it",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "flowerId",
                in: "path",
                description: "ID of flower to Get flower data",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '200': {
                  'description': 'Flower created successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            put: {
              tags: ['Flowers'],
              summary: ['update one of all Flowers On A shop'],
              description: 'This can only be done by the logged in user.',
              operationId: 'update one of Flowers on one shop',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of shop to Get flower in it",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "flowerId",
                in: "path",
                description: "ID of flower to Get flower data",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: validateUpdateFlowerSwaggerSchema
                  }
                }
              },
              'responses': {
                '200': {
                  'description': 'Flower updated successfully'
                },
                '400': {
                  'description': 'bad request'
                }
              }
            },
            delete: {
              tags: ['Flowers'],
              summary: ['Delete flower using id of shop and flower'],
              description: 'This can only be done by the logged in user.',
              operationId: 'delete flower by id of shop and flower',
              parameters: [{
                name: "shopId",
                in: "path",
                description: "ID of Shop to return ",
                required: true,
                schema: {
                  type: "string"
                }
              }, {
                name: "flowerId",
                in: "path",
                description: "ID of flower to return ",
                required: true,
                schema: {
                  type: "string"
                }
              }],
              'responses': {
                '204': {
                  'description': 'flower deleted successfully'
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