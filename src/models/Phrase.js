const { model, Schema } = require('mongoose')


const phraseSchema = new Schema({
    en: {
        required: true,
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    uz: {
        required: true,
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
}, { timestamps: true, collection: 'phrases' })


module.exports = model('Phrase', phraseSchema)
