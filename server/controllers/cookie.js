module.exports = {
  // create cookie
  // set res.cookie
  setCookie(req, res, next) {
    // console.log("we are in the cookie controller");
    // console.log(res.locals.access_token);
    var access_token = res.locals.access_token;
    // console.log("*access token is..."+access_token);
    res.cookie('ssid', access_token, { maxAge: 9000000, httpOnly: true });
    return next();
  },
};
