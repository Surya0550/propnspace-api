// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let newsSchema = new Schema(
    {
        listId: {
            type: String,
            unique: true
        },
        class: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: 'Some title'
        },
        text: {
            type: String,
            default: 'some text'
        }
    }
)

mongoose.model('News', newsSchema);