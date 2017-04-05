const User = require('../models/userModel');


const userController = {

  verifyUser(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      console.log('REQ BODY', req.body);
      console.log('RESULT OF SERVER FINDING USERNAME', result);
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


//     create (req, res) {
//     User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
//         if (err) console.log(err)
//         else {
//             //FIX THIS ROUTE PLEASE
//             res.status(200).send(true);
//         }
//     })
// }

//}
// function create(req, res) {
//     User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
//         if (err) console.log(err)
//         else {
//             //FIX THIS ROUTE PLEASE
//             res.status(200).redirect('/project');
//         }
//     })
// }

// function logIn(req, res) {
//     User.findOne({ username: req.body.username }, (err, result) => {
//         if (!result || result.password !== req.body.password) {
//             return res.status(404).send({
//                 message: 'User Not Found',
//             });
//         } else {
//             return res.status(200).send(true);
//         }
//     });
// }




// function deleteAccount(req, res) {
//     User.find({ username: req.body.username }, (err, user) => {
//         if (err) console.log(err)

//         user.remove((err => {
//             if (err) console.log(err);
//             else console.log('User successfully deleted!');
//         }))
//     });
// }

// function updatePassword(req, res) {
//     User.findOneAndUpdate({ password: req.body.currentPassword }, { password: req.body.newPassword }, (err, result) => {
//         if (err) console.log(err);
//         else res.status(200)
//     });
// }
