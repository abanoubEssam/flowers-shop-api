"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordersSchema = void 0;
// ajv schema
var ordersSchema = {
  type: "object",
  properties: {
    product: {
      type: 'number',
      require: 'true'
    },
    quantity: {
      type: 'number',
      require: true
    }
  }
};
exports.ordersSchema = ordersSchema;