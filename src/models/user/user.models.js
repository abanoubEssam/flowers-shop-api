const { mongoose } = require('../../utils/connection');
// console.log('/////******mongoose: ' , mongoose);
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  creationDate: {
    type: Date,
  },
  userImage: {
    type: String
  }
},
  {
    toJSON: {
      // to delete some of model object 
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
        delete ret.password;
      }
    }
  })


userSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  startAt: 1,
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id , email: this.email }, config.get('jwtPrivateKey'));
  // console.log('===============token ================' ,token)
  return token;
}

const UserModel = mongoose.model('User', userSchema);
exports.UserModel = UserModel;
