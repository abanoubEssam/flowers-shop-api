"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpSchema = exports.validateUserOnUpdateSchema = void 0;
var validateUserOnUpdateSchema = {
  type: "object",
  properties: {
    name: {
      type: 'string',
      require: true,
      minLength: 4
    },
    email: {
      type: 'string',
      require: true,
      "format": "email"
    },
    password: {
      type: 'string',
      require: true,
      minLength: 6
    }
  }
};
exports.validateUserOnUpdateSchema = validateUserOnUpdateSchema;
var SignUpSchema = {
  type: "object",
  required: ['name', 'email', 'password'],
  properties: {
    name: {
      type: 'string',
      require: true,
      minLength: 4
    },
    email: {
      type: 'string',
      require: true,
      "format": "email"
    },
    password: {
      type: 'string',
      require: true,
      minLength: 6
    }
  }
};
exports.SignUpSchema = SignUpSchema;