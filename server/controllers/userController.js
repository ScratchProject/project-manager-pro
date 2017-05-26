const User = require('../models/userMongo').User;

module.exports = {
  // Verifies that the user exists in db
  verify: function (req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (err) {
        return res.status(500).end();
      }
      if (!result || result.password !== req.body.password) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      } else {
        return res.status(200).send(true);
      }
    });
  },

  // Creates a new user in db
  create: function (req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
      })
      .then(user => res.status(201).send(true))
      .catch(error => { console.log(error); res.status(400).send(error) });
  },

  // Removes a single user from the db
  destroy: function (req, res) {
    return User
      .findById(req.params.username)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(200).send({ message: 'User deleted' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
