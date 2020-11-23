const express = require('express')
const mongoose = require('mongoose');

//Importing the model here 
const StudentModel = mongoose.model('Student')


let registerStudent = (req, res) => {

    let newStudent = new StudentModel({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rollNumber: req.body.rollNumber,
        password: req.body.password,
        
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

module.exports = {
    getPrincipalInfo: getPrincipalInfo,
    createFaculty: createFaculty,
    getVicePrincipalInfo: getVicePrincipalInfo,
    getCseFacultyInfo: getCseFacultyInfo,
    getEceFacultyInfo: getEceFacultyInfo,
    getCeeFacultyInfo: getCeeFacultyInfo,
    getMsntFacultyInfo: getMsntFacultyInfo,
    deleteFaculty: deleteFaculty
}