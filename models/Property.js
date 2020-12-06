// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let propertySchema = new Schema(
    {
        id: {
           type: Number,
        },
        name: {
            type: String,
            default: 'Default Name'
        },
        address: {
            type: String,
            default: 'Default Address'
        },
        name_b: {
            type: String,
            default: 'Default Name'
        },
        type: {
            type: String,
            default: 'Type Here'
        },
        status: {
            type: String,
            default: 'Available'
        },
        location: {
            type: String,
            default: 'maps.google.com'
        },
        attributes: {
            type: String,
            default: 'Area:5 Acres,Flats:100,Towers:2,Wings:3'
        },
        description: {
            type: String,
            default: 'Default Description'
        },
        image: {
            type: String,
            default: 'noImage.jpg'
        },
        amenities: {
            type: String,
            default: 'amenities'
        },
        brochure: {
            type: String,
            default: 'brochure.pdf'
        }
    }
)

mongoose.model('Property', propertySchema);