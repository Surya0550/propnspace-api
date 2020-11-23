// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let facultySchema = new Schema(
    {
        name: {
            type: String,
            default: 'Default Name'
        },
        designation: {
            type: String,
            default: 'Default Designation'
        },
        field: {
            type: String,
            default: 'Default Field'
        },
        image: {
            type: String,
            default: 'noImage.jpg'
        },
        text: {
            type: String,
            default: 'Text Here'
        },
        official_email: {
            type: String,
            default: ''
        },
        alternate_email: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        }
    }
)

mongoose.model('Faculty', facultySchema);