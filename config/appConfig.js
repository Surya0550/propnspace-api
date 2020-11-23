const MongoClient = require('mongodb').MongoClient;
let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb+srv://Surya0550:kkEJelJQHcEXIwsM@jntuhcescluster-y50g9.mongodb.net/test?retryWrites=true',
}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}

//mongodb+srv://Surya0550:kkEJelJQHcEXIwsM@jntuhcescluster-y50g9.mongodb.net/test?retryWrites=true