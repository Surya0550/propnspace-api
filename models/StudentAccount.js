// importing mongoose module
const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
// import schema 
const Schema = mongoose.Schema;

let studentAccountSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
          },
          name: {
            type: String,
            required: true
          },
          hash: String,
          salt: String
    }
)

studentAccountSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

  studentAccountSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  studentAccountSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

mongoose.model('StudentAccount', studentAccountSchema);