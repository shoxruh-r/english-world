const { model, Schema } = require('mongoose')


const schema = new Schema({
    email: String,
    password: String
}, { timestamps: true, collection: 'user' })


module.exports = model('User', schema)
