const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');

//Importing the model here 
const ImageModel = mongoose.model('Image')

let getCseImages = (req, res) => {
    ImageModel.find({tag: 'cse'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No CSE Images Found')
                res.send("No CSE Images Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getEceImages = (req, res) => {
    ImageModel.find({tag: 'ece'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No ECE Images Found')
                res.send("No ECE Images Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getCeeImages = (req, res) => {
    ImageModel.find({tag: 'cee'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No CEE Images Found')
                res.send("No CEE Images Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getMsntImages = (req, res) => {
    ImageModel.find({tag: 'msnt'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No MSNT Images Found')
                res.send("No MSNT Images Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

/**
 * function to delete the assignment collection.
 */
let deleteImage = (req, res) => {
    ImageModel.deleteOne({ 'imageId': req.params.imageId }, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Image Found')
            res.send("No Image Found")
        } else {
            res.send(result)

        }
    })
}








/**
 * function to create the blog.
 */
let createImage = (req, res) => {
    //var today = Date.now()
    let imageId = shortid.generate()

    let newImage = new ImageModel({

        imageId: imageId,
        title: req.body.title,
        name: req.body.name,
        tag: req.body.tag
    }) // end new blog model

    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags

    newImage.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    }) // end new blog save
}





module.exports = {
    getCseImages: getCseImages,
    getEceImages: getEceImages,
    getCeeImages: getCeeImages,
    getMsntImages: getMsntImages,
    deleteImage: deleteImage,
    createImage: createImage
}