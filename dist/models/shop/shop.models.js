"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopModel = exports.shopSchema = void 0;

var mongoose = require('mongoose');

var GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number]
  }
}, {
  toJSON: {
    // to delete some of model object 
    transform: function transform(doc, ret) {
      delete ret._id;
      delete ret.__v;
    }
  }
});
var shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  shopImage: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
  totalFlowersCount: {
    type: Number,
    default: 0
  },
  geometry: GeoSchema
}, {
  toJSON: {
    // to delete some of model object 
    transform: function transform(doc, ret) {
      delete ret.__v;
      if (ret.geometry) ret.geometry = ret.geometry.coordinates;
    }
  }
});
exports.shopSchema = shopSchema;
shopSchema.index({
  geometry: '2dsphere'
});
var ShopModel = mongoose.model('Shop', shopSchema);
exports.ShopModel = ShopModel;
exports.ShopModel = ShopModel;