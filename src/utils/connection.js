const mongoose = require('mongoose');
import config from 'config'
const autoIncrement = require('mongoose-auto-increment');
const db = config.get('db');
// const Nexmo = require('nexmo');

autoIncrement.initialize(mongoose.connection);


export async function connectDB(){
    mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() =>
     console.log(`Connected to ${db}...`)
     )
    .catch(err => console.error(`Could not connect to ${db}...`));
    

}

module.exports.mongoose = mongoose;