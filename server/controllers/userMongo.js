const User = require('../models/userModel');

const userController = {
  verifyUser(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (result === null) {
        return res.status(401).send('User does not exist');
      } else {
        if (result.password === req.body.password) {
          return res.status(200).send(true);
        } else {
          return res.status(401).send('User does not exist');
        }
      }
    })
  },

  createUser(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (result === null) {
        User.create({
          username: req.body.username,
          password: req.body.password,
        }, res.status(200).send(true))
      } else if (err || result !== null) {
        return res.status(400).send(err);
      }
    })
  }
}

module.exports = userController;
