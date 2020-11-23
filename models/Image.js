// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let imageSchema = new Schema(
    {
        imageId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        }
    }
)

mongoose.model('Image', imageSchema);