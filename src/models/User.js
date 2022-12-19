const { model, Schema } = require('mongoose')


const schema = new Schema({

}, { timestamps: true, collection: 'sample' })


module.exports = model('Sample', schema)
