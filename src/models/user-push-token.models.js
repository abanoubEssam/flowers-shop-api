const mongoose = require('mongoose');
const userPushToken = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'User'
      },
    tokens: {
      type: [String]
    }
  })


  export const CreateNotifiSchema = {
    type: "object",
    required: [ 'token'],
    properties: {
      token: {
        type: 'string'
      }
  
    }
  }

  export const PushNotifiModel = mongoose.model('PushNotification', userPushToken);