const express = require('express')
const newsController = require('../controllers/newsController')
const facultyController = require('../controllers/facultyController')
const notifsController = require('../controllers/notifsController')
const imageController = require('../controllers/imageController')
const profileController = require('../controllers/profileController')
const authenticationController = require("../controllers/authenticationController")
const appConfig = require("./../config/appConfig")
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const upload = require('../middleware/file-upload');

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;

    app.get('/', function (req, res) {
        res.send('Hello! This App is for JNTUHCES. Contact Administrator for more routes. Admin:Surya(9494391985)')
    })

    app.get(baseUrl + '/news/all', newsController.getAllNews);

    app.get(baseUrl + '/faculty/principal', facultyController.getPrincipalInfo);

    app.get(baseUrl + '/faculty/viceprincipal', facultyController.getVicePrincipalInfo);

    app.get(baseUrl + '/faculty/cse', facultyController.getCseFacultyInfo);

    app.get(baseUrl + '/faculty/ece', facultyController.getEceFacultyInfo);

    app.get(baseUrl + '/faculty/cee', facultyController.getCeeFacultyInfo);

    app.get(baseUrl + '/faculty/msnt', facultyController.getMsntFacultyInfo);

    app.get(baseUrl + '/images/cse', imageController.getCseImages);

    app.get(baseUrl + '/images/ece', imageController.getEceImages);

    app.get(baseUrl + '/images/cee', imageController.getCeeImages);

    app.get(baseUrl + '/images/msnt', imageController.getMsntImages);

    app.get(baseUrl + '/profile', auth, profileController.profileRead);

    app.get(baseUrl + '/mail', notifsController.mailFunction);

    app.get(baseUrl + '/property/get/:id', facultyController.getPropertyInfo);

    app.get(baseUrl + '/property/type/:type', facultyController.getPropertyByType);

    app.get(baseUrl + '/property/all', facultyController.getAllPropertyInfo);

    app.get(baseUrl + '/property/latest', facultyController.getLatestProperty);

    //app.get(baseUrl+'/view/:blogId',blogController.viewByBlogId);

    //app.get(baseUrl+'/view/by/author/:author',blogController.viewByAuthor);

    //app.get(baseUrl+'/view/by/category/:category',blogController.viewByCategory);

    app.post(baseUrl + '/news/:listId/delete', newsController.deleteNews);

    app.post(baseUrl + '/faculty/:name/delete', facultyController.deleteFaculty);

    app.post(baseUrl + '/property/:id/delete', facultyController.deleteProperty);

    app.post(baseUrl + '/image/:imageId/delete', imageController.deleteImage);

    //app.put(baseUrl+'/:blogId/edit',blogController.editBlog);

    app.post(baseUrl + '/news/create', newsController.createNews);

    app.post(baseUrl + '/faculty/create', facultyController.createFaculty);

    app.post(baseUrl + '/property/create', facultyController.createProperty);

    app.post(baseUrl + '/image/create', imageController.createImage);

    app.post(baseUrl + '/notifications', notifsController.addPushSubscriber);

    app.post(baseUrl + '/newsletter', notifsController.sendNewsletter);

    app.post(baseUrl + '/register', authenticationController.register);

    app.post(baseUrl + '/upload', upload.array('image', 1), (req, res) => {
        /* This will be th 8e response sent from the backend to the frontend */
        res.send({ image: req.file });
    });

    app.post(baseUrl + '/uploadBrochure', upload.array('brochure', 1), (req, res) => {
        /* This will be th 8e response sent from the backend to the frontend */
        res.send({ brochure: req.file });
    });
    // app.post(baseUrl + '/login', authenticationController.login);
    //app.get(baseUrl+'/:blogId/count/view',blogController.increaseBlogView);

    app.put(baseUrl + '/editproperty/:id',facultyController.editProperty);



}// end setRouter function 

module.exports = {
    setRouter: setRouter
}