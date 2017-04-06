const Feature = require('../models').Feature;
const FeatureItem = require('../models').FeatureItem;

module.exports = {

  // Creates instance of a project.
  create(req, res, next) {
    // console.log("we are in the features create function");
    // console.log(req.body.title);
    // console.log(req.body.duration);
    // console.log(req.body.unit);
    function calculateDurationInSeconds(duration, unit) {
      console.log('Minutes unit is:', unit)
      if (!unit) unit = "Minutes";
      if (unit === "Minutes") duration *= 60;
      if (unit === "Hours") duration *= 3600;
      if (unit === "Days") duration *= 86400;
      return duration // in seconds
    }
    var duration = calculateDurationInSeconds(req.body.duration, req.body.unit);
    return Feature
      .create({
        title: req.body.title,
        duration: duration
      })
      .then(feature => res.status(201).send(feature))
      .catch(error => res.status(400).send(error));
    // .catch(error => res.status(400).send(error));
  },

  // Retrieves all current projects in a database.
  list(req, res, next) {
    console.log('features list func')
    return Feature
      .findAll({
        include: [{
          model: FeatureItem,
          as: 'featureItems'
        }],
      })
      .then(features => res.status(200).send(features))
      .catch(error => res.status(400).send(error));
  },

  // Find a single feature based on its ID
  retrieve(req, res, next) {
    return Feature
      .findById(req.params.featureId, {
        include: [{
          model: FeatureItem,
          as: 'featureItems',
        }],
      })
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

  // Update a single feature
  update(req, res, next) {
    return Feature
      .findById(req.params.featureId, {
        include: [{
          model: FeatureItem,
          as: 'featureItems',
        }],
      })
      .then(feature => {
        if (!feature) {
          return res.status(404).send({
            message: 'Feature Not Found',
          });
        }
        return feature
          .update({
            title: req.body.title || feature.title,
          })
          .then(() => res.status(200).send(feature))  // Send back the updated feature.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // Delete a single feature based on ID
  destroy(req, res, next) {
    return Feature
      .findById(req.params.featureId)
      .then(feature => {
        if (!feature) {
          return res.status(400).send({
            message: 'feature Not Found',
          });
        }
        return feature
          .destroy()
          .then(() => res.status(200).send({ message: 'Feature deleted' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
