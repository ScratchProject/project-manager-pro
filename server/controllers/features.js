const Feature = require('../models/featureModel');
const FeatureItem = require('../models/itemModel');

const featureController = {

  // Creates instance of a project.
  createProject(req, res) {
    Feature.create({
      title: req.body.title,
      duration: req.body.duration
    }, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  },

  // Retrieves all current projects in a database.
  getProject(req, res) {
    Feature.find({}, (err, features) => {
      if (err) console.log(err);
      res.send(features.reduce((featureMap, item) => {
        featureMap[item.title] = item;
        return featureMap;
      }, {}))
    })
  },

  // Delete a single feature based on ID
  deleteProject(req, res) {
    Feature.remove({ title: req.params.title }, (err, result) => {
      if (err) console.log('DELETE ERROR', err);
      res.send(result);
    })
  },

  // Find a single feature based on its ID
  retrieveProject(req, res) {
    Feature
      .find({},
      () => console.log('RETRIEVE'))
      .then(feature => {
        if (!feature) {
          return res.status(404).send({
            message: 'Feature Not Found',
          });
        }
        return res.status(200).send(feature);
      })
      .catch(error => res.status(400).send(error));
  },
};

module.exports = featureController;
