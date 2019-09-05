"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateOnUpdateFlowerSchema = exports.insertFlowerSchema = void 0;
var insertFlowerSchema = {
  type: "object",
  required: ['name', 'description'],
  properties: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'string'
    }
  }
};
exports.insertFlowerSchema = insertFlowerSchema;
var validateOnUpdateFlowerSchema = {
  type: "object",
  properties: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'string'
    }
  }
};
exports.validateOnUpdateFlowerSchema = validateOnUpdateFlowerSchema;