const Session = require('../models').Session;

module.exports = {

  create(req, res, next) {
    console.log("we are in the session controller");
    var access_token = res.locals.access_token;
    console.log(access_token);
    var session = {
      cookieId: access_token,
      createdAt: Date.now()
    };
    return next();
    // Session
    //   .create(session)
    //   .then((feature) => {
    //     console.log("session inserted into db");
    //     return next();
    //   })
    //   .catch(error => res.status(400).send(error));
  },

  isLoggedIn(req, res, next) {
    console.log("we are in the is logged in page");

  }
};
