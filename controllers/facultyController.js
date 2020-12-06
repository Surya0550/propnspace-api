const express = require('express')
const mongoose = require('mongoose');

//Importing the model here 
const FacultyModel = mongoose.model('Faculty')
const PropertyModel = mongoose.model('Property');

let getPrincipalInfo = (req, res) => {
    FacultyModel.find({tag: 'principal'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Principal Details Found')
                res.send("No Principal Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getPropertyInfo = (req, res) => {
    PropertyModel.find({id: req.params.id})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Property Details Found')
                res.send("No Property Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getPropertyByType = (req, res) => {
    PropertyModel.find({type: req.params.type})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Property Details Found')
                res.send("No Property Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getAllPropertyInfo = (req, res) => {
    PropertyModel.find({})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Property Details Found')
                res.send("No Property Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getVicePrincipalInfo = (req, res) => {
    FacultyModel.find({tag: 'viceprincipal'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Vice Principal Details Found')
                res.send("No Vice Principal Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getCseFacultyInfo = (req, res) => {
    FacultyModel.find({tag: 'cse'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No CSE Faculty Details Found')
                res.send("No CSE Faculty Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getEceFacultyInfo = (req, res) => {
    FacultyModel.find({tag: 'ece'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No ECE Faculty Details Found')
                res.send("No ECE Faculty Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getCeeFacultyInfo = (req, res) => {
    FacultyModel.find({tag: 'cee'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No CEE Faculty Details Found')
                res.send("No CEE Faculty Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

let getMsntFacultyInfo = (req, res) => {
    FacultyModel.find({tag: 'msnt'})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No MSNT Faculty Details Found')
                res.send("No MSNT Faculty Details Found")
            } else {
                res.send(result)
            }
        })
}// end get all blogs

/**
 * function to create the blog.
 */
let createProperty = (req, res) => {

    let newProperty;

    PropertyModel.countDocuments({})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No Property Details Found')
                newProperty = new PropertyModel({

        
                    id: 1,
                    name: req.body.name,
                    address: req.body.address,
                    name_b: req.body.name,
                    type: req.body.type,
                    status: req.body.status,
                    location: req.body.location,
                    attributes: req.body.attributes,
                    description: req.body.description,
                    image: req.body.image,
                    amenities: req.body.amenities,
                    brochure: req.body.brochure
                }) // end new blog model

                newProperty.save((err, result) => {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    } else {
                        res.send(result)
            
                    }
                }) // end new blog save
                // res.send("No Property Details Found")
            } else {
                // res.json({result: result})
                newProperty = new PropertyModel({

        
                    id: result+1,
                    name: req.body.name,
                    address: req.body.address,
                    name_b: req.body.name,
                    type: req.body.type,
                    status: req.body.status,
                    location: req.body.location,
                    attributes: req.body.attributes,
                    description: req.body.description,
                    image: req.body.image,
                    amenities: req.body.amenities,
                    brochure: req.body.brochure
                }) // end new blog model

                newProperty.save((err, result) => {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    } else {
                        res.send(result)
            
                    }
                }) // end new blog save
            }
        })


    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags
}

let createFaculty = (req, res) => {

    let newFaculty = new FacultyModel({

        name: req.body.name,
        designation: req.body.designation,
        field: req.body.field,
        image: req.body.image,
        text: req.body.text,
        official_email: req.body.official_email,
        alternate_email: req.body.alternate_email,
        tag: req.body.tag
    }) // end new blog model

    //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    //newBlog.tags = tags

    newFaculty.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    }) // end new blog save
}

let deleteFaculty = (req, res) => {
    console.log(req.params.name);
    FacultyModel.deleteOne({ 'name': req.params.name }, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Faculty Found')
            res.send("No Faculty Found")
        } else {
            res.send(result)

        }
    })
}

let deleteProperty = (req, res) => {
    console.log(req.params.id);
    PropertyModel.deleteOne({ 'id': req.params.id }, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Property Found')
            res.send("No Property Found")
        } else {
            res.send(result)

        }
    })
}

module.exports = {
    getPrincipalInfo: getPrincipalInfo,
    getPropertyInfo: getPropertyInfo,
    getPropertyByType: getPropertyByType,
    getAllPropertyInfo: getAllPropertyInfo,
    createFaculty: createFaculty,
    createProperty: createProperty,
    getVicePrincipalInfo: getVicePrincipalInfo,
    getCseFacultyInfo: getCseFacultyInfo,
    getEceFacultyInfo: getEceFacultyInfo,
    getCeeFacultyInfo: getCeeFacultyInfo,
    getMsntFacultyInfo: getMsntFacultyInfo,
    deleteFaculty: deleteFaculty,
    deleteProperty: deleteProperty
}