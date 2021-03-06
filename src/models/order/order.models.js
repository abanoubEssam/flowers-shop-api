const mongoose = require('mongoose');
/* Order . => We will use this model as a history of all previous checkouts of the shopping cart
    user
    flowers
    totalPrice
    creationDate
All attributes are required for simplicity
*/
export const orderSchema = new mongoose.Schema({
    user: {
        type: Number,
        required: true,
        ref: 'User'
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Shop'
    },
    
    flowers: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Flower'
    }]
    ,
    totalPrice: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
},
{
    toJSON: {
        // to delete some of model object 
        transform: function (doc, ret) {
          ret.id = ret._id;
          delete ret.__v;
          delete ret._id;
        }
      }
});

export const orderModel = mongoose.model('Order', orderSchema);
exports.orderModel = orderModel;
