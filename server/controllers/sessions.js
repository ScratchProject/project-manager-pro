const Sessions = require('../models').Sessions;

module.exports = {

  create(req, res, next) {
    console.log("we are in the session controller");
    var access_token = res.locals.access_token;
    console.log(access_token);
    var session = {
      cookieId: access_token,
      createdAt: Date.now()
    };
    // return next();
    Sessions
      .create(session)
      .then((feature) => {
        console.log("session inserted into db");
        return next();
      })
      .catch(error => res.status(400).send(error));
  },

  isLoggedIn(req, res, next) {
    var cookieStr = res.locals.cookieStr;
    console.log("we are in session is logged in function "+cookieStr);
    // console.log(req);
    if (cookieStr !== null) {
      Sessions.findAll({
        where: {
          cookieId: cookieStr
        }
      }).then((result) => {
        console.log("found session");
        return next();
      }).catch(error => res.redirect(302, '/#/'));
    }
  }
};
