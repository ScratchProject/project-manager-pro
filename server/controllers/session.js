const Session = require('../models').Session;

module.exports = {
  // create session
  // insert session into table
  // pass on

  create(req, res, next) {
    console.log("we are in the session controller");
    var access_token = res.locals.access_token;
    console.log(access_token);
    var session = {};
    
    return next();
  }
};
