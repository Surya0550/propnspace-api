// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let subscriptionSchema = new Schema(
    {
        endpoint: {
            type: String,
            default: ''
        },
        keys: {
            p256dh: {
                type: String,
                default: ''
            },
            auth: {
                type: String,
                default: ''
            }
        }
    }
)

mongoose.model('Subscription', subscriptionSchema);