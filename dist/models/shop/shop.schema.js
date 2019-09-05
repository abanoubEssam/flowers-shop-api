"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateShopSchema = exports.validateShopOnUpdateSchema = void 0;
var validateShopOnUpdateSchema = {
  type: "object",
  properties: {
    name: {
      type: 'string'
    },
    geometryLng: {
      type: 'string'
    },
    geometryLat: {
      type: 'string'
    }
  }
};
exports.validateShopOnUpdateSchema = validateShopOnUpdateSchema;
var CreateShopSchema = {
  type: "object",
  required: ['name', 'geometryLng', 'geometryLat'],
  properties: {
    name: {
      type: 'string',
      minimum: 5
    },
    geometryLng: {
      type: 'string'
    },
    geometryLat: {
      type: 'string'
    }
  }
};
exports.CreateShopSchema = CreateShopSchema;