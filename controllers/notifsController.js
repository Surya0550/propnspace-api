const express = require('express')
const mongoose = require('mongoose');
const webpush = require('web-push');
const nodemailer = require('nodemailer');
const SubscriptionModel = mongoose.model('Subscription')

var user_subscription = [];

let addPushSubscriber = (req, res) => {
    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    let newSubscription = new SubscriptionModel({

        endpoint: sub.endpoint,
        keys: {
            p256dh: sub.keys.p256dh,
            auth: sub.keys.auth
        }
    }) // end new blog model

    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags

    newSubscription.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    })

    //user_subscription.USER_SUBSCRIPTIONS_1.push(sub);

    //res.status(200).json({message: "Subscription added successfully."});
}

let sendNewsletter = (req, res) => {

    console.log("Entered into sendNewsLetter")

    SubscriptionModel.find()
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No News Found')
            } else {
                user_subscription = result
                //console.log(result)
            }
        })

    console.log('Total subscriptions', user_subscription.length);

    var vapidPublicKey = 'BNZljwgvJ61X6DcGHLKVWzSvbxswbPn14beVvFU6xiGXNGe2Q18WrrYK-TuaCK3anCpa4YZXfI4LijQXypH4dT4';

    var vapidPrivateKey = 'kygsC_9DyXNGzdTiQOq8sGpYMiSb0KHSGwzyTa3xLzM';

    var options = {
        vapidDetails: {
          subject: 'mailto:sai.suryateja14@gmail.com',
          publicKey: vapidPublicKey,
          privateKey: vapidPrivateKey
        },
        TTL: 60
      };

    // sample notification payload
    const notificationPayload = {
        "notification": {
            "title": "Angular News",
            "body": "Newsletter Available!",
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };


    Promise.all(user_subscription.map(sub => webpush.sendNotification(
        sub, JSON.stringify(notificationPayload), options )))
        .then(() => res.status(200).json({message: 'Newsletter sent successfully.'}))
        .catch(err => {
            console.error("Error sending notification, reason: ", err);
            res.sendStatus(500);
        });






}

let mailFunction = (req, res) => {

    let transporter = nodemailer.createTransport({

        service: "hotmail",
        secure: false,
        port: 25,
        auth: {
            user: "propnspace@outlook.com",
            pass: "Pramu@raj0106"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailList = [];
    let mails = req.query.email.split('|');
    for(let i = 0; i < mails.length; i++) {
        mailList.push(mails[i]);
    }
  
    let HelperOptions = {
  
        from: '"Prop N Space" <sai.suryateja14@gmail.com>',
        to: mailList,
        subject: "New Enquiry!",
        text: "Customer Message: " + req.query.body + "/n" + " Customer Email: " + req.query.custemail + " Customer Phone Number: " + req.query.number,
        html: `<ul><li>Name: ${req.query.name}</li><li>Message: ${req.query.body}</li><li>Email: ${req.query.custemail}</li><li>Phone Number: ${req.query.number}</li></ul>`
    };
  
    transporter.sendMail(HelperOptions, (error, info) => {
  
        if(error)
        {
            return console.log(error);
        }
        else{
            console.log("Message was sent!");
            console.log(info);
            res.send(info);
        }
    });
}

module.exports = {
    addPushSubscriber: addPushSubscriber,
    sendNewsletter: sendNewsletter,
    mailFunction: mailFunction
}