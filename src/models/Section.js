const { model, Schema } = require('mongoose')


const sectionSchema = new Schema({
    order: {
        required: true,
        type: Number,
        min: 1,
        unique: true
    },
    description: {
        required: true,
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 512
    },
    guide: [
        {
            title: {
                required: true,
                type: String,
                minlength: 2,
                maxlength: 512,
                trim: true
            },
            phrases: [{
                type: Schema.Types.ObjectId,
                ref: 'Phrase'
            }],
            theory: {
                required: true,
                type: String,
                trim: true,
                minlength: 2,
                maxlength: 16_000_000,
            }
        }]
}, { timestamps: true, collection: 'sections' })


module.exports = model('Section', sectionSchema)
