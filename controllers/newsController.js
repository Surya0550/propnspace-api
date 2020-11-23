const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');

//Importing the model here 
const NewsModel = mongoose.model('News')

let getAllNews = (req, res) => {
    NewsModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No News Found')
                res.send("No News Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs


/**
 * function to delete the assignment collection.
 */
let deleteNews = (req, res) => {
    NewsModel.deleteOne({ 'listId': req.params.listId }, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No News Found')
            res.send("No News Found")
        } else {
            res.send(result)

        }
    })
}








/**
 * function to create the blog.
 */
let createNews = (req, res) => {
    //var today = Date.now()
    let listId = shortid.generate()

    let newNews = new NewsModel({

        listId: listId,
        class: req.body.class,
        title: req.body.title,
        text: req.body.text,
    }) // end new blog model

    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags

    newNews.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    }) // end new blog save
}





module.exports = {
    getAllNews: getAllNews,
    createNews: createNews,
    deleteNews: deleteNews
}